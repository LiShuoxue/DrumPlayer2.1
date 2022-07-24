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

RHF的一般讨论
--------------------

轨道与能量的参数化
^^^^^^^^^^^^^^^^^^^^^^^^

**限制性哈特里-福克理论(Restricted Hartree-Fock Theory, RHF)** 中的电子态是一个单Slater行列式或者单个CSF。对能量求极值的过程等效于对原先的CSF做以如下的轨道旋转变换：

.. math::
    :label: csf-ot
    
    | \mathrm{CSF} (\pmb \kappa) \rangle = \exp(-\hat \kappa) | \mathrm{CSF} \rangle

其中 :math:`\hat \kappa` 是由一组参数 :math:`\pmb \kappa` 确定的单电子反厄米算符

.. math::
    :label: kappa-op

    \hat \kappa = \sum\limits_{p, q} \kappa_{pq} (\hat E_{pq} - \hat E_{qp}) = \sum\limits_{p, q} \kappa_{pq} \hat E_{pq}^-
    
根据 :eq:`csf-ot` ，RHF能量可以表达为：

.. math::
    :label: rhf-e-general

    E(\pmb \kappa) = \langle \mathrm{CSF} | \exp(\hat \kappa) \hat H \exp(- \hat \kappa) | \mathrm{CSF} \rangle

根据BCH公式对 :eq:`rhf-e-general` 在 :math:`\pmb \kappa = \pmb 0` 处展开，RHF能量对参数 :math:`\pmb \kappa` 求一阶导和二阶导的结果分别为

.. math::
    :label: rhf-e-1deriv

    E^{(1)}_{pq} = \dfrac{\partial E(\pmb \kappa)}{\partial \kappa_{pq}} = \langle \mathrm{CSF} | [\hat E_{pq}^-, \hat H] | \mathrm{CSF} \rangle 

.. math::
    :label: rhf-e-2deriv
    
    E^{(2)}_{pq,rs} = \dfrac{\partial^2 E(\pmb \kappa)}{\partial \kappa_{pq} \partial \kappa_{rs}} = \dfrac{1}{2} (\langle \mathrm{CSF} | [\hat E_{pq}^-, [\hat E_{rs}^-, \hat H]] | \mathrm{CSF} \rangle + \langle \mathrm{CSF} | [\hat E_{rs}^-, [\hat E_{pq}^-, \hat H]] | \mathrm{CSF} \rangle)

在实数轨道的条件之下，能量一阶导可以被简化为：

.. math::
    :label: rhf-e-1deriv-real

    E^{(1)}_{pq} = 2 \langle \mathrm{CSF} | [\hat E_{pq}, \hat H] | \mathrm{CSF} \rangle

冗余参数
^^^^^^^^^^^^^^

我们定义满足

.. math::
    :label: rdparam-def

    \hat E^-_{pq} | \mathrm{CSF} \rangle = 0

所对应的 :math:`\kappa_{pq}` 为 **冗余参数(Redundant Parameter)** 。

.. admonition:: 例子
    :class: example

    对于闭壳层波函数而言，“占据-占据” 和 “未占据-未占据”的下标组合对应的参数为冗余参数，理由如下：

    * :math:`\hat E_{ab}^-` ：从未占据轨道抽出电子的操作会得到0；

    * :math:`\hat E_{ij}^-` ：从一个占据轨道抽出电子填到另一个已占据轨道的操作也会得到0；

    * :math:`\hat E_{mm}^- = 0`

    但是，“占据-未占据”的下标组合 :math:`\hat E_{ai}^-` 对应的就不是冗余参数。

.. admonition:: 小练习
    :class: quiz

    说明对于三线态波函数，“单占据-单占据”组合是冗余参数，而对于单线态不是。

为何要引入冗余参数呢？因为它的重要性质是， **RHF能量对于它的一阶导为0** 。因为

.. math::
    
    E_{pq}^{(1)} = 2 \langle [\hat E_{pq}, \hat H]  \rangle_{\mathrm{CSF}}  = -2 \langle \hat H \hat E^-_{pq}\rangle_{\mathrm{CSF}} = 0

因此在轨道旋转当中，优化RHF能量仅需要变换非冗余参数即可，换言之， **优化非冗余参数是解决RHF方程的充要条件** 。虽然冗余参数不改变波函数和能量的性质，但是冗余参数的任意性可以服务于获得更有物理意义的正则化分子轨道，这就是下一节要说的，所谓 **正则HF理论(Canonical Hartree-Fock Theory)** 的基础。