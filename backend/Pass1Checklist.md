# Macro Processor – Pass 1 Error Handling Checklist

This checklist outlines the validation rules for the Pass 1 Macro Processor.
Completed items have been implemented, while the remaining items are pending.

---

## Completed

* [x] Invalid keyword detection (outside macro)
* [x] Duplicate macro name detection
* [x] Missing `MEND` detection (unclosed macro)

---

## Core Errors (High Priority)

* [ ] `MEND` without corresponding `MACRO`

---

## Macro Definition Errors

* [ ] Macro name cannot be a reserved keyword (`MACRO`, `MEND`, `SET`, `ADD`, `PRINT`)
* [ ] Missing macro name after `MACRO`
* [ ] Invalid statements inside macro body (unknown keywords)

---

## Semantic / Validation Errors


* [ ] Duplicate parameters in macro definition

---


## Goal

Ensure that Pass 1:

* Correctly builds the Macro Name Table (MNT) and Macro Definition Table (MDT)
* Detects all structural and syntax errors
* Prevents invalid macros from corrupting internal tables

---
