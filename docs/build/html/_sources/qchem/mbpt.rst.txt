多体微扰方法
===================

在基于Hartree-Fock方法能够给出合理基态描述的情形下，在此基础上使用微扰展开的手段可以给出有效的修正。此外微扰方法也能在CC、MCSCF波函数的基础上进一步修正结果，得到CCSD(T)、CASPT2等Hybrid Post-HF方法。

瑞利-薛定谔微扰理论
-----------------------

量子力学之述备矣，故仅列下RSPT的结论：

对于Hamiltonian :math:`\hat H = \hat H_0 + \hat U` ，零级波函数为 :math:`\hat H_0 | 0^{0}\rangle = E_0 | 0^{(0)} \rangle` 的本征态，则各阶修正能量表达式：

.. math::
    :label: energy-n-order

    E^{(n)} = \langle 0^{(0)} | \hat U | \hat 0^{(n-1)} \rangle

一阶和二阶波函数修正：

.. math::
    :label: wfn-1-order

    | 0 ^ {(1)} \rangle = - \hat P (\hat H_0 - E^{(0)})^{-1} \hat P \hat U | 0 ^{(0)} \rangle

.. math::
    :label: wfn-2-order

    | 0^{(2)} \rangle = - \hat P (\hat H_0 - E^{(0)})^{-1} \hat P (\hat U - E^{(1)}) | 0^{(1)} \rangle

其中投影算符 :math:`\hat P` 定义为：

.. math::
    :label: proj-op

    \hat P = 1 - | 0^{(0)} \rangle \langle 0^{(0)} | = \sum\limits_{k \ne 0} | 0^{(k)} \rangle \langle 0^{(k)} |

其实 :eq:`energy-n-order` 对应的从(n-1)阶波函数推导n阶微扰能量修正的式子仍很繁琐，根据Wigner 2n+1 规则，n阶修正波函数可以推导出(2n+1)阶修正的能量。(2n+1)规则的严格推导的本质，是通过态矢的中间归一化条件构造能量的Lagrange量，然后通过变分方程的求解简化最终的能量修正表达式。其推导在此不列出，而在之后用耦合簇微扰论(Coupled-Cluster Perturbation Theory, CCPT)语言重述微扰论时，会给出三、四阶修正能量的显式表达式，来体现(2n+1)规则的运用。

Moller-Plesset 微扰理论
---------------------------

作为RSPT的直接推广，Moller-Plesset微扰理论(MPPT)将Fock算符直接作为零阶Hamilton量，而将波动势 :math:`\hat \Phi` 作为微扰项。

零级能量即是占据的分子轨道能量之和。

一级修正波函数为

.. math::
    :label: mp1-wfn

    | \mathrm{MP1} \rangle = - \sum\limits_{\mu_2} \varepsilon_{\mu_2} ^{-1} \langle \mu_2 | \hat H | \mathrm{HF} \rangle

其中 :math:`\mu_2` 表示仅包含双激发情况，因为Brillouin定理的限制而得。

更方便地，我们将MP1波函数写成类似于团簇算符作用在HF基态波函数上的形式：

.. math::
    :label: mp1-wfn-cluster

    | \mathrm{MP1} \rangle = \hat T_2^{(1)} | \mathrm{HF} \rangle \\
    \hat T_2^{(1)} = \sum\limits_{A>B\\I>J} - \dfrac{\langle \mathrm{HF} | [\hat a_J^\dagger \hat a_B \hat a_I^\dagger \hat a_B, \hat H] | \mathrm{HF} \rangle}{\varepsilon_A + \varepsilon_B - \varepsilon_I - \varepsilon_J} \hat a_A^\dagger \hat a_I \hat a_B^\dagger \hat a_J