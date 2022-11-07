Projected Entangled-Pair States
=====================================================

Construction of PEPS
---------------------

Recall MPS form:

.. math::
    :label: mps

    | \mathrm{MPS} \rangle = \sum\limits_{a_1, \cdots, a_{L-1}} \sum\limits_{\sigma_1, \cdots, \sigma_{L}} M_{1, a_1}^{\sigma_1} | \sigma_1 \rangle \otimes M_{a_1, a_2}^{\sigma_2} | \sigma_2 \rangle \otimes \cdots \otimes M_{a_{L-1}, 1}^{\sigma_L} | \sigma_L \rangle

It can be viewed as

.. math::
    :label: mps_to_peps

    \sum M^{\sigma_1}_{1, a_1} M^{\sigma_2}_{b_1, a_2} \cdots M^{\sigma_L}_{b_{L-1}, 1} | \sigma_1 \sigma_2 \cdots \sigma_L \rangle \langle a_1 b_1 a_2 b_2 \cdots a_{L-1} | j_1 j_1 j_2 j_2 \cdots j_{L-1} j_{L-1} \rangle \\ = \sum (M_{1, a_1}^{\sigma_1} | \sigma_1 \rangle \langle a_1|) \otimes \sum (M^{\sigma_2}_{b_1 a_2} | \sigma_2 \rangle \langle b_1 a_2 |) \otimes \cdots (\sum | j_1 j_1 \rangle \otimes | j_2 j_2 \rangle \cdots)

Define **projection operator**

.. math::
    :label: projection

    \hat P = \sum\limits_{\sigma, a, b} M^{\sigma}_{a, b} | \sigma \rangle \langle a, b |

and the **entangled-pair state** *between two sites* 

.. math::
    :label: eps-1D

    | \phi \rangle = \sum\limits_{j = 0}^{D-1} | jj\rangle

then we get

.. math::
    | \mathrm{MPS} \rangle = \hat P | \phi \rangle \otimes \hat P | \phi \rangle \cdots

We can see from the simple construction that 1D PEPS maps the entangled-pair virtual space :math:`(\mathbb C^\mathrm{D})^{\otimes 2}` to the physical space :math:`\mathbb C^d`.

More generally, 1D PEPS can be natually extended to higher-dimensional ones. Generally a PEPS can be written as

.. math::
    :label: peps

    | \Psi_A \rangle = \sum\limits_{k_{(1,1)}, \cdots, k_{(M,N)}}^{d} \mathcal F ([A_{(1,1)}]^{k_{(1,1)}} \cdots [A_{(M,N)}]^{k_{(M,N)}}) | k_{(1,1)} k_{(1,2)} \cdots k_{(M,N)} \rangle

where 

* :math:`(h,v)` are indices of sites;

* The matrix :math:`[A_{(h,v)}]` has four **virtual** (or **auxiliary**) **indices** :math:`l, r, u, d` (denoting the direction) and one **physical index** :math:`k`;

* :math:`\mathcal F` is the notation of some *contraction* of matrix.

From the projection view, one can define a projection operator :math:`\mathcal{P}: (\mathbb C^D)^{\otimes 4} \to \mathbb C^d`:

.. math::
    :label: projection operator

    \mathcal{P} = [A_{(h,v)}]_{lrud}^k | c_{(h,v)}^k \rangle \langle \alpha^l_{(h,v)} \beta^r_{(h,v)} \gamma^{u}_{(h,v)} \delta^d_{(h,v)} |

where 

* *Physical* states are denoted with alphabet :math:`a,b,c \cdots`

* *Auxiliary* or *virtual* states are denoted by Greek alphabet :math:`\alpha, \beta, \gamma, \delta` for left, right, up and down directions in each site.

The entangled-pair states between two sites (should be normalized) are written as:

.. math::
    :label: eps

    | \phi^h_{(h, v)} \rangle = \sum\limits_{i=1}^D | \gamma_{(h+1, v)}^i \delta_{(h,v)}^i \rangle \\ | \phi^v_{(h,v)} \rangle = \sum\limits_{i=1}^D | \alpha_{(h,v+1)}^i \beta_{(h,v)}^i \rangle

in the notation of wave function, we denote :math:`| abc \cdots \rangle \equiv \cdots \hat c^\dagger \hat b^\dagger \hat a^\dagger | \mathrm{vac} \rangle` and :math:`(| abc \rangle)^\dagger = \langle abc |`. This is worth being noted while considering Fermion.

.. admonition:: Example: GHZ State
    :class: example

    For boson system that :math:`d = D = 2`. If we define the projection operator

    .. math::
        \mathcal P = | 0 \rangle \langle 0000 | + | 1 \rangle \langle 1111|

    Then if one of the virtual state is chosen to :math:`0` or :math:`1`, then all of the physical indices and virtual indices should be identical. So this PEPS defines a GHZ state.

.. admonition:: Example: Classical Partition Function
    :class: example

    Let a Hamiltonian :math:`H[s] = \sum\limits_{\langle ij \rangle} h[s_i, s_j]`, where :math:`i, j` are indices of site position. Then if we define the projection coefficient

    .. math::
        [A_i]^k_{lrud} = \exp[-\dfrac{\beta}{4} (h[s_i,s_l] + h[s_i,s_r] + h[s_i,s_u] + h[s_i,s_d])]

    Then it defines a PEPS
    
    .. math::
        | \Psi \rangle = \exp(-\dfrac{\beta \hat H}{2}) (| \uparrow \rangle + | \downarrow\rangle)^{\otimes N}

    and the inner product of :math:`| \Psi \rangle` is proportional to partition function :math:`Z(\beta)`. The PEPS therefore defines a *classical thermal state*.

    Also since at critical temperature, the 2D spin correlation function has a :math:`-\dfrac{1}{4}` polynominal decay behavior, therefore PEPS can handle polynominally-decaying correlations of system.

Calculating Properties
---------------------------

Recall that in MPS, we implement left or right normalization procedure, and then calcualting ground states become a common eigenvalue problem. However, due to the loop property of PEPS, we cannot exactly use the left/right canonical algorithm. Although we can directly calculate the overlap and expectation value by a general eigenvalue problem:

.. math::
    \langle \Psi | \Psi \rangle = A^\dagger \mathcal N A \\
    \langle \Psi | \hat H | \Psi \rangle = A^\dagger \mathcal H A \\
    \mathcal H v = \lambda \mathcal N v

However, the coefficient matrix of :math:`\mathcal H` and :math:`\mathcal N` will grow exponentially, and the well-definition of :math:`\mathcal N` is not clear. Hence approximate method of property calculation about PEPS should be developed.

Fermion PEPS
---------------------------------

Before expanding PEPS formalism into fermion, we should note that the major difference between fermion and boson is that fermion has exchange antisymmetry so that for two sites :math:`i` and :math:`j`, the direct product will change sign: 

.. math::
    | i \rangle \otimes | j \rangle = (-1)^{P_i \cdot P_j} |j \rangle \otimes | i \rangle

in which :math:`P_i` is the **Parity** of state :math:`i`. Parity, in this context, can be primitively understood as whether or not the partical number of a certain state is odd or even. If partical number is odd, parity is :math:`1`; else, it is :math:`0`.

More mathematically, for a **super vector space** :math:`V`, it has a direct sum decomposition to :math:`V^0 \oplus V^1` according to the parity, so does its dual space :math:`V^* = V^{*0} \oplus V^{*1}`.

Apart from electronic state, we can also define parity for a general *tensor*. Consider the tensor at space :math:`V \otimes \cdots`, then the parity is just that added from the vectors in each space. 

**References:**

`[1] <https://iopscience.iop.org/article/10.1088/1751-8121/aa6dc3>`_ , `[2] <https://www.sciencedirect.com/science/article/pii/S0003491614001596>`_ : Introductory Review

`[3] <https://journals.aps.org/pra/abstract/10.1103/PhysRevA.75.033605>`_ : PEPS Construction

`[4] <https://journals.aps.org/prb/abstract/10.1103/PhysRevB.95.075108>`_ : Fermionic MPS, more mathematically.

`[5] <https://journals.aps.org/prb/abstract/10.1103/PhysRevB.81.245110>`_ , `[6] <https://journals.aps.org/pra/abstract/10.1103/PhysRevA.81.052338>`_: Fermionic PEPS