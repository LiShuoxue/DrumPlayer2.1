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

The entangled-pair states between two sites are written as:

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
