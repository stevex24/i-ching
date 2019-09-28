1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
321
322
323
324
325
326
327
328
329
330
331
332
333
334
335
336
337
338
339
340
341
342
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
359
360
361
362
363
364
365
366
367
368
369
370
371
372
373
374
375
376
377
378
379
380
381
382
383
384
385
386
387
388
389
390
391
392
393
394
395
396
397
398
399
400
401
402
403
404
405
406
407
408
409
410
411
412
413
414
415
416
417
418
419
420
421
422
423
424
425
426
427
428
429
430
431
432
433
434
435
436
437
438
439
440
441
442
443
444
445
446
447
448
449
450
451
452
453
454
455
456
457
458
459
460
461
462
463
464
465
466
467
468
469
470
471
472
473
474
475
476
477
478
479
480
481
482
483
484
485
486
487
488
489
490
491
492
493
494
495
496
497
498
499
500
501
502
503
504
505
506
507
508
509
510
511
512
513
514
515
516
517
518
519
520
521
522
523
524
525
526
527
528
529
530
531
532
533
534
535
536
537
538
539
540
541
542
543
544
545
546
547
548
549
550
551
552
553
554
555
556
557
558
559
560
561
562
563
564
565
566
567
568
569
570
571
572
573
574
575
576
577
578
579
580
581
582
583
584
585
586
587
588
589
590
591
592
593
594
595
596
597
598
599
600
601
602
603
604
605
606
607
608
609
610
611
612
613
614
615
616
617
618
619
620
621
622
623
624
625
626
627
628
629
630
631
632
633
634
635
636
637
638
639
640
641
642
643
644
645
646
647
648
649
650
651
652
653
//// ichingme.js, cr 23 nov 2008 by rha on thales2
//// translation of ichingme.as, cr 16 jan 2007 by rha on hypatia
//// which was a translation of inchingme.py of 2003 by rha
//// this rev c/o 2008 by the visual math institute, inc, 
//// pob 7920, santa cruz ca usa-95061
 
// 2d array for text strings, 65 by 7
 
// title line, and declare the arrray
var hex = new Array();
hex[0] = "The I Ching Micro Edition";
 
// king wen #1
var line10 = "111111 1. Ch'ien. Creating Success. <br>";
var line11 = "Hold <br>";
var line12 = "See great one <br>";
var line13 = "Danger <br>";
var line14 = "No blame <br>";
var line15 = "See great one <br>";
var line16 = "Regret <br>";
hex[1] = [line10, line11, line12, line13, line14, line15, line16];
 
// king wen #2
var line20 = "000000 2. K'UN. Yielding, Success. <br>";
var line21 = "Ice <br>";
var line22 = "Great <br>";
var line23 = "Complete <br>";
var line24 = "No blame <br>";
var line25 = "Good fortune <br>";
var line26 = "Injury <br>";
hex[2] = [line20, line21, line22, line23, line24, line25, line26];
 
// king wen #3
var line30 = "100010 3. CHUN. Danger, Success.<br>"
var line31 = "Hindrance <br>";
var line32 = "Difficulties <br>";
var line33 = "Desist <br>";
var line34 = "Good fortune <br>";
var line35 = "Difficulties< <br>";
var line36 = "Desist <br>";
hex[3] = [line30, line31, line32, line33, line34, line35, line36];
 
// king wen #4
var line40 = "010001 4. MENG. Inexperience. Perseverance furthers. <br>";
var line41 = "Discipline <br>";
var line42 = "Good fortune <br>";
var line43 = "Do not imitate <br>";
var line44 = "Humiliation <br>";
var line45 = "Good fortune <br>";
var line46 = "Do not transgress <br>";
hex[4] = [line40, line41, line42, line43, line44, line45, line46];
 
// king wen #5
var line50 = "111010 5. HSU. Wait. Cross water. <br>";
var line51 = "No blame <br>";
var line52 = "Good fortune <br>";
var line53 = "Enemy coming <br>";
var line54 = "Danger <br>";
var line55 = "Good fortune <br>";
var line56 = "Good fortune <br>";
hex[5] = [line50, line51, line52, line53, line54, line55, line56];
 
// king wen #6
var line60 = "010111 6. SUNG. Argument. See great one. <br>";
var line61 = "Good fortune <br>";
var line62 = "Give way <br>";
var line63 = "Danger <br>";
var line64 = "Turn back <br>";
var line65 = "Good fortune <br>";
var line66 = "Conflict <br>";
hex[6] = [line60, line61, line62, line63, line64, line65, line66];
 
// king wen #7
var line70 = "010000 7. SHIH. Collective. Good fortune. <br>";
var line71 = "Misfortune threatens <br>";
var line72 = "Good fortune <br>";
var line73 = "Misfortune <br>";
var line74 = "Retreat <br>";
var line75 = "Invasion <br>";
var line76 = "Victory <br>";
hex[7] = [line70, line71, line72, line73, line74, line75, line76];
 
// king wen #8
var line80 = "000010 8. PI. Unite. Good fortune. <br>";
var line81 = "Sincerity, good fortune <br>";
var line82 = "Perseverance, good fortune <br>";
var line83 = "Beware wrong people <br>";
var line84 = "Hold the center <br>";
var line85 = "Purity within <br>";
var line86 = "Misfortune <br>";
hex[8] = [line80, line81, line82, line83, line84, line85, line86];
             
// king wen #9
var line90 = "111011 9. HSIAO CH'U. Restraint. Taming power. <br>";
var line91 = "Return <br>";
var line92 = "Good fortune <br>";
var line93 = "Obstruction <br>";
var line94 = "Be sincere <br>";
var line95 = "Be loyal <br>";
var line96 = "Caution <br>";
hex[9] = [line90, line91, line92, line93, line94, line95, line96];
 
// king wen #10
var line100 = "110111 10. LU. Walk. Pleasant manners. <br>";
var line101 = "Simple conduct <br>";
var line102 = "Seek nothing <br>";
var line103 = "Take care <br>";
var line104 = "Caution <br>";
var line105 = "Caution <br>";
var line106 = "Review <br>";
hex[10] = [line100, line101, line102, line103, line104, line105, line106];
 
// king wen #11
var line110 = "111000 11. T'AI. Harmony. Peace. <br>";
var line111 = "Undertaking <br>";
var line112 = "Walk in the middle <br>";
var line113 = "Perservere <br>";
var line114 = "Confidence <br>";
var line115 = "High and low <br>";
var line116 = "Submit to fate <br>";
hex[11] = [line110, line111, line112, line113, line114, line115, line116];
 
// king wen #12
var line120 = "000111 12. P'I. Decline. Standstill. <br>";
var line121 = "Persevere <br>";
var line122 = "Endure <br>";
var line123 = "Shame <br>";
var line124 = "Serve <br>";
var line125 = "Good fortune <br>";
var line126 = "Forward motion <br>";
hex[12] = [line120, line121, line122, line123, line124, line125, line126];
 
// king wen #13
var line130 = "101111 13. T'UNG JEN. Mingling. Success. <br>";
var line131 = "No blame <br>";
var line132 = "Humiliation <br>";
var line133 = "Mistrust <br>";
var line134 = "Do not attack <br>";
var line135 = "Succeed in meeting <br>";
var line136 = "Join <br>";
hex[13] = [line130, line131, line132, line133, line134, line135, line136];
 
// king wen #14
var line140 = "111101 14. TA YU. Wealth. Success. <br>";
var line141 = "Difficulty <br>";
var line142 = "Go ahead <br>";
var line143 = "Be giving <br>";
var line144 = "Look ahead <br>";
var line145 = "Keep dignity <br>";
var line146 = "Heaven helps <br>";
hex[14] = [line140, line141, line142, line143, line144, line145, line146];
 
// king wen #15
var line150 = "001000 15. CH'IEN. Modesty. Success. <br>";
var line151 = "Unassuming <br>";
var line152 = "Perseverance <br>";
var line153 = "Remain modest <br>";
var line154 = "Focus on worK <br>";
var line155 = "Do not boast <br>";
var line156 = "Proceed <br>";
hex[15] = [line150, line151, line152, line153, line154, line155, line156];
 
// king wen #16
var line160 = "000100 16. YU. Enthusiasm. Direct helpers. <br>";
var line161 = "Beware arrogance <br>";
var line162 = "Be firm <br>";
var line163 = "Seize the moment <br>";
var line164 = "Have no doubts <br>";
var line165 = "Obstruction <br>";
var line166 = "Awaken <br>";
hex[16] = [line160, line161, line162, line163, line164, line165, line166];
 
// king wen #17
var line170 = "100110 17. SUI. Following Follow first. <br>";
var line171 = "Listen to others <br>";
var line172 = "Choose carefully <br>";
var line173 = "Remain firm <br>";
var line174 = "Avoid servilitY <br>";
var line175 = "Be sincere <br>";
var line176 = "Accept the good <br>";
hex[17] = [line170, line171, line172, line173, line174, line175, line176];
 
// king wen #18
var line180 = "001001 18. KU. Correcting. Repair damage. <br>";
var line181 = "Awaken spirit <br>";
var line182 = "Proceed cautiously <br>";
var line183 = "A push is ok <br>";
var line184 = "Beware tolerance <br>";
var line185 = "Repair old problems <br>";
var line186 = "Seek higher goals <br>";
hex[18] = [line180, line181, line182, line183, line184, line185, line186];
 
// king wen #19
var line190 = "110000 19. LIN. Advance. >Success. <br>";
var line191 = "Join the trend <br>";
var line192 = "Proceed <br>";
var line193 = "Avoid complacency <br>";
var line194 = "Join fully <br>";
var line195 = "Attract wisdom <br>";
var line196 = "Return to world <br>";
hex[19] = [line190, line191, line192, line193, line194, line195, line196];
 
// king wen #20
var line200 = "000011 20. KUAN. Set an example. Contemplation. <br>";
var line201 = "Blind contemplation <br>";
var line202 = "Look outward <br>";
var line203 = "Examine oneself <br>";
var line204 = "Comprehension <br>";
var line205 = "Examine effects <br>";
var line206 = "Examine whole life <br>";
hex[20] = [line200, line201, line202, line203, line204, line205, line206];
 
// king wen #21
var line210 = "100101 21. SHIH HO. Punishment. Firm justice. <br>";
var line211 = "Warning <br>";
var line212 = "Too firm <br>";
var line213 = "Humiliation <br>";
var line214 = "Great obstacles <br>";
var line215 = "Avoid errors <br>";
var line216 = "Misfortune <br>";
hex[21] = [line210, line211, line212, line213, line214, line215, line216];
 
// king wen #22
var line220 = "101001 22. PI. Refinement. Grace. <br>";
var line221 = "Reject help <br>";
var line222 = "Avoid vanity <br>";
var line223 = "Persevere <br>";
var line224 = "Choose simplicity <br>";
var line225 = "Sincerity furthers <br>";
var line226 = "Simple grace <br>";
hex[22] = [line220, line221, line222, line223, line224, line225, line226];
 
// king wen #23
var line230 = "000001 23. PO. Ending. Hold firm. <br>";
var line231 = "Danger, wait <br>";
var line232 = "Extreme caution <br>";
var line233 = "Break free <br>";
var line234 = "Misfortune <br>";
var line235 = "Dark becomes light <br>";
var line236 = "Success <br>";
hex[23] = [line230, line231, line232, line233, line234, line235, line236];
 
// king wen #24
var line240 = "100000 24. FU. Return. The good returns. <br>";
var line241 = "Good fortune <br>";
var line242 = "Turn quietly <br>";
var line243 = "Hold steady <br>";
var line244 = "Withdraw from evil <br>";
var line245 = "Confess <br>";
var line246 = "Beware obstinacy <br>";
hex[24] = [line240, line241, line242, line243, line244, line245, line246];
 
// king wen #25
var line250 = "100111 25. WU WANG. Misfortune. Innocence. <br>";
var line251 = "Follow intuition <br>";
var line252 = "One step at a time <br>";
var line253 = "Misfortune <br>";
var line254 = "Be true to yourself <br>";
var line255 = "Improvement follows <br>";
var line256 = "Wait quietly <br>";
hex[25] = [line250, line251, line252, line253, line254, line255, line256];
 
// king wen #26
var line260 = "111001 26. TA CH'U. Restraint. Holding firm. <br>";
var line261 = "Danger, wait <br>";
var line262 = "Submit <br>";
var line263 = "A way opens <br>";
var line264 = "Hold back <br>";
var line265 = "Root out evil <br>";
var line266 = "Break through <br>";
hex[26] = [line260, line261, line262, line263, line264, line265, line266];
 
// king wen #27
var line270 = "Sustenance. Provide nourishment. <br>";
var line271 = "Beware envy <br>";
var line272 = "Do not turn aside <br>";
var line273 = "Shun pleasure <br>";
var line274 = "Seek helpers <br>";
var line275 = "Seek counsel <br>";
var line276 = "Nourish others <br>";
hex[27] = [line270, line271, line272, line273, line274, line275, line276];
 
// king wen #28
var line280 = "011110 28. TA KUO. Power. Act quickly. <br>";
var line281 = "Take care <br>";
var line282 = "Join the weak <br>";
var line283 = "Do not plunge <br>";
var line284 = "Beware greed <br>";
var line285 = "Conserve alliances <br>";
var line286 = "Misfortune <br>";
hex[28] = [line280, line281, line282, line283, line284, line285, line286];
 
// king wen #29
var line290 = "010010 29. K'AN. Plunging. Be sincere. <br>";
var line291 = "Misfortune <br>";
var line292 = "Patience <br>";
var line293 = "Hold still <br>";
var line294 = "Sincerity <br>";
var line295 = "With the flow <br>";
var line296 = "Misfortune <br>";
hex[29] = [line290, line291, line292, line293, line294, line295, line296];
 
// king wen #30
var line300 = "101101 30. LI. Clarity. Clinging. <br>";
var line301 = "Composure <br>";
var line302 = "High art <br>";
var line303 = "Nearing the end <br>";
var line304 = "Burning out <br>";
var line305 = "The zenith <br>";
var line306 = "Eradicate evil <br>";
hex[30] = [line300, line301, line302, line303, line304, line305, line306];
 
// king wen #31
var line310 = "001110 31. HSIEN. Universal. Influence. <br>";
var line311 = "Subtle beginning <br>";
var line312 = "Await a sign <br>";
var line313 = "Hold back <br>";
var line314 = "Focus thoughts <br>";
var line315 = "Remain firm <br>";
var line316 = "Beware idle chat <br>";
hex[31] = [line310, line311, line312, line313, line314, line315, line316];
 
// king wen #32
var line320 = "011100 32. HENG. Duration. Perseverence. <br>";
var line321 = "Avoid haste <br>";
var line322 = "Avoid excess <br>";
var line323 = "Be true to yourself <br>";
var line324 = "No clear goal <br>";
var line325 = "Follow your duty <br>";
var line326 = "Relax <br>";
hex[32] = [line320, line321, line322, line323, line324, line325, line326];
 
// king wen #33
var line330 = "001111 33. TUN. Withdrawal. Retreat. <br>";
var line331 = "Danger, be still <br>";
var line332 = "Hold firm <br>";
var line333 = "Break free <br>";
var line334 = "Graceful retreat <br>";
var line335 = "Friendly retreat <br>";
var line336 = "Cheerful retreat <br>";
hex[33] = [line330, line331, line332, line333, line334, line335, line336];
 
// king wen #34
var line340 = "111100 34. TA CHUANG. Power. Inner worth. <br>";
var line341 = "Take care <br>";
var line342 = "Persevere <br>";
var line343 = "Advance carefully <br>";
var line344 = "Obstacles give way <br>";
var line345 = "Easy does it <br>";
var line346 = "Admit the difficulty <br>";
hex[34] = [line340, line341, line342, line343, line344, line345, line346];
 
// king wen #35
var line350 = "000101 35. CHIN. Progress. Support. <br>";
var line351 = "Continue <br>";
var line352 = "Halted <br>";
var line353 = "Support <br>";
var line354 = "Danger <br>";
var line355 = "No remorse <br>";
var line356 = "Push hard <br>";
hex[35] = [line350, line351, line352, line353, line354, line355, line356];
 
// king wen #36
var line360 = "101000 36. MING I. Persecution. Adversity. <br>";
var line361 = "Hurry along <br>";
var line362 = "Hindrance <br>";
var line363 = "Abolish abuses <br>";
var line364 = "Escape <br>";
var line365 = "Endure <br>";
var line366 = "Evil falls <br>";
hex[36] = [line360, line361, line362, line363, line364, line365, line366];
 
// king wen #37
var line370 = "101011 37. CHIA JEN. Family. Proper structure. <br>";
var line371 = "Seclusion <br>";
var line372 = "Mother <br>";
var line373 = "Balance <br>";
var line374 = "Economics <br>";
var line375 = "Father <br>";
var line376 = "Good work <br>";
hex[37] = [line370, line371, line372, line373, line374, line375, line376];
 
// king wen #38
var line380 = "110101 38. K'UEI. Alienation. Opposition. <br>";
var line381 = "Supple mediation <br>";
var line382 = "External meeting <br>";
var line383 = "Persevere <br>";
var line384 = "Seek likeminded <br>";
var line385 = "Recognize aid <br>";
var line386 = "See through images <br>";
hex[38] = [line380, line381, line382, line383, line384, line385, line386];
 
// king wen #39
var line390 = "001010 39. CHIEN. Adversity. Obstruction. <br>";
var line391 = "Reflect <br>";
var line392 = "Bound by duty <br>";
var line393 = "Withdraw <br>";
var line394 = "Hold back <br>";
var line395 = "Friends come <br>";
var line396 = "Duty calls <br>";
hex[39] = [line390, line391, line392, line393, line394, line395, line396];
 
// king wen #40
var line400 = "010100 40. HSIEH. Abatement. Deliverance. <br>";
var line401 = "Keep still <br>";
var line402 = "Proceed directly <br>";
var line403 = "Be discreet <br>";
var line404 = "Seek true friends <br>";
var line405 = "Inner resolve <br>";
var line406 = "Remove scoundrel <br>";
hex[40] = [line400, line401, line402, line403, line404, line405, line406];
 
// king wen #41
var line410 = "110001 41. SUN. Decrease. Sincerity. <br>";
var line411 = "Go quickly <br>";
var line412 = "Serve others <br>";
var line413 = "Find a companion <br>";
var line414 = "Give up faults <br>";
var line415 = "Someone comes <br>";
var line416 = "Share <br>";
hex[41] = [line410, line411, line412, line413, line414, line415, line416];
 
// king wen #42
var line420 = "100011 42. I. Gain. Increase. <br>";
var line421 = "Reinvest <br>";
var line422 = "Someone comes <br>";
var line423 = "Make lemonade <br>";
var line424 = "Mediate <br>";
var line425 = "Kindness <br>";
var line426 = "Beware greed <br>";
hex[42] = [line420, line421, line422, line423, line424, line425, line426];
 
// king wen #43
var line430 = "111110 43. KUAI. Overcome evil. Breakthrough. <br>";
var line431 = "Begin with caution <br>";
var line432 = "On guard <br>";
var line433 = "Avoid toxins <br>";
var line434 = "Easy does it <br>";
var line435 = "Go on firmly <br>";
var line436 = "Danger at the end <br>";
hex[43] = [line430, line431, line432, line433, line434, line435, line436];
 
// king wen #44
var line440 = "011111 44. KOU. Evil returns. Beware spies. <br>";
var line441 = "Remove evil <br>";
var line442 = "Control evil <br>";
var line443 = "Resist temptation <br>";
var line444 = "Tolerate small fry< <br>";
var line445 = "Good example <br>";
var line446 = "Worry not <br>";
hex[44] = [line440, line441, line442, line443, line444, line445, line446];
 
// king wen #45
var line450 = "000110 45. TS'UI. Joining. Gathering. <br>";
var line451 = "Seek a leader <br>";
var line452 = "Permit attraction <br>";
var line453 = "Choose an ally <br>";
var line454 = "Good fortune <br>";
var line455 = "Draw in the weak <br>";
var line456 = "Express feelings <br>";
hex[45] = [line450, line451, line452, line453, line454, line455, line456];
 
// king wen #46
var line460 = "011000 46. SHENG. Advance. Pushing upward. <br>";
var line461 = "Begin to rise <br>";
var line462 = "Sincerity suffices <br>";
var line463 = "Obstructions fall away <br>";
var line464 = "Goal in sight <br>";
var line465 = "Step by step <br>";
var line466 = "Persevere <br>";
hex[46] = [line460, line461, line462, line463, line464, line465, line466];
 
// king wen #47
var line470 = "010110 47. K'UN. Oppression. Exhaustion. <br>";
var line471 = "Be strong< <br>";
var line472 = "Patience <br>";
var line473 = "Do not yeild <br>";
var line474 = "Wait <br>";
var line475 = "Make offerings <br>";
var line476 = "Break free <br>";
hex[47] = [line470, line471, line472, line473, line474, line475, line476];
 
// king wen #48
var line480 = "011010 48. CHING. The well. Nourishment. <br>";
var line481 = "Submerged <br>";
var line482 = "Awake <br>";
var line483 = "Ignored <br>";
var line484 = "Put in order <br>";
var line485 = "Use it <br>";
var line486 = "Inexhaustible <br>";
hex[48] = [line480, line481, line482, line483, line484, line485, line486];
 
// king wen #49
var line490 = "101110 49. KO. Time to change. Revolution. <br>";
var line491 = "Hold back< <br>";
var line492 = "Prepare <br>";
var line493 = "Move with care <br>";
var line494 = "Inner truth <br>";
var line495 = "Clear guidelines <br>";
var line496 = "Not too far <br>";
hex[49] = [line490, line491, line492, line493, line494, line495, line496];
 
// king wen #50
var line500 = "011101 50. TING. The caldron. Success. <br>";
var line501 = "Clean out <br>";
var line502 = "Achievements <br>";
var line503 = "No recognition <br>";
var line504 = "Not adequate <br>";
var line505 = "Hold modesty <br>";
var line506 = "All goes well <br>";
hex[50] = [line500, line501, line502, line503, line504, line505, line506];
 
// king wen #51
var line510 = "100100 51. CHEN. Shock Arousing. <br>";
var line511 = "Relief follows <br>";
var line512 = "Retreat and wait <br>";
var line513 = "Move <br>";
var line514 = "Wait <br>";
var line515 = "Keep centered <br>";
var line516 = "Wait for clarity <br>";
hex[51] = [line510, line511, line512, line513, line514, line515, line516];
 
// king wen #52
var line520 = "001001 52. KEN. Rest. Keeping still. <br>";
var line521 = "Move resolutely <br>";
var line522 = "No rescue <br>";
var line523 = "Composure <br>";
var line524 = "Transcend ego <br>";
var line525 = "Speak cautiously <br>";
var line526 = "Tranquility <br>";
hex[52] = [line520, line521, line522, line523, line524, line525, line526];
 
// king wen #53
var line530 = "001011 53. CHIEN. Development, Progress. <br>";
var line531 = "Danger <br>";
var line532 = "Safety <br>";
var line533 = "Maintain position <br>";
var line534 = "Yield <br>";
var line535 = "Beware deceit <br>";
var line536 = "Completion <br>";
hex[53] = [line530, line531, line532, line533, line534, line535, line536];
 
// king wen #54
var line540 = "110100 54. KUEI MEI. Movement. Marrying maiden. <br>";
var line541 = "Keep in background <br>";
var line542 = "Maintain loyalty <br>";
var line543 = "Do your best <br>";
var line544 = "Preserve purity <br>";
var line545 = "Adapt modestly <br>";
var line546 = "Bad attitude <br>";
hex[54] = [line540, line541, line542, line543, line544, line545, line546];
 
// king wen #55
var line550 = "101100 55. FENG. Abundance. Success. <br>";
var line551 = "Clarity plus movement <br>";
var line552 = "Eclipse <br>";
var line553 = "Total eclipse <br>";
var line554 = "Eclipse passing <br>";
var line555 = "Take counsel <br>";
var line556 = "Misfortune <br>";
hex[55] = [line550, line551, line552, line553, line554, line555, line556];
 
// king wen #56
var line560 = "001101 56. LU. The traveler. Wandering. <br>";
var line561 = "Inner dignity <br>";
var line562 = "Resting place <br>";
var line563 = "Do not meddle <br>";
var line564 = "On guard <br>";
var line565 = "Offer gifts <br>";
var line566 = "Take care <br>";
hex[56] = [line560, line561, line562, line563, line564, line565, line566];
 
// king wen #57
var line570 = "011011 57. SUN. Gentleness. Wind. <br>";
var line571 = "Resolve <br>";
var line572 = "Hidden enemies <br>";
var line573 = "Humiliation <br>";
var line574 = "No remorse <br>";
var line575 = "Persevere <br>";
var line576 = "Misfortune <br>";
hex[57] = [line570, line571, line572, line573, line574, line575, line576];
 
// king wen #58
var line580 = "110110 58. TUI. Pleasure. Joyous. <br>";
var line581 = "Rest content <br>";
var line582 = "Sincere joy <br>";
var line583 = "Joy from within <br>";
var line584 = "Avoid mistakes <br>";
var line585 = "Dangerous influences <br>";
var line586 = "Shun pleasures <br>";
hex[58] = [line580, line581, line582, line583, line584, line585, line586];
 
// king wen #59
var line590 = "010011 59. HUAN. Dissolve Dispersion. <br>";
var line591 = "Help approaches <br>";
var line592 = "Dissolve obstructions <br>";
var line593 = "Transcend ego <br>";
var line594 = "Advance alone <br>";
var line595 = "Breakthrough <br>";
var line596 = "Withdraw <br>";
hex[59] = [line590, line591, line592, line593, line594, line595, line596];
 
// king wen #60
var line600 = "110010 60. CHIEH. Limitations. Reasonable limits. <br>";
var line601 = "Time to stay <br>";
var line602 = "Time to go <br>";
var line603 = "Set limits <br>";
var line604 = "Graceful limits <br>";
var line605 = "Sweet limits <br>";
var line606 = "Galling limits <br>";
hex[60] = [line600, line601, line602, line603, line604, line605, line606];
 
// king wen #61
var line610 = "110011 61. CHUNG FU. Emptiness. Inner truth. <br>";
var line611 = "Be prepared <br>";
var line612 = "Share ideas <br>";
var line613 = "Keep centered <br>";
var line614 = "Receive light <br>";
var line615 = "Truth rules <br>";
var line616 = "Shun empty words <br>";
hex[61] = [line610, line611, line612, line613, line614, line615, line616];
 
// king wen #62
var line620 = "001100 62. HSIAO KUO. Detail. Attend the small. <br>";
var line621 = "Await the moment <br>";
var line622 = "Prepare the way <br>";
var line623 = "Take great care <br>";
var line624 = "Wait <br>";
var line625 = "Seek helpers <br>";
var line626 = "Bad luck <br>";
hex[62] = [line620, line621, line622, line623, line624, line625, line626];
 
// king wen #63
var line630 = "101010 63. CHI CHI. Completion. Transition. <br>";
var line631 = "Easy does it <br>";
var line632 = "Do not grasp <br>";
var line633 = "Long struggle <br>";
var line634 = "Watch for omens <br>";
var line635 = "Small offering <br>";
var line636 = "Danger <br>";
hex[63] = [line630, line631, line632, line633, line634, line635, line636];
 
// king wen #64
var line640 = "010101 64. WEI CHI. Out of place. Before completion. <br>";
var line641 = "Hold back <br>";
var line642 = "Prepare <br>";
var line643 = "Gather strength <br>";
var line644 = "Go for it <br>";
var line645 = "Success <br>";
var line646 = "Confidence <br>";
hex[64] = [line640, line641, line642, line643, line644, line645, line646];
 
// end