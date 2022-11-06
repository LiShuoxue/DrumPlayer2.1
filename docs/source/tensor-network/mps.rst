Matrix Product States
=====================================================

Form of MPS
--------------

Any quantum many-body states of N sites can be written as

.. math::
    :label: general-mb

    | \psi \rangle = \sum\limits_{\sigma_1, \cdots. \sigma_L} c_{\sigma_1, \cdots, \sigma_L} | \sigma_1 \rangle \otimes | \sigma_2 \rangle \otimes \cdots \otimes | \sigma_L \rangle

where :math:`\sigma_i` denotes the indices of electronic state of each sites. Each :math:`\sigma_i` has :math:`d` choices, and we call :math:`d` as **Physical Dimension**.

Exact singular value decomposition will give L blocks for each site, and the many-body state can be written as:

.. math::
    :label: general-mps
    
    \sum\limits_{a_1, \cdots, a_{L-1}} \sum\limits_{\sigma_1, \cdots, \sigma_{L}} M_{1, a_1}^{\sigma_1} | \sigma_1 \rangle \otimes M_{a_1, a_2}^{\sigma_2} | \sigma_2 \rangle \otimes \cdots \otimes M_{a_{L-1}, 1}^{\sigma_L} | \sigma_L \rangle

If SVD takes place in sequence, the dimension of each :math:`M` matrix will be at least :math:`d, d^2, \cdots, d^{L/2}`, which increases exponentially! So approximation should be taken that 