Matrix Product States
=====================================================

Construction of MPS
---------------------------

Any quantum many-body states of N sites can be written as

.. math::
    :label: general-mb

    | \psi \rangle = \sum\limits_{\sigma_1, \cdots. \sigma_N} c_{\sigma_1, \cdots, \sigma_N} | \sigma_1 \rangle \otimes | \sigma_2 \rangle \otimes \cdots \otimes | \sigma_N \rangle

where :math:`\sigma_i` denotes the indices of electronic state of each sites. Each :math:`\sigma_i` has :math:`d` choices, and we call :math:`d` as **Physical Dimension**, and :math:`i` are **physical indices**.

Exact singular value decomposition will give N blocks for each site, and the many-body state can be written as:

.. math::
    :label: general-mps
    
    \sum\limits_{a_1, \cdots, a_{N-1}} \sum\limits_{\sigma_1, \cdots, \sigma_{N}} M_{1, a_1}^{\sigma_1} | \sigma_1 \rangle \otimes M_{a_1, a_2}^{\sigma_2} | \sigma_2 \rangle \otimes \cdots \otimes M_{a_{N-1}, 1}^{\sigma_N} | \sigma_N \rangle

If SVD takes place in sequence, the dimension of each :math:`M` matrix will be at least :math:`d, d^2, \cdots, d^{L/2}`, which increases exponentially! So approximation should be taken that the dimension of each :math:`M` are truncated to a fixed value :math:`D`, the **bond dimension** or **virtual dimension**. Correspondetly, :math:`a_1, a_2 \cdots ` are called **virtual indices**.

Generally, an arbitrary MPS can be generated randomly.

Gauge Freedom and Canonicalization
---------------------------------------

If we insert arbitrary :math:`X X^{-1}` between two :math:`M`s of :eq:`general-mps`, then the product :math:`MX` and :math:`X^{-1}M` lead to a different construction of MPS which gives the same result of :math:`| \psi \rangle`. Hence to remove the **gauge freedom**, we can add restrictions such as left-canonical or right-canonical:

* Left Canonical Gauge:

    .. math::
        \sum\limits_\sigma A^{\sigma\dagger} A^{\sigma} = I

* Right Canonical Gauge:

    .. math::
        \sum\limits_\sigma B^{\sigma} B^{\sigma \dagger} = I

Then using SVD, the MPS can be written as:

.. math::
    | \Psi \rangle = \sum\limits_\sigma A^{\sigma_1} \cdots A^{\sigma_l} M^{\sigma_{l+1}} B^{\sigma_{l+2}} \cdots B^{\sigma_N} | \sigma_1 \cdots \sigma_N \rangle

in which the freedom can be restricted only to the choice of :math:`l`. Also this gauge restriction will bring out numerical convenience. 

Matrix Product Operator (MPO)
--------------------------------

For a general operator :math:`\hat O` on the hilbert space of :math:`N` sites, it can be written as:

.. math::
    \hat O = \sum\limits_{\sigma_1, \cdots, \sigma_N \\ \sigma'_1, \cdots, \sigma'_N} c^{(\sigma_1, \cdots, \sigma_N)(\sigma'_1, \cdots \sigma'_N)} |\sigma_1, \cdots \sigma_N \rangle \langle \sigma'_1, \cdots, \sigma'_N |

As the construction of MPS, MPO can also be written as the form:

.. math::
    :label: mpo

    \hat O = \sum\limits_{\sigma, \sigma'} W^{\sigma_1, \sigma'_1} \cdots W^{\sigma_L, \sigma'_L} | \sigma \rangle \langle \sigma' |

in which the :math:`W^{\sigma \sigma'}` is a matrix with two bond dimensions. The representation of MPO can be simplified as:

.. math::
    :label: mpo-hamilt

    \hat O = \hat W^{[1]} \hat W^{[2]} \cdots \hat W^{[N]}

in which each matrix element of operator matrix :math:`\hat W^{[l]}` is defined as:

.. math::
    \hat W^{[l]}_{bb'} = \sum\limits_{\sigma\sigma'}{W^{\sigma\sigma'}_{bb'}} | \sigma_l \rangle \langle \sigma_l' |

For the neighbor-interaction Hamiltonians, the operator matrices are usually sparse. For instance, in the Heisenberg model:

.. math::
    \hat H = - J_x \sum \hat X_j \hat X_{j+1} - J_Y \sum \hat Y_j \hat Y_{j+1} - J_Z \sum \hat Z_j \hat Z_{j+1} - h \sum Z_j

then for the MPO matrix not on the left or right

.. math::
    \hat W = \begin{bmatrix} \hat I \\ \hat X \\ \hat Y \\ \hat Z \\ -h\hat Z & - J_X \hat X & J_Y \hat Y & - \hat J_Z \hat Z & I \end{bmatrix}

and for left and right:

.. math::
    \hat W_{L} = \begin{bmatrix} -h \hat Z & -J_X \hat X & - J_Y \hat Y & - J_Z \hat Z & \hat I \end{bmatrix} \\

    \hat W_{R} = \begin{bmatrix} \hat I \\ \hat X \\ \hat Y \\ \hat Z \\ - h \hat Z \end{bmatrix}