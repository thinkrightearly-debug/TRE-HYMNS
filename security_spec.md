# Security Specification - Hymnal Accuracy Registry

## 1. Data Invariants
- Any entry in `hymn_overrides` must correspond to a valid traditional hymn ID (integer, strictly between 1 and 1000).
- The verses must be an array of strings, non-empty, and limited to a sensible traditional size.
- Fields representing metadata like `isVerified` must be boolean format.
- Temporal sync fields (`verifiedAt` and `updatedAt`) must conform to ISO format strings.
- Only safe, verified data structures can be persisted to the cloud, preventing data/relational poisoning from malicious inputs.

---

## 2. The "Dirty Dozen" Payloads (Anti-Vulnerability Test Suite)

1. **Self-Verification Privilege Bypass**: Attempting to write a verified stamp without validation fields.
2. **Resource Poisoning (Junk keys)**: Attempting to insert giant, undocumented keys.
3. **Array Spoofing**: Sending verses as a numeric value instead of a List to crash clients.
4. **ID Poisoning (Malformed document id)**: Ingressing string IDs with invalid formatting.
5. **Denial of Wallet (Extreme metadata sizes)**: Writing massive string lengths in author/title.
6. **Title/Content Omission**: Removing required core hymn properties during structure creation.
7. **Negative Number Attack**: Storing Negative integer values for hymn ID / reference.
8. **Malicious Code Injection**: Passing code scripts inside verses/chorus fields.
9. **Spam Updates (Terminals modification)**: Direct update bypassing validation structure helper.
10. **Type Mismatch Interference**: Passing numbers as `category` or `title`.
11. **Malicious Override Hijacking**: Blank string updates to erase traditional verses from the registry.
12. **Future Epoch Collusion**: Passing a fake client-determined past year or massive future offset.

---

## 3. Test Runner Specification
The test suite ensures that any malformed, shadow-field-loaded, or poorly-typed payload triggers `PERMISSION_DENIED` at the Firestore database level:

```ts
// firestore.rules.test.ts mockup
import { assertSucceeds, assertFails } from '@firebase/rules-unit-testing';

// All Dirty Dozen payloads must fail the validation schema rule checks.
```
