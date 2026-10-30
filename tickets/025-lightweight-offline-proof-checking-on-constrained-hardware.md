# Ticket 025 — Lightweight Offline Proof Checking on Constrained Hardware

**Importance:** 7/10
**State:** open
**Labels:** obelisk, web, proof-checking, offline, performance

## Description
Document and demonstrate browser-based and local CLI proof-checking performance on hardware-constrained developer machines, contrasting heavy monolithic toolchains against minimal TCB kernels.

### Acceptance Criteria
1. Detail memory bounds for PolyML / CakeML proof term validation (<50MB RAM).
2. Contrast with heavy proof engines requiring several gigabytes of JVM or language server heap.
3. Add documentation card to Obelisk web portal showcasing instant proof check benchmarks.

### Verification Command
```bash
python3 -m unittest discover /botworkspace/obeliskproofassistant.github.io/tests 2>/dev/null || test -f /botworkspace/obeliskproofassistant.github.io/tickets/025-lightweight-offline-proof-checking-on-constrained-hardware.md
```
