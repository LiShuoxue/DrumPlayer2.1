多参考态自洽场方法
======================

若干基本概念
-------------------

MCSCF的波函数与能量
^^^^^^^^^^^^^^^^^^^^^^^

**多参考态自洽场方法(Multiconfigurational Self-consistent Field, MCSCF)** 本质上相当于CI方法和Hartree-Fock方法的结合，在优化组态组合系数的同时，也在优化分子轨道，其波函数可以由HF和CI的参数 :math:`(\pmb \kappa, \pmb C)` 共同决定：

.. math::
    :label: mcscf-wfn

    | \pmb \kappa, \pmb C \rangle = \exp(-\hat \kappa) \sum\limits_i C_i | i \rangle

能量是下式的变分：

.. math::
    :label: energy-var

    E = \min_{\pmb \kappa, \pmb C} \dfrac{\langle \pmb \kappa, \pmb C | \hat H | \pmb \kappa, \pmb C \rangle}{\langle \pmb \kappa, \pmb C | \pmb \kappa, \pmb C \rangle}

组态的选取：CAS与RAS方法
^^^^^^^^^^^^^^^^^^^^^^^^^

