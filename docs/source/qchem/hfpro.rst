Hartree-Fock方法
================================

.. admonition:: 轨道记号说明

    * 空间轨道用小写字母，自旋-空间轨道用大写字母；

    * 不同占据的轨道标记如下：

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
    :label: redundant-deriv

    E_{pq}^{(1)} = 2 \langle [\hat E_{pq}, \hat H]  \rangle_{\mathrm{CSF}}  = -2 \langle \hat H \hat E^-_{pq}\rangle_{\mathrm{CSF}} = 0

因此在轨道旋转当中，优化RHF能量仅需要变换非冗余参数即可，换言之， **优化非冗余参数是解决RHF方程的充要条件** 。虽然冗余参数不改变波函数和能量的性质，但是冗余参数的任意性是的我们可对其添加额外的限制，在不改变结果的同时获得更有物理意义的正则化分子轨道，这就是下一节要说的，所谓 **正则HF理论(Canonical Hartree-Fock Theory)** 的基础。

布里渊定理
^^^^^^^^^^^^^^^^^^^^

对变分原理的还可以得到Hartree-Fock波函数满足的重要条件，也就是 **布里渊定理(Brillouin Theorem)** ：

* 对于闭壳层轨道，有

.. math::
    :label: brillouin-theorem

    \langle \mathrm{cs} | \hat H | i\to a \rangle = 0

.. admonition:: 证明
    :class: prove

    变分条件式 :eq:`redundant-deriv` 可写成：

    .. math::

        \langle \mathrm{cs} | \hat E_{ai} \hat H - \hat H \hat E_{ai} | \mathrm{cs} \rangle = - \langle \mathrm{cs} | \hat H \hat E_{ai} | \mathrm{cs} \rangle = 0 
    
    即得到 :eq:`brillouin-theorem` 。

* 广义Brillouin定理(Generalized Brillouin Theorem, GBT)对于任意HF轨道而言，表示为：

.. math:: 
    :label: gbt

    \langle \mathrm{HF} | \hat H | p \to q \rangle =   \langle \mathrm{HF} | \hat H | q \to p \rangle

可以通过对变分条件式 :eq:`rhf-e-1deriv-real` 为0的条件导出。

广义Brillouin定理显示了HF轨道在激发和退激发之间的平衡性质。


正则Hartree-Fock理论
----------------------------

.. warning::
    
    以下介绍的正则HF理论适用于 *闭壳层* 条件，而对于开壳层需要用更一般的方法。

由于闭壳层RHF是针对单Slater行列式的，Slater行列式将不同轨道的电子视为独立粒子，因此我们希望通过转化为求解 *有效单电子方程* 的模式来获得每一个轨道的信息。对于单电子的有效Hamilton量算符称为 **Fock算符 (Fock Operator)** 。

Fock算符的构建
^^^^^^^^^^^^^^^^^^^^^

为了构建闭壳层RHF的有效单电子Hamilton量，我们不妨猜测Fock算符满足如下的条件：

* 它本身是单电子算符 :math:`\hat f = \sum\limits_{pq} \hat E_{pq}` ，且是厄米的；

* 当电子之间无相互作用时，Fock算符应当等于Hamilton算符；

* 我们希望通过对角化Fock算符的方式求解闭壳层RHF，希望Fock算符的非对角元为0时能够导出能量在非冗余参数下的一阶梯度 :eq:`rhf-e-1deriv` 为0，我们不妨猜测二者之间是倍数关系，即 :math:`f_{ai} = N_f \langle \mathrm{cs} | [\hat E_{ai}, \hat H] | \mathrm{cs} \rangle` 。

但是直接用条件3的 :math:`[\hat E_{ai}, \hat H]` 会得到反对称Fock矩阵。因此为了满足条件(1)的厄米性需求和条件(2)对Hamiltonian的要求，最终将Fock算符对应的矩阵元 :math:`f_{pq}` 的形式确定为：

.. math::
    :label: fock

    f_{pq} = \dfrac{1}{2} \langle \mathrm{cs} | [\hat a_{q\sigma}^\dagger, [\hat a_{p\sigma}, \hat H]]_{+} | \mathrm{cs} \rangle \\ = h_{pq} + \sum\limits_i (2g_{pqii} - g_{piiq})

.. admonition:: 小练习
    :class: quiz

    通过Hamiltonian的二次量子化表达式

    .. math::

        \hat H = \sum\limits_{pq} h_{pq} \hat H_{pq} + \dfrac{1}{2} \sum\limits_{pqrs} g_{pqrs} \hat e_{pqrs} + \hat h_{nuc}

    来推导Fock矩阵元 :eq:`fock` 的第二个等号。

在分子轨道的表象之下，我们可以通过不断对角化Fock矩阵，然后对分子轨道进行变换的方式来迭代求解，直到变换矩阵趋向于单位矩阵。这种迭代方案称为 **自洽场(Self-Consistent Field, SCF)方法** 。它其实是不动点迭代法的一种特例。

相比于变分条件之下仅需变换非冗余参数而言，对整个Fock算符做对角化的“ *正则条件(Canonical Condition)* ”其实额外添加了冗余参数的变换，因此在较大体系的RHF求解中使用仅基于变分条件的方法在计算上会更快捷，例如基于密度的HF方法等。该方法见于紫书的10.7一节。

闭壳层RHF的总能量与轨道能量
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

波动势
^^^^^^^^^^^


在引入Fock算符之后，总的Hamilton量可以写成

.. math::
    :label: hamilton-with-fock

    \hat H = \hat f + \hat \Phi + \hat h_{nuc}

其中 *“波动势(Fluctuation Potential)”* 定义为：

.. math::
    :label: fluctuation-potential

    \hat \Phi = \hat g - \hat V

为精确的双电子算符和单电子Fock算符之差，式中的 :math:`\hat V` 定义为：

.. math::
    :label: v-operator

    \hat V = \sum\limits_{pq} \sum\limits_i (2 g_{pqii} - g_{piiq}) \hat E_{pq}

其在Hartree-Fock轨道的期望值为：

.. math::

    \langle \mathrm{HF} | \hat \Phi | \mathrm{HF} \rangle = - \langle \mathrm{HF} | \hat g | \mathrm{HF} \rangle


总的Hartree-Fock能量可以写成分子轨道能量与波动势期望之和：

.. math::

    E = 2 \sum\limits_i \varepsilon_i + \langle \mathrm{HF} | \hat \Phi | \mathrm{HF} \rangle + h_{nuc}

Koopmans定理
^^^^^^^^^^^^^^^^^^^^^

原子轨道下的自洽场方程
^^^^^^^^^^^^^^^^^^^^^^^^^

二阶优化方法
----------------

前述的正则HF理论适用于闭壳层体系，但是对于开壳层体系，由于单占据轨道的存在使得所考虑的情形更为复杂。因此我们需要更深入考察HF能量的一阶和二阶梯度性质。

能量一阶导与广义Fock算符
^^^^^^^^^^^^^^^^^^^^^^^^^^

对于任何的CSF，能量一阶梯度总能写成

.. math::

    E_{mn}^{(1)} = 2(F_{mn} - F_{nm})

其中定义了广义Fock矩阵的矩阵元

.. math::
    :label: general-fock

    F_{mn} = \sum\limits_\sigma \langle \mathrm{CSF} | \hat a_{m \sigma}^\dagger [\hat a_{n\sigma}, \hat H] |\mathrm{CSF} \rangle

注意和正则RHF中讨论的Fock算符不同， :math:`\hat a_{m \sigma}^\dagger [\hat a_{n\sigma}, \hat H]` 并非单体算符，它等于 :math:`\sum\limits_{q}  h_{nq} \hat E_{mq} + \sum\limits_{qrs} g_{nqrs} \hat e_{mqrs}` 。用一阶密度矩阵和二阶密度矩阵元可以写出广义Fock矩阵

.. math::
    :label: general-fock-from-dm

    F_{mn} = \sum\limits_{q} D_{mq} h_{nq} + \sum\limits_{qrs} d_{mqrs} g_{nqrs}

在 :math:`F_{mn}` 的计算当中，对 :math:`m` 分不同轨道讨论会大大减小直接用 :eq:`general-fock-from-dm` 式的计算量。

对于双占据轨道，有

.. math::
    :label: fock-in

    F_{in} = 2 (^I F_{ni} + ^A F_{ni})

其中 *非活性Fock矩阵* 和 *活性Fock矩阵* 分别为：

.. math::
    :label: inactive-fock

    ^I F_{mn} = h_{mn} + \sum\limits_i (2 g_{mnii} - g_{miin})

.. math::
    :label: active-fock

    ^A F_{mn} = \sum\limits_{vw} (g_{mnvw} - \dfrac{1}{2} g_{mwvn})

对于单占据轨道，有

.. math::
    :label: fock-vn

    F_{vn} = \sum\limits_w {^I F_{nw}} D_{vw} + Q_{vn}

其中Q矩阵为

.. math::
    :label: q-matrix

    Q_{vm} = \sum\limits_{wxy} d_{vwxy} g_{mwxy}

对于未占据轨道，有

.. math::
    :label: fock-an

    F_{an} = 0

这样对于广义Fock矩阵的拆分，方便区别处理各种占据的情况，在二阶SCF乃至之后讨论的多参考态SCF中，它是非常有用的。

能量二阶导
^^^^^^^^^^^^^^^^

SOSCF的实际求解
^^^^^^^^^^^^^^^^^^^

SCF和二阶算法的关系
^^^^^^^^^^^^^^^^^^^^^^