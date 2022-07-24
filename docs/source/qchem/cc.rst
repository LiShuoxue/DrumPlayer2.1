耦合簇方法
==========================

引言
-------------

截断的CI方法往往会面临大小一致性被破坏的问题。如何获取能反映电子相关的更好post-HF方法？

考虑Full-CI的相关能：

.. math::
    :label: ecorr-fci

    E_{corr} = \dfrac{1}{4} \sum\limits_{abij} c_{ab}^{ij} \langle \mathrm{HF} | \hat H | \Psi_{ab}^{rs} \rangle

它可以写成单个相关能 :math:`e_{ab}` 的叠加形式，其中

.. math::
    :label: eab-iepa

    e_{ab} = \dfrac{1}{4} \sum\limits_{ij} c_{ab}^{ij} \langle \mathrm{HF} | \hat H | \Psi_{ab}^{rs} \rangle

对于每个系数 :math:`c_{ab}^{ij}` 可以分别做只考虑 :math:`a` 和 :math:`b` 双激发的波函数做CI计算优化而来。因此该方法称作 **独立电子对近似(Independent Electron Pair Approximation, IEPA)**。

IEPA是满足大小一致性的近似方法，但是存在诸多理论缺点，比如在不同表象变换之下相关能也不同。因此我们需要将不同的电子对耦合起来，这样能更准确地引入激发，描述波函数的性质。考虑Full-CI之下的距离无穷远双 :math:`\mathrm{H_2}` 分子波函数，它正好能被描述成

.. math::
    
    | \mathrm{FCI} \rangle = [| 1_1 \bar 1_1 \rangle + c_{1_1 \bar 1_1}^{2_1 \bar 2_1} | 2_1 \bar 2_1 \rangle] [| 1_2 \bar 1_2 \rangle + c_{1_2 \bar 1_2}^{2_2 \bar 2_2} | 2_2 \bar 2_2 \rangle]

即四激发的Full-CI系数能写作两个双激发系数的乘积形式。但是在一般的情形之下，该式子不成立（四激发的波函数需要考虑18项双激发系数乘积）。但是我们依然可以从这个看似复杂的表达式中拟设出一个便于运算的波函数形式，及围绕它展开的 **耦合簇理论(Coupled-Cluster Theory)**。



指数拟设的波函数
-------------------------

在说明CC的波函数形式之前首先介绍激发算符的形式：

.. math::
    :label: excitation-operator

    \hat \tau_I^A = \hat a_A^\dagger \hat a_J \\ \hat \tau_{IJ}^{AB} = \hat a_A ^\dagger \hat a_I \hat a_B^\dagger \hat a_J

分别为 :math:`A \to I` 和 :math:`AB \to IJ` 的激发算符。更高的激发算符定义类似。

.. important::

    不同激发算符满足如下的对易关系：

    .. math::
        :label: excitation-operator-commute
        
        [\hat \tau_\mu, \hat \tau_\nu] = 0 \\ \hat \tau_\mu^2 = 0

此外我们还定义激发算符作用在HF波函数之后的Slater行列式：

.. math::

    | \mu \rangle \equiv \hat \tau_\mu | \mathrm{HF} \rangle

根据激发算符的概念，我们可以将耦合簇波函数写成考虑不同激发及其耦合的乘积形式

.. math::
    :label: cc-wfn-prod
    
    | \mathrm{CC} \rangle = [\prod\limits_{\mu} (1 + t_\mu \hat \tau_\mu)] | \mathrm{HF} \rangle

其中每个激发对应的 :math:`t_{\mu}` 称作 **振幅(Amplitude)**。

由于 :eq:`excitation-operator-commute` 中的关系， :eq:`cc-wfn-prod` 可以写成如下的 **指数拟设(Exponential Ansatz)** 形式

.. math::
    :label: cc-wfn-exp

    |\mathrm{CC}\rangle = \exp(\hat T) | \mathrm{HF} \rangle 

其中 *团簇算符(Cluster Operator)* :math:`\hat T` 定义为激发算符的总和：

.. math::
    \hat T = \sum\limits_\mu t_\mu \hat \tau_\mu

:math:`\hat T` 可根据激发数目写成 :math:`\hat T_1, \hat T_2 \cdots` 等形式，且相互间满足对易关系。

从指数拟设的结果可以看出，哪怕对 :math:`\hat T` 做了截断，总的波函数一定包含了更高激发的信息。但是对波函数的假设仍然基于单Slater行列式的Hartree-Fock结果相对合理的条件。对于多组态的CC方法尚无定论。

CC方程的求解
-------------------------------

投影Schrödinger方程
^^^^^^^^^^^^^^^^^^^^^^^


按照一般变分法求解Schrödinger方程的方法，我们自然会考虑将振幅看做参数，然后以类似于CI方程的形式求解，但是这样显然会引入所有的Full-CI行列式和高阶的振幅参数。回忆CI求解中，变分方程等价于如下形式的 *投影Schrödinger方程*

.. math::

    \langle \mu | \hat H | \mathrm{CC} \rangle = E \langle \mu | \mathrm{CC} \rangle \\ E = \langle \mathrm{HF} | \hat H | \mathrm{CC} \rangle

而在CC中我们可以采用这样的方程代替变分方程，只不过在CC中二者是不等价的。但在事实上，投影Schrödinger方程解得的能量与其能量期望值基本一致。而投影方程在指数拟设的波函数之下有更易解的形式，称为 *连接耦合簇方程(Linked Coupled-Cluster Equation)* ：

.. math::
    :label: linked-cc-eq

    \langle \mathrm{HF} | \exp(-\hat T) \hat H \exp(\hat T) | \mathrm{HF} \rangle = E \\ \langle \mu | \exp(-\hat T) \hat H \exp(\hat T) | \mathrm{HF} \rangle = 0

:eq:`linked-cc-eq` 中，第一式称作能量方程，第二式称作 *振幅方程(Amplitude Equation)* 。

.. admonition:: 证明
    :class: prove

    能量方程很容易从原始的Schrödinger方程得到；对于振幅方程的求解，我们首先定义矩阵

    .. math::
        :label: t-matrix

        T^\pm_{\mu\nu} = \langle \mu | \exp(\pm \hat T ) | \nu \rangle

    按激发数目排列指标，T为非奇异的下三角矩阵，理由如下：

    * 若 :math:`\mu = \nu` ，则矩阵元为1；
    
    * 若 :math:`\mu` 的激发数目不大于 :math:`\nu` 的激发数目且两者不等，则显然矩阵元为0。

    之后我们定义辅助量 :math:`A_\mu` ：

    .. math::
        
        A_\mu = \sum\limits_{\nu} T^+_{\mu\nu} \langle \nu | \exp(-\hat T) \hat H \exp(\hat T) | \mathrm{HF} \rangle \\
        = \sum\limits_{\nu} \langle \mu | \exp(\pm \hat T ) | \nu \rangle \langle \nu | \exp(-\hat T) \hat H \exp(\hat T) | \mathrm{HF} \rangle \\
        = \langle \mu | \hat H \exp(\hat T) | \mathrm{HF} \rangle - \langle \mu | \exp(\hat T) | \mathrm{HF} \rangle \langle \mathrm{HF} | \exp(-\hat T) \hat H \exp(\hat T) | \mathrm{HF} \rangle \\ = \langle \mu | \hat H \exp(\hat T) | \mathrm{HF} \rangle - E \langle \mu | \exp(\hat T) | \mathrm{HF} \rangle \\ = 0

    第二个等号是因为 :math:`| \mathrm{HF} \rangle` 和所有的激发行列式共同组成完备基，即 :math:`\sum\limits_\nu | \nu \rangle \langle \nu | + | \mathrm{HF} \rangle \langle \mathrm{HF} | = \hat I` 。
    
    由于T矩阵的非奇异性， :math:`A_\mu = 0` 与 :math:`\langle \mu | \exp(-\hat T) \hat H \exp(\hat T) | \mathrm{HF} \rangle = 0` 的条件等价。

连接CC方程比起原始形式具有很多优势，例如它能运用BCH公式简化运算。

求解振幅方程的方法
^^^^^^^^^^^^^^^^^^^^^^^

振幅方程是解决函数零点问题，可以通过牛顿法迭代 :math:`\Omega_\mu(\pmb t) = \langle \mu | \exp(-\hat T) \hat H \exp(\hat T) | \mathrm{HF} \rangle` 求解。根据BCH公式可知 :math:`\Omega_\mu(\pmb t)` 对 :math:`\pmb t` 的一阶导为：

.. math::
    :label: ampf-1-deriv

    \Omega_{\mu \nu}^{(1)} (\pmb t) = \langle \mu | \exp(-\hat T) [\hat H, \hat \tau_\nu] \exp(\hat T) | \mathrm{HF} \rangle 

振幅的迭代步长可以由矩阵方程

.. math::

    \pmb \Omega^{(1)} (\pmb t^{(n)}) \Delta \pmb t^{(n)} = - \pmb \Omega(t^{(n)})

来获得。但是它仍然非常复杂。因此我们希望从 :math:`\pmb \Omega^{(1)}` 的结构出发简化迭代步骤。考虑在Hartree-Fock分子轨道表象之下， :math:`\pmb \Omega^{(1)}` 可以表示成
