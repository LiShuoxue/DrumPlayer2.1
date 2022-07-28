组态相互作用方法
=====================

电子相关的若干基本概念
-------------------------

在HF方法当中，自旋相同的电子在同一空间坐标出现的概率为0，而自旋相反电子在同一位置出现概率互相独立，这个不合理的情况是由于单Slater行列式的近似忽略 **电子关联(Electron Correlation)** 导致的。处理电子关联的量子化学方法在HF之后，统一称作 *Post-HF* 方法。由于不同激发的Slater行列式是完备的，因此在考虑电子关联的问题时，我们自然会想到在波函数中添加更多激发组态的办法。对于每个Slater行列式系数的优化通过变分法来求得，即为CI方法的一般思路。

考虑所有组态的Full-CI方法需要添加 :math:`(C_n^k)^2` 个Slater行列式的贡献，其中 :math:`n` 为轨道总数目， :math:`k` 为占据轨道总数目。这对于一般分子显然是难以计算的。因此我们需要在Full-CI的基础上去做以近似。最直接的近似就是截断激发组态到一定阶数，这就是 **组态相互作用(Configuration-Interaction, CI)方法** 的理论基础。除了CI方法外，之后会陆续介绍 **耦合簇(Coupled-Cluster, CC)方法** 和 **多体微扰理论(Many-Body Perturbation Theory, MBPT)** 等post-HF方法。

如何选取所需组态需要涉及 **参考态(Reference State)** 的概念。当我们假定波函数由某一个或某几个Slater行列式主导的时候，它们就是各种Post-HF方法的参考态。根据参考态我们也可以衍生出电子相关的两个重要概念： **静态相关(Static Correlation)** 和 **动态相关(Dynamical Correlation)** ：

* *静态相关* 指单Slater行列式无法对体系给出定性正确描述的情况，也就是多参考态方法解决的问题；

* *动态相关* 指与电子瞬时相互作用有关的关联效应，表现为参考态之外的每个组态都有很小贡献，但加起来是可观的，它便需要在参考态的基础上，使用CI/CC/MBPT等方法来处理。


CI的波函数、能量与方程
---------------------------

全局归一化CI的波函数不利于参数化，因此我们往往采取“中间归一化”措施：

.. math::
    :label: intermediate-norm

    \langle \mathrm{CSF} | \mathrm{CI} \rangle = 1

我们定义参考态的函数为 :math:`| 0 \rangle = \sum\limits_i C_i^{(0)} | i \rangle` ，参考态之外的波函数为 :math:`| \pmb c \rangle = \sum\limits_i c_i | i \rangle` ，则总的波函数写为：

.. math::
    :label: ciwfn-prim

    | \pmb C \rangle = \dfrac{\sum\limits_i (C_i^{(0)} + c_i) | i \rangle}{\sqrt{(\pmb C^{(0)} + \pmb c)^ T (\pmb C^{(0)} + \pmb c)}}

该波函数依然存在多余的参数。考虑 :math:`\pmb c_\alpha = \pmb c + \alpha (\pmb C^{(0)} + \pmb c)` ，则会得到相同的波函数。为了去除参数冗余性，定义投影算符

.. math::
    :label: projop

    \hat P = \hat I - | 0 \rangle \langle 0 |

将参数 :math:`\pmb c \to \hat P \pmb c` 固定在垂直于 :math:`\pmb C_0` 的方向上面，构建的波函数即为：

.. math::
    :label: ciwfn

    | \pmb C \rangle = \dfrac{| 0 \rangle + \hat P | \pmb c \rangle }{\sqrt{1 + \langle \pmb c | \hat P | \pmb c \rangle}}

通过波函数 :eq:`ciwfn` 定义的CI能量为：

.. math::
    :label: cienergy

    E(\pmb c) = \langle \pmb C | \hat H | \pmb C \rangle = \dfrac{E^{(0)} + 2 \pmb c^T \pmb P \pmb H \pmb C^{0} + \pmb c^T \pmb P \pmb H \pmb P \pmb c}{1 + \pmb c^T \pmb P \pmb c}

其中Hamilton矩阵 :math:`\pmb H` 是在组态空间上展开的；投影算符矩阵 :math:`\pmb P = \pmb I - \pmb C{(0)} \pmb C^{(0)T}`

在 :math:`\pmb C = 0` 时，能量的一阶梯度和二阶梯度分别为：

.. math::
    :label: cienergy-1deriv

    \pmb E^{(1)} = 2 \pmb P \pmb H \pmb C^{(0)} = 2 (\pmb H - E^{(0) \pmb I} \pmb C^{(0)})

.. math::
    :label: cienergy-2deriv

    \pmb E^{(2)} = 2 \pmb P (\pmb H - E^{(0)} \pmb I) \pmb P

一阶梯度为0的条件等价于CI方程 

.. math::
    :label: ci-eq

    \pmb H \pmb C^{(0)} = E^{(0)} \pmb C^{(0)}


CI方程的求解技术
-----------------------

牛顿法与近似牛顿法
^^^^^^^^^^^^^^^^^^^^^^

在牛顿法中，我们通过方程

.. math::

    \pmb E^{(2)} \pmb c = - \pmb E^{(1)}

来更新CI向量的变化量。而由于冗余性的消除导致 :math:`\pmb c` 需要满足条件 :math:`\pmb C^{(0)T} \pmb c = 0` ，因此在能量二阶梯度上增加如下的额外项也能满足 :math:`\pmb c` 的要求：

.. math::

    (\pmb E^{(2)} + 2 \alpha \pmb C^{(0)} \pmb C^{(0)T} ) \pmb c = - \pmb E^{(1)}

但是解此方程仍然可以得到和冗余参数 :math:`\alpha` 无关的 :math:`\pmb c` ：

.. math::
    :label: ci-newton

    \pmb c = - \pmb C^{(0)} + \dfrac{(\pmb H - E^{0} \pmb I)^{-1} \pmb C^{0}}{\pmb C^{(0)T} (\pmb H - E^{0} \pmb I)^{-1} \pmb C^{0}} \\ \pmb C = \dfrac{(\pmb H - E^{0} \pmb I)^{-1} \pmb C^{0}}{\| (\pmb H - E^{0} \pmb I)^{-1} \pmb C^{0} \|}

CI的牛顿法是三阶收敛的，但由于 :eq:`ci-newton` 中存在难求的Hamilton量矩阵逆 :math:`(\pmb H - E^{0} \pmb I)^{-1}` ，这使得每一步的耗费巨大。因此我们可以通过使用一个近似Hamilton量 :math:`(\pmb H^{(0)} - E^{(0)} \pmb I)^{-1}` 的方法来获得，该方法便称为准牛顿法。经过进一步简化可以得到下面的 **Davidson方法** 的更新策略：

.. math::
    :label: davidson

    \pmb c^{\mathrm{dav}} = - (\pmb H_0 - E^{(0)} \pmb I)^{-1} (\pmb H - E^{(0)} \pmb I) \pmb C^{(0)}

在PySCF的CI求解过程中使用了Davidson方法，见 ``lib.linalg_helper.davidson1`` 函数。其传入了一个名为 ``precond`` 的函数用以完成 :math:`\pmb x \to (\pmb H^{(0)} - E^{(0)} \pmb I)^{-1} \pmb x` 的变换。同理对于 :math:`\pmb H` 本身，在CI算法中也没有保存巨大的哈密顿矩阵，而是通过巧妙选取 :math:`\pmb x \to \pmb H \pmb x` 的函数，来大幅减小存储空间和时间复杂度。在本节后两个主题会继续讨论CI的计算细节。

行列式信息的存储
^^^^^^^^^^^^^^^^^^^^^^^

直接CI算法
^^^^^^^^^^^^^



CI方法的性质分析
------------------------

