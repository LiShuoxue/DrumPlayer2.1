var scoreconfig = new Object()

scoreconfig.scorenames = [
    "原板", "三眼", "流水板", "休止",
    "单扦小锣一击", "单扦大锣一击",
    "入头", 
    "慢长锤[中]", "慢长锤[中带撕边]", "慢长锤[尾]", 
    "快长锤[中]", "快长锤[尾]",
    "大锣夺头", "小锣夺头", "铙钹夺头",
    "大锣冒子头", "小锣冒子头",
    "大锣导板头", "小锣导板头",
    "小锣凤点头", "大锣单扦凤点头", "双扦凤点头", 
    "撞金钟[头]", "撞金钟[尾]",
    "闪锤[头]", "闪锤[中]", "闪锤[尾]",
    "小锣抽头[中]", "小锣抽头[尾]", "大锣抽头(中)", "大锣抽头(尾)",
    "纽丝[头]", "纽丝[中]", "纽丝[尾]",
    "小锣收头", "大锣收头",
]

scoreconfig.DefaultTempo = [
    80, 100, 110, 60,   // 板眼
    80, 80,
    160,                
    80, 80, 80,         // 慢长锤 
    140, 140,           // 快长锤
    110, 110, 110,      // 夺头
    130, 60,            // 冒子头
    60, 60,             // 导板头
    120, 120, 70,       // 凤点头
    75, 75,             // 撞金钟
    100, 100, 100,      // 闪锤
    110, 110, 110, 110,   // 抽头
    200, 200, 200,      // 纽丝
    80, 80,             // 收头
]

scoreconfig.DefaultRepeat = [
    3, 2, 10, 3,        // 板眼
    1, 1,               
    1,                  
    2, 2, 1,            // 慢长锤
    4, 1,               // 快长锤
    1, 1, 1,            // 夺头
    1, 1,               // 冒子头
    1, 1,               // 导板头
    1, 1, 1,            // 凤点头
    1, 1,               // 撞金钟
    1, 4, 1,            // 闪锤
    3, 1, 3, 1,       // 抽头
    1, 4, 1,            // 纽丝
    1, 1                // 收头
]

scoreconfig.scorestrs = [

    "2 Z0 F1",          // 原板                                                                
    "4 Z0 F1 F2 F3",    // 三眼
    "1 Z0",             // 流水板
    "1",                // 休止
    "5 D0 D0.75 F1 D1.5 Y2 D2.5 D3 D3.5 T4", // 单扦小锣一击
    "5 D0 D0.75 F1 D1.5 Y2 D2.5 D3 D3.5 K4 Q4", // 单扦大锣一击                                                               
    "4 Z0 F1 Y2",       // 入头
    // 慢长锤[中]                                                
    "4 K0 Q0 Q1 T2 Q2 Q3",       
    // 慢长锤[中，带撕边]
    "4 K0 Q0 Q1 T2 Q2 Q3 S0 S3.99", 
    // 慢长锤[尾]
    "12 K0 Q0 Q1 Q1.5 T2 Q2.5 T3 K4 Q4 Q5 T5 T5.5 Y6 T6.5 K7 Q7 D8 P8.5 T9 K10 Q10",   
    // 快长锤[中]
    "2 K0 Q0 Q0.5 T1 Q1 Q1.5",
    // 快长锤[尾]
    "8 K0 Q0.5 T1 F1.5 F1.75 J2 T3 Q3 K4 Q4 L5 T5.5 Q5.5 Y6 T6.5 K7 Q7 T7",  
    // 大锣夺头
    "12 D0 D1 D2 D2.5 D3 T3.5 K4 Q4 Q5 T5 T5.5 Y6 T6.5 K7 Q7 D8 P8.5 T9 K10 Q10 T10",   
    // 小锣夺头
    "12 D0 D1 D2 D2.5 D3 L3.5 T4 L5 T5.5 Y6 L6.5 T7 D8 T9 T10",    
    // 铙钹夺头                     
    "12 D0 D1 D2 D2.5 D3 L3.5 T4 Q4 L5 T5.5 Y6 L6.5 T7 Q7 D8 P8.5 T9 T10 Q10",          
    // 大锣帽儿头
    "13 T0 K2 Q2 T3 Q3 K4 Q4 T5 Q5 J6 K7 Q7 K9.5 Q9.5 D11.4 F11.7",   
    // 小锣帽儿头
    "8 F0 D0.12 T1 T2 T3 T4 D4.66 L5.14 T6 F7.25 D7.37",                      
    // 大锣导板头
    "7 D0 T0.3 K1.2 Q1.2 S1.97 T2.3 Q2.3 S2.55 T2.8 K3.3 Q3.3 D4.05 K4.3 Q4.3 T5.3 D6.05",
    // 小锣导板头
    "7 Z0 D0.45 T1 T2 T3 D3.5 F4 L4 T4.5 Y5 Y5.3 F5.65 T6.35",
    // 小锣凤点头
    "9 D0 D0.66 Y1 Y2 T3 T4 T5 L6 T6.5 Y7 L7.5 T8",                                     
    // 大锣单扦凤点头
    "9 D0 D0.66 Y1 Z1.5 Y2 F2.5 J3 T4 Q4 K5 Q5 D5.75 L6 T6.5 Q6.5 Y7 T7.5 K8 Q8",       
    //双扦凤点头
    "8 D0 T0.4 K1.5 Q1.5 S2.17 S2.75 T2.5 Q2.5 F2.75 T3 S3.25 S4 K3.5 Q3.5 L4 T4.5 Q4.5 Y5 T5.6 K6.5 Q6.5 T6.5",  
    // 撞金钟[头]
    "13 Y0 D0.7 T1 K2 Q2 Q3 W3.25 W3.5 W3.75 W4 W4.25 W4.50 W4.75 W5 W5.25 W5.5 T5.5 W5.75 W6.125 W6.5 Q6.62 \
    W6.85 W7.05 W7.27 W7.54 W7.75 W8 W8.25 W8.50 W8.75 W9 W9.25 W9.5 W9.75 W10.33 W10.67\
    K9 Q9 Q10 T11 Q11 Q12",
    // 撞金钟[尾]
    "8 K0 Q0 Q1 T2 Q2.5 T3 K4 Q4 F4.7 L5 T5.5 Q5.5 F6.05 F6.32 T6.65 K7.5 Q7.5 T7.5",
    // 闪锤[头]
    "6 D0 D0.75 Y1 D1.5 Y2 T2.5 K3 Q3 T4 F4.5 T4.5 Q4.5 Y5 T5.5",
    // 闪锤[中]
    "3 K0 Q0 T1 F1.5 T1.5 Q1.5 Y2 T2.5",
    // 闪锤[尾]
    "7 K0 Q0 T1 T1.5 Q1.5 T2.5 K3 Q3 T4.03 K4.6 Q4.6 T4.6 T5.75 K6.5 Q6.5 T6.5 F0 F1 F1.5 D2 D2.5 D3 D3.51 D4.03 D4.6 D5.15 D5.75 D6.10",
    // 小锣抽头[中]
    "4 T0 L1 T1.5 L2.0 T2.5 Y3 L3.5",
    // 小锣抽头[尾]
    "7.6 T0 L1 T1.5 Y2.0 T2.5 Y3.0 D3.5 D3.82 Y4.1 T4.68 Y5.22 D5.56 L5.95 T6.6",
    // 大锣抽头[中]
    "4 K0 Q0 T0 L1 T1.5 Q2 T2.5 Y3 T3.5",
    // 大锣抽头[尾]
    "7 K0 Q0 T0 L1 T1.5 Y2 T2.5 Y3 J4 K6 Q6 T6",
    // 纽丝[头]
    "8 D0 D1 D2 D2.25 T3 S3.5 S4.15 K4 Q4 T5 L6 Q6 T7",
    // 纽丝[中]
    "4 K0 Q0 T1 Q2 T2.5 Y3 L3.5",
    // 纽丝[尾]
    "11 K0 Q0 T1 Q2 L2 S3.25 S4.75 K4.5 Q4.5 T5.6 L6.77 Q6.77 T8.2 K9.9 Q9.9",
    // 小锣收头
    "7 Z0 Y0 D0.5 Z1 T2 F2 D2.5 L3 F3 T3.5 F3.5 F4 F4.28 L4.7 D4.7 T5.8 D5.8",
    // 大锣收头
    "9 F0.85 F1.48 Z2 D2.5 Z3 D3.25 T3.5 D4 K4 Q4 D4.7 D5 L5 D5.5 T5.5 Q5.5 F6 F6.28 D6.7 T6.7 D7.8 K7.8 Q7.8 T7.8",
]

scoreconfig.details = [
    "原板", 
    "三眼", 
    "流水板", 
    "休止",
    "单扦小锣一击",
    "单扦大锣一击",
    "入头", 
    "慢长锤[中]", 
    "慢长锤[中带撕边]", 
    "慢长锤的尾部结构同“大锣夺头”。", 
    "快长锤[中]", 
    "快长锤[尾]",
    "大锣夺头用于【原板】、【慢板】及部分带动作【二六】开头。例如：\n\
    《空城计》诸葛亮【西皮二六】“我正在城楼观山景”", 
    "小锣夺头用于【原板】、【慢板】开头。例如：\n\
    《凤还巢》程雪娥【西皮慢板】“命奴家在帘内偷觑郎君”", 
    "铙钹夺头的分量介于“大锣夺头”和“小锣夺头”之间，抽去大锣配以小锣，\n\
    可用于【原板】、【慢板】和【四平调】等开头。例如：\n\
    《洪洋洞》杨延昭【二黄慢板】“叹杨家投宋主心血用尽”\n\
    《打渔杀家》萧恩【西皮慢板】“昨夜晚吃酒醉和衣而卧”",
    "大锣冒子头", 
    "小锣冒子头",
    "大锣导板头", 
    "小锣导板头一般适用于比较平静轻松的戏。例如：\n\
    《桑园会》秋胡【西皮导板】“那秋胡他把良心丧”\n\
    《牧虎关》高旺【西皮导板】“贤妹暂坐雅志厅”",
    "小锣凤点头多用于【流水】和【摇板】的起唱", 
    "大锣单扦凤点头用于【摇板】开唱", 
    "双扦凤点头规定作为【散板】开唱锣鼓，例如：\n\
    《三堂会审》苏三【西皮散板】“来至在都察院举目往上观”", 
    "撞金钟为【散板】开头之一。\n\
    其头部结构以铙钹发出颤音，配合人物缓慢的动作，烘托凄凉、悲痛、战栗等气氛。\n\
    接近慢长锤尺寸时即变为慢长锤打法。例如：\n\
    《捉放曹·行路》曹操【西皮散板】“八月中秋桂花香”", 
    "撞金钟的尾部接散板，故而尺寸放慢。",
    "闪锤[头]",
    "闪锤[中]", 
    "闪锤[尾]",
    "小锣抽头[中]", 
    "小锣抽头[尾]",
    "大锣抽头[中]",
    "大锣抽头[尾]",
    "纽丝[头]", 
    "纽丝[中]", 
    "纽丝[尾]",
    "小锣收头", "大锣收头",
]