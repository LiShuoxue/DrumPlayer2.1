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

    尝试根据 :eq:`spin-op` 中的关系，证明 :eq:`spin-ops` 中 :math:`\hat S_+` 的形式。

.. important::
    
    自旋升降算符满足如下的重要对易关系：

.. math::

    [\hat S_+, \hat S_-] = 2 \hat S_z \\

总自旋平方算符 :math:`\hat S^2` 和 :math:`\hat S_+, \hat S_-, \hat S_z` 的关系为：

.. math::

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

.. admonition:: 小练习
    :class: quiz

    尝试说明产生算符 :math:`\{\hat a^\dagger_{p\alpha}, \hat a^\dagger_{p\beta}\}` 或湮灭算符 :math:`\{-\hat a_{p\beta}, \hat a_{p\alpha}\}` 分别构成一组二重态张量算符。

    该结论在后续推导涉及自选匹配的结论时非常有用。
    
自旋匹配波函数
---------------------

对于非相对论的Hamilton量