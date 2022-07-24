多电子波函数的表述
==========================

自旋在二次量子化中的表达
----------------------------

在考虑轨道自旋之后，单体算符可以写成如下的形式

.. math::
    :label: one-elec-op

    \hat f = \sum\limits_{p\sigma q\tau} f_{p\sigma,q\tau} \hat a^\dagger_{p\sigma} \hat a_{q\tau}

其中矩阵元

.. math::
    :label: one-elec-op-element
    
    f_{p\sigma,q\tau} = \int \phi_p^*(\pmb r) f(\pmb r, m_s) \phi_q(\pmb r)  \sigma^*(m_s) \tau(m_s) \mathrm d \pmb r  \mathrm d m_s

与自旋无关的算符表达式
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

若是单体算符 :math:`f(\pmb r, m_s)` 和自旋无关，则上式可以表达成含有 :math:`\delta_{\sigma \tau}` 的形式。最后我们可以定义和自旋无关的算符形式 :math:`\hat f = \sum\limits_{pq} f_{pq} \hat E_{pq}` ，其中的单重态激发算符 :math:`\hat E_{pq}` 定义为：

.. math::
    :label: singlet-ex-op

    \hat E_{pq} = \hat a^\dagger_{p\alpha} \hat a_{q\alpha} + \hat a^\dagger_{p\beta} \hat a_{q\beta}

同理，对于二体算符有类似的结论：

.. math::
    :label: two-elec-op

    \hat g = \dfrac{1}{2} g_{pqrs} \hat e_{pqrs}

其中二体激发算符

.. math::
    :label: two-elec-ex-op

    \hat e_{pqrs} = \hat E_{pq} \hat E_{rs} - \delta_{qr} \hat E_{ps} = \sum\limits_{\sigma \tau} \hat a^\dagger_{p\sigma} \hat a^\dagger_{r\tau} \hat a_{s\tau} \hat a_{q\sigma}

一般的非相对论Hamilton量因此可以写成：

.. math::
    :label: nr-hamilton

    \hat H = \sum\limits_{pq} h_{pq} \hat H_{pq} + \dfrac{1}{2} \sum\limits_{pqrs} g_{pqrs} \hat e_{pqrs} + \hat h_{nuc}


纯自旋算符
^^^^^^^^^^^^^^^

单纯和电子自旋坐标相关而与空间坐标无关的算符具有如下的形式：

.. math::
    :label: spin-op
    
    \hat f = \sum\limits_{\sigma \tau} \int \sigma^*(m_s) f(m_s) \tau(m_s) \mathrm d m_s \sum\limits_p \hat a^\dagger_{p\sigma} \hat a_{p\tau}

其中最重要的例子是自旋升降算符和z分量算符，它们的二次量子化表达式分别为：

.. math::
    :label: spin-ops

    \hat S_+ = \sum\limits_p \hat a^\dagger_{p\alpha} \hat a_{p\beta} \\
    \hat S_- = \sum\limits_p \hat a^\dagger_{P\beta} \hat a_{p\alpha} \\
    \hat S_z = \dfrac{1}{2} (\hat a^\dagger_{p\alpha} \hat a_{q\alpha} - \hat a^\dagger_{p\beta} \hat a_{q\beta})

.. admonition:: 小练习
    :class: quiz

    尝试证明 :eq:`spin-ops` 中 :math:`\hat S_+` 的形式。

    **提示：** 根据 :eq:`spin-op` 可知只有在 :math:`\sigma = \alpha, \tau = \beta` 的条件之下，对应的系数才不为0。因此立刻有 :math:`\hat S_+ = \sum\limits_p \hat a_{p\alpha} \hat a_{p\beta}` 。同理可以得出 :math:`\hat S_-, \hat S_z` 的形式。

.. important::
    
    自旋升降算符满足如下的重要对易关系：

    .. math::

        [\hat S_+, \hat S_-] = 2 \hat S_z \\

总自旋平方算符 :math:`\hat S^2` 和 :math:`\hat S_+, \hat S_-, \hat S_z` 的关系为：

.. math::
    :label: total-spin-op

    \hat S^2 = \hat S_- \hat S_+ + \hat S_z (\hat S_z + 1)

自旋张量算符
--------------------------

**自旋张量算符(Spin Tensor Operator)** 是如下的 :math:`2S+1` 个算符 :math:`\hat T^{S,M}` 的集合。它们和自旋算符满足如下的对易关系：

.. math::
    :label: spin-ten-op-commute

    [\hat S_{\pm}, \hat T^{S,M}] = \sqrt{S(S+1) - M(M \pm 1)} \hat T^{S,M\pm 1} \\
    [\hat S_z, \hat T^{S,M}] = M\hat T^{S,M}

特别地，当 :math:`S=0, M=0` 时，张量算符 :math:`\hat T^{0,0}` 与 :math:`\hat S^\pm, \hat S_z` 均对易。

我们把 :math:`S=0` 的算符称作 *单重态算符* ，将 :math:`S=\dfrac{1}{2}` 的称作 *二重态算符* ，以此类推。

.. admonition:: 例子
    :class: example

    激发算符 :math:`\hat E_{pq}` 和非相对论Hamilton量 :eq:`nr-hamilton` 均为单重态张量算符。


.. admonition:: 小练习
    :class: quiz

    尝试说明产生算符 :math:`\{\hat a^\dagger_{p\alpha}, \hat a^\dagger_{p\beta}\}` 或湮灭算符 :math:`\{-\hat a_{p\beta}, \hat a_{p\alpha}\}` 分别构成一组二重态张量算符。

.. important::

    对于 **闭壳层波函数** :math:`| \mathrm{cs} \rangle` ，一个张量算符作用之后便仍然是 :math:`\hat S_z, \hat S^2` 的本征值，如式 :eq:`eigv-tenop-on-cs` 所示。它正是自旋匹配波函数的形式。

    .. math::
        :label: eigv-tenop-on-cs

        \hat S_z \hat T^{S,M} | \mathrm{cs} \rangle = M \hat T^{S,M} | \mathrm{cs} \rangle \\ \hat S^2 \hat T^{S,M} | \mathrm{cs} \rangle = S(S+1) \hat T^{S,M} | \mathrm{cs} \rangle


自旋匹配波函数
---------------------

一般的非相对论的Hamilton量 :eq:`nr-hamilton` 作为单重态算符，它和 :math:`\hat S_z` 与 :math:`\hat S^2` 相互对易。因此我们希望在求解其本征波函数时，使得波函数是自旋匹配的单重态。而在处理其它和自旋有关的Hamilton量时，我们也希望获得其它自旋多重态的波函数，因为它们不仅可以反映出体系的自旋对称性，更能构建一组新的基来简化Hamilton矩阵元的计算。

表记方式
^^^^^^^^^^^^^^^^

单个Slater行列式一般而言不是 :math:`\hat S^2` 的本征态，因此我们寻求多个Slater行列式的线性组合来得到 **自旋匹配组态函数(Configuration Sate Function, CSF)** 。对于多电子体系，我们可以通过前 :math:`(N-1)` 电子耦合出的构型产生出 :math:`N` 个电子的构型。这个顺序可以用于方便表示CSF，以 :math:`N = 1 \sim 3` 的电子数为例：

.. admonition:: 例子
    :class: example

    * 一个电子， :math:`S = \frac{1}{2}` ；

    * 两个电子的自旋耦合， :math:`S = \frac{1}{2} \pm \frac{1}{2}` ，因此可以表示为 :math:`| \frac{1}{2}, 0\rangle^c` 以及 :math:`| \frac{1}{2}, 1\rangle^c` ，其中上标 :math:`c` 表示该波函数为CSF；

    * 三个电子的情况，由于 :math:`S > 0` ，因此耦合出来仅有三种情况，分别标记为 :math:`| \frac{1}{2}, 1, \frac{3}{2} \rangle^c,\, | \frac{1}{2}, 1, \frac{1}{2} \rangle^c,\, | \frac{1}{2}, 0, \frac{1}{2} \rangle^c` 。

一般而言，我们可以用向量 :math:`\pmb T` 来描述多电子的组态，其每一个分量分别表示电子在一步步添加过程中的 :math:`S` 值。同理我们可以根据每次加上电子后 :math:`\pmb T` 的变化量来描述，此时向量 :math:`\pmb t` 的分量满足 :math:`t_1 = T_1, t_i = T_i - T_{i-1} (i>1)` 。由于 :math:`S` 每次只能增加 :math:`\pm \frac{1}{2}` ，因此我们可以用“+”或“-”来表达它。例如 :math:`| \frac{1}{2}, 1, \frac{1}{2} \rangle^c` 可以写成 :math:`| ++- \rangle^c` ， :math:`| \frac{1}{2}, 0, \frac{1}{2} \rangle^c` 可以写成 :math:`| +-+\rangle^c` 等。

同理对于Slater行列式，我们也可以用向量 :math:`| \pmb P \rangle^d` 或者 :math:`| \pmb p \rangle^d` （其中上标"d"表示determinant）来进行表示。CSF和Slater行列式分别可以用算符作用在闭壳层Slater行列式的办法产生：

.. math::
    :label: csf-slater-from-cs

    | \pmb t \rangle^c = \hat O_N^{S,M} (\pmb t) | \mathrm{cs} \rangle \\
    | \pmb p \rangle^d = \hat a_{1p_1}^\dagger \cdots \hat a_{Np_N}^\dagger | \mathrm{cs} \rangle

式中 :math:`\hat O_N^{S,M} (\pmb t)` 表示张量算符和标记CSF的向量 :math:`\pmb t` 有关。

CSF组合系数的确定
^^^^^^^^^^^^^^^^^^^^^^^^

我们希望通过求出Slater行列式和CSF的内积 :math:`d_i = ^d \langle ^i \pmb p | \pmb t \rangle^c` 得到CSF中每个Slater行列式的贡献。由于我们在构建N电子CSF时从(N-1)电子的CSF组态出发，因此我们需要使用如下的张量算符分解公式：

.. math::
    :label: tenop-decomp

    \hat O_N^{S,M}(\pmb t) | \mathrm{cs} \rangle = \sum\limits_{\sigma 
    in \{-1/2,1/2\}} C_{t_N\sigma}^{S,M} \hat O_{N-1}^{S-t_N, M-\sigma} (\pmb t) \hat a_{N\sigma}^\dagger | \mathrm{cs} \rangle

其中组合系数

.. math::
    :label: comb-coeff

    C_{1/2,\sigma}^{S,M} = \sqrt{\dfrac{S+2\sigma M}{2S}} ,\, C_{-1/2,\sigma}^{S,M} = -2\sigma \sqrt{\dfrac{S+1-2\sigma M}{2(S+1)}}

.. admonition:: 小练习
    :class: quiz

    证明 :eq:`comb-coeff` 的两式。

    **提示：** 使用张量算符和自旋升降算符的对易关系 :eq:`spin-ten-op-commute` 可以得到组合系数之间的迭代关系。