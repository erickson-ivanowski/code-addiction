#!/usr/bin/env node
/**
 * build.js - Compile provider files from .codeadd/ + framwork/provider-map.json
 * Usage: node scripts/build.js
 */

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');

function readMap() {
  return JSON.parse(fs.readFileSync(path.join(ROOT, 'framwork', 'provider-map.json'), 'utf8'));
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function isSkillPath(pattern) {
  return pattern.includes('SKILL.md');
}

function commandFrontmatter(name, description, skillFormat) {
  if (skillFormat) {
    return `---\nname: ${name}\ndescription: ${description}\n---\n\n`;
  }
  return `---\ndescription: ${description}\n---\n\n`;
}

function buildCommands(map) {
  let count = 0;
  const allProviders = Object.keys(map.providers);

  for (const [name, cmd] of Object.entries(map.commands)) {
    const sourcePath = path.join(ROOT, 'framwork', '.codeadd', 'commands', `${name}.md`);

    if (!fs.existsSync(sourcePath)) {
      console.warn(`  SKIP (not found): framwork/.codeadd/commands/${name}.md`);
      continue;
    }

    const source = fs.readFileSync(sourcePath, 'utf8');
    const providers = cmd.providers ?? allProviders;

    for (const key of providers) {
      const provider = map.providers[key];
      if (!provider.commands) continue;

      const pattern = provider.commands.replace('{name}', name);
      const outPath = path.join(ROOT, provider.dir, pattern);
      const header = `<!-- AUTO-GENERATED - DO NOT EDIT. Source: framwork/.codeadd/commands/${name}.md -->\n`;
      const frontmatter = commandFrontmatter(name, cmd.description, isSkillPath(pattern));

      ensureDir(outPath);
      fs.writeFileSync(outPath, header + frontmatter + source, 'utf8');
      count++;
    }
  }
  return count;
}

function buildSkills(map) {
  let count = 0;

  for (const [name, skill] of Object.entries(map.skills)) {
    const sourcePath = path.join(ROOT, 'framwork', '.codeadd', 'skills', name, 'SKILL.md');

    if (!fs.existsSync(sourcePath)) {
      console.warn(`  SKIP (not found): framwork/.codeadd/skills/${name}/SKILL.md`);
      continue;
    }

    const source = fs.readFileSync(sourcePath, 'utf8');

    for (const key of skill.providers) {
      const provider = map.providers[key];
      if (!provider.skills) continue;

      const pattern = provider.skills.replace('{name}', name);
      const outPath = path.join(ROOT, provider.dir, pattern);
      const header = `<!-- AUTO-GENERATED - DO NOT EDIT. Source: framwork/.codeadd/skills/${name}/SKILL.md -->\n`;

      ensureDir(outPath);
      fs.writeFileSync(outPath, header + source, 'utf8');
      count++;
    }
  }
  return count;
}

function main() {
  console.log('Building provider files...\n');

  const map = readMap();
  const commandCount = buildCommands(map);
  const skillCount = buildSkills(map);

  const total = commandCount + skillCount;
  console.log(`\nBuild complete:`);
  console.log(`  Commands : ${Object.keys(map.commands).length} × providers → ${commandCount} files`);
  console.log(`  Skills   : ${Object.keys(map.skills).length} skills  → ${skillCount} files`);
  console.log(`  Total    : ${total} files generated`);
}

main();
