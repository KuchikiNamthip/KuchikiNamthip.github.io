| Step             | Purpose                         | Typical Python Operation                        |
| :--------------- | :------------------------------ | :---------------------------------------------- |
| Parse VCF        | Read raw SNP calls              | `for line in open(vcf)`                         |
| Extract INFO     | Convert to dict                 | `info = dict(x.split('=',1) ...)`               |
| Filter           | Keep only PASS, rare, impactful | `if af<0.01 and impact in ('HIGH','MODERATE'):` |
| Match gene panel | Use dictionary/set              | `if gene in panel:`                             |
| Rank consequence | Using dictionary mapping        | `CONS_RANK = {...}`                             |
| Output           | Candidate SNPs                  | `print(...)`                                    |
