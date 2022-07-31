from pyscf import gto
from pyscf.scf import hf
from pyscf.mcscf.mc1step import CASSCF

mol = gto.M(atom='H 0 0 0; H 0.740852 0 0', basis='cc-pvdz')
mol.verbose = 5
mf = hf.RHF(mol); mf.kernel()

cas = CASSCF(mf, 2, 2) # 
cas.kernel()
