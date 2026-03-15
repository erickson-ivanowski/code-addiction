# Code Addiction (ADD)
 
[![CI](https://github.com/brabos-ai/code-addiction/actions/workflows/ci.yml/badge.svg)](https://github.com/brabos-ai/code-addiction/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/codeadd.svg)](https://www.npmjs.com/package/codeadd)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

AI-powered development workflows that make you addicted to shipping code. Production-ready commands, scripts, and skills for AI coding assistants, with a single CLI installer.

**Official Framework Site**: [code.brabos.ai](https://code.brabos.ai) — your complete development workflow guide and documentation.

## Why this project exists

Most AI coding setups are fragmented across custom prompts, scripts, and editor-specific conventions.

Code Addiction standardizes this with:
- A shared core in `.codeadd/` (commands, scripts, skills, templates)
- Provider-specific integrations (Claude, Codex, Antigravity, KiloCode, OpenCode)
- A versioned installer (`codeadd`) with `install`, `update`, `uninstall`, `doctor`, and `validate`

## Quickstart

```bash
# install Code Addiction in your current project
npx codeadd install

# install from main branch
npx codeadd install --version main

# install from a specific tag
npx codeadd install --version v2.0.1

# check environment health
npx codeadd doctor

# validate integrity
npx codeadd validate

# uninstall Code Addiction files from your project
npx codeadd uninstall
```

## How it works

Code Addiction turns complex development into a guided, repeatable flow. Instead of figuring out *how* to build, you just follow the next command. The AI does the heavy lifting — you stay in control.

### The Development Trail

Every feature follows a clear path from idea to delivery. Pick the trail that fits your task:

```
Step        Command             What happens                        Output
───────────────────────────────────────────────────────────────────────────────
0. Explore  /add-brainstorm     Brainstorm ideas (read-only)        Initial concept
1. Discover /add-feature        AI-guided feature discovery          about.md
2. Design   /add-design         UX spec, mobile-first               UI/UX specification
3. Plan     /add-plan           Technical planning + checklist       plan.md
4. Code     /add-dev            Subagent-driven implementation       Working code
5. Review   /add-review         Automated code review + validation   Quality gate
6. Ship     /add-done           Changelog, docs, finalization        Ready to merge
```

### Choose your flow

Pick the shortest path that fits. Less ceremony, same quality.

```
COMPLETE  (complex features with UI)
  brainstorm --> feature --> design --> plan --> dev --> review --> done

STANDARD  (features without complex UI)
  feature --> plan --> dev --> done

LEAN      (small changes, quick tasks)
  feature --> dev --> done

AUTONOMOUS  (full AI implementation, no interaction)
  feature --> autopilot --> done

EXPLORATION  (don't know where to start?)
  brainstorm --> feature --> ...pick your flow above

EMERGENCY  (critical bug in production)
  hotfix --> done
```

> **That's it.** No config files to tweak, no boilerplate to write, no decision fatigue.
> Type the command, follow the AI, ship the feature. Repeat.

### Why teams get addicted

- **Zero ramp-up** — new devs ship on day one by following the flow
- **10x fewer decisions** — the framework already made the boring ones for you
- **Consistent output** — every feature gets discovery, planning, review, and docs automatically
- **Works with your stack** — NestJS, React, any database, any provider

## What gets installed

- Core: `.codeadd/`
- Optional providers:
  - Claude Code -> `.claude/`
  - Codex (OpenAI) -> `.agent/`
  - Google Antigravity -> `.agents/`
  - KiloCode -> `.kilocode/`
  - OpenCode -> `.opencode/`

## Repository structure

- `cli/`: installer CLI published as `codeadd`
- `framwork/`: framework payload copied into target projects by the installer

## Compatibility

- Node.js 18+
- GitHub-hosted releases for distribution
- Works on Windows, macOS, Linux (via Node runtime)

## Contributing

Contributions are welcome. Start here:
- [Contributing guide](./CONTRIBUTING.md)
- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Security policy](./SECURITY.md)

## Roadmap

- Better zero-config onboarding by project type
- More provider adapters
- Stronger validation and automated repair flows

## Official Pages

- **Framework**: [code.brabos.ai](https://code.brabos.ai)
- **Repository**: [github.com/brabos-ai/code-addiction](https://github.com/brabos-ai/code-addiction)
- **NPM Package**: [@codeadd](https://www.npmjs.com/package/codeadd)

## Recent Releases

### v0.2.15
- **Date**: Latest
- **Changes**: Version bump with improvements to provider architecture
- **Status**: Stable

### v0.2.14
- **Date**: Recent
- **Changes**: Stabilization and bug fixes
- **Status**: Stable

### v0.2.13
- **Date**: Current
- **Changes**:
  - Compile all 15 providers in build + zip
  - Updated package-lock with dependency consolidation
  - Enhanced provider build system

### Provider Expansion (10 New Providers)
- Added 10 new provider integrations
- Implemented priority ordering in install prompt
- Improved provider discovery and selection

### Provider-Only Install Architecture (PRD0018)
- New installation architecture for provider-only workflows
- Reduced installation footprint for users
- Flexible provider selection during setup

## Support

- Official site: [code.brabos.ai](https://code.brabos.ai)
- Open a [GitHub Issue](https://github.com/brabos-ai/code-addiction/issues)
- See [SUPPORT.md](./SUPPORT.md)
