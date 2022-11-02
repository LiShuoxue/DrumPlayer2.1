.. figure:: ./_static/logo_uniform.png

欢迎来到咱家的个人Blog!
===========================

Curriculum Vitae
--------------------------

.. sidebar:: Photo

   .. image:: ./_static/personal.jpg
      :align: center
      :scale: 20%

**Education**:

* 2022-Present
   - Graduate of Physical Chemistry
   - Division of Chemistry and Chemical Engineering, Caltech, Pasadena, California, US

* 2018-2022
   - BSc of Chemistry
   - College of Chemistry and Molecular Engineering, Peking University, Beijing, China
   - Academic Advisor: `Prof. Hong Jiang <https://www.chem.pku.edu.cn/jianghgroup/>`_ 
   - GPA: 3.83 / 4.00
   - *Chemistry Star* Honor

学海无涯
-------------

(Updated on July 28, 2022)

我的本科阶段有幸在蒋鸿老师的指导下，加入了 `理论材料化学课题组 <https://www.chem.pku.edu.cn/jianghgroup/>`_ 进行科研训练。我的本科生科研历程以材料的发光性质为线索，接触了第一性原理计算软件VASP和CP2K对材料建模和激发态计算的基本概念和流程；通过对限制开壳层Kohn-Sham理论(ROKS)的学习和方法的复现对激发态计算有了初步了解，也结识了基于Python的量子化学程序PySCF；在毕业论文中，我也在PySCF中实现了一些嵌入团簇模型的能量计算与几何优化的框架，用它来结合TDDFT计算一些固体材料的激发与发射性质。也因为志在发展理论方法的兴趣和科研经历本身的overlap，我也有幸在申请季获得了Caltech物理化学方向的面试机会，并获得了offer。

纵观我的本科生科研阶段，最大的特点在于“广度有余，深度不足”。也因为很多急功近利的问题留下了诸多遗憾。在写ROKS程序的时候，我曾在SCF收敛性仍然很差的情况下仍然急切地去结构优化，从而导致了解析梯度和数值梯度相去甚远的结局。直到毕业论文的工作中我才知晓了先前结构优化失败的根源；此外我也因为忽视了量子化学基础知识的深入学习，对于许多理论和技术问题缺乏深入的认识与理解，这也是我时常吐槽自己本研像“狗刨”一般的原因。2022年的暑假正好提供了足够的时间让我整装待发，从紫书开始恶补量化，尤其是本科阶段没有深入实践的各种post Hartree-Fock方法的理论基础和技术细节；此外也兼顾学习DMRG和DMET等从凝聚态物理发扬而来的量子化学新方法，也期待自己能对电子结构计算领域的现状与发展有相对general的认识，并且对自己想要应用的领域有个大致的方向。

“学海无涯”栏目，旨在分享在量子化学/第一性原理计算的理论学习/实践心得。今年2月份参加Caltech线上见面会的时候，导师希望Caltech能教会我"How to be a scientist"。希望我能背着这些浅浅的行囊去真正做出一些有意义的工作吧。

.. toctree::
   :maxdepth: 2

   紫书 <qchem/index>
   图解方法 <diag/index>
   张量网络 <tensor-network/index>

氍毹寄意
-------------------

(Updated on July 28, 2022)

Logo的“魏虎大印”是某个岭外人(Expired on Sep 25, 2022)于我毕业之时相赠。至于“魏虎”这名儿的来源，即是我在北大京昆社庆30周年演出京剧《大登殿》的花脸角色。押上场来之后有四句西皮摇板，非常脍炙人口。视频如下：

.. raw:: html

   <center><iframe height=398 width=510 src='https://player.bilibili.com/player.html?bvid=BV1Cg411373M' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></center>

作为戏曲爱好者，我从小就在爷爷奶奶们唱秦腔和眉户的氛围中长大，直到大三因参加《经典昆曲欣赏》课程的契机加入北京大学学生京昆社之后，对京剧、昆曲、粤剧以及更多剧种有了初步的了解。嗓子公认是适合花脸的，但是做了state average，几个行当都能来一点儿却都不深入。个人相对而言对戏曲音韵和唱腔的兴趣尤大，有诸多京剧名段的即兴钢琴改编(见我的 `BiliBili主页 <https://space.bilibili.com/646013309?spm_id_from=333.1007.0.0>`_ )，也初步学点儿拉胡琴、写词创腔和戏曲锣鼓的知识，并且拿学了三天的web知识写了个“哗啦啦”戏曲锣鼓月琴演奏小程序（就是本文档所属的Github项目，正在开发中）...

“氍毹寄意”的栏目也旨在分享在戏曲方面的二创，读了研究生就要务正业了，但愿有心力的时候更新叭~

.. toctree::
   :maxdepth: 2

   锣鼓小程序“哗啦啦” <drumplayer/index>
   各种整活 <auto/index>
