Hartree-Fock方法的进一步认识
================================

.. Note::

    轨道记号说明：

    +-----------+--------------+
    | Type      |  Notations   |
    +===========+==============+
    |Unoccupied | a,b,c,d,e    |
    +-----------+--------------+
    | Double    | i,j,k,l      |
    +-----------+--------------+
    | Single    | v,w,x,y,z    |
    +-----------+--------------+
    | General   | mnopqrstu    |
    +-----------+--------------+

Hartree-Fock的波函数
-------------------------

**限制性哈特里-福克理论(Restricted Hartree-Fock Theory, RHF)** 中的电子态是一个单Slater行列式或者单个CSF。对能量求极值的过程等效于对原先的CSF做以如下的轨道旋转变换：

.. math::
    :label: csf-ot
    
    | \mathrm{CSF} (\pmb \kappa) \rangle = \exp(-\hat \kappa) | \mathrm{CSF} \rangle

其中 :math:`\hat \kappa` 是单电子反厄米算符

.. math::
    :label: kappa-op

    \hat \kappa = \sum\limits_{p, q} \kappa_{pq} (\hat E_{pq} - \hat E_{qp})

根据 :eq:`csf-ot` ，RHF能量可以表达为：

.. math::
    :label: rhf-e-general

    E(\pmb \kappa) = \langle \mathrm{CSF} | \exp(\hat \kappa) \hat H \exp(- \hat \kappa) | \mathrm{CSF} \rangle

根据BCH公式对 :eq:`rhf-e-general` 展开，RHF能量对参数 :math:`\pmb \kappa` 求一阶导和二阶导的结果分别为

.. math::

    \dfrac{E(\pmb \kappa)}{\kappa} = 