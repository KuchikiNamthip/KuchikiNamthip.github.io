// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my research projects, computational biology portfolios, and social volunteer activities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-i-started-coding-just-because-my-finger-pained",
      
        title: '💻 I started coding just because my finger pained <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;I had to analyze data from 96- or 384-well plates — each exported as a CSV file with thousands of rows. Sounds familiar? Yes! 96 or 384 wells — the well plates from the wet lab. My data came from 2D cell culture imaging, where I had to analyze single-cell information.I opened each file, searched for specific values, and repeated the same thing again and again.What I faced were:- Finger pain 😂- Human weakness → human error after half a day of doing this- Forgetting to save → all work gone- Changing cut-offs → meant redoing everything from the start (and you know how often supervisors change them!)I realized all of this was just repetition. I knew every step — I just had to do it again for every well (or many plates).So I told my supervisor I wanted to use coding/programming to automate it. His answer? No. He wanted me to do it manually — “by eyes” — to get results faster.But I believed I could do more. So I decided to learn coding (R) secretly. I didn’t tell him — I just kept maintaining all the usual lab work, while learning programming on my own.It wasn’t easy. It took months of effort, but I had a goal: to make my research more efficient and reproducible.After some fast and furious learning, I wrote my own code, fixed bugs, and validated that it worked the same as manual analysis. The result? No human error, finished in a minute, and I could change the cut-off anytime by typing a new number. Beautiful!I finally applied it to other experiments too. My supervisor was impressed — finally! 😆A hidden benefit of programming is that it does what you already do — just faster and more accurately. If you’re curious how coding can help you, start by asking: 💡 “Which task repeats until my fingers hurt?”If you can answer that, you already have your first step into coding.🧬 Here’s my project about this: Phenomics – High-Throughput Imaging (https://lnkd.in/gX5nKNRp)=============Build a greater science together with me! Here is my blogs🌸 Thai language: NO CANCER FB page/Blogger (https://lnkd.in/gQa3apBc)🧬 English language: The Whispers of Biology (LinkedIn/Blogger) (https://lnkd.in/gRTnrpRz)#ScienceCommunication #Bioinformatics #ComputationalBiology #Rprogramming #LabAutomation #WomenInSTEM #NoCancerThailand #TheWhispersOfBiology",
      section: "Posts",
      handler: () => {
        
          window.open("https://thewhispersofbiology.blogspot.com/2025/10/i-started-coding-just-because-my-finger.html", "_blank");
        
      },
    },{id: "post-nobel-prize-2025-t-rex-treg-the-peacekeeping-boss-of-the-immune-army",
      
        title: '🏅 Nobel Prize 2025 – T-Rex (Treg): The Peacekeeping Boss of the Immune... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;Let’s break it down scene by scene so it’s easy to follow. Ready? Let’s roll! 🎬🎬 Scene 1: The War Inside the BodyInside our body lives a massive army of dinosaur soldiers—our immune system—guarding the city of “Bodyville” from enemies like viruses, bacteria, and cancer cells.They’re always ready for battle—but here’s the catch… sometimes, these dino-soldiers go berserk! 😱They start firing at everything in sight—even innocent citizens like the liver, eyes, or skin.And that’s how autoimmune diseases begin—when your body’s own army can’t tell friend from foe.🦕 Scene 2: Enter the Boss – T-Rex the PeacemakerIn 2025, the Nobel Prize in Physiology or Medicine 🏅was awarded to Mary Brunkow, Fred Ramsdell, and Shimon Sakaguchifor discovering the Regulatory T cell (Treg) —the real-life T-Rex boss of the immune army! 🦖Yes, this T-Rex doesn’t roar to fight — it roars to calm the troops down.🧠 Scene 3: The Birth of the T-Reg UnitTregs are the peacekeepers of the immune army.Their job? Stop fellow soldiers from attacking innocent cells.When another immune cell is about to shoot,Treg shouts special chemical codes — IL-10, TGF-β, and CTLA-4 —which roughly translate to:“HEEEEY! Cease fire! That’s one of us!!”The moment the code is heard, the troops drop their weapons. 🫡🧬 Scene 4: The Secret Code – FOXP3Every Treg carries a secret badge — a gene called FOXP3.This is their “born-to-lead” mark — a divine sword of peace 🔮✨.If the FOXP3 gene breaks, Tregs disappear,and the immune army turns against itself 💥 —causing diseases like IPEX syndrome,where the body’s defense system self-destructs.That’s how scientists realized:“We survive every day because Tregs keep the peace within us.”🏰 Scene 5: The Double-Edged SwordToo much or too little T-Rex power can both be dangerous.Too aggressive → Autoimmune diseases ⚔️Too lazy → Cancer or infections sneak through 🦠So the Treg boss must keep perfect balance —knowing when to fight and when to hold fire. ⚖️🏅 Scene 6: Why This Deserves a NobelThis discovery changed how we see immunity forever.We used to think:“A strong immune system means always fighting.”But now we know:“A wise immune system knows when to stop.”That’s the essence of Peripheral Immune Tolerance —the principle that keeps our defense system in check.As the Nobel Committee beautifully put it:“A fundamental discovery about the principle that keeps our immune system in check.”🌿 The Take-Home Message“Our body stays healthy not because it fights hard —but because it knows when to stop.” 💚So this year, the Nobel Prize in Physiology or Medicine 2025goes to the discovery of...🦖✨ Tregs – The Peacekeeping Commanders of the Human Body! ✨🦖#NobelPrize2025 🏅 #NobelMedicine2025 #Treg #RegulatoryTCells#PeripheralImmuneTolerance #ImmuneSystem #ScienceExplained#MedicalDiscovery #ImmunologyFun #NobelPrizePark#รางวัลโนเบล2025 #ระบบภูมิคุ้มกัน #วิทย์เข้าใจง่าย",
      section: "Posts",
      handler: () => {
        
          window.open("https://thewhispersofbiology.blogspot.com/2025/10/nobel-prize-2025-t-rex-treg.html", "_blank");
        
      },
    },{id: "post-รางวัลโนเบล-2025-ทีเร็กซ์-t-reg-บอสทหารผู้รักษาสันติของระบบภูมิคุ้มกัน",
      
        title: 'รางวัลโนเบล 2025 - ทีเร็กซ์ (T reg)  บอสทหารผู้รักษาสันติของระบบภูมิคุ้มกัน <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;&amp;nbsp;&amp;nbsp;รางวัลโนเบล 2025 - ทีเร็กซ์ (T reg)&amp;nbsp; บอสทหารผู้รักษาสันติของระบบภูมิคุ้มกันแอดมินจะขอเล่าเป็นฉากๆ ใมห้เข้าใจง่าย ไปเลยเริ่ม!!! 🎬 ตอนที่ 1: สงครามในร่างกายในร่างกายของเรามีกองทัพ “ทหารไดโนเสาร์” (ระบบภูมิคุ้มกัน) คอยปกป้องเมืองร่างกายจากศัตรูทั้งหลาย อย่างไวรัส แบคทีเรีย และเซลล์มะเร็งกองทัพเราพร้อมบวก มาเลยยยยยยเห้ยดูเหมือนจะดีแล้วเชียว ศัตรูเข้ามาไม่ได้.แต่ปัญหาคือ… บางทีทหารก็ยิงมั่ว!!! แบบว่าบวกเต็มเกียร์ ไม่สนหน้าอินทร์หน้าพรหมละความบวกพุ่งกระฉูด ใครโผล่มาฉันยิงพรุน ถ้า“พลเมืองดี” อย่างเซลล์ร่างกายของเราเองผ่านมาก็คือดับอนาจพลเมืองดีที่ว่าก็เช่น ตับ ตา หรือผิวหนังของเราเองนี่เลยเป็นจุดเริ่มของ โรคภูมิคุ้มกันทำร้ายตัวเอง (autoimmune diseases)🦕 ตอนที่ 2: หัวหน้า T-REG สอนให้ใจเย็นในปี 2025 นี้ รางวัล โนเบลสาขาสรีรวิทยาและการแพทย์ 🏅ตกเป็นของนักวิทยาศาสตร์ 3 ท่าน ได้แก่Mary Brunkow, Fred Ramsdell, และ Shimon Sakaguchiผู้ค้นพบสิ่งที่เรียกว่า Regulatory T cell (Treg) หรือเรียกสั้นๆว่าทีเร็กซ์เห็นแล้วคิดถึงไดโนเสาร์ตัวบอสเลยอ่ะใช่แล้ววววว ทีเร็กซ์ เปรียบเสมือน “บอสผู้คุมกองทัพให้ไม่ยิงมั่ว”🧠 ตอนที่ 3: กำเนิดหน่วย ทีเร็กซ์ (Treg)ทีเร็กซ์ (Treg) คือ “บอสผู้คุมกองทัพ” ของระบบภูมิคุ้มกันพวกมันมีหน้าที่ คอยห้ามเพื่อนๆ ทหาร ไม่ให้ทำร้ายคนในเมืองถ้าทหารตัวอื่นเริ่มจะยิงพลเมืองดี Treg จะเข้ามาตะโกนด้วยสัญญาณว่า&amp;nbsp; IL-10, TGF-β หรือ CTLA-4 ทันทีจริงๆมันคือสัญญาณทางเคมีที่แปลความง่ายๆ เป็นภาษามนุษย์ว่า &quot;โว๊ยยยยย หยุดยิงก่อนโว๊ยยยยทุกคนนนนน&quot;นั่นหล่ะจ่ะ บอสสั่งด้วยโค้ดละ ทุกคนก็จะหยุดยิงโดยดี🧬 ตอนที่ 4: รหัสลับในตัวทีเร็กซ์นักวิทยาศาสตร์พบว่า Treg ทุกตัวมีรหัสประจำตัวคือยีนชื่อว่า FOXP3 (ฟอกซ์ พี 3)ความว่าบอสทหารนี่เกิดมาแบบบอร์นทูบีมี FOXP3 ติดตัวมาจากท้องพ่อท้องแม่&amp;nbsp;เป็นผู้ถูกเลือกให้ทำหน้าที่นี้เหมือนดาบเจ็ดสีมณีเจ็ดแสง 5555+ .คือมันต้องมีดาบ เอ้ยยย มียีนนี้เท่านั้นความสามารถนี้ถึงจะเกิด ถ้ายีนนี้เสียหาย → Treg จะหายไป → ทหารทั้งกองทัพยิงกันเอง 💥โรคที่เกิดจาก FOXP3 พัง เช่น IPEX syndromeเด็กที่เกิดมาจะมีอาการภูมิคุ้มกันทำร้ายร่างกายตัวเองอย่างรุนแรงและนั่นทำให้นักวิทยาศาสตร์รู้ว่า“เราทุกคนรอดอยู่ได้ เพราะมี Treg คอยรักษาความสงบไว้”🏰 ตอนที่ 5: ดาบสองคมของทีเร็กซ์อะไรที่มากไปก็คือไม่ดี ทีเร็กซ์ก็เช่นกัน ต้องทำงานแบบกลางๆ ถ้า ภูมิคุ้มกันทำงานมากเกินไป → เกิดโรคแพ้ภูมิตัวเอง (Autoimmune)ถ้า ทำงานน้อยเกินไป → มะเร็งหรือเชื้อโรคจะรอดดังนั้น “หัวหน้าทีเร็กซ์” ต้องบาลานซ์ให้ดี คอยสั่งทหารให้รู้จักแยกแยะ ว่าใครคือศัตรู ใครคือพลเมืองดี🏅 ตอนที่ 6: ทำไมถึงได้รางวัลโนเบลเพราะการค้นพบนี้ เปลี่ยนมุมมองทั้งวงการแพทย์จากเดิมเราคิดว่า “ภูมิคุ้มกัน = ต้องต่อสู้”แต่ตอนนี้เรารู้แล้วว่า “ภูมิคุ้มกันที่ดี = ต้องรู้จักยับยั้ง”นี่คือหัวใจของแนวคิด Peripheral Immune Tolerance (ภูมิคุ้มกันที่ทนต่อสิ่งในร่างกาย)ถ้าไปฟังคลิปประกาศรางวัลและสัมภาษณ์นะ เค้าจะบอกว่า“A fundamental discovery about the principle that keeps our immune system in check.” นั่นคือ การค้นพบว่าระบบภูมิคุ้มกันของเราทำงานอย่างสมดุลได้ยังไง🌿 สรุปแบบง่ายสุด“ร่างกายเราไม่แข็งแรงเพราะสู้เก่งอย่างเดียว แต่เพราะรู้ว่าเมื่อไหร่ควรหยุด”ดังนั้นปีนี้ Nobel Prize 2025 สาขาสรีรวิทยาและการแพทย์ จึงขอมอบเหรียญทองให้กับการค้นพบ🦖✨Treg – บอสทหารผู้รักษาสันติในร่างกายมนุษย์ 🦖✨",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/10/2025-t-reg.html", "_blank");
        
      },
    },{id: "post-เภสัชสาย-rare-item-กับสกิลเป็ด",
      
        title: 'เภสัชสาย rare item กับสกิลเป็ด <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;เภสัชสาย rare item&amp;nbsp;เมื่อเจอกันก็จะเกิดปรากฏการณ์นับญาตินับมหาลัยเกิดขึ้นได้&amp;nbsp;แต่เราจะไม่ถามเลขใบประกอบเภสัชกลัวแก่เหรอ?&amp;nbsp;เปล่า! ไม่ค่อยได้ใช้เลขจำเลขไม่ได้.เภสัช ถูกขนานนามอย่างเงียบๆกันเองว่าเราคือ&quot;เป็ด&quot; 🐥🐥🐤🐤🐥🐥🐣🐣ไม่ได้ร้องก้าบ ก้าบได้นะแต่เป็ดจะบินก็บินได้ จะวิ่งก็วิ่งได้&amp;nbsp;แต่ก็ไม่เก่งสุดๆไปสักอย่าง(อันนี้คือตอนเรียนจบ ป ตรี).แต่นี่หล่ะจ้าาา 🦢🦢🦢จะมาเทพอีกทีก็ตอนไปตามทางของตัวเอง.งานเภสัชที่ดูเหมือนจะแคบๆ นั่งสวยๆจ่ายยาใน รพแต่ความจริงเป็นสายงานที่กว้างมากกกกกตั้งแต่🚀 คิดค้นวิจัยยา ผลิตยา ออกแบบโรงงานยา: สายโรงงานยา, อาจารย์มหาลัย🍬 ขายยา: ผู้แทนยา ร้านยา🍾 จ่ายยา เภสัชคลินิก คลินิกแพ้ยา เภสัชครอบครัวไปเยี่ยมคนไข้ตามบ้าน: สายงาน รพ🍣 ขึ้นทะเบียนยา(อย) ตรวจร้านยา ตรวจสถานที่ผลิตอาหาร(สสจ): สายกฎหมาย🍺 วิเคราะห์ตัวอย่างจากศพ(สถาบันนิติเวช) : สายวิเคราะห์.🦚🌸🌼สาย rare ที่ว่าก็คือสายที่ไม่ค่อยเห็น ไม่ค่อยรู้กันนั้นแหละ.🐲🐉🐲พีคกว่าสาย rare คือสายหลุด&amp;nbsp;หลุดออกนอกวงการไปทำอย่างอื่นกันเลย&amp;nbsp;ซึ่งรุ่งเรืองซะด้วย เช่นเป็นศรีภรรยา ดูแลสามีและบุตร.ถามว่าใครเทพสุด ก็คงตอบย๊ากยากเพราะเราเซียนกันคนละอย่างแต่ๆการทำยาได้ เลี้ยงเซลล์แล้วไม่ตายก็ไม่สามารถอนุมานว่าทำกับข้าวอร่อยได้นะ 5555.เภสัชที่มาทางงานวิจัยในไทยส่วนใหญ่ก็จะสิงสถิตอยู่ในโรงงาน&amp;nbsp;สถาบันวิจัยหรือมหาวิทยาลัย(เช่นคณะแพทย์ เภสัช วิทยา).งานวิจัยที่ว่าก็แยกย่อยลงไปอีกคือหลากหลายมากกกกกกก.ถ้าเภสัชเจอกันเองในงานประชุม รพ. หรือร้านยาคงไม่น่าตื่นเต้น ก็เภสัชทั้งงานอ่ะแต่ถ้าเจอในงาน เช่น งานวิจัยที่ส่วนใหญ่เป็น pure science&amp;nbsp;ก็จะแบบหู้วววว เป็นเภสัชเหมือนกันเหรอเนี่ย.สัมพันธ์ที่เหนียวแน่นอาจจะเกิดจากผ่านอุปสรรคคล้ายๆกันเช่นวิชาที่น่าสยอง 55555.วงการวิทยาศาสตร์ที่ว่าแคบแล้ววงการเภสัชในวงการวิทยาศาสตร์นี่แคบยิ่งกว่า.🤪 #เภสัชชะเกรียน เอางานวิจัยมะเร็งมาเล่าแบบกวนๆ สาระยากๆไม่ค่อยจะมี จะมีก็แต่ความแฟนตาซีและย่อยง่าย เพราะ #วิจัยมะเร็งนั้นลึกซึ้ง ติดตามได้เลยที่! #NoCancerTH by Kuchikiz🤗 ถ้าอาจารย์หรือพี่ๆนักวิจัยผ่านมาเห็น จะแนะนำหรือติชม นศ ป เอก ตัวน้อยน้อยยยยคนนี้ก็ยินดีและดีใจมากๆเลยค่ะ 😁🤓😁 #NoCancer",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/10/rare-item.html", "_blank");
        
      },
    },{id: "post-วิทยาศาสตร์ยังน่าหลงใหลและสวยงามอยู่หรือไม่",
      
        title: 'วิทยาศาสตร์ยังน่าหลงใหลและสวยงามอยู่หรือไม่? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;วิทยาศาสตร์ยังน่าหลงใหลและสวยงามอยู่หรือไม่?โควิดพรากความสุข ความเชื่อมั่นของเราไป…เท่าไหร่แล้ว.นี่ก็เนิ่นนานที่ชีวิตธรรมดาๆหายไป และยังไม่มีวี่แววว่าเมื่อไหร่จะกลับมา.โรคภัยอย่างโควิดเป็นสิ่งที่เกี่ยวข้องกับวงการแพทย์และวิจัยโดยตรงคนหันมาสนใจงานวิจัยชิ้นแล้วชิ้นเล่าที่ถูกบอกเล่าผ่านปากของนักวิชาการเสียงดังบ้าง เบาบ้างเชื่อได้บ้าง เชื่อไม่ได้บ้าง .วิทยาศาสตร์ที่แสนจะสวยงามว่าความกันตามหลักฐานเชิงประจักษ์ถูกนำมาถกเถียงด้วยเหตุผลที่ต่าง ชวนให้สนใจในมุมมองแต่กลับกลายเป็นเสียงที่แตก ข้อสรุปที่เกิดขึ้นเหมือนเลือกได้ตามแต่ลัทธิความเชื่อ.บ้างว่ากันตามหลักฐานทางวิชาการบ้างก็กล่าวถึงการค้นพบสูตรวัคซีนใหม่นี่ชวนให้สงสัยในวิทยาศาสตร์ไม่น้อยว่ามีอะไรอยู่ในใจของนักวิจัยเหล่านั้น.สิ่งนั้นคือวิทยาศาสตร์โดยบริสุทธิ์เห็นแก่มวลมนุษย์จริงๆหรือไม่หรือมีเรื่องการเมือง ศักดิ์ศรีเข้ามาเกี่ยวข้อง.วิทยาศาสตร์ยังน่าหลงใหลยังเป็นความจริงของสิ่งที่เจอในปัจจุบันและยังคงความหวังของโลกอยู่ไหม?.ในฐานะนิวบี้ของวงการวิทยาศาสตร์ก็คงได้แต่ตั้งคำถามทั้งที่ในใจก็เริ่มจะลดความเชื่อมั่นไปเสียแล้ว.เคยคิดว่าวิทยาศาสตร์จะ…ทำให้คนมีตรรกะและเหตุผลวิทยาศาสตร์จะ…ทำให้ความเชื่อหลายอย่างถูกหยิบยกมาถกเถียงวิทยาศาสตร์จะ…ทำให้คนไทยเลิกงมงาย.แต่…มันดูยากเหลือเกินที่ประเทศไทยจะมีอะไรแบบนั้นทั้งที่นักวิจัยไทยเก่งๆมากมายมีชื่อเสียงอยู่ทั่วทุกมุมโลกบ้างกลับมาไทยด้วยใจมุ่งมาดปรารถนาจะพัฒนาบ้านเกิด.ถึงกระนั้นเสียงของนักวิจัยก็ยังเบาเสียเหลือเกินเบาเสียจน ชวนให้สงสัยว่าผู้บริหารประเทศได้ยินบ้างไหมเบาเสียจน ประเทศไทยกำลังจะแย่เบาเสียจน คนที่แบกทุกอย่างไว้คือประชาชนเบาเสียจน ชวนให้สงสัยว่าควรพยายามส่งเสียงต่อไปไหม",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/09/blog-post_18.html", "_blank");
        
      },
    },{id: "post-นาฬิกาวิ่งที่ผันตัวสำหรับดูแลสุขภาพ",
      
        title: 'นาฬิกาวิ่งที่ผันตัวสำหรับดูแลสุขภาพ <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "นาฬิกาวิ่งที่ผันตัวสำหรับดูแลสุขภาพ&amp;nbsp;บางทีนาฬิกาก็เป็นเครื่องเตือนใจชั้นดีไม่ใช่แค่เตือนเวลา แต่เตือน heart rate ด้วยไอความที่ชอบเดินเร็วๆให้ลมตีหน้าก็จะไม่ควรทำในช่วงเปื่อยๆเท่าไหร่เราจะหลอกตัวเองด้วยอะไรก็ได้ แต่ heart rate(HR)จะไม่มีวันโกหกคุณเกือบ 140 ตั้งแต่หัววันกันไปเลย.พักหลังก็พยายามรู้จักร่างกายตัวเองให้มากขึ้นมันก็ไม่เรื่องง่ายๆ จะถามใครก็คงไม่ได้ด้วยนิสัยที่ถ้าจะทำ ก็ต้องทำ.มีครั้งที่ต้องนอน รพ. พอยาฉีด ยาพ่นออกฤทธิ์บอกแม่ว่าพรุ่งนี้กลับบ้านกันพอยาหมดฤทธิ์เท่านั้นหล่ะ นอนหอบเป็นแมวเลย.เคยคิดว่าอาจจะต้องซื้อที่วัดออกซิเจนปลายนิ้วแต่ก็มีบางเหตุการณ์ที่ทำให้รู้สึกว่าHR นี่แหละ น่าเชื่อกว่าเป็นไหนๆ.ตั้งแต่มีนาฬิกาก็เลยช่วยได้เยอะ เรื่องออกกำลังกายก็ด้วย เลิกบ้าวิ่งให้เร็ว ปั่นให้เร็ว ขอเร็วกว่าอีกนิดนึงสุดท้ายก็หอบกำเริบ ตอนนี้กลายเป็นคุมโซน ก็ไม่ถึงกับโซน 2 ตลอดหรอกแค่อย่าเยอะจนโซน 4 ปลายปัญหาเรื่องออกกำลังกายแล้กระตุ้นหอบหืดก็ไม่มีไปเลย.ได้แต่หวังว่า Garmin instinct ที่ซื้อมาจะได้ใช้กับกีฬาสมบุกสมบัน อย่างที่มันควรจะเป็นบ้าง.วันนี้เจอหมอตามนัดพร้อมกับได้ใบรับรองแพทย์ที่เขียนว่า “โรคหืดรุนแรง” แล้วก็เติม “มาก” ไว้ข้างหลังอีกทีรู้สึกเหมือนได้อัพเวล 5555 ไม่รู้จะดีใจหรือเสียใจดี ถ้าคาดหวังกับอะไรๆให้น้อยลง อาจจะมีความสุขมากขึ้นก็ได้ แม้ว่าจะต้องเจอกับอะไรก็ตาม.สัปดาห์น่าจะเริ่มออกกำลังกายได้บ้างแล้วก่อนหน้านี้อุตส่าห์ตื่นเช้าไปวิ่งทุกวันตั้งหลายวัน ดันมาแพ้เยอะซะได้ แอบเสียดายเหมือนกันไม่เป็นไรเริ่มต้นใหม่กันอีกรอบ ซึ่งเป็นรอบที่เท่าไหร่ก็ไม่รู้ #คนไข้บ้าพลัง #SevereAsthma #Anaphylaxis#ทีมหอบหื่น #ทีมภูมิชนะเขียนเมื่อ 27 สิงหาคม 2020&amp;nbsp; &amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/2025/09/blog-post.html", "_blank");
        
      },
    },{id: "post-คะแนนสอบมันก็แค่-คะแนนสอบนั่นแหละ",
      
        title: 'คะแนนสอบมันก็แค่...คะแนนสอบนั่นแหละ <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "คะแนนสอบมันก็แค่...คะแนนสอบนั่นแหละ“เจเจ้ วันนี้โอเชี่ยนสอบที่โรงเรียนด้วย”เสียงเด็กแสบระรื่นมาจากปลายสายทั้งที่ยังไม่รู้เลยว่าสอบตกหรือสอบผ่าน .จะว่าไปพอโตมาคะแนนสอบมันก็แค่คะแนนสอบนั่นแหละไม่ใช่ว่าการวัดผลมันไม่สำคัญแต่ไม้บรรทัดอันเดียวจะใช้วัดทั้งชีวิตคงไม่ได้.หลังจากโตมาสักหน่อยก็รู้สึกว่าการสอบได้ลำดับที่ดีดีในตอนประถมไม่ได้แปลว่าจะประสบความสำเร็จในช่วงมัธยมมหาลัย หรือช่วงชีวิตผู้ใหญ่เท่าไหร่นัก.ในวัยเด็กเพื่อนบางคน...เรียนเก่งมากกก เรียบร้อยมาก ลายมือสวย ครูชมทุกวันพอเข้าวัยมัธยม กลับกลายเป็นอีกคน แต่งตัวจัดจ้าน ใช้ชีวิตและการเรียนก็แย่ลงเพื่อนบางคน...สอบเข้ามัธยมในห้องที่เรียนดีที่สุด ช่วงหลังเกกมะเหรกเกเร และต้องจบชีวิตลงเพราะความคึกคะนองเพื่อนบางคน...คึกอ่านหนังสือขึ้นมาก็ได้คะแนนดี สอบอะไรที่อยากได้ก็ผ่าน แต่หลังจากเข้าไปได้ก็ทุลักทุเล จนสุดท้ายก็ไม่ถึงปลายทาง.เพื่อนอีกหลายๆคน...บางคนอาจจะหวือหวา บ้างก็เรื่อยๆ ไม่ได้โดดเด่น เรียนจบ มีงานทำ บ้างก็มีครอบครัว ก็คงจะถือได้ว่าประสบความสำเร็จในชีวิตอย่างน้อยๆก็สำหรับช่วงวัยนี้.สุดท้ายก็ยังไม่รู้ว่าความสำเร็จที่ว่ามีต้นเหตุต้นตอมาจากอะไรสิ่งที่ครอบครัวปลูกฝัง?ทัศนคติ? QE/IQ?.เพราะความสำเร็จมันอาจจะขึ้นกับว่าสุดท้ายแล้วเนื้อแท้ของคนๆนั้นเป็นอย่างไรถ้าต้องอยู่ด้วยตัวเอง ผลักดันตัวเองจุดนั่นกระมัง จุดเริ่มต้นของวัยรุ่นวัยที่เลือกอะไรๆ ด้วยตัวเอง.บ้างก็ว่า GRIT ที่มาจากฉันทะ (Passion)+ วิริยะ (Perserverance) คือกุญแจของความสำเร็จ.อาจจะมีอะไรมากมายกว่านั้นก็เป็นได้แต่ที่แน่ๆคือไม่ได้มีแค่คะแนนสอบ&amp;nbsp;เขียนเมื่อ&amp;nbsp;1 กันยายน  2020&amp;nbsp; &amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/09/blog-post_15.html", "_blank");
        
      },
    },{id: "post-demon-slayer-hashira-x-cancer-killing-strategies",
      
        title: 'Demon Slayer: Hashira x Cancer-killing strategies <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;&amp;nbsp;🔥 When the “Hashira of Demon Slayer” face off against “Cancer Demons”…What real-world treatments do they represent? ✨Hashira × Cancer-killing strategies🌊 Giyu – Water → Chemotherapy👉 Wide-flow attack across the battlefield, wiping out many enemies but sometimes hitting teammates too (side effects).🔥 Rengoku – Flame → Radiotherapy👉 Burns a precise target, breaking DNA apart — best for “pinpoint strikes.”🦋 Shinobu – Insect → Targeted Therapy / Monoclonal Antibody👉 Sharp, needle-like poison aiming at “molecular weak points” (e.g., HER2, EGFR).Example: Trastuzumab (HERDARA) locks onto HER2 and blocks growth signals.🌫️ Tokito – Mist → Nanomedicine / Drug Delivery👉 Tiny particles sneak through defenses, carrying drugs to unlock destruction at the target.💥🎶 Uzui – Sound → Surgery👉 Timed, explosive precision — removing the “big boss” tumor straight from the field.🐍 Obanai – Serpent → Immunotherapy (Checkpoint Inhibitors / ADCC)👉 Releases the immune system’s brakes so T-cells strike with venomous precision.💗 Mitsuri – Love → Endocrine Therapy (Hormone Therapy)👉 Gentle but steady — weakening the enemy by cutting off its hormonal fuel.🪨 Gyomei – Stone → Combination / Multimodal Therapy👉 A fortress of strength, blending multiple powers: surgery + chemo + radiotherapy + targeted drugs.🌪️ Sanemi – Wind → Cellular Therapy (CAR-T / Adoptive T-cell)👉 Frenzied reinforcements charging head-on, rewriting the rules of battle.Bonus warriors (not Hashira but deadly):🧬 Antibody–Drug Conjugates (ADC) = blades laced with hidden poison (e.g., T-DM1)🎯 Radioligand / PRRT = radioactive arrows hitting bullseyes🌱 Anti-angiogenesis = cutting off the enemy’s blood supply✨ Science meets anime — making oncology easier (and cooler) to learn.===============Build a greater science together with me! Here is my blogs🌸 Thai language: NO CANCER FB page/Blogger (https://lnkd.in/gQa3apBc or https://lnkd.in/gTqDK8MA)🧬 English language: The Whispers of Biology (LinkedIn/Blogger) (https://lnkd.in/gRTnrpRz or https://lnkd.in/gRe_VtUF)#CancerEducation #Oncology #TargetedTherapy #Immunotherapy #HER2 #Trastuzumab #HERDARA #DemonSlayer #ScienceCommunication #NoCancerThailand",
      section: "Posts",
      handler: () => {
        
          window.open("https://thewhispersofbiology.blogspot.com/2025/09/demon-slayer-hashira-x-cancer-killing.html", "_blank");
        
      },
    },{id: "post-ความสำคัญของอ้างอิง-reference",
      
        title: 'ความสำคัญของอ้างอิง (Reference) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "ความสำคัญของอ้างอิง (Reference)...ที่จริงมีเห็นการหนึ่งที่ทำให้สะดุดกับความสำคัญของการอ้างอิงถึงงานต้นฉบับอย่างมากครั้งนึงตอนนั้นยังเรียนม.5 เเละไปเข้าค่ายThaiSciCamp2 การพูดของอาจารย์ยอดหทัย เทพธรานนท์ซึ่งตอนนั้นอาจารย์พูดประมาณว่า [ผมเป็นคณะกรรการพิจารณาเด็กรับทุนไปเรียนต่อ ป.เอก แต่ถ้าเค้าเอาภาพหรืออะไรที่ไม่ได้ทำขึ้นมาเองแล้วไม่ได้ให้เครดิตเจ้าของงานผมจะไม่ให้คนพวกนี้ไปเรียนต่อ] วันนี้คือเงิบสงัดทั้งนักเรียนยาวไปถึงวิทยากรท่านอื่นในวันนั้น​ ตั้งแต่นั้นมาก็รู้สึกว่าอ้างอิงสำคัญ 5555+...ถ้าจะให้คิดเล่นๆความสำคัญของอ้างอิงมีเยอะมากนะ ลิสต์เป็นข้อน่าจะประมาณนี้1. เป็นการเคารพความคิดเเละผลงานของผู้ที่เราอ้างอิงมา ถ้าไม่ใส่อ้างอิงคนอาจจะคิดว่าเราคิดมันขึ้นมาได้เอง อ้างอิงนี่ไม่ใช่แค่เปเปอร์ที่น่าเชื่อถือนะมันรวมไปถึงคำพูดและไอเดียด้วย2.เป็นการเพิ่มความน่าเชื่อถือให้งานเรา อันนี้คือการอ้างอิงงานวิจัยหรือหนังสือเป็นส่วนใหญ่3. ทำให้เราตามที่มาของเนื้อหานั้นๆได้ อันแยกออกเป็น 2 ประเด็นคือ- ตามเนื้อหาในส่วนงานวิจัย เพื่อไปหารายละเอียดที่มากขึ้นจากงานต้นฉบับ - ตามเนื้อหาหลังเรียน ประเด็นก็คือทุกคงเคยสังเกตว่าหลังสไลด์เรียนอาจารย์จะเขียนอ้างอิงที่ใช้ประกอบการสอนไว้แต่คงมีน้อยคนมากที่จะมองมันทั้งที่จริงแล้วเรารู้สึกว่าสไลด์นี้สำคัญมากพอๆกับภาพรวม(สารบัญ)ของหัวข้อที่เรียนและรู้สึกว่ามันสำคัญกว่าเนื้อหาซะอีก(ในตอนที่สอบเรื่องนั้นไปแล้วอ่ะนะ555)เพราะสไลด์ที่บอกภาพรวมจะทำให้เราเห็นภาพรวมว่ามีอะไรบ้างตรงไหนที่ต้องโฟกัสส่วนอ้างอิงจะทำให้เราตามไปหาเนื้อหาที่นับวันมันจะupdateใหม่เรื่อยๆและที่สำคัญถ้าเรารู้ว่าอาจารย์เอาหัวข้อนี้มาจากไหนในวันใดที่เราอยากกลับไปก็สามารถทำได้..เพราะเอาเข้าจริงๆไม่มีใครแบกชีทเรียนไปตลอดชีวิตแค่น้ำท่วมปลวกกินก็เกลี้ยงแล้ว...การเขียนอ้างอิงที่มีหลายแบบที่จริงก็คงแค่อยากให้มีข้อมูลสำคัญที่จะสืบกลับไปได้อย่างถูกต้องและครบถ้วนนะ(คิดเอง555)....เราเองก็เคยเขียนอ้างอิงขึ้นสไลด์เช่น credit by กลุ่มภาษาพาซน ก็ตอนนั้นชื่อโครงการคิดไม่ออกเลยขอความเห็นในกลุ่มและได้เอาชื่อมาใช้จริงกับเขียนcredit by FB อาจารย์ในคณะท่านนึงตอนนั้นก็เอาไอเดียที่อาจารย์โพสไว้ไปใช้กับคนไข้แล้วต้องขึ้นสไลด์พรีเซนก็เลยขอบคุณอาจารย์ไว้ถ้าไม่ใส่เดี๋ยวคนอื่นจะเข้าใจว่าคิดได้เองนั่นจะเก่งเกินไป5555...ท่านไหนมาอ่านเจอโพสนี้อยากเสนออะไรเพิ่มก็ยินดีเลยนะคะ^^&amp;nbsp;เขียนเมื่อ 14 กันยายน 2016&amp;nbsp;&amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/09/reference.html", "_blank");
        
      },
    },{id: "post-ทำไม-ยามุ่งเป้า-ถึงชอบลงท้ายด้วย-quot-แมบๆ-quot-mab-เพิ่งค้นพบแมบๆเลยตั้งงี้เหรอ",
      
        title: '🧬 ทำไม #ยามุ่งเป้า 🎯 ถึงชอบลงท้ายด้วย &quot;แมบๆ&quot; (Mab) เพิ่งค้นพบแมบๆเลยตั้งงี้เหรอ <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;🧐 ไขข้อสงสัย! ทำไม #ยามุ่งเป้า หอบหืด ถึงชอบลงท้ายด้วย &quot;แมบๆ&quot; (Mab) กันนะ? 🤨ทุกคนนนนน! 👋 ตั้งแต่ที่เราคุยเรื่อง &quot;ยามุ่งเป้า&quot; กันมาเนี่ย มีใครสังเกตไหมคะว่า... ทำไมชื่อยาพวกนี้ถึงชอบลงท้ายด้วย &quot;แมบๆ&quot; (Mab) กันเกือบหมดเลยนะ? 🤔มิสไปเจอบทความวิชาการอันนี้มาชื่อหัวข้อจ๊าบมาก &quot;Mabs for treating asthma: omalizumab, mepolizumab, reslizumab, benralizumab, dupilumab.&quot; เลยเป็นที่มาของโพสนี้ จะสังเกตว่ายาทุกลงท้ายด้วยแมบหมดเลยบางคนแอบคิดในใจรึเปล่าคะว่า... &quot;หรือว่าเพิ่งค้นพบ (แมบๆ) เลยลงท้ายด้วยแมบ?&quot; 🤣วันนี้มิสจะมาไขข้อข้องใจให้กระจ่างเลยค่ะ! นี่ไม่ใช่เรื่องบังเอิญนะ แต่มันมีเหตุผลทางวิทยาศาสตร์ซ่อนอยู่เบื้องหลัง! 🤩🧬 ยามุ่งเป้าที่ลงท้ายด้วย &quot;แมบๆ&quot; (Mab) คืออะไร? 🎯✨เฉลยเลยค่ะ! คำว่า &quot;แมบ&quot; (Mab) ที่เราเห็นอยู่ท้ายชื่อยามุ่งเป้าเหล่านี้ ย่อมาจากคำว่า &quot;Monoclonal Antibody&quot; (โมโนโคลนอล แอนติบอดี) นั่นเองค่ะ! ✨🧬แล้ว Monoclonal Antibody คืออะไร?✨&amp;nbsp;อธิบายง่ายๆ นะคะ มันก็คือ &quot;แอนติบอดีสังเคราะห์&quot; หรือ &quot;โปรตีนภูมิคุ้มกันที่ถูกสร้างขึ้นในห้องปฏิบัติการ&quot; ค่ะ! 👩‍🔬✨&amp;nbsp;ลองนึกภาพว่าในร่างกายเรามีตำรวจ (แอนติบอดี) ที่คอยจับผู้ร้าย (สารผิดปกติ) ใช่ไหมคะ? แอนติบอดีปกติอาจจะจับผู้ร้ายได้หลายคน แต่ &quot;Monoclonal Antibody&quot; เนี่ย คือตำรวจพิเศษที่ถูกฝึกมาให้จับผู้ร้าย &quot;แค่คนเดียว&quot; ที่มีลักษณะเฉพาะเจาะจงมากๆ เท่านั้นค่ะ!🎯&amp;nbsp;นี่แหละคือหัวใจของ &quot;การแพทย์แบบแม่นยำ&quot; เลย! ยามุ่งเป้าเหล่านี้จะเข้าไป &quot;จับ&quot; หรือ &quot;บล็อก&quot; สารบางอย่างในร่างกายเราที่กำลังทำงานผิดปกติและก่อให้เกิดการอักเสบในปอด ทำให้กระบวนการอักเสบหยุดลง หรือลดลงได้โดยตรงและแม่นยำที่สุดค่ะ🎯&amp;nbsp;ดังนั้น... ยาทุกตัวที่ลงท้ายด้วย &quot;-mab&quot; ก็คือ ยาในกลุ่ม Monoclonal Antibody ที่ออกฤทธิ์แบบ &quot;มุ่งเป้า&quot; ไปยังเป้าหมายเดียวที่เฉพาะเจาะจงนั่นเองค่ะ!🎯&amp;nbsp;ตัวอย่างยา &quot;แมบๆ&quot; ที่เราคุยกันไปแล้ว:✅ Omalizumab (โอมาลิซูแมบ)✅ Mepolizumab (มีโพลิซูแมบ)✅ Reslizumab (เรสลิซูแมบ)✅ Benralizumab (เบนราลิซูแมบ)✅ Dupilumab (ดูพิลูแมบ)✅ Tezepelumab (เทเซเพลูแมบ)😆เห็นไหมคะว่า &quot;แมบๆ&quot; ไม่ใช่แค่ชื่อเท่ๆ แต่เป็นชื่อที่บ่งบอกถึงกลไกการทำงานอันชาญฉลาดของยาเหล่านี้เลย! ทำให้การรักษาหอบหืดได้ผลดี ตรงจุด และอาจลดผลข้างเคียงที่ไม่จำเป็นต่อร่างกายได้ค่ะ👉หวังว่าทุกคนจะเข้าใจที่มาของคำว่า &quot;แมบๆ&quot; กันมากขึ้นนะคะ! ใครมีคำถามเพิ่มเติม หรืออยากให้มิสหาข้อมูลเรื่องอะไรอีก คอมเมนต์มาบอกกันได้เลยค่ะ! 👇💋 ติดตามเรื่องราวดีๆ และเป็นประโยชน์จากมิสหอบหืดได้ที่เพจ&amp;nbsp;💋 @มิสหอบหืด - Miss Asthma Thailand&amp;nbsp;หรืออ่านบทความย้อนหลังได้ที่👉 https://missasthmath.blogspot.com&amp;nbsp;#ยามุ่งเป้าหอบหืด #MonoclonalAntibody #Mab #PrecisionMedicine #การแพทย์แม่นยำ #MissAsthmaTH #ความรู้เรื่องยา #หอบหืด📚 อ้างอิง- Ridolo E, Pucciarini F, Nizi MC, Makri E, Kihlgren P, Panella L, Incorvaia C. Mabs for treating asthma: omalizumab, mepolizumab, reslizumab, benralizumab, dupilumab. Hum Vaccin Immunother. 2020 Oct 2;16(10):2349-2356. doi: 10.1080/21645515.2020.1753440. Epub 2020 May 13. PMID: 32401603; PMCID: PMC7644228.-&amp;nbsp;American Medical Association (AMA):&amp;nbsp;guidance on naming monoclonal antibodies&amp;nbsp;- WHO:&amp;nbsp;New INN monoclonal antibody (mAb) nomenclature scheme (May 2022)&amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/2025/07/mab.html", "_blank");
        
      },
    },{id: "post-r-i-p-david-baltimore-noble-laureate-1975",
      
        title: 'R.I.P David Baltimore - Noble Laureate 1975 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;R.I.P. Prof. David BaltimoreNobel Laureate in Physiology/Medicine (1975) — discoverer of the enzyme Reverse Transcriptase (RT) in 1970, at just 37 years old.This enzyme has been in every high-school biology textbook, yet many of us forget how revolutionary its discovery was.It changed the way we understand life, disease, and treatment.At that time, the Central Dogma was simple:DNA → RNA → Protein.But RT overturned the dogma: RNA → DNA.A paradigm shift.Baltimore’s experiment explained how viruses could integrate their genetic material into the host DNA. Later, this became central to our understanding of HIV, cancer biology, and the development of therapies.His discovery also sparked the golden era of viral oncogenes — genes like src and myc carried by viruses that could integrate into human DNA and trigger cancer.I was fortunate to join a seminar earlier this year where Prof. Baltimore gave a keynote talk at Cold Spring Harbor Laboratory (Cancer Genetics: History &amp;amp; Consequences)That took us on a journey: from discovering RT, to viral oncogenes, to targeted therapy, to the human genome project, and finally, to the age of AI.Science is like a staircase.We climb higher by standing on the steps built by those before us.We honor, respect, and cite their work — and that’s why science is beautiful.",
      section: "Posts",
      handler: () => {
        
          window.open("https://thewhispersofbiology.blogspot.com/2025/09/blog-post.html", "_blank");
        
      },
    },{id: "post-โรมิโอจูจุ๊บลูเลียต-เกี่ยวอะไรกับมะเร็ง",
      
        title: 'โรมิโอจูจุ๊บลูเลียต💋 เกี่ยวอะไรกับมะเร็ง <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "โรมิโอจูจุ๊บลูเลียต&amp;nbsp;💋&amp;nbsp;เกี่ยวอะไรกับมะเร็ง&amp;nbsp;ปกวารสาร Cancer Cell ฉบับนี้ นึกว่านิยายรักกกกกมันคือฉากอมตะที่ระเบียงซึ่งโรมิโอกับจูเลียตจูบกันนนนนหวานตัดขา ตู้วหูวววว.แต่ๆ แล้วมันเกี่ยวอะไรกับวารสารงานวิจัยมะเร็งอ่ะแกปกนี้เลือกมาเพื่อจะสื่อถึงงานวิจัยชิ้นนึงในฉบับนี้ชื่อ &quot;Gene context drift identifies drug targets to mitigate cancer treatment resistance&quot;มันว่าด้วยเรื่องบริบทของยีนที่เป็นตัวบอกทุกสิ่งคืองานงานวิจัยตั้งแต่ไหนแต่ไรมา เรามักจะดูยีนแค่ยีนเดียวแต่พักหลังงานเริ่มเปลี่ยนมาดูหลายๆยีนพร้อมกันซึ่งก็เหมือนบริบทโดยรวม (gene context)งานวิจัยนี้ก็เป็นเรื่องบริบทของชาวแก๊งค์ยีนนี่แหละที่มาเกี่ยวข้องกับการดื้อยาของมะเร็งGene&#39;ll never work(walk) alone!ซึ่งเค้าเลือกรูปฉากระเบียงนี้มาเพราะเป็นฉากอมตะคือถ้าเปรียบเทียบกับนิยายไทยอาจจะแบบโกโบริกับอังศุมาลิน รักท่ามกลางสงครามไรงี้ 5555หรือไรอีก ฉากใต้ถุน แม่นาคยื่นมือเก็บมะนาวคือเห็นแบบนึกออกเลยว่างั้น#NoCancer",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/09/blog-post_12.html", "_blank");
        
      },
    },{id: "post-r-i-p-ศ-ดร-เดวิด-บัลติมอร์-ผู้ค้นพบเอนไซม์-reverse-transcriptase",
      
        title: 'R.I.P. ศ.ดร.เดวิด บัลติมอร์ ผู้ค้นพบเอนไซม์ Reverse Transcriptase <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;R.I.P. ศ.ดร.เดวิด บัลติมอร์เจ้าของรางวัลโนเบล 1975จากการค้นพบเอนไซม์ Reverse Transcriptase (RT) ในปี 1970 ตอนอายุแค่ 37 ปี.เอนไซม์นี้ถูกบรรจุลงหนังสือเรียน ม.ปลาย ไปจนเราละเลยเรื่องการค้นพบเปลี่ยนโลกครั้งนี้ไปเลย.การค้นพบครั้งนี้ทำให้เป็นที่มาของการเข้าใจโรคสำคัญๆอย่าง HIV, มะเร็ง และเป็นที่มาของยาด้วย.ณ ตอนนั้น เรารู้จัก Central dogma คือจาก DNA -&amp;gt; RNA -&amp;gt; Proteinแต่ RT คือสิ่งสวนทางช่วยให้จาก RNA -&amp;gt; DNAเรียกว่าคว่ำกระดานเก่าเลย.การทดลองตอนนั้นคือ เค้ารู้กันแล้วว่าไวรัสมันฝังตัวเข้าไปบนพันธุกรรม(DNA) ของโฮสได้&amp;nbsp;แต่ยังไม่รู้ว่าที่ทำได้นี่ ทำเข้าอีท่าไหนการพิสูจน์ก็เลยมาเจอเอมไซม์ตัวนี้.เรื่องโรค HIV คือโรคของไวรัสก็พอเข้าใจได้แล้วมันเกี่ยวอะไรกับมะเร็ง?.ถัดจากที่ Prof. บัลติมอร์ เจอเอนไซม์ตัวนี้ก็เป็นยุครุ่งเรืองของยีนส์ก่อมะเร็งที่อยู่ในไวรัส (viral oncogene)คือไวรัสมันก่อมะเร็งได้ เช่น myc, src&amp;nbsp;โดยเอายีนส์พวกนี้มาปักใส่คนว่างั้น ปักปุ๊บฝังเข้าพันธุกรรมคนปั๊บ เป็นมะเร็งขึ้นมา.เพิ่งเข้าร่วมสัมนาที่ Prof. มาเป็น keynote เมื่อต้นปีมันเป็นงานที่สนุกมากเรื่องราวของ talk ทั้งหมดไล่มาตั้งแต่ที่ค้นพบเอนไซม์ RTต่อที่ oncogene ยาวไปถึง targeted therapy ต่อที่ human genome แล้วจบที่ยุค AI.วิทยาศาสตร์ก็เหมือนขั้นบันได&amp;nbsp;ที่เราต่อยอดจากสิ่งที่คนก่อนหน้าเจอเคารพ ให้เกียรติ และอ้างถึงในผลงานของเราเพราะอย่างนี้วิทยาศาสตร์จึงสวยงามขอบคุณ ศ.ดร.เดวิด บัลติมอร์ ที่สร้างบันไดขั้นแรงไว้ให้พวกเรานักวิทยาศาสตร์รุ่นหลัง R.I.P.",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/09/reverse-transcriptase.html", "_blank");
        
      },
    },{id: "post-the-infinity-cancer-drug-factory",
      
        title: '💊The Infinity Cancer Drug Factory 🏯✨ <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;💊 The Infinity Cancer Drug Factory 🏯✨&amp;nbsp;Pharmacy students don’t just learn about medicines — we also have to design factory layouts… even though most of us can’t use AutoCAD properly 😂Designing a pharmaceutical plant layout is never simple.🏭 For a regular drug factory, you already need a complex flow to separate cleanroom grades and prevent contamination.⚠️ For chemotherapy drugs (cytotoxic), the complexity increases — you must protect workers and contain hazardous substances.🧬 For biologics, you add another layer: biosafety.It becomes so complicated that it feels like Infinity Castle from Demon Slayer — you can enter, but finding the way out is impossible 😅.💡 Back in pharmacy school, we had to design plant layouts too:Some friends got simple factories (like paracetamol) → easy task 😌My group drew a chemotherapy factory → endless books and regulations 📚My close friend got a vaccine factory → even harder, with design + legal complianceOur layout followed every rule perfectly. The professor gave only one comment:👉 “You can enter, but it’s like a maze… no way out.” 🤣🚪 Later, I did an internship at a real biologics manufacturing site.Once inside, it truly felt like another dimension. Without senior staff guiding me, I probably would’ve been lost crying at the airlock 🤭.📌 For those interested: there are specialized graduate programs combining Pharmacy + Engineering, focusing on pharmaceutical plant design, GMP, air-handling, and regulatory compliance.It’s not just “design” — mistakes here can have real-world consequences.👉 Have you ever felt lost in a workplace layout that felt like an Infinity Castle? 😆#BoundlessDrugFactory #InfinityCastlePharma #PharmaLife #GMP #PharmaEngineering #PharmaceuticalSciences #Biologics #CytotoxicDrugs #DrugFactoryMaze",
      section: "Posts",
      handler: () => {
        
          window.open("https://thewhispersofbiology.blogspot.com/2025/09/infinity-cancer-drug-factory.html", "_blank");
        
      },
    },{id: "post-โรงงานยามะเร็งไร้ขอบเขต",
      
        title: '💊 โรงงานยามะเร็งไร้ขอบเขต 🏯✨ <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;💊 โรงงานยาไร้ขอบเขต&amp;nbsp;🏯✨&amp;nbsp;เภสัชก็ต้องเรียนออกแบบผัง… แต่ใช้ AutoCAD ไม่เป็นเหมือนกัน 555&amp;nbsp;การออกแบบผังโรงงานยาไม่ใช่เรื่องง่ายเลยโรงงานยาปกติก็ต้องวาง flow ให้ซับซ้อนเพื่อจัด โซนความสะอาด (cleanroom grade) ให้ถูกต้องอยู่แล้วแต่ถ้าเป็น ยาเคมีบำบัด (chemotherapy drugs) ความยากก็เพิ่มขึ้น เพราะต้องคำนึงถึงความปลอดภัยผู้ทำงาน (worker safety) และการป้องกันสารอันตรายไม่ให้เล็ดลอดและถ้ายาเป็น ชีววัตถุ (biologics) อีกที? ต้องคิดเรื่อง ความปลอดภัยทางชีวภาพ (biosafety) เข้าไปอีกชั้น ซับซ้อนจนเหมือนเดินอยู่ใน Infinity Castle — เข้าได้แต่หาทางออกไม่เจอ 😅💡 ตอนเรียนปีนั้น แอดก็เคยต้องทำผังโรงงานยาเพื่อนบางคนได้โรงงานยาธรรมดา เช่น ยาพารา → ชิล ๆ 😌แต่กลุ่มแอดดันได้โรงงานผลิต ยาเคมีบำบัด เพื่อนส่ายหัวกับหนังสือกองเต็มโต๊ะ 📚มีเพื่อนสนิทได้ โรงงานผลิต วัคซีน → เจอทั้งแบบแปลน (design) + กฎหมายข้อบังคับ (regulations) เยอะมากจำได้ว่าโรงงานที่เพื่อนวาด ถูกทุกกฎ จนอาจารย์คอมเมนต์แค่ว่า“เข้าได้ แต่เหมือนเขาวงกต ออกไม่ได้” 🤣🚪 พอไปฝึกงานจริงที่โรงงานผลิตชีววัตถุ เข้าไปข้างในที เหมือนหลุดไปในอีกโลก ถ้าไม่มีพี่ ๆ มารับคงยืนร้องไห้อยู่ตรง airlock แน่นอน 555📌 ถ้าใครสนใจสายนี้ จริง ๆ มีหลักสูตรเฉพาะทางเลย มันไม่ใช่แค่เรียน design แต่ต้องเรียนทั้งเรื่องกฎหมาย, มาตรฐาน GMP, หน่วยอากาศ (air-handling), ความสะอาด ฯลฯ ซึ่งถ้าออกแบบผิดชีวิตจริงอาจมีผลหลายอย่าง",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/09/blog-post_11.html", "_blank");
        
      },
    },{id: "post-the-whispers-of-biology-39-s-mascot",
      
        title: 'The Whispers of Biology&#39;s mascot <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "🐧 Penguin → the Linux mascot. Unix command line is like a rare language. I chose to learn it after Prof. Xiaole Shirley Liu taught me in STAT115, and with Tommy’s encouragement. Many said: “Just use no-coding tools, it’s easier.” Yes, that’s possible — but in the long run, harder paths build stronger skills. Today, I’m grateful I took that way.❤️ Iron Man armor → transformation is never easy. Like Iron Man, the process is tough, but it makes you stronger — a scientist’s version of becoming a superhero.🧪💻 Hybrid identity → test tube in one hand, laptop in the other. This penguin represents my journey as a hybrid wet–dry lab researcher.⸻💡 Transformation is hard, but that’s what makes it powerful.You can do it too — keep going! 🚀⸻Build a greater science together with me!🌸 Thai language: NO CANCER FB page / Blogger https://lnkd.in/gQa3apBc🧬 English language: The Whispers of Biology (LinkedIn / Blogger)https://lnkd.in/gRTnrpRz⸻#TheWhispersOfBiology #HybridResearcher #DataScience #ComputationalBiology #Linux #WetLab #DryLab #IronManInspiration #PhDLife #OpenScience #ScienceCommunication #ResearchJourney #NeverGiveUp",
      section: "Posts",
      handler: () => {
        
          window.open("https://thewhispersofbiology.blogspot.com/2025/09/the-whispers-of-biologys-mascot.html", "_blank");
        
      },
    },{id: "post-how-to-remember-commands-code",
      
        title: 'How to remember commands/code? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;How to remember commands/code?Easy: just type it 100 times yourself (when you actually need to use it),&amp;nbsp;&amp;nbsp;INSTEAD OF copy-pasting. 😂&amp;nbsp;Old days: read docs → adapt → remember.&amp;nbsp;&amp;nbsp;Now: LLMs prep everything → brain remembers nothing (not even a simple line of code 🤯)==========Build a greater science together with me! Here is my blogs🌸 Thai language: NO CANCER FB page/Blogger (https://lnkd.in/gQa3apBc or https://lnkd.in/gTqDK8MA)🧬 English language: The Whispers of Biology (LinkedIn/Blogger) (https://lnkd.in/gRTnrpRz or https://lnkd.in/gRe_VtUF)#CodeLife #DevLife #ProgrammerHumor #LLM #FutureOfCoding #KeepLearning",
      section: "Posts",
      handler: () => {
        
          window.open("https://thewhispersofbiology.blogspot.com/2025/09/how-to-remember-commandscode.html", "_blank");
        
      },
    },{id: "post-mentor-งานวิจัยของฉันตั้งแต่มัธยม",
      
        title: 'Mentor งานวิจัยของฉันตั้งแต่มัธยม <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Mentor งานวิจัยของฉันตั้งแต่มัธยมโชคดีที่มี อ.เกรียงศักดิ์ เป็น Mentor ตั้งแต่มัธยม&amp;nbsp;.- ม.5 ไปแลป อ.ชิษณุสรร ครั้งแรกไม่กี่ ชม. แต่ติดตาตรึงใจมาก อ.เกรียงศักดิ์บอกว่าไว้ปี 3 ค่อยมาใหม่ นับวันรอเลยยยยย ได้จับกระดาษงานวิจัยจริงๆ อ.ให้กลับบ้านมาอันนึง เก็บไว้ในสมุดจดอย่างดี ซึ่งตอนนั้นอ่านไม่รู้เรื่องเลย- ปี 3 กลับไปอีกครั้ง ถึงจะเป็นเวลาไม่กี่วัน แต่ได้อะไรกลับมาเยอะมาก เริ่มตั้งคำถามกับตัวเองว่าชอบงานวิจัยมะเร็งแบบไหน อ.เกรียงศักดิ์ก็สนับสนุนให้ลองหลายๆอย่าง.อาจารย์เป็นอีกท่านนึงที่ปรึกษาได้อย่างตรงไปตรงมาและ อ ก็ช่วยเหลือ ให้คำปรึกษามาตลอดตั้งแต่นั้น.มาสัมภาษณ์ครั้งนี้ได้มาเจอ อ ด้วย ดีใจมากกกกอ มารับไปส่งถึงห้องสัมภาษณ์เลย ใจชื้นสุดๆเมื่อ Mentor ของคุณจาก 2 สถาบันมาเจอกันโดยที่คุณไม่อยู่ที่แลป~~~งานนี้มีงอแง เตรียมก่อกวนอาจารย์ทั้ง 2 ท่านพร้อมชุดครุยรับปริญญาเลยค่ะ อิอิ อ.เกรียงศักดิ์ เลิศประภามงคล (สถาบันวิจัยจุฬาภรณ์) อ.ศิวนนท์ จิรวัฒโนทัย (ศิริราช)&amp;nbsp;#NamthipPhDstory#NamthipxCancerResearch#Namthipxงานวิจัยมะเร็ง",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/09/mentor.html", "_blank");
        
      },
    },{id: "post-จบ-ป-เอก-สัมภาษณ์เพื่อรายงานตัวใช้ทุน",
      
        title: 'จบ ป เอก สัมภาษณ์เพื่อรายงานตัวใช้ทุน <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "จบ ป เอก สัมภาษณ์เพื่อรายงานตัวใช้ทุนเรียบร้อยแล้วเย้!ได้สัมภาษณ์โดย ศ.เกียรติคุณ ดร.คุณหญิงมธุรส &amp;nbsp;รุจิรวัฒน์, รศ. ดร.จุฑามาศ &amp;nbsp;สัตยวิวัฒน์, ศ.เกียรติคุณ ดร.ม.ร.ว.ชิษณุสรร สวัสดิวัตน์ และ พี่ๆ นักวิจัยอีกหลายท่านเลย.ตื่นเต้นมากกกก ทราบมาว่า อ.มธุรส เป็นอาจารย์ของพระองค์ท่าน &amp;nbsp;จากที่ตอนแรกเห็นยศท่านเป็นคุณหญิงก็ตื่นเต้นมากแล้ว เข้าใจมาตลอดว่า อ.มธุรส จะเป็นสัมภาษณ์เพียงท่านเดียว.ระหว่างนั่งรอในห้องประชุม อ. JS เปิดประตูเข้ามา ใจชื้นเลยยยย ความประหม่าหายไปเยอะมาก รู้สึกว่า อ. JS เป็นท่านนึงที่เห็นพัฒนาการเรามาตลอดตั้งแต่ ม.ปลาย จนถึงวันนี้ที่จบ ป เอก แล้วกระทั่งบทสรุปความชอบที่นั่งคิด นอนคิดอยู่นานว่าชอบอะไร ก็ได้ข้อสรุปจากสิ่งที่ อ. JS เคยพูด/เขียนไว้นั่นคือ ทั้งวิจัยและงานสอนเหมือนเหรียญ 2 ด้านที่สนับสนุนซึ่งกันและกัน เราชอบทั้ง 2 อย่างเลย.สัมภาษณ์เสร็จ อ. JS ท่านลุกมาคุยด้วยก่อนจะ อาจารย์ผู้ใหญ่จะพูดคุยกันต่อด้วย.แม้ว่าที่ผ่านมาสุขภาพอาจจะเป็นข้อจำกัดแต่ก็ซ่าในแบบที่เป็นตัวเองได้&amp;nbsp;.จะได้ใช้ทุนตำแหน่งอะไร หน่วยงานไหนยังรออาจารย์ท่านติดต่อกลับนะคะ ^^ ลุ้นๆค่ะ.สุดท้ายนี้- ขอบพระคุณ อ.เกรียงศักดิ์ มารับเข้าตึก ไปส่งถึงห้องสัมภาษณ์และ อ ยังมาส่งอีกด้วย- อาจารย์ที่ปรึกษา อ.ศิวนนท์ อ ไลน์มาทั้งวัน &amp;gt;&amp;lt; &amp;nbsp;ถามรอบที่สองล้านห้าว่าส้มฯเสร็จแล้วยัง โอเคมั้ย &amp;gt;&amp;lt;- พี่ๆ ของมูลนิธิจุฬาภรณ์ พี่แหม่ม พี่ยุ้ย พี่เดียร์ พี่ปอ พี่ติ๊ก ขอบคุณพี่เดียร์ที่ช่วยเช็คความสุภาพเรียบร้อยของสไลด์นะคะ เป็นสไลด์ที่เรียบร้อยที่สุดในชีวิตน้องเลยยย- ขอบคุณอาจารย์หมอ ญาติๆ คุณครูอาจารย์ทุกท่าน พี่ๆ เพื่อนๆ ที่ช่วยเชียร์มาตลอดเลยค่ะ.ดร.ภญ.กฤชติยาภรณ์ คงธนะวานิช (น้ำทิพย์)นักศึกษาทุนพระราชทานศาสตราจารย์ ดร.สมเด็จพระเจ้าน้องนางเธอ เจ้าฟ้าจุฬาภรณวลัยลักษณ์ อัครราชกุมารี กรมพระศรีสวางควัฒนวรขัตติยราชนารี ผ่านมูลนิธิจุฬาภรณ์ตั้งแต่ระดับปริญญาตรีถึงปริญญาเอก๒๕ สิงหาคม ๒๕๖๘",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/09/blog-post.html", "_blank");
        
      },
    },{id: "post-เมื่อ-เสาหลักแห่งดาบพิฆาตอสูร-ต้องสู้กับ-อสูรมะเร็ง",
      
        title: '🔥เมื่อ “เสาหลักแห่งดาบพิฆาตอสูร” ต้องสู้กับ “อสูรมะเร็ง” <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;🔥เมื่อ “เสาหลักแห่งดาบพิฆาตอสูร” ต้องสู้กับ “อสูรมะเร็ง”&amp;nbsp;กลยุทธ์การรักษาในโลกจริงจะเทียบกับอะไรได้บ้าง?&amp;nbsp;เสาหลัก × กลยุทธ์ฆ่ามะเร็ง&amp;nbsp;&amp;nbsp;1. 🌊 กิยู – วารี → เคมีบำบัด (Chemotherapy)👉🏻โจมตีแบบ “กวาดวงกว้าง” ไหลไปทั่วสนามรบ กำจัดศัตรูได้มาก แต่โดนเพื่อนร่วมทีมบ้าง (ผลข้างเคียง)&amp;nbsp;2. 🔥 เร็นโกคุ – เพลิง → รังสีรักษา (Radiotherapy)👉🏻เผาเป้าหมายเฉพาะจุด ทำลาย DNA ให้แตกหัก เหมาะกับการ “จี้” บริเวณสำคัญ&amp;nbsp;3. 🦋 ชิโนบุ – แมลง → Targeted Therapy / Monoclonal Antibody👉🏻พิษปลายเข็มเล็กแต่คม เล็ง “จุดอ่อนระดับโมเลกุล” เช่น HER2, EGFRตัวอย่าง: Trastuzumab (เช่น HERDARA) จับ HER2 แล้วหยุดสัญญาณการโต&amp;nbsp;4. 🌫️ โทคิโตะ – หมอก → นาโนเทคโนโลยีส่งยา (Nanomedicine/Drug Delivery)👉🏻อนุภาคเล็กแทรกซึมลึก หลอกการป้องกันของศัตรู พายาไปปลดล็อกในเป้า&amp;nbsp;5. 💥🎶 อุซุย – เสียง → ผ่าตัด (Surgery)👉🏻วางจังหวะ-ระเบิดอย่างแม่นยำ “ตัดก้อน” ออกจากสนามรบ คือการเอาศัตรูตัวใหญ่พ้นฉาก&amp;nbsp;6. 🐍 โอบะไน – อสรพิษ → ภูมิคุ้มกันบำบัด Immunotherapy (Checkpoint Inhibitors/ADCC)👉🏻ปลดเบรกภูมิคุ้มกัน ให้ T-cell กลับมามีพิษร้าย ไล่ล่าศัตรูอย่างเจาะจง&amp;nbsp;7. 💗 มิตสึริ – รัก → ฮอร์โมนบำบัด (Endocrine Therapy)👉🏻ปรับฮอร์โมนให้ศัตรู “หมดแรง” อ่อนโยนแต่ยืดหยุดการเติบโตได้ยาวนาน&amp;nbsp;8. 🪨 เกียวเม – หิน → รักษาแบบผสมผสาน Combination/Multimodal Therapy👉🏻พื้นฐานมั่นคง รวมพลังหลายวิธี: ผ่า + เคโม + ฉายแสง + ยามุ่งเป้า = ปราการเหล็ก&amp;nbsp;9. 🌪️ ซาเนมิ – วายุ → เซลล์บำบัด Cellular Therapy (CAR-T / Adoptive T Cell)👉🏻กำลังเสริมบ้าพลัง พุ่งเข้าชนตรงเป้า ฉีกกฎเดิมๆ ของสนามรบเสริมพิเศษ (ยังไม่ใช่เสาหลักแต่โหด):🧬 Antibody–Drug Conjugate (ADC) = ดาบปลายยาพิษพิเศษ (เช่น T-DM1)🎯 Radioligand/PRRT = ลูกศรเรืองรังสีจี้เป้า🌱 Anti-angiogenesis = ตัดเสบียง เลือดไปไม่ถึงก้อน#CancerEducation #Oncology #TargetedTherapy #Immunotherapy #HER2 #Trastuzumab #HERDARA #DemonSlayer #ScienceCommunication #NoCancerThailand",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/09/blog-post.html", "_blank");
        
      },
    },{id: "post-who-is-dick-on-the-top-of-caltech-library",
      
        title: 'Who is Dick? on the top of CalTech Library <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;เราคิดถึงคุณดิกกกก (อ่านชื่อแล้วคิดดีไม่ได้เลย)We miss youuuu Dickkkk! (Okay… reading that name in English, you just can’t think innocent thoughts 😂)At first glance, I thought “wait…what??”Because in slang, Dick = little Pikachu ⚡️But then Dr. Bunchar&amp;nbsp; Tanaboonsombat kindly explained with a photo…Ohhh right, it’s the nickname for Richard!&amp;nbsp;So who was the mysterious Richard that got such a bold love confession on top of our university library building?❤ None other than the extraordinary Richard Feynman ❤Nobel Prize–winning physicist, and one of the most beloved science teachers of all time.His students loved him so much that even 30 years after his passing, they hung this tribute up high on campus.&amp;nbsp;And honestly, if you’ve ever read or listened to Feynman, you’d get it—he wasn’t just brilliant, he was hilarious. You can check out Dr. Buncha’s podcast (super fun storytelling, even featuring Maxwell recently!).💡 Now, how does a biologist like me end up lost in Feynman’s world?Well… it started with me struggling to write a “statement of purpose” for my scholarship report.I love research. I don’t hate teaching. I actually enjoy tutoring friends and juniors.But if I had to give up research? I’d probably dry up and die 🌱☠️This impressed me that &#39;The two sides of the coin benefit each other.&#39;While the importance of research for a teaching professor is clear,&amp;nbsp;my question was the opposite: &#39;If I love doing research, why do I need to teach?&#39;&amp;nbsp;That’s when I remembered a talk by Prof. Jisnuson Svasti., who once flashed this slide:&amp;nbsp;“Teaching and research: Opposite faces of the same coin?”&amp;nbsp;&amp;nbsp;This is the article:&amp;nbsp;Teaching and research: Opposite faces of the same coin?&amp;nbsp;And it clicked.If you love research, teaching isn’t just an obligation.It’s a way of crystallizing ideas, throwing them like little research boomerangs 🪃 at students, and then watching those ideas grow bigger than you imagined.So, here I am. Writing scholarship reports ✍️, reading Feynman’s stories, and following Dr. Buncha’s shows like a fangirl.And somewhere along the way, I realized:Maybe I don’t have to choose between teaching and research.Maybe both sides of the coin can make life… balance. 😉#RichardFeynman #Science #Research #Teaching #CareerPath #Inspiration #AcademicLife #DrBanchaRead more: The Whispers of Biology’s content table",
      section: "Posts",
      handler: () => {
        
          window.open("https://thewhispersofbiology.blogspot.com/2025/08/who-is-dick-on-top-of-caltech-library.html", "_blank");
        
      },
    },{id: "post-เราคิดถึงคุณดิ๊กกกก-อ่านชื่อแล้วคิดดีไม่ได้เลย",
      
        title: 'เราคิดถึงคุณดิ๊กกกก (อ่านชื่อแล้วคิดดีไม่ได้เลย) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;เราคิดถึงคุณดิกกกก (อ่านชื่อแล้วคิดดีไม่ได้เลย)แวบแรกก็คือคิดดีไม่ได้Dick เป็นสแลงค์ = เจ้าปิกัสจู นั่นเองแต่คนที่ส่งภาพนี้มาให้คือ ดร.บัญชา ธนบุญสมบัติแล้ว อ บัญชา ก็อธิบายต่อไปด้วยภาพด้านล่างเลยถึงบางอ้อว่า อ๋ออออ ชื่อเล่นของ Richard!ก็ถึงว่าใครจะไปบอกรักปิกัสจูอยู่บนยอดตึกห้องสมุดของมหาลัยขนาดนี้ 😆บอกรักกันขนาดนี้ ต้องไม่ธรรมดาแน่ๆ❤คนไม่ธรรมดาที่ถูกบอกรักบนยอดตึกหอสมุด ❤คนไม่ธรรมดาคนนั้นคอ Richard ที่ชื่อดังก้องโลกวิทยาศาสตร์Richard Feynman นักฟิสิกส์เจ้าของรางวัลโนเบลFeynman คงเป็นคนที่ลูกศิษย์รักมากๆ&amp;nbsp;ภาพนี้ลูกศิษย์เค้าไปแขวนไว้บนหอสมุดหลังจากที่เค้าจากไปแล้วถึง 30 ปีเรื่องราวของ Feynman มีเล่าไว้ใน podcast โดย อ บัญชา ฟังเพลินสนุกมากเป็นนักวิทยาศาสตร์อารมณ์ดีเลยทีเดียวตามฟังไว้ได้ที่ Link นี้เลยเรื่องราวของ Feynman ดังหลุดโลกฟิสิกส์มาถึงนักชีววิทยาอย่างเราได้อย่างไร🧬เรื่องมันเริ่มมาจากต้องเขียนจดหมายรายงานตัวใช้ทุนกับคิดไว้ลางๆ สักหน่อยว่าหากถูกถามว่าอยากทำงานแนวไหน คงต้องมีคำตอบหลังจากที่คิดหนักมากแต่คิดไม่ออก วิจัยก็ชอบมากๆ งานสอนก็ดูไม่แย่ เพื่อนๆ น้องๆ ชอบให้ติวหนังสือ อาจารย์คณบดีตอน ป ตรี ก็ยังจำได้เลยว่าติวหนังสือให้เพื่อนบ่อยๆ ตอนมาเรียน ป เอก ก็ชอบแกล้ง/สอน น้องๆฝึกงานแต่ถ้าขาดวิจัย คงถึงกับเฉาตาย&amp;nbsp;ตกลงเอาไงดีแงงงงงนึกขึ้นได้ถึงสไลด์หน้าหนึ่งที่อาจารย์ชิษณุสรร สวัสดิวัตน์เคยหยิบขึ้นมาพูดช่วงทีมีข่าวเรื่องคนซื้อขายงานวิชาการเพื่อตีพิมพ์กันเยอะๆเสวนาจริยธรรมการวิจัยกับปัญหาการซื้อขายผลงาน&amp;nbsp;ตอนที่ 1 : Research &amp;amp; Publication and Ethical Issuesส่วนหนึ่งที่อาจารย์พูดในวันนั้นก็คือสไลด์ด้านล่างนี้“ทั้ง 2 ด้านของเหรียญต่างให้ประโยชน์แก่กันและกัน”เรื่องนี้น่าสนใจมาก ถึงกับต้องตามไปอ่านบทความเมื่อปี 2006 ที่อาจารย์ชิษณุสรรเขียนไว้&amp;nbsp;บทความชื่อ&amp;nbsp;Teaching and research: Opposite faces of the same coin?ท่ามกลางความสำคัญว่าทำไม&amp;nbsp;“อาจารย์ที่น่าจะสอนเป็นหลัก ก็จำเป็นต้องทำวิจัย”คำถามของเราคือตรงกันข้าม“แล้วถ้าเราชอบทำวิจัยหล่ะ เราต้องสอนเพื่ออะไร”แต่ก็มีคำตอบกลายๆ ไว้ในบทความแล้วดูเหมือนการทำวิจัยอาจจะไม่ใช่แค่การพุ่งไปข้างหน้าแต่ได้ย้อนกลับมาตกผลึกหลายๆอย่างและน่าจะดีไปกว่านั้นถ้าได้คายตะขาบความวิจัยแบบดีดๆให้ใครสักคนต่อ&amp;nbsp;แล้วค่อยๆเฝ้ามองเค้าเติบโตในวงการวิชาการนั่นเลยเป็นข้อสรุปของการเขียนจุดหมายรายงานตัใช้ทุนพร้อมๆกับเป็นจุดเริ่มต้นของการอ่านเรื่องราวของ Feynman และติดต่อ อ.ดร.บัญชา ธนบุญสมบัติเพราะอ่านประวัตินักฟิสิกส์จากหนังสือของอาจารย์มาหลายเล่มเลยล่าสุดอาจารย์ก็มี&amp;nbsp;รายการ Eureka ท่องโลกวิทยาการณ์&amp;nbsp;เล่าสนุกฟังเพลินมากเลย ล่าสุดมีตอน Maxwell ด้วย คุ้นๆชื่อหล่ะสิ ตามไปฟังกันได้เลย",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/08/blog-post_16.html", "_blank");
        
      },
    },{id: "post-ถ้าเธอติ่ง-got7-ฉันก็คงติ่งนักวิทยาศาสตร์",
      
        title: 'ถ้าเธอติ่ง GOT7 ฉันก็คงติ่งนักวิทยาศาสตร์ <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "ถ้าเธอติ่ง GOT7 ฉันก็คงติ่งนักวิทยาศาสตร์.รูปนี้เป็นงานประชุมเมื่อปลายมีนาที่ผ่านซึ่งฉันอยู่ในรูป? เปล่าเลยยยย เข้าแบบออนไลน์แงงงงแต่เป็นงานที่ฟินมาก เหมือนนักวิทยาศาสตร์รุ่นเก๋ามารวมตัวกันเหมือนไปฟังคุณปู่ คุณตาเล่าเรื่อง ดีดไม่ต้องหลับต้องนอนกันไปเลย.ในความกรี๊ดกร๊าดในผลงานว่า “เค้าค้นพบอะไร”สิ่งที่น่าทึ่งกว่าคือ “คิดมาได้ไง”.ถ้าถามว่าอยากได้อะไรที่สุดในการเรียน ป เอกคำตอบอย่างเดียวเลย “เป็น Philosopehr”หรือง่ายๆก็คือ “Thinker”แต่ดูเหมือนว่ามันจะไม่ได้มาง่ายๆแฮะ.วิธีคิดทางวิทยาศาตร์เป็นสิ่งที่สำคัญมากที่สุดอย่างนึงเราเองพร่ำถามคำถามนี้มาตลอดตั้งแต่เริ่มรู้จักวิทยาศาสตร์เริ่มตั้งแต่ตอนมีข่าวนักวิจัยหญิงจากญี่ปุ่นคนนึงตอนนั้นดังมากใช้ชุดเมดเป็นชุดแลปเก๋ๆแต่สุดท้ายก็มีข่าวออกมาว่างานนั้นลวงโลกPI ฆ่าตัวตาย แถมด้วยนักวิจัยคนนั้นผันตัวเข้าวงการ AV.ตอนเรียน ป เอก อาจารย์ที่ปรึกษาเคยตีพิมพ์ Nature Letterก็สงสัยมาตลอดว่า อาจารย์ทำยังไงถึงคิดได้อย่างนี้ตอนนั้นพอมีช่วงว่าง ถึงขั้นปริ้นเปเปอร์ของ อ ทั้งหมดมาอ่านเป็นรีมเลย แต่สุดท้ายก็ยังหาคำตอบไม่ได้อยู่ดี.วิธีคิดทางวิทยาศาสตร์มันซับซ้อนและแตกต่างจากกระบวนอย่างชัดเจนของตัวมันอยู่มากทั้งที่เราวางแผนการทดลองอย่างเป็นเหตุเป็นผลมีลำดับขั้นที่ชัดเจนราวกับช่วงที่มีแสงส่องทางอย่าง DAY SCIENCEแต่ลำดับความคิดนั้นกว่าจะตกผลึกได้กลับเต็มไปด้วยความสับสน ลังเล หมุนวนอยู่ในหัวตลอดทั้งคืนหรือ NIGHT SCIENCE.Night Science ถูกพูดถึงครั้งแรกโดย François Jacob (Noble 1965)และถูกขุดขึ้นมาอีกครั้งโดย Itai Yanai และเพื่อนเค้ามี podcast ที่เชิญนักวิจัยดังๆมาคุยเรื่องนี้ด้วยนะแต่เรื่องการคิดมันซับซ้อนเกินกว่าจะเรียกว่า How to.สิ่งหนึ่งที่พัฒนากระบวนการคิดได้มากก็คือการแก้ปัญหาจริงๆ นั่นก็คือทำวิจัยนั่นแหละและที่สำคัญคือทิศทางการวิจัยซึ่งเรื่องนี้ scientific lineage สำคัญมาก(เคยเขียนไว้ในบทความก่อนๆ).การจะคิดได้ดูเหมือนจะซับซ้อนการได้กระทบไหล่ ฟังผลงาน มีโอกาสถามคำถามคือสิ่งที่กระตุกต่อมคิดได้ชั้นเลิศเอาทุกอย่างกลับมายำรวมกัน (แบบมีหลักการ)แล้วใช้จริงกับงานวิจัยตรงหน้า.การได้ฟังเรื่องเล่า รู้จักการค้นพบ ได้เล่ามันออกจากความที่ว่าเราอินจริงๆเหมือนที่อาจารย์ปรึกษาชอบทำ 5555มันคือการสร้างแรงบันดาลใจอย่างนึง.มีคำกล่าวว่า ครูที่ดีสอนครูที่ดีขึ้น ยกตัวอย่างสุดยอดครู สร้างแรงบันดาลใจ.คงจะดีกว่าเมากันในวงการวิทย์คือเล่าให้คนนอกวงการฟังแล้วเค้าฟินไปด้วยถ้าได้ไปฟังเจ้าของรางวัลโนเบลตัวเป็นๆคงจะฟินมาก คงจะเตรียมตัวโดยขุดอ่านงานของเค้าจนตาเปียกตาแฉะรวมไปถึงบริบทการค้นพบ สิ่งที่ขาดสิ่งที่การค้นพบนี้าเติมเต็ม.และนี่คือที่มาของการสมัครงานประชุมลินเดาเยอรมันจะเรียกหามั้ยไม่รู้รู้แต่หัดภาษาเยอรมันมาสักพักละ 5555ภาพจาก Cancer Genetics: History and Consequencesจัดโดย Cold Spring Harbor Laboratory.ตอนอื่นๆ ของการบุกดงวิจัยที่เคยเขียนไว้-&amp;nbsp;ตอนที่ 0:&amp;nbsp;&amp;nbsp;สะเปะสะปะกว่าจะมาถึงเส้นทางวิจัย&amp;nbsp;-&amp;nbsp;ตอนที่ 1:&amp;nbsp;ค่ายไม่เล็กที่มีแต่ผู้ใหญ่ใจดีปูทางเด็กบ้านนอกสู่เส้นทางวิจัย-&amp;nbsp;ตอนที่ 2: ตรึงใจเด็ก ม.ปลาย เปิดโลกวิจัยที่สถาบันวิจัยจุฬาภรณ์-&amp;nbsp;ตอนที่ 3: ตะลุยดงวิจัย ทำไมวิจัยมีมะเร็งมีหลายแบบจัง-&amp;nbsp;ตอนที่ 4: รู้จักมะเร็งแบบเหนือชั้น เหนือพันธุกรรมคืออะไร&amp;nbsp;-&amp;nbsp;ตอนที่ 5: เมื่อฉันรักวิทยาศาสตร์ อย่างที่ไม่สนมะรงมะเร็งอะไรทั้งนั้น- ตอนที่ 6: ปริญญาเอก วิชาหนังชีวิต Scientific Lineage และผู้ช่วยชีวิตอย่าง Mentor&amp;nbsp;- ตอนที่ 7: ถ้าเธอติ่ง GOT7 ฉันก็ติ่งนักวิทยาศาสตร์#NamthipPhDstory&amp;nbsp;#NamthipCancerResearchJourney#NoCancer&amp;nbsp;#NoCancerTH&amp;nbsp;&amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/08/got7.html", "_blank");
        
      },
    },{id: "post-from-cell-line-to-command-line-amp-the-most-headachest-person",
      
        title: 'From Cell line to Command Line &amp; The most Headachest person 🤣 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "From Cell Line🧫 to Command Line💻&amp;nbsp;&amp;amp; The Most Headachest person🤫Me as…🧫 Wet lab = Headache 💻 Dry lab = more Headache🧫🧬💻 Hybrid Wet-Dry = The most Headache 🤯 Anyone else feel like a human ping-pong ball between the wet lab and dry lab? 😅 I made the leap from bench work to bioinformatics hoping to be the ultimate translator... turns out, sometimes I&#39;m just fluent in headache (on both sides! 😂).Seriously though, open and early communication between our wet lab wizards and dry lab dynamos is KEY! Instead of waiting for the data to land, let&#39;s chat before experiments, during analysis, and really understand each other&#39;s world. It&#39;s a two-way street, folks!Bridging this gap isn&#39;t just about fewer headaches for us hybrids; it&#39;s about getting the absolute BEST out of our amazing skills and resources on both sides. Let&#39;s talk more, collaborate better, and make some awesome discoveries together! 🚀For everyone who transform from wet to dry like me, I would recommend a book from 🎯 Ming &quot;Tommy&quot; Tang “From Cell Line to Command Line” (https://lnkd.in/gE93XdQ5)=============As a Computational Biologist, I am just one step beyond you, also still a newbie! Keep in touch!🌸 Thai language: NO CANCER FB page/Blogger (https://lnkd.in/gQa3apBc or https://lnkd.in/gTqDK8MA)🧬 English language: The Whispers of Biology (LinkedIn/Blogger)&amp;nbsp;(https://lnkd.in/gRTnrpRz or https://lnkd.in/gRe_VtUF)#Science #Research #Biotech&amp;nbsp;#LifeSciences #STEM #Bioinformatics #ComputationalBiology",
      section: "Posts",
      handler: () => {
        
          window.open("https://thewhispersofbiology.blogspot.com/2025/08/from-cell-line-to-command-line-most.html", "_blank");
        
      },
    },{id: "post-นศภandtheward-ภาคสุดท้าย-วันที่-4-6-3-3",
      
        title: '#นศภAndTheWard ภาคสุดท้าย วันที่ 4-6 (3/3) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;#นศภAndTheWard ภาคสุดท้าย วันที่ 4-6วันที่ 4&amp;nbsp;- มาถึงวอร์ดเร็วกว่าคนอื่นเลยเดินตามทีมแพทย์ราวน์ จากที่เมื่อวานพอจะตอบคำถามได้บ้างวันนี้เลยโดนถามอีก เป็นคำถามเกี่ยวกับยาจิตเวช ครัช เงิบครัช ไม่เรีรยนทีตอบไม่ถูก ตึ๊ง!!! (เห็นบรรยายสั้นแบบนี้ของจริงเงิบมากนะครัช บางทีก็คิดว่าข้า(พเจ้า)หน้าแก่ป่าวหว่ะ อาจารย์ชอบถามจัง T T มีคนบอกว่าดูมีภูมิต่ะหาก ภูมิอะไร? ภูมิแพ้กิหว๊าาา)- เจอเงิบ แบบไม่ CPR เลยเลยฮ่ะ ตอนเช้า นศภ.น้ำทิพย์ยืนคุยเคสกับพี่หมอ extent ที่ปลายตรีน เอ้ย ปลายเตียงคนไข้ว่าด้วย Bradycardia ตกบ่ายมา นศภ.น้ำทิพย์ กำลังดูยาจากคอมซึ่งที่ตั้งคอมมันติดกับเตียงนั้นอ่ะนะ อยู่ๆก็ได้ยินเสียงหญิงสาวร้องไห้ ฮึ๋ยยยย เตียงที่เรายืนปลายตรีนเมื่อเช้าเสียซะแล้ว เงิบ!!!! #RIPวันที่ 5 วันจันทร์- วันนี้พี่เภสัชไม่อยู่ฮ่ะ นศภ.น้ำทิพย์ กับพี่ นศภ.ปี 6 เลยเหมาๆ Med &amp;nbsp;reconcile รับใหม่ซะเกลี้ยง ward&amp;nbsp;- เจอ case แพ้ยา SJS ด้วย พอเปิดรูปดูในเน็ทรูปลักษณะคนไข้ไม่เหมือนกันเลย แต่ไม่กล้าเข้าไปถามไว้พรุ่งนี้แล้วกันวันที่ 6- ตอนเช้าตามเคส แพ้ยา SJS สืบอาการและการรักษามาอย่างดี จะได้หายสงสัยกันหล่ะทีนี้ พอไปถามประวัติคร่านี้ถึงบางอ้อเลยฮ่ะ อาการแสดงที่เราคิดว่ามันเกี่ยวกับ SJS ความจริงมันเกี่ยวโรคประจำตัวและการรักษาที่เค้าได้รับต่างหาก- ตอนบ่ายไปดู case TDM ของยา Phenytoin หลังจากที่เฝ้ารอมาแสนนาน&amp;nbsp;--------------------------------------------------------------------------------------สาระนิดๆการแพ้ยา เป็นสิ่งที่ไม่สามารถคาดเดาได้ว่าจะเกิดกับผู้ป่วยคนไหนฮ่ะ เพราะงั้นอย่าด่าหมอ ด่าเภสัชเลยฮ่ะ สิ่งที่ทำได้คือเมื่อเกิดอาการแพ้ เช่น ผื่น ตาบวม ให้รีบกลับมาพบแพทย์ หรือจะไปปรึกาาเภสัชกรร้านยาก็ได้ฮ่ะ แต่!!!อาการที่เหมือนอาการแพ้ท้องเช่นคลื่นไส้ อาเจียน นั่นไม่ได้แปลว่าแพ้ยานะฮ่ะ มันไม่เหมือนกัน นั้นเรียกว่าผลข้างเคียงฮ่ะ สงสัยเรื่องยาถามหาเภสัชกรฮ่ะ#นศภAndTheWard ก็จบลงแค่นี้&amp;nbsp;... ดูเหมือนข้าพเจ้าจะหรรษากับการอยู่วอร์ดนะฮ่ะ ความจริงตอนแรกไม่ชอบวิชาจำๆซึ่งเป็นวิชาที่ต้องใช้ที่ ward เลยฮ่ะ แต่พอเห็นคนไข้ยิ้มข้าพเจ้าก็ Happy ฮ่ะ รู้อยากหนังสือให้จำได้ จะได้เป็นประโยชน์ต่อทีมแพทย์และผู้ป่วยมากกว่านี้ฮ่ะ &amp;nbsp;อยู่โรงพยาบาลข้าพเจ้าลั้ลลาและ Happy กับ Ward มากจนมีพี่ๆถามว่าเรียนสายบริบาลเภสัชรึเปล่า พอรู้ว่าไม่ก็โดนถาว่า จะย้ายสายรึป่าว &amp;nbsp;ข้าพเจ้าตอบอย่างมั่นใจเลยว่าข้าพเจ้าชอบ science มากกว่า ^__^ &amp;nbsp;แต่ข้าพเจ้าก็ชอบรอยยิ้มคนไข้นะ และข้าพเจ้าก็ชอบงานที่ท้าทายด้วย-- ลาก่อนฮ่ะโรงพยาบาลเราอาจจะได้เจอกันอีกตอนทำงานหรืออาจจะไม่เจอกันอีกเลย ^___^ บทความสวยๆของการฝึกงานทั้งหมดนี่จะอยู่ใน progress ส่งเจ้าของทุนที่ส่ง นศภ.น้ำทิพย์เรียนอยู่ทุกวันนี้ฮ่ะ ไม่กี่คนเท่านั้นที่จะได้อ่าน และแน่นอนว่าคงไม่เผยแพร่สู่สาธารณะ อิอิ...ด้วยความกระตือรือร้นเท่าที่จะทำได้นศภ.น้ำทิพย์เขียนเมื่อ 15 สิงหาคม 2558",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/09/andtheward-4-6-13.html", "_blank");
        
      },
    },{id: "post-นศภandtheward-นศภandthedrugstore-ตอน-มาม่าวันแม่-2-3",
      
        title: '#นศภAndTheWard #นศภAndTheDrugStore ตอน #มาม่าวันแม่ (2/3) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;#นศภAndTheWard #นศภAndTheDrugStore ตอน #มาม่าวันแม่&amp;nbsp;จากประโยคที่ค้างไว้ว่า &quot;ยังไงก็ขายให้ไม่ได้ค่ะพี่ พาแม่ไปโรงพยาบาลดีกว่านะคะ&quot; เรื่องแรกนี้คล้ายกับเรื่องมาม่าดัง ๆ ที่ลูกค้าจะมาซื้อยาให้ได้ และอีกเรื่องก็คือ &quot;#เค้าเป็นเลือดเนื้อของพี่นะ พี่จะทำเค้าได้ลงเหรอ&quot; ที่ทำเอา นศภ. และพี่เภสัชถึงกับอึ้งกันไปทั้งคู่ เรามาดูกันว่าเรื่องราวเป็นยังไงบ้างเคสแรก: &quot;ยังไงก็ขายให้ไม่ได้ค่ะ&quot;เป็นเรื่องของสองนักศึกษาเภสัชหน้าตาจิ้มลิ้ม ที่มีแม่ (อายุประมาณ 70 ปี) และลูก (อายุประมาณ 40 กว่าปี) เข้ามาในร้านลูก: &quot;ซื้อยาเบาหวานให้แม่ค่ะ ยาเป็นแผงเงิน ๆ เม็ดสีขาว&quot;นศภ.: (หยิบยาแผงฟอยล์สีเงินเม็ดขาวที่มีนับไม่ถ้วนมาให้ดู) &quot;ลักษณะคล้ายอันไหนคะ ปกติคุณป้ากินยังไง รับยาที่ไหนอยู่ ขาดยานานเท่าไหร่คะ&quot;ลูก: (เริ่มไม่แน่ใจและตอบไม่ถูก) &quot;เอาแผงเงิน ๆ แบบนี้แหละค่ะ เอาไปให้แม่กินก่อน&quot; พร้อมพยายามพูดสารพัดเพื่อให้ขายยาให้ได้ ในขณะที่คุณแม่ก็ช่วยพูดด้วยสีหน้านิ่ง ๆนศภ. (น้ำทิพย์) เริ่มหันหน้ามองเพื่อนและคิดในใจว่า &quot;เอาไงต่อดีวะ? ฉันไม่มีทางขายให้แน่ ๆ&quot; แล้วสายตาก็เหลือบไปเห็นรอยคล้าย ตะขาบเกาะบนหน้าอก ของผู้เป็นแม่ จึงได้จังหวะถามเพิ่มนศภ. (น้ำทิพย์): &quot;คุณป้ามีโรคประจำตัวอะไรบ้างไหมคะ&quot;แม่: &quot;เคยผ่าตัดหัวใจ&quot;นศภ. (น้ำทิพย์): &quot;อ๋อ! เป็นโรคหัวใจเหรอคะ? งั้นคงขายยาให้ไม่ได้นะคะป้า เพราะไม่มีตัวอย่างยาหรือซองยามาเลย ยาเบาหวานมีเยอะมาก ถ้ากินผิดอันตรายมากนะคะ ยิ่งคุณป้าเคยผ่าตัดหัวใจด้วย ถ้ามียาเดิมมาจะยังพอขายให้ได้ค่ะ&quot;สองแม่ลูกบ่นพึมพำแล้วก็เดินออกจากร้านไป นศภ. (น้ำทิพย์) รู้สึกโล่งใจเหมือนชนะ แต่นี่เป็นเพียงแค่จุดเริ่มต้น...เช้าวันถัดมา สองแม่ลูกกลับมาอีกครั้ง!ลูก: &quot;พี่เอายามาให้น้องดู&quot; (ลูกสาวยื่นถุงให้พร้อมยาที่เป็นเม็ดสีขาวแค่ครึ่งซีก) &quot;ยาของแม่ที่เคยกิน ซองลิงมันขโมยไปแล้ว เหลือแค่นี้&quot;นศภ. (น้ำทิพย์): (หยิบยาครึ่งซีกนั้นมาดู) ยาลักษณะกลม แบน มีตัวอักษรเขียนว่า RA นศภ. เลยค้นถุงยาต่อและเจออีกครึ่งหนึ่ง เมื่อนำมาต่อกันก็อ่านได้ว่า PARAนศภ. (น้ำทิพย์): (ยื่นเม็ดยาให้ลูกค้าดู) &quot;พี่ลองดูนี่สิคะ นี่ต่อกันแล้วได้คำว่า PARA มันคือยาพาราลดไข้นะคะ ไม่ใช่ยาเบาหวาน&quot;ลูก: &quot;แม่ ๆ (พูดภาษาใต้) นี่มันยาพารา ไม่ใช่ยาเบาหวาน แม่หยิบผิดอีกแล้ว&quot; (ว่าแม่ตัวเอง)นศภ. (น้ำทิพย์): ได้แต่ยิ้มในใจอย่างสะใจลูก: &quot;งั้นพี่ซื้อยาเบาหวานให้พ่อ เอาแบบที่น้องให้ดูเมื่อวาน&quot;นศภ. (น้ำทิพย์): (เริ่มสงสัยในเจตนา) &quot;พ่อพี่น้ำหนักเท่าไหร่คะ สูงเท่าไหร่ เป็นเบาหวานมานานยัง&quot;เมื่อได้ข้อมูล นศภ. ก็ประมวลผลและรู้สึกว่าคำตอบของลูกสาวไม่น่าเชื่อถือ จึงตอบไปว่า &quot;พี่ต้องเอาตัวอย่างยาที่ลุงเคยทานมาให้ดูก่อนนะคะ หนูขายไม่ได้ค่ะ&quot;ในที่สุดสองแม่ลูกก็บ่นกันเองจนรู้ว่าแท้จริงแล้วคือจะซื้อยาไปให้แม่กินนั่นแหละ นศภ. จึงยืนยันคำเดิมอย่างหนักแน่นว่า &quot;ยังไงก็ขายให้ไม่ได้ค่ะพี่ พาแม่ไปโรงพยาบาลดีกว่านะคะ&quot; และอธิบายเรื่องความอันตรายของยาเบาหวานกับโรคหัวใจให้ฟังจนผู้เป็นแม่ยอมไปโรงพยาบาลในที่สุดเคสที่สอง: &quot;#เค้าเป็นเลือดเนื้อของพี่นะ&quot;เคสนี้เป็นเรื่องของการทำแท้ง บ่ายวันหนึ่งมีผู้หญิงคนหนึ่งเข้ามาซื้อที่ตรวจครรภ์ และวันรุ่งขึ้นเธอก็กลับมาถามหายาขับเลือดลูกค้า: &quot;น้องมียาขับเลือดไหม&quot;พี่เภสัช: &quot;ไม่มีค่ะพี่&quot; (นศภ. ที่ฝึกงานถึงกับอึ้ง)ลูกค้า: &quot;เมื่อวานพี่มาซื้อที่ตรวจครรภ์ มันขึ้น 2 ขีด&quot;พี่เภสัช: &quot;หนูก็บอกพี่หลายครั้งแล้วเรื่องยาคุมฉุกเฉิน...&quot; (หมายความว่าเธอเคยมาปรึกษาเรื่องยาคุมฉุกเฉินแล้ว)ลูกค้าก็พูดต่อว่าเลี้ยงลูกไม่ได้แล้ว เพราะมี 4 คนแล้วพี่เภสัช: &quot;เค้าเป็นเลือดเนื้อของพี่นะ พี่จะทำเค้าได้ลงเหรอ&quot; #พี่กำลังจะเป็นฆาตกรฆ่าคน เลยนะ ถ้าลูกคนนี้เกิดมาเป็นลูกที่เลี้ยงดูพี่ เป็น #ลูกหัวแก้วหัวแหวน ของพี่ล่ะ&quot;ลูกค้าเดินออกจากร้านไปด้วยน้ำตาที่คลอเบ้า นศภ. ทั้งคู่ต่างก็ชื่นชมพี่เภสัชในใจว่าสุดยอดมาก เพราะพี่เภสัชสามารถรับมือกับสถานการณ์นี้ได้อย่างดีเยี่ยมสาระดี ๆ เรื่องการคุมกำเนิดการคุมกำเนิดมีหลายวิธี ทั้งยาคุมแบบกินทุกวัน ยาฉีด แผ่นแปะคุมกำเนิด และถุงยางอนามัยถุงยางอนามัย เป็นวิธีที่ดีที่สุด เพราะนอกจากจะคุมกำเนิดแล้ว ยังป้องกันโรคติดต่อทางเพศสัมพันธ์ได้ด้วย แต่ก็ไม่ได้คุมได้ 100%ยาคุมฉุกเฉิน ไม่ใช่ทางเลือกที่ดีที่สุด แต่เป็นวิธีที่สะดวกที่สุด ประสิทธิภาพต่ำกว่ายาคุมปกติ และอาจส่งผลกระทบต่อระดับฮอร์โมนและรอบเดือนในระยะยาวได้ แต่ถ้าฉุกเฉินจริง ๆ ก็ควรใช้ไม่ว่าจะใช้วิธีคุมกำเนิดแบบไหนก็ตาม สามารถปรึกษาเภสัชกรที่ร้านยาได้เสมอ เภสัชกรไม่ตัดสินคุณ แต่กลับยินดีที่ได้ให้คำแนะนำมากกว่าการมาปฏิเสธเรื่องยาทำแท้งข้อคิดสุดท้าย: ป้องกันไว้ดีกว่านะคะ คิดถึงอนาคตให้มาก ๆ ไม่ใช่แค่ความสนุกชั่วคราว...เขียนเมื่อ 14 สิงหาคม 2558",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/08/andtheward-andthedrugstore-22.html", "_blank");
        
      },
    },{id: "post-ดาบพิฆาตมะเร็ง-herdara-ปราณมุ่งเป้า",
      
        title: 'ดาบพิฆาตมะเร็ง: HERDARA ปราณมุ่งเป้า 🔥 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "ดาบพิฆาตมะเร็งก็มา&quot;ปราณมุ่งเป้า&quot; ปราบ HER2&amp;nbsp;&amp;nbsp; ตัวละคร- ชื่อ: เคนจิ สลาโมน (Kenji Slamon)- ตั้งชื่อตาม Dennis Slamon ผู้บุกเบิก Trastuzumab- “Kenji” = ความแข็งแกร่ง + ญี่ปุ่น- “Slamon” = เชื่อมกับนักวิทยาศาสตร์จริง- สมญา: เสาหลักชีวโมเลกุล (Hashira of Biomolecules)- บทบาท: นักรบที่ใช้ “ปราณมุ่งเป้า” ในการปราบมะเร็งชนิด HER2-positive========== ปราณปราบมะเร็ง (HER2 Breathing)ปราณนี้เลียนแบบ กลไกการรักษาด้วยยามุ่งเป้า (targeted therapy)สร้างพลังคลื่นพลังงานเล็งเป้าหมายที่ “ตัวรับ HER2” โดยตรงทำให้การส่งสัญญาณที่ผิดปกติถูกยับยั้ง → อสูร (เซลล์มะเร็ง) หยุดการเติบโตและแพร่กระจาย======== อาวุธ- ดาบโมเลกุล (Molecular Blade): ใบดาบแกะลายโครงสร้างโปรตีน HER2- โล่แอนติบอดี (Antibody Shield): จำลองมาจาก Trastuzumab/HERDARA ใช้ป้องกันการโจมตี และสะท้อนพลังกลับใส่อสูร======== กระบวนท่า1. กระบวนท่าที่หนึ่ง: ฟันเจาะจุดรับสัญญาณ (Receptor Cleave)→ โจมตีตรงจุด HER2 receptor ทำให้สัญญาณการเจริญเติบโตหยุดชะงัก2. กระบวนท่าที่สอง: เกราะยับยั้งการแบ่งตัว (Cell Division Seal)→ ใช้โล่แอนติบอดีสร้างกำแพง ป้องกันการแบ่งเซลล์และแพร่กระจาย3. กระบวนท่าที่สาม: ดาบพิฆาตการส่งสัญญาณ (Signal Termination Strike)→ ตัดขาดการส่งสัญญาณ PI3K/AKT และ MAPK pathway ของอสูร4. กระบวนท่าที่สี่: พลังเสริมภูมิคุ้มกัน (Immune Boost Surge)→ เรียกการโจมตีจาก “นักรบภูมิคุ้มกัน” (immune cells) เข้าล้อมอสูร เหมือน ADCC ของ Trastuzumab5. กระบวนท่าที่ห้า: เฮอร์ดาราพิฆาต (HERDARA Final Suppression)→ ท่าไม้ตาย ใช้พลังทั้งหมดรวมกัน ปิดกั้น HER2 receptors ทุกตำแหน่งจนสิ้นฤทธิ์============ Lore &amp;amp; เนื้อเรื่อง- เคนจิ สลาโมน เคยเป็นนักวิจัยที่สูญเสียครอบครัวให้กับ “อสูรมะเร็ง HER2”- เขาศึกษาและฝึกฝนจนเข้าใจกลไกชีววิทยาของโรค- แปรเปลี่ยนความรู้ทางการแพทย์ → เป็น “ปราณปราบมะเร็ง”- กลายเป็นเสาหลักที่ใช้ วิทยาศาสตร์และพลังจิตใจ ปราบอสูรที่เคยคร่าชีวิตผู้คนมากมาย",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/08/herdara_14.html", "_blank");
        
      },
    },{id: "post-นศภandtheward-ตอน-มาม่าวันแม่-1-3",
      
        title: '#นศภAndTheWard ตอน #มาม่าวันแม่ (1/3) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;#นศภAndTheWard ตอน #มาม่าวันแม่&amp;nbsp;เนื่องในโอกาสวันแม่ ข้า(พเจ้า)จะนำเสนอ #นศภAndTheWard ตอน #มาม่าวันแม่ มุมมองของ นศภ.ที่มีต่อผู้ป่วยซึ่งมียศศักดิ์ในครอบครัวว่า&quot;แม่&quot;...เรื่องดราม่ามีมากมายฮ่ะ เล่าเป็น case ไปแล้วกัน...&amp;nbsp;เรื่อง... แม่ ลูก ผูกพันธ์กับ ถุงลมโป่งพอง(COPD)&amp;nbsp;&amp;nbsp; &amp;nbsp;&amp;nbsp;&amp;nbsp; &amp;nbsp;Pt ญ อายุประมาณ 60 กว่า รายหนึ่งนอน รพ อาการหอบเหนื่อย เพราะเป็นโป่งพองมานาน 10 ปี ที่ต้องนอน รพ เพราะหายใจหอบเหนื่อด้วยโรคกำเริบ พ่นยา(แบบครอบจมูกอ่ะ nebulizer)  ใส่สายให้ออกซิเจนแบบเสียบจมูก(O2 cannular) หายใจหอบเหนี่อยดูประวัติไม่สูบบุหรี่ ไม่มีอะไรที่เสี่ยงเลย แต่....ประวัติอย่างหนึ่งคือ &quot;ลูกชายสูบบุหรี่ในบ้านทุกวันมาเป็นสิบๆปี&quot; #จบข่าว นศภ. ตามชาทแล้วเงิบ ป้าทั้งหอบ ทั้งไอ น่าสงสาร&amp;nbsp;&amp;nbsp;&amp;nbsp;เรื่อง....ยาแม่แก่ใครจะดูแลcase หลาย case ใน ward เป็น ญ สูงอายุ(แบบสูงมาก 70 80 กว่า) พอหมอราวน์ถามว่า &quot;ยายยยยยยย.....ใครเอายาให้ยายกิน&quot; (เสียงอาจารย์หมอลอยเข้ามาในหูขณะพิมพ์เลย ฮึ๋ยยย) เงียบ คนเฝ้าไข้ตอบไม่ถูก โยนไปให้ลูกคนโน่นที คนนี้ที ยายบางคนขาดยาเป็นปีๆ บางคนไม่เคยตรวจสุขภาพเลย โรคเงียบเพียบ ทั้งเบาหวาน ความดัน ไขมัน วันนี้มาด้วยสมองขาดเลือด(Stroke) ปากเบี้ยว แขนขาอ่อนแรง บางคนนอนใส่เครื่องช่วยหายใจ (ET tube) สายพะรุงพะรัง บางคนถึงขั้นต้องให้อาหารทางสายยาง(NG tube) ดูมันเจ็บและทรมานมากอ่ะ มันเจ็บจนคนไข้หลายคนพยายามดึงออก T____T ราวน์ที่น้ำตาจิไหล  มาม่าเยอะไป ไวไวควิก ไม่มีเลยเจอเรื่องชั่วร้ายมาเยอะ มาดูเรื่องดีดีบ้าง&amp;nbsp;&amp;nbsp;ลูกที่น่ารักก็มีเยอะ และแม่ที่น่ารักก็มีเยอะ ใน ward มีคนไข้ก็ต้องมีคนดูแล รพ รัฐที่น้อยนัก คนไข้เองก็แทบจะขี่คอกันนอน รพ แต่กระนั้นก็มีคนไข้เฝ้าอยู่ร่ำไป แล้วคนเฝ้านอนที่ไหน&amp;nbsp;&amp;nbsp;...ตามทางเดิน ปูเสื่อ กางมุ้ง บางคนนอนใต้เตียงคนไข้ บางคนฟุบบนเตียง ป้อนข้าว ป้อนยา เช็ดตัว เปลี่ยนเสื้อผ้า หลายเตียงที่แม่มาเฝ้าลูกทุกวัน ไปward กี่ทีเจอตลอด และเจอบ่อยเหมือนกันที่ลูกมาเฝ้าแม่ ตั้งแต่เด็กอนุบาลตัวน้อยๆแอบไปนั่งบนเตียงกับแม่ ไปจนถึงลูกๆวัยผู้ใหญ่ แม่บางคนอ้อนวอนหมอเพื่อจะขอกลับบ้านพร้อมน้ำตาคลอเบ้าด้วยเหตุผลที่ว่า &quot;ลูกที่มาเฝ้าหนูจะกินอะไรหล่ะหมอ&quot; ข้าพเจ้านึกไม่ออกว่าจะกลับบ้านได้ยังไง อาการไม่ใช่น้อยๆเลย (Problem list มาเป็นทาง) แถม ญ ผอมแห้งคนนี้ยังมาพร้อมกับโรคประจำตัวที่คาดไม่ถึง ป้องกันไม่ได้ เพราะสาเหตุยังไม่รู้เลย...CA brain หรือมะเร็งสมอง แน่นอนว่าเมื่อศูนย์บังคับบัญชารวน ทุกระบบในร่างกายก็พลอยวุ่นไปด้วย&amp;nbsp;....เรื่อง #มาม่าวันแม่  ในโรงพยาบาล คงจบแค่นั้น ...ราวน์ไปน้ำตาจะไหลทั้งซึ้ง ทั้งสงสาร&amp;nbsp;...เรื่องมาม่าเกี่ยวกับแม่ในร้านยาก็มีอยู่เหมือนกัน ประโยคเด็ด หึหึ &quot;ยังไงก็ขายให้ไม่ได้ค่ะ  พี่พาแม่ไป รพ ดีกว่านะคะ&quot; &quot;เค้าเป็นเลือดเนื้อของพี่นะ พี่จะทำเค้าได้ลงเหรอ&quot; เงิบซะทั้ง นศภ. ทั้งพี่เภสัชแหล่งฝึก&amp;nbsp;มามีสาระสักนิด ...เมื่อไหร่ที่ควรตรวจสุขภาพ...โดยส่วนตัวคิดว่าถ้าอายุ 40 ปี ขึ้นไปก็ควรไปตรวจได้แล้ว โดยเฉพาะอย่างยิ่งคนที่มีความเสี่ยงต่อโรคความดันโลหิตสูง เบาหวาน ไขมันในเลือดสูง โรคพวกนี้ภัยเงียบพาลจะล้มหมอนนอนเสื่อ เอาได้ง่าย&amp;nbsp;&amp;nbsp;สำคัญเพศ ญ โรคที่ยอดฮิตคือ มะเร็งเต้านม อันนี้ตรวจเองได้ อีกโรคคือมะเร็งปากมดลูก ควรตรวจตั้งแต่อายุ 35 ปี นะจ๊ะ&amp;nbsp;...ข้อมูลการตรวจและคัดกรองความเสี่ยงลองหาใน Internet โดยใช้คำค้นว่า &quot;คัดกรอง เบาหวาน&quot; &quot;คัดกรอง ความดันโลหิตสูง&quot;&amp;nbsp;#จบข่าว ก็ข้าอยู่ ward สตรีนี่นา กิกิติดตามงานเขียนเมาๆ โดย นศภ.รั่วๆ ได้ตาม hashtag #นศภAndTheWard&amp;nbsp;เขียนเมื่อ 13 สิงหาคม 2015&amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/08/andtheward.html", "_blank");
        
      },
    },{id: "post-ช่วงรอยต่อก่อนจะเรียนต่อปริญญาเอก",
      
        title: 'ช่วงรอยต่อก่อนจะเรียนต่อปริญญาเอก📚 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "ช่วงรอยต่อก่อนจะเรียนต่อปริญญาเอก📚ระยะเวลา 1 ปีกว่าๆ ที่ตัดสินใจจะทำงานก่อนเรียนต่อ ทั้งเพื่อรอทุนเรียน และจัดการเรื่องที่บ้านให้ลงตัว ตัวเอง ทุนเรียนค่อนข้างเรียบร้อย การสอบเข้าผ่านไปด้วยดี มีเงินเก็บสำรองแม้จะไม่มากเพราะนอกจากเรียนก็ต้องมีส่วนที่ใช้ในครอบครัว ถ้าไม่ทำงานก่อนคงจอดไม่ต้องแจว เพราะค่าใช้จ่ายในการเดินการ สอบ ฯลฯ ก็เยอะอยู่&amp;nbsp;ได้ลองหาอาชีพเสริมเผื่อไว้ทำตอนเรียน ลองขายของใน ebay ig และก็ศึกษาเรื่องผู้แนะนำการลงทุน คงจะดีถ้าดูแลเงินอันน้อยนิดของตัวเองได้มีประโยชน์สูงสุด และคงดีด้วยถ้าแนะนำเพื่อนในก๊วนได้ด้วย  ใครจะใช้บริการก็บอกได้ค้าบ ช่วงทำงานพยามไม่ใช้ชีวิตหวือหวา ไม่กล้ากินอะไรแพงๆ ใช้อะไรเว่อร์ๆ จะซื้อบ้างก็ของที่อยากได้มานานชิ้นสองชิ้น กลัวชีวิตติดหรูเดี๋ยวจะลำบากตอนเรียน 5555+ ความป่วยเยอะอยู่เพราะติดหวัดบ่อยมากจากร้านยา แต่มันก็ทำให้เรารู้จักจัดการกับความคาดหวัง บางทีมากไปก็ไม่ดี น้อยไปก็ไม่ได้แล้วแต่ช่วงจริงๆ ถ้าป่วยก็ต้องพักจะซ่าก็ไม่ควร แฮร่ๆ&amp;gt;&amp;lt;น้องสาว ตั้งใจจะอยู่เป็นเพื่อนนางในช่วงวิกฤตสอบเข้ามหาลัย ให้นางได้เห็นหน้าตอนตกมัน ช่วยตัดสินใจในบางเรื่อง เตรียมของ เตรียมตัวเข้าเรียน นางก็ได้คณะแพทย์สมใจอยาก และแอบป้ายยานางมาวิ่ง หวังจะเป็นสิ่งคลายเครียด(stress management) ของนางตอนเรียนน้องชาย นางเป็นเด็กพิเศษ ก็พยายามพาไปหาหมอ ทำกายภาพ ดีใจที่ปั่นจักรยานแบบล็อคเท้าได้ผล แถมน้องชอบด้วย พยายามพาออกที่สาธารณะมากขึ้น ทั้งห้าง สวนสาธารณะมันก็ได้บ้างล่มบ้าง แต่ที่ชอบและบ่นถึงเสมอคือวัดที่เชียงใหม่ เราลุ้นกันทั้งบ้านว่าการขึ้นเครื่องจะมีปัญหามั้ยปรากฏว่าทำตาหวานใส่แอร์ตลอด 5555+ ผ่านฉลุย ไว้จะเก็บตังค์ให้ไปเที่ยวอีกนะ&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;ป๊า พยายามเรื่องสุขภาพกันมาตลอด จักรยานที่ทำราวตากผ้ามา 3-4 ปี กับน้ำสะสมที่พุ่งตลอด วันนึงถึงกับเตี๊ยมกับหมอ แล้วป๊าก็ยอมเปลี่ยนพฤติกรรม ดีใจมากเว่อร์ น้ำตาลสะสมก็ลด แถมคึกทั้งวิ่งทั้งปั่น(แบบค่อยเป็นค่อยไป)่หม่าม๊า ได้เงินเดือนแรกก็ซื้อของที่ม๊าอยากได้ที่สุด(คืออะไรไปถามเอาเอง 555+ ใบ้ว่าใช้ทุกวันและคงกระพันแสนนาน) จัดการตรวจสุขภาพที่เสี่ยงทุกชนิดทั้ง pap smear, ส่องกล้องลำไส้ใหญ่ จักรยานพร้อมหมวกเตรียมไว้ให้ และที่สำคัญคือหนี้สิน อะไรที่ดอกเบี้ยสูงๆก็กู้ใหม่มาปิดให้ เอาจริงไม่อายเลยที่มาเล่าเรื่องแบบนี้ ไม่ใช่ทุกครอบครัวจะพร้อมตั้งแต่ต้น ค่าใช้จ่ายที่แต่จะคนจะโตจนจบมาทำงานก็ไม่นิดๆ ถ้าวัยเรียนคนไหนผ่านมาอ่าน ตั้งใจเรียนและประหยัดไว้นะคะ บางทีพ่อแม่อาจจะไม่เคยคุยเรื่องหนี้สินเพื่อให้เราสบายใจ&amp;nbsp;&amp;nbsp;ก๋ง อาม่า  ได้รับปริญญาสมใจแล้วนะ 5555+ ทิพย์กำลังพยายามในสิ่งที่ก๋ง อาม่าอยากได้มากที่สุดในรอบปีสองปีนี้ จะสำเร็จหรือเปล่าก็ไม่รู้ แต่ได้พยายามเต็มที่และจะทำต่อไปฮ่ะ ^^&amp;nbsp;--- ดูเป็น 1 ปีกว่าที่คุ้มค่านะ ---กลับเข้าสู่โหมดนักเรียน พร้อมๆกับโหมดประหยัดตังค์ &amp;gt;&amp;lt;่&amp;nbsp;เขียนเมื่อ 13 สิงหาคม 2018&amp;nbsp;&amp;nbsp;&amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/08/blog-post_13.html", "_blank");
        
      },
    },{id: "post-️แนะนำการติดต่ออาจารย์-งานวิชาการชั้นปีและการทำหน้าที่-️",
      
        title: '☎️แนะนำการติดต่ออาจารย์ งานวิชาการชั้นปีและการทำหน้าที่ ☎️ <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "แนะนำการติดต่ออาจารย์ งานวิชาการชั้นปีและการทำหน้าที่***การติดต่ออาจารย์ (ตามแนวทางตัวเองนะ)...ที่จริงแล้วเรื่องนี้แล้วแต่อาจารย์แต่ละท่าน ว่าจะสไตล์ไหน หรือ strict ในการติดต่อแค่ไหน วิธีที่จะเขียนต่อไปนี้โดยส่วนตัวคิดว่าเป็นวิธีที่จะ safe ตัวผู้ที่ติดต่อเองมากที่สุด...นัดอาจารย์ล่วงหน้าก่อนจะไปพบ วิธีการนัดที่แนะนำได้แก่ นัดกับอาจารย์เอง, นัดโดยโทรนัดผ่านโทรศัพท์ภายใน(คือโทรศัพท์ที่ทำงานอ่ะไม่ใช่โทรศัพท์มือถือ), นัดผ่าน e-mailการติดต่ออาจารย์ผ่านเบอร์โทรศัพท์มือถือ ควรจะได้เบอร์มือถือมาโดยขอจากอาจารย์เอง หรือถ้าขอจากคนอื่นควรแน่ใจก่อนว่าอาจารย์ยินดีจะให้ติดต่อโดยช่องทางนี้ ควรติดต่ออาจารย์ในเวลาราชการ ไม่ว่าจะโทรหรือไปพบ โดยเวลาว่างของอาจารย์แต่ละท่านมักจะมีในเว็บไซต์ของมหาลัย-&amp;nbsp;ถ้า ม.วลัยลักษณ์ ก็ link นี้ : http://202.28.69.99/registrar/teach_time.asp?avs145450732=1การโทรติดต่ออาจารย์ ควรจะบอกชื่อ นศ.ที่ติดต่อ และเรื่องที่จะติดต่อก่อน เช่น&amp;nbsp;“สวัสดีค่ะอาจารย์....ไหมคะ ไม่ทราบอาจารย์สะดวกคุยไหมคะ หนู นศภ.งามฟรุ้งฟริ้ง กุ๊งกิ๊งสุดสุด นศภ.ชั้นที่ 4 ขอต่อติดอาจารย์เรื่อง............”  วิธีที่อาจารย์หลายท่านสะดวกที่สุดอาจจะเป็น e-mail เช่นอาจารย์ที่ยุ่งมากๆ อาจารย์ผู้ใหญ่ อาจารย์ในสถาบันวิจัย อาจารย์ที่ต้องติดต่อด้วยความสุภาพอย่างสูง การหา mail อาจารย์ก็หาได้จากเว็บมหาลัย-&amp;nbsp;สำหรับ ม.วลัยลักษณ์ link นี้ http://202.28.68.27/wpd/source/person1.phpการติดต่อทาง e-mail ก็คล้ายๆกันโทรศัพท์ แต่อาจจะมีรูปแบบนิดนึงเพื่อการอ่านงานและเป็นทางการหน่อย เช่นมี เรียน อาจารย์..... ,เรื่องที่ติดต่อ, คำลงท้าย อาจจะมี signature ของผู้ส่งที่มีเบอร์โทรติดต่อกลับไว้ด้วย ถ้าจะให้เจ๋งหน่อย signature เป็นภาษาอังกฤษก็จะดี เผื่อติดต่อต่างประเทศ 555เนื้อหาการเขียน mail ก็แล้วแต่วาทะศิลป์แต่ละคน ประมาณนั้น อันนี้เดี๋ยวจะแนบรูปให้ดูอีกครั้งหนึ่งแต่การติดต่อผ่าน e-mail มหาลัยบางทีก็กลัวส่งไปไม่ถึง(เคยเจอมาแล้ว) โดยทั่วไปอาจจะรู้ได้จากการที่ไม่มี e-mail เด้งกลับมา(บางที mail มหาลัยก็แปลกๆ ไม่มีเด้งกลับแต่ก็ส่งไม่ถึง) เพราะงั้นเห็นว่าติดต่อไปนานแล้ว หรือเจอตัวอาจารย์ก็ถามซะหน่อยว่า “อาจารย์ได้รับ e-mail หนูแล้วยังคะ” อย่างไรก็ตามควรเผื่อเวลาสำหรับติดต่อทางช่องทางนี้ไว้ด้วย☎️ งานวิชาการชั้นปีตำแหน่งวิชาการชั้นปี คือ นศ.ที่เป็นตัวแทน นศ.ในชั้นปีเพื่อติดต่อประสานงานระหว่างนักศึกษากับอาจารย์ เพื่อประโยชน์ในของรายวิชาต่างๆหน้าที่โดยทั่วไปติดต่อเมื่อเวลาเรียนหรือเวลาสอบมีปัญหา เช่น ขอเลื่อนสอบเมื่อตารางสอบชนกันอย่างจัง ซึ่งดูแล้วไม่น่าอ่านหนังสือทันแน่ๆ เป็นปฏิทินชั้นปีจำเป็น ควรมีปฏิทินที่ update การเลื่อนเรียนติดตัวอยู่เสมอ ถ้าอาจารย์ เพื่อน หรือ พี่ TA ถามต้องตอบได้ ดูแลอาจารย์พิเศษ ตั้งแต่รับอาจารย์ ขอบคุณอาจารย์ ไปจนกระทั่งรอส่งอาจารย์กลับจัดหาหน้าม้าตั้งคำถามในคาบเรียนของอาจารย์พิเศษ หรือถ้าหาไม่ได้ก็ต้องเป็นหน้าม้าเอง แฮะๆ ดูเรื่องลงทะเบียนเรียน อาจจะตามจิกบ้างกรณีวันสุดท้ายแล้วนางยังไม่ลง อันนี้จะมีวิธีเช็คได้โดยเปิด ces กดค้นหารายวิชา แล้วก็ดูว่าลงครบจำนวนคนมั้ย (มันมีคนลืมทุกเทอมเหอะ)ดูประกาศเรื่องประเมินอาจารย์ ถ้าไม่ประเมินปัญหาเรื่องการดูเกรดจะตามมา (แต่ก็มีคนลืมทุกเทอมเช่นกัน แฮะๆ)นอกนั้นก็ช่วยเพื่อนที่ต้องการความช่วยเหลือในการติดต่ออาจารย์เป็นกรณีไป&amp;nbsp;&amp;nbsp; &amp;nbsp;3. คุณสมบัติพูดกับเพื่อนและอาจารย์รู้เรื่อง มีวาทะศิลป์ และศิลปะในการอ้อนวอนจะดีมาก 55555สิงสถิตอยู่ที่คณะได้บ่อย และบางครั้งเป็นเวลานาน ☎️ การดูแลอาจารย์พิเศษรับอาจารย์ : อันนี้ควรรู้ก่อนว่าอาจารย์เป็นผู้หญิงหรือผู้ชาย หารูปอาจารย์ในเน็ตสักนิดนึง คือบางทีอาจารย์พิเศษก็ลงจากรถมหาลัยกันทั้งนั้นเดี๋ยวจะไปรับอาจารย์ผิดท่าน (อันนี้เกือบจะเกิดขึ้นจริง 5555)ระหว่างพักเช่นพักเที่ยง ก็ดูแลและรอจนกว่าจะมีอาจารย์จากคณะมารับอาจารย์ไปทานข้าวหาหน้าม้ามาตั้งคำถาม ขอบคุณอาจารย์พิเศษ หรืออาจจะหาเพื่อนที่แลดูดีในชั้นปีแล้วทาบทามนางมาพูดขอบคุณให้แทนรอส่งอาจารย์ ช่วยถือของไรงี้...ทั้งหมดที่เขียนมาคือตามแนวทางที่ตัวเองเคยทำมาเท่านั้น มันจะอาจจะผิด, ไม่เหมาะสม หรือไม่ถูกสไตล์ของอาจารย์บางท่านก็เป็นได้...#หวังว่าข้อมูลนี้จะมีประโยชน์ กิกินศภ.กฤชติยาภรณ์ คงธนะวานิชเภสัชศาสตร์รุ่นที่ ๕ ม.วลัยลักษณ์&amp;nbsp;เขียนเมื่อ&amp;nbsp; 17 ธันวาคม 2014",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/08/blog-post_12.html", "_blank");
        
      },
    },{id: "post-เหรียญรางวัลโอลิมปิกในสงครามต่อสู้กับมะเร็ง-️",
      
        title: 'เหรียญรางวัลโอลิมปิกในสงครามต่อสู้กับมะเร็ง🎗️ <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;เหรียญรางวัลโอลิมปิกในสงครามต่อสู้กับมะเร็งเหรียญโอลิมปิกไม่ได้เป็นเพียงสัญลักษณ์ของชัยชนะเท่านั้น แต่ยังเป็นตัวแทนของธาตุที่กำลังมีบทบาทสำคัญในการรักษามะเร็ง .ทอง (Au)เงิน (Ag)ทองแดง (Cu) คือธาตุในตารางธาตุที่เราเรียนกันสมัยมัธยมที่ถูกศึกษาและปรับใช้ในการรักษามะเร็งซึ่งนำมาซึ่งความหวังใหม่ในการต่อสู้กับโรคร้ายนี้.แต่ๆ ธาตุพวกนี้ถูกศึกษาในรูปสารเคมีร่วมกับธาตุอื่นๆด้วย (complex)นะ ไม่ได้ซื้อทอง ซื้อเงินเป็นสร้อยเป็นแหวนมาสวมหรือกินกันนะ &amp;gt;&amp;lt;. ทอง และเงิน สารประกอบของทองและเงินจะโจมตีเอนไซม์ทอปอยโซเมอเรส (topoisomerases) ซึ่งมีส่วนเกี่ยวข้องกับการแบ่งตัวของมะเร็ง งานวิจัยที่ดำเนินอยู่นี้มุ่งพัฒนาสารประกอบโลหะเหล่านี้ให้เป็นการบำบัดที่มีประสิทธิภาพและมีผลข้างเคียงน้อยกว่าเมื่อเทียบกับการรักษาแบบเดิม ทองแดงสารประกอบทองแดงกำลังเป็นทางเลือกที่มีพลังในการรักษาเคมีบำบัด โดยเฉพาะอย่างยิ่งสำหรับเนื้องอกที่ดื้อต่อยาแพลตตินัม เช่น ซิสพลาติน (Cisplatin) สารประกอบเหล่านี้ไม่เพียงแต่มีประสิทธิภาพในการต่อสู้กับเซลล์มะเร็ง แต่ยังมีความเป็นพิษน้อยกว่า โดยบางชนิดได้เข้าสู่การทดลองทางคลินิกแล้ว.โลหะโอลิมปิกเหล่านี้กำลังก้าวออกจากเวทีและเข้าสู่ห้องแล็บ อาจเปลี่ยนแปลงการรักษามะเร็งและนำความหวังใหม่มาสู่ผู้ป่วยทั่วโลก .ในบทความนี้กล่าวถึงแพลตตินัม (Platinum) ไว้ด้วย ไว้บทความความหน้า แอดจะเล่าเรื่องแพลตตินัมให้ฟังกันใบ้ไว้ก่อนเลยว่าเป็นธาตุที่ใช้รักษามะเร็งเยอะมากๆๆๆมาอย่างยาวนานด้วย.อ้างอิง[1] Copper, gold and silver compounds as potential new anti-tumor ... https://pubmed.ncbi.nlm.nih.gov/21426151/[2] A review of the latest developments in metal-based anticancer agents https://www.sciencedirect.com/.../abs/pii/S0010854523005684[3] Gold, silver and copper complexes targeting human topoisomerases https://www.researchgate.net/.../338008415_From_coins_to...[4] Metallo-Drugs in Cancer Therapy: Past, Present and Future - NCBI https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9572156/[5] Gold, silver and copper complexes targeting human topoisomerases https://www.sciencedirect.com/.../abs/pii/S0960894X19308832.#วิจัยมะเร็ง #นวัตกรรมทางการแพทย์ #ทอง #เงิน #ทองแดง #แพลตตินัม #การรักษามะเร็ง #วิทยาศาสตร์เพื่อชีวิต #NoCancer#NoCancerTH#เพราะวิจัยมะเร็งนั้นลึกซึ้ง#โอลิมปิก2024  #โอลิมปิกเกมส์  #โอลิมปิก  #Olympics  #olympics2024 #olympicgamesเขียนเมื่อ 12 ส.ค. 2024",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/08/blog-post_12.html", "_blank");
        
      },
    },{id: "post-vibe-coding-when-everything-in-coding-is-thrown-to-ai",
      
        title: 'Vibe Coding: When everything in coding is thrown to AI 🤖 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;&quot;Vibe Coding: When everything in coding is thrown to AI.&quot; 🤖&amp;nbsp;That was the real eye-opener from yesterday&#39;s Sunday AI Webinar, where I got to hear from some super smart folks in AI, economics, and medicine.What&#39;s Vibe Coding? 🤔Basically, it&#39;s when you just tell AI to write your code or fix your errors. You know, like, just copy-pasting the error message and letting the AI do its thing. At first, it&#39;s awesome! Super fast, seems like a shortcut. But then, as one of the speakers, Dr. Piyalitt Ittichaiwong, pointed out,&amp;nbsp;you can end up feeling super bummed out.&amp;nbsp;Why? &#39;Cause you hit a bug and get stuck in this endless loop you can&#39;t get out of. And for real, that&#39;s exactly what happens! 😵‍💫I&#39;m not even a proper coder myself – I actually studied pharmacy!&amp;nbsp;My first coding attempts were pretty messy, and I totally hit that &quot;build it, break it, repeat&quot; cycle. That&#39;s when I realized I needed to go back to square one.Why Fundamentals Rule! ✨Going back to basics was a game-changer. I learned that:Coding is just about thinking step-by-step. The language (like Python or R) is just a tool; if you think logically, you can switch between them.The real pro skill? Fixing bugs! 🛠️ Seriously, the more bugs you wrestle with and win, the more experience you rack up.For computational biologist 🧬&amp;nbsp;And here&#39;s the kicker, especially for fields like computational biology. It&#39;s not just about debugging code itself. You really need to understand the biology behind it and work super closely with wet lab researchers. Without that deep biological insight and collaboration, even the best code won&#39;t give you meaningful answers when things go wrong. It&#39;s about combining coding know-how with domain expertise.So, if you&#39;re thinking about learning to code from the ground up, I can&#39;t recommend Harvard&#39;s CS50 course with Professor David Malan enough. It&#39;s free, and it&#39;s seriously good stuff. I took it right before ChatGPT blew up, and yeah, I had moments where I thought, &quot;Ugh, everyone&#39;s just vibe coding now, was this even worth it?&quot; But honestly, I feel so incredibly lucky now that I did. That solid foundation helps me actually solve problems and think like a proper developer. Plus, it involved lots of dog petting when I got stuck, so win-win! 🐶😻#NamthipPhDstory #VibeCoding #CodingJourney #CS50 #LearningToCode #Programming #AI #ChatGPT #ComputationalBiology #Debugging #TechTalk",
      section: "Posts",
      handler: () => {
        
          window.open("https://thewhispersofbiology.blogspot.com/2025/08/vibe-coding-when-everything-in-coding.html", "_blank");
        
      },
    },{id: "post-vibe-coding-เมื่อทุกสรรพสิ่งของ-coding-ถูกโยนให้-ai-ทำ",
      
        title: 'Vibe Coding: เมื่อทุกสรรพสิ่งของ coding ถูกโยนให้ AI ทำ <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;Vibe Coding: เมื่อทุกสรรพสิ่งของ coding ถูกโยนให้ AI ทำ&amp;nbsp;เมื่อวานฟัง Sunday AI Webinarเป็น talk ที่รวมมหาเทพเลยทั้งคุณต้นสน(สายเศรษฐศาสตร์) จารย์อ๋า(สายแพทย์) พี่ทอย(สายเป็ด แต่เทพทุกสิ่ง) และโฮสโดยคุณโชค (เทพ digital media)&amp;nbsp;&amp;nbsp;ประเด็นมีเยอะมากๆ ฟังยาวๆไม่มีเบื่อเลยครัช ตามไปดูได้ที่นี่เลย&amp;nbsp;&amp;nbsp;อันนึงที่ติดใจอยากเขียนวันนี้คือ Vibe codingซึ่งมันคือการที่เราไปบอกให้ AI เขียนโค้ดให้ แก้ error ให้โดยแบบก็อบ error โยนไปทั้งยวงเลยจารย์อ๋าบอกว่าแรกๆก็ดี เริ่มไว ไปไวเลยแต่ทีหลัง depress แทน 55555เพราะติด bug แล้ววนลูป วนมันอยู่อย่างนั้นแหละแก้ไม่ได้แล้วคือจริง!!!!&amp;nbsp;&amp;nbsp;ส่วนตัวไม่ใช่สาย coder เลยมามั่วๆเอาเอง จบเภสัชมา &amp;gt;&amp;lt;เขียนโค้ดอันแรกคือ html กากๆ ตอน ม.4ทำเว็บ NO CANCER&amp;nbsp;&amp;nbsp;&amp;nbsp; ถ้าใครถามว่าจะเรียน coding ยังไงก็มีหลายคำตอบจะจัดเต็มตั้งแต่พื้นฐานจะเอาแบบเฉพาะสายงาน หรือ vibe coding ก็ได้&amp;nbsp;แต่ 2 แบบหลังคือรู้สึกว่าเป็นการไปข้างหน้าแบบงูๆปลาๆนอกเหนือจาก routine work คืออาจจะพลิกแพลงไม่ได้หล่ะติด bug แล้วตายไปปปปป ทรงนั้นเลย&amp;nbsp;แต่ถ้าเอาแบบพื้นฐาน ข้อดีคือแน่นๆพลิกแพลงได้แต่ก็นั้นแหละใช้เวลามากในช่วงเริ่มต้นเคยลองแบบ 2 มาแล้วผลคือได้ก็คือพังแล้วพังอีก&amp;nbsp;เลยมาเริ่มพื้นฐานใหม่แบบยกเครื่องเลยซึ่งดีเลยนะกลายเป็นว่า  Coding คือกระบวนการคิดเป็นลำดับขั้น ภาษาต่างๆก็คือ syntax ถ้ากระบวนการดี แค่เปลี่ยนภาษาเช่น R ไป Unix/Python ก็ยังรอด และ Skill ที่เปรี้ยวสุด ที่เพิ่มพูนตามประสบการณ์ของ Coder คือ การแก้ bug (bug ยิ่งเยอะ ยิ่งมากประสบการณ์ 555+)&amp;nbsp;เพราะความพังท่วมหัวเอาตัวไม่รอดคือ bug ที่แก้ไม่ออกนี่แหละ&amp;nbsp;ใครสนใจตั้งแต่พื้นฐานแนะนำคอร์ส CS50 ของ Prof. David Malanวิชา Com Sci ของ Harvard (เรียนฟรี จะไม่ได้ใบ cer)เดี๋ยวเขียนเรื่องนี้โพสต์ต่อไป &amp;gt;&amp;lt; ยาวววว&amp;nbsp;เราเรียน CS50x ก่อน ChatGPT เกิดนิดหน่อยตอนนั้นก็นอยด์ๆนะ แหม่...คนอื่นใช้ Vibe code เอาก็ได้&amp;nbsp;&amp;nbsp;แต่ตอนนี้รู้สึกโชคดีมากตอนเรียน CS50x เรียนไป เขียน code ไม่ได้ก็เดินไปลูบหมาที่บ้านลูบๆไป คิดออก ก็วิ่งกลับมาเขียนต่อ ลูบจนหมาจะขนร่วงหมดละ 555 ขอบคุณลมมี่แมวยักษ์ประจำเรือนไว้ ณ ที่นี้#NamthipPhDstory",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/08/vibe-coding-coding-ai.html", "_blank");
        
      },
    },{id: "post-ภาพวาดของผู้ทรงศักดิ์ในหอสมุดศิริราชและเป็นที่มาของชื่อพิพิธภัณฑ์",
      
        title: 'ภาพวาดของผู้ทรงศักดิ์ในหอสมุดศิริราชและเป็นที่มาของชื่อพิพิธภัณฑ์ <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "ภาพวาดของผู้ทรงศักดิ์ในหอสมุดศิริราชและเป็นที่มาของชื่อพิพิธภัณฑ์รูปของกรมพระราชวังบวรสถานภิมุข&amp;nbsp;จะเจอได้ที่ตึกอดุยฯ กับหอสมุดของศิริราชช่วงเดือนที่ผ่านมาเป็นช่วงที่เรียนตึกนี้เกือบทุกวันตึกอดุยลเดชวิกรมของศิริราช ซึ่งด้านบนเป็นพิพิธภัณฑ์.เข้ามาใต้ตึกทีไรก็เห็นใครๆยกมือไหว้ ทำความเคารพ&amp;nbsp;รูปวาดพระบิดาในรัชกาลที่ 9แต่ไม่ค่อยมีใครสังเกตรูปวาดของบุคคลท่านนี้กันมองผ่านๆ อาจจะนึกว่าเป็นรูปรัชกาลที่ 1.พื้นที่นี้เป็น รพ. ศิริราช ได้&amp;nbsp;ส่วนหนึ่งก็เพราะท่านนี้หล่ะ.ถ้ารู้จักศิริราชก็คงรู้จักวังหลังซึ่งวังหลังเป็นพระราชวังเดิมของสมเด็จเจ้าฟ้ากรมพระอนุรักษ์เทเวศร์&amp;nbsp;กรมพระราชวังบวรสถานภิมุข&amp;nbsp;ซึ่งทรงเป็นกรมพระราชวังบวรสถานภิมุข(ตำแหน่งวังหลัง)ในรัชกาลที่ 1.ท่านมีศักดิ์เป็นหลานของรัชกาลที่ 1&amp;nbsp;และยังเป็นเสมือนขุนศึกข้างพระวรกายหลังจากนั้นมาไทยก็ไม่มีตำแหน่งวังหลังอีกเลยพื้นที่ของวังหลังจึงไม่ได้มีการเปลี่ยนแปลงมากมายอย่างวังหน้า.ช่วงรัชกาลที่ 5 วังหลังจึงถูกเปลี่ยนเป็นรพ.ศิริราช(ศิริราชมาจากชื่อพระโอรสในรัชกาลที่ 5).ศิริราชมีเรื่องราวมากมาย&amp;nbsp;พิพิธภัณฑ์ก็มีถึง 4 แห่งแต่ก็ยังไม่เคยไปเลยสักที่เดียว&amp;nbsp;ฝุ่นคงจะเยอะ แอบเสียดายนะเนี่ยปล. รูปของกรมพระราชวังบวรสถานภิมุข&amp;nbsp;จะเจอได้ที่ตึกอดุย กับหอสมุดของศิริราชส่วนเรื่องราวของวังหลังมีให้เจอเยอะมาก&amp;nbsp;ร่องรอยกำแพงเก่าแถวศิริราชปิยะซึ่งเป็นแนวยาวไปถึงแถวๆวัดระฆังปล2. ท่านนี้เป็นหลานของรัชกาลที่ 1 (ลูกของพี่สาว)เขียนเมื่อ 10 สิงหาคม 2019FB post: https://www.facebook.com/share/p/1B6Tki5QqC/",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/08/blog-post_94.html", "_blank");
        
      },
    },{id: "post-พระคุณของคุณยายขายโตเกียวหน้าโรงเรียน",
      
        title: 'พระคุณของคุณยายขายโตเกียวหน้าโรงเรียน <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "พระคุณของคุณยายขายโตเกียวหน้าโรงเรียนเมื่อเกือบ 20 ปีก่อน แสงแดดสีทองยามสาดทั่วท้องฟ้า&amp;nbsp;ใกล้เวลาที่พระอาทิตย์จะลับขอบฟ้าเข้าทุกครั้งเด็กตัวกลมๆ ผมม้าในชุดนักเรียน ป.1 ใหม่เอี่ยมกำลังนั่งบนเก้าอี้พลาสติกเก่าๆตัวหนึ่งพร้อมกับหน้าตาละห้อยรอคอยพ่อแม่มารับกลับบ้านไม่ไกลกันนัก มีผู้หญิงสูงวัยคนหนึ่งยืนม้วนขนมโตเกียวแล้วใส่ลงถุงกระดาษอย่างชำนาญ&amp;nbsp;ที่ทำงานของเธอก็คือร้านรถเข็นคันเล็กๆ&amp;nbsp;มีเก้าอี้นั่ง 1 ตัว แต่เธอได้สละมันให้แก่เด็กหญิงผมม้าไปแล้วแม้จะผ่านไปวันแล้ววันเล่า ภาพแบบนี้ก็ยังเกิดขึ้นเสมอตอนเวลาที่ฉันอยู่ ป.1...ใช่แล้วเด็กหญิงคนนั้นคือฉันเมื่อวัยเด็กยายขายโตเกียวที่ฉันไม่เคยรู้ชื่อเลยคือคนที่มีพระคุณต่อฉัน เหมือนคุณครูคนนึงเลยก็ว่าได้ ถ้าไม่มียายคนนึงก็อาจจะไม่มีฉันในวันนี้วันนี้ฉันกลับไปหน้า รร ประถมอีกครั้งเพื่อจะถามหายายเพราะอยากเอาของไปเยี่ยมยายแกคงดีใจนะ ถ้าเด็กคนนึงที่แกสละเก้าอี้ให้นั่งและช่วยดูแลจนกว่าพ่อแม่จะมารับในวันนั้น กลับมาเยี่ยม ^^แต่ดูเหมือนว่าทุกอย่างจะช้าไป ฉันถามหายายจากแม่ค้าเก่าๆ ทำให้รู้ว่า&quot;ยายดาเสียไปตั้งแต่ 6-7 ปีก่อน&quot;ของเยี่ยมจึงต้องเปลี่ยนเป็นการทำบุญแทน---------ขอบคุณยายเสมอ และจะไม่ลืมพระคุณนั้นเลยคุณยายขายโตเกียวของน้ำทิพย์ T TCr.ภาพจาก internetเขียนเมื่อ 10 สิงหาคม 2018FB post: https://www.facebook.com/share/p/1C8pHfKY8v/",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/08/blog-post_10.html", "_blank");
        
      },
    },{id: "post-namthip-x-งานวิจัยมะเร็ง-ตอนอะไรที่ดลจิตดลใจให้เดินไปหาปริญญาเอก",
      
        title: 'Namthip x งานวิจัยมะเร็ง: ตอนอะไรที่ดลจิตดลใจให้เดินไปหาปริญญาเอก <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "...อะไรที่ดลจิตดลใจให้เดินไปหาปริญญาเอก...ภาพด้านในตึกชีวการแพทย์ สถาบันวิจัยจุฬาภรณ์เรื่องราวมันยาวนานพอดู บางคนอาจจะรู้เรื่องราวนี้มาบ้างความจริงมันเริ่มมาจากความสนใจไก่กาเรื่องมะเร็ง ตอนนั้นอยู่ ม.2 เพราะว่ายายเสียด้วยโรคนี้ ตอนนั้นก็โคตรเซ็งเลย แบบเฮ้ย ทำไมหมอให้ยายกลับบ้านหว่ะ หมอต้องรักษาดิ ก็ยังเด็กน้อยอ่ะนะ palliative care อะไรไม่รู้จักทั้งนั้น หลังจากนั้นก็หาข้อมูลด้วยความแค้น 55555 ซื้อหนังสือเอย ไปงานประชุม ดูข่าวพระราชสำนัก(ข่าวเจ้าฟ้าหญิงนี่หล่ะ) ไปๆมาๆจนรู้ว่าชอบมะเร็งทางด้านวิทยาศาสตร์ (มารู้เอาตอน ป.ตรี).บางคนเคยบอกว่าสนใจมะเร็งมันก็ตามเทรน ก็จริงอยู่มะเร็งเป็นเทรน คนเป็นกันเยอะ ไม่ว่าใครก็ต้องมีใครสักคนรอบตัวเป็นมะเร็งกันบ้าง แต่มันไม่ได้สำคัญว่าสิ่งที่เราสนใจจะเป็นเทรนมั้ย เพราะสิ่งที่พิสูจน์กันได้ไม่ใช่คำพูด และเราก็ได้พิสูจน์มันมาบ้างแล้ว. สำหรับเราตอนนี้มะเร็งไม่ใช่สิ่งที่ต้องแค้นเคือง แต่มันคือ passion ที่ทำให้เราพยายามไปต่อในสิ่งที่เราสนใจ คิดดูสิว่าจะรู้สึกดีขนาดไหนถ้าสิ่งเล็กๆที่เราทำมีประโยชน์ต่อผู้ป่วย.จะดีสักแค่ไหน ถ้าอีก 10 ปี 30 ปี หรือ 50 ปีข้างหน้าคนที่ป่วยเป็นมะเร็งแบบที่ยายเป็นจะอยู่ได้นานๆ หรือแก่ชราไปด้วยอายุขัยตัวเองจะดีแค่ไหนถ้าการรักษาใดๆก็ตามไม่ได้ช่วยคนแค่ 1แต่ช่วยได้เป็น 100 เป็น 1000.ที่รู้ว่าชอบมะเร็งแบบวิทยาศาสตร์ ก็ใช้เวลาลองอยู่นานจะชัดจริงๆก็ประมาณ ม.5 ได้รู้จักกับ อ.ชิษณุสรร เพราะค่าย thai science camp (นี่ถ้าค่ายไม่ฟรีกับมีค่าเดินทางให้นะ อดไปแน่ๆ) ขาดสอบของ รร ไปค่าย  เกรียนมากนะสมัยนั้น แล้วก็ได้ไปดูแลปที่สถาบันวิจัยจุฬาภรณ์แป๊ปนึง(แค่ไม่เกิน 2 ชม.อ่ะ) โดยมี อ.เกรียงศักดิ์ ดูแลตื่นตาตื่นใจกับการเห็นตู้เย็น -80 มาก ตลกตัวเองจัง 5555+ .- พอตอนประมาณ ปี 2-3 ก็ขอ อ ในมหาลัยไปช่วยงานพวกสมุนไพร (อ.วรพงศ์) เกือบได้ทำแลปข้ามปี แต่เพราะเวลาเรียนช่วงหลังรัดตัวมาก เวลานอนยังหายากเลยต้องหยุดแค่นั้น - ปี 3 ก็กลับไปดูงานที่สถาบันวิจัยจุฬาภรณ์อีกครั้ง เป็นเรื่องเกี่ยวกับโปรตีนเป็นเวลาไม่กี่วันที่ได้ความรู้เยอะมากและเพราะที่นี่ทำให้ได้ connection ไปฝึกต่อทีคณะแพทย์ จุฬา ในปีถัดมา เป็นเรื่องเกี่ยวกับพันธุกรรม ในแลปของ อ.อภิวัฒน์ ....เรียกว่าทัวร์ตามหาฝันมาก 5555 ฝึกพวกนี้ก็ไม่ใช่เนื้อหาหลักสูตร ก็ต้องหาเวลาว่างเอาเอง ช่วงปิดเทอมอันน้อยนิด น้อยจริงๆ เพราะเรียน 3 เทอม ก็ไปสิงหอเพื่อน หอรุ่นพี่เพื่อประหยัดค่าใช้จ่าย นี่ไม่นับพวกงานประชุม &amp;gt;&amp;lt; ทั้งหมดนี่เราเลยรู้ว่าตัวเองชอบงานวิจัยทางโปรตีนกับ genetics แต่แอบเอียงไปทางโปรตีนมากกว่า แต่มันก็ยังกว้างมากสำหรับสิ่งที่จะเรียนต่อ ป.โท ป.เอก.เรื่องจะเรียนต่อ ป.เอก ไม่ใช่เรื่องที่เราวางแผนข้ามวันหรือเดือน แต่มันเป็นการวางแผนข้ามปี ไม่ใช่เรียนเพราะว่าความรู้ ป ตรี มันไม่พอในสังคมปัจจุบันเหมือนที่ใครๆเค้าพูดกัน .คงไม่ใช่เรื่องสนุกที่จะเอาเวลาชีวิตที่ทำงานหาเงินได้ หาเงินเลี้ยงครอบครัวได้ มาเเลกกับใบปริญญาที่ยังตอบตัวเองไม่ได้ว่าเราต้องการอะไรจากใบปริญญานี้ และมันคุ้มมั้ยกับสิ่งที่ต้องแลก ตัวเราเองหาคำตอบในใจและเตรียมตัวไว้ตั้งแต่ ปี 3 .สิ่งที่เตรียมนั้นก็คือเกรดเฉลี่ย เพราะ อ แนะนำไว้ว่าต้องได้เกรดสูงๆ ถ้าได้เกียรตินิยมยิ่งดี ตอนนั้นปั่นเกรดสุดฤทธิ์ (แต่กิจกรรมก็ไม่ทิ้ง 5555+ แบ่งเวลาเอา) จบ ปี 3 เกรดก็อยู่ในระดับที่ต้องการที่เหลือก็แค่อย่าให้ตกก็พอ .เรื่องว่าจะเรียนที่ไหน หัวข้อแบบไหน เรียนกับใครก็เป็นเรื่องที่ชวนปวดหัวไม่น้อย ก็อาศัยปรึกษา อ ที่รู้จัก เรียกว่ารู้จักใครก็ปรึกษาเค้าไปทั่ว เพราะว่า protein กับ genetics กว้างมาก .เราไม่รู้ว่าจริงๆตัวเองสนใจอะไรในนี้ ก็เริ่มตามอ่านงานวิจัย อ ที่สนใจ ตอนนั้นปี 6 รู้ว่าใช้เวลามากกว่าอ่านสอบใบประกอบเภสัช มีบางทีก็ขอไปดูแลปด้วย แฮร่ๆ เพราะอยากรู้ว่าตอนนั้น ที่แลปนั้นทำงานประมาณไหน อ่านงานวิจัยคนเดียวก็งงเอง เลยติดต่อ อ ไปดีกว่าขอบคุณ อ ทุกๆท่านที่ให้โอกาสหนูตามหาตัวเอง &amp;gt;&amp;lt;สุดท้ายแล้วการตัดสินใจก็ต้อปรึกษา อ ที่คิดว่ารู้จักเราดีแล้วเราก็คุยปรึกษาแบบตรงๆได้ ก็กลับไปที่สถาบันวิจัยจุฬาภรณ์.อาจารย์ถามหลายๆคำถาม ราวกับคำถามสอบเข้า การไปหา อ วันนั้นทำให้เราได้คำตอบทุกอย่าง .มีคำถามนึงที่เราจำได้แม่นอ ถามว่า &quot;ทำไมถึงอยากเรียน ป เอก&quot; เราตอบ อ ไปว่าเราไม่ได้อยากเรียน ป เอก แต่เราอยากได้ บลาๆๆ แล้ว อ ก็บอกว่าเราควรเรียนจนจบ ป เอกเพื่อให้ได้สิ่งนั้น (ถ้าตอนสอบเข้าตอบว่าไม่ได้อยากเรียน ป เอก จะสอบได้มั้ยเนี่ย &amp;gt;&amp;lt;) .แต่ก็สอบเข้ามาได้หล่ะ แฮร่ๆ เหมือนผ่านอุปสรรคมากเยอะแยะมากมาย ทั้งความกลัวของตัวเอง(กลัวว่าจะไม่มีตังค์เรียน &amp;gt;&amp;lt; คงไม่ใช่เวลาให้พ่อแม่มาส่งให้เรียนแล้ว ที่จริงความทำงานส่งน้องเรียนด้วยซ้ำ) ปัญหาสุขภาพ(นอน รพ ซะแหลกลาน จนแม่ไม่อยากให้เรียนต่อ แต่ก็เจอ trigger ต้นเหตุแล้ว และรู้สึกสบายใจที่บอกปัญหาสุขภาพนี้ให้ อ ที่ปรึกษารู้ก่อน).คงมาไม่ได้ขนาดนี้ขอบคุณอาจารย์ทุกท่านโดยเฉพาะอาจารย์ ม.วลัยลักษณ์และ CRI ขอบคุณครอบครัว เพื่อนๆ และอาจารย์หมอเจ้าของไข้.สุดท้ายนี้ก็จะเริ่มต้นใหม่ในฐานะนักศึกษาปริญญาเอกดีใจนะที่กลับมาเป็นคนตัวเล็กๆ ได้เรียนรู้อะไรเงียบๆได้พัฒนาตัวเอง เมื่อถึงวันที่มีโอกาสส่งต่อความรู้ให้คนอื่นจะได้ทำให้ดีที่สุด ตอนเรียนๆไปมันคงต้องเจอความยากบ้างก็จะพยายามนะ ถ้ามันหนักหนามากก็จะแอบพักเล็กๆ แล้วมาสู้ต่อแต่คงไม่ว่างขนาดไปทำคอนเสิร์ตเหมือน ป.ตรี 555555ดนตรี กีฬาก็ยังคงเป็นสิ่งที่เอาไว้ relax และดูแลสุขภาพต่อไป^^น้ำทิพย์บ้าบอคนเดิม เพิ่มเติมคือมีการศึกษาช่วยเชียร์ด้วยนะคะ อิอิ#NoCancer next station Ph.D student Siriraj, MU&amp;nbsp;เขียนเมื่อ 7 สิงหาคม 2018&amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/08/namthip-x.html", "_blank");
        
      },
    },{id: "post-1st-met-nobel-laureate-like-a-hollywood-star",
      
        title: '1st met Nobel Laureate (like a Hollywood Star) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Rubbing shoulders with a Nobel laureate once,&amp;nbsp;and I&#39;ve been hooked ever since!&amp;nbsp;It was with Prof. Ada, the Nobel laureate in Chemistry for her groundbreaking work on the structure and function of ribosomes. 🔬I was fresh out of my Medicinal Chemistry course, and during a conference, I got to listen to her speak. That&#39;s when it all clicked! I could clearly visualize how a drug slips into a specific pocket of a protein to disable a bacterial cell. 🦠 It made the connection between what I learned in class and its real-world application crystal clear. Prof. Ada presented it with a beautiful animation, making the complex science so tangible.I was so inspired that I went straight back to my university and bothered my professor to tell him just how mind-blowing it all was. This experience truly brought my education to life. 🤯(P.S. I&#39;ve listened to Prof. Ada speak many times since, and one thing that never changes is the age of her granddaughter—she&#39;s always a little kid! 👧 I sometimes wonder if her granddaughter and I are around the same age, haha.)#NobelPrize #ScienceEducation #MedicinalChemistry #Ribosomes #Inspiration #AcademicLife #RealWorldLearning",
      section: "Posts",
      handler: () => {
        
          window.open("https://thewhispersofbiology.blogspot.com/2025/08/1st-met-nobel-laureate-like-hollywood.html", "_blank");
        
      },
    },{id: "post-กระทบไหล่เจ้าของรางวัลโนเบลครั้งนึง-ติดใจตลอดไปปปป-prof-ada-yonath",
      
        title: 'กระทบไหล่เจ้าของรางวัลโนเบลครั้งนึง ติดใจตลอดไปปปป (Prof.Ada Yonath) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "กระทบไหล่เจ้าของรางวัลโนเบลครั้งนึงติดใจตลอดไปปปปProf. Ada เจ้าของรางวัลโนเบลเคมี ปี 2009จากการศึกษาโครงสร้างและหน้าที่ของไรโบโซมตอนนั้นเรียน Medicinal Chemistry เพิ่งจบไป(นักศึกษาเภสัชต้องเรียนโครงการยาด้วยยยย)&amp;nbsp;ปิดเทอมปุ๊บลั้ลลาแลปนู้นนี่ เข้าประชุทวิชาการปั๊บเจอเลยจ้าาาา&amp;nbsp;ไปนั่งฟัง Prof. คือแบบชัดเลยว่ายามันมุดเข้าซอกไหนของโปรตีนไปทำให้เซลล์แบคทีเดียเดี้ยงได้ยังไงคือมันจะมียากลุ่มที่ฆ่าแบคทีเรีย (ยาฆ่าเชื้อ) กลุ่มที่ไปจัดการไรโบโซมของแบคทีเรีย (ไรโบโซมคนกับแบคทีเรียไม่เหมือนกันนะ)นั่นแหละจ้าาาา ที่เรียนมาคือเห็นภาพพพพ&amp;nbsp;คือ Prof. พรีเซ็นเป็นคลิปสวยๆเลย&amp;nbsp;ด้วยความดีด กลับมหาลัยไป เดินไปก่อกวน อ ที่สอน MedChem เรื่องนั้นอีก อิอิว่ามันน่าตื่นตาตื่นใจมากกกกกกps. ฟัง Prof. Ada มาหลายรอบ สิ่งนึงที่ไม่เปลี่ยนคืออายุหลานสาว Prof ที่นังเด็กเสมอ บางทีก็แอบคิดว่าหลาน Prof อาจจะๆไล่เลี่ยกับเรา#NobelPrize #ScienceEducation #MedicinalChemistry #Ribosomes #Inspiration #AcademicLife #RealWorldLearning",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/08/1st-met-nobel-laureate-like-hollywood.html", "_blank");
        
      },
    },{id: "post-productive-ตอน-2",
      
        title: 'Productive ตอน 2 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Productive ตอน 2ว่าด้วยเรื่อง productive ตอน 2ความจริงเรื่องนี้มีให้อ่านเยอะมากกกกก เยอะพอๆหรือมากกว่าหนังสือทำยังไงให้เรียนเก่ง ซึ่งอ่านเท่าไหร่ๆ ก็ไม่เก่งกันสักที แฮะๆ.ที่เค้าเขียนหรือพูดไว้ได้เป็นแค่แนวทางเท่านั้นรีวิวฟรุ้งฟริ้งกระดิ่งแมวอันนี้ ก็เพียงโพสรวบรวมแนวทางที่เจอๆมาร่วมกับแชร์ประสบการณ์ที่ตัวเองเอามาปรับใช้.เริ่มจากสิ่งที่คนอื่นเขียนแนะนำลองดูตาม list นี้ครัช&amp;nbsp; &amp;nbsp; podcast super productive ของคุณรวิศ หาญอุตสาหะ บางส่วนอาจจะออกแนวธุรกิจหรือคนวัยทำงานไปหน่อย แต่ นร นศ ก็พอปรับใช้ได้ครัชหนังสือกินกบตัวนั้นซะ ถ้าขี้เกียจอ่านทั้งเล่ม&amp;nbsp; ก็เปิดอ่านสรุปหน้าท้ายๆได้เลย&amp;nbsp; แต่อาจจะพลาดฟิลลิ่งและเหตุผลหลายๆอย่างไปหนังสือ 7 habit ความจริงส่วนสำคัญของเล่มนี้&amp;nbsp; คุณรวิศก็พูดไว้ใน podcast แล้วหล่ะปัญญาวิชาชีวิต managing oneself ไม่ใช่หนังสือที่บอกวิธีให้ productive หรอก แต่เป็นหนังสือที่ชวนให้ถามตัวเอง&amp;nbsp;และชวนให้รู้จักตัวเองเสียมากกว่า.เเละเพราะการรู้จักตัวเองนี่หล่ะที่ทำให้รู้ว่าวันๆนึงเราทำอะไร ไปเพื่ออะไร และเพื่อที่จะได้อะไรสักอย่างมา เราต้องจัดการชีวิตยังไง.ซึ่งความ productive ที่พูดกันฮิตติดปาก สุดท้ายแล้วก็เพื่อเป้าหมายในแต่ละช่วงชีวิตนั่นเอง.ถ้ารู้ว่าต้องทำอะไร เพื่อให้ได้อะไรมานั่นดีแล้วฮ่ะ.แต่ถ้าไม่มั่นใจว่าทำอะไร ไปเพื่ออะไรก็ลองทบทวน ลองถามตัวเองดูสักหน่อย.มันอาจจะเป็นเรื่องที่คนวัย 30 หรือ 40 ขึ้นไปไม่ต้องคิด ต้องถามอะไรมากมายเพราะใช้เวลารู้จักกับตัวเอง และผ่านโลกผ่านประสบการณ์มาเท่าตัวเลขของอายุ.แต่สำหรับวัยแห่งการตัดสินใจวัยหัวเลี้ยวตัวต่อ ก็มีแต่จะพบความลังเลสงสัยอยู่ทุกเมื่อเชื่อวัน เงินมั้ยคือคำตอบเที่ยวหรือเปล่า ทำงานเพื่ออะไรกันแน่.ไม่มีใครตอบได้ฮ่ะ ทั้งหมดนี้คงต้องถามใจตัวเองตอบตัวเอง ตัดสินใจเอง ทั้งที่ครึ่งหนึ่งของใจก็อาจจะลังเลอยู่ดี#โตแล้วนะ #นักวิ่งฟันน้ำนม&amp;nbsp;เขียนเมื่อ&amp;nbsp;8 สิงหาคม  2019&amp;nbsp; &amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/08/productive-2.html", "_blank");
        
      },
    },{id: "post-streamlining-rstudio-server-with-docker-compose",
      
        title: '🚀 Streamlining RStudio Server with Docker Compose! <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;🚀 Streamlining RStudio Server with Docker Compose! 🚀Are you painful with Rstudio “can’t install library”, “use in different computer”, “different R version”, etc.From problem I faced, after solving I share!Remember my previous post about running RStudio Server in Docker?&amp;nbsp; I have used very long command.I&#39;ve found an even more efficient way! 🤩Instead of wrestling with a lengthy docker run command below every times!sudo docker run \    -v /home/namthip:/home/rstudio/namthip \    -v /home/namthip/R/host-site-library:/usr/local/lib/R/host-site-library \    -e R_LIBS_USER=/home/namthip/R/host-site-library \    -e PASSWORD= \    -p 8787:8787 \    bioconductor/bioconductor_docker:RELEASE_3_15✅ Step 1: Create your `docker-compose.yml file`&amp;nbsp;&amp;nbsp;However, before that easy step, we have to prepare docker-compose.yml file first. Use information below, save, and named it exactly this docker-compose.yml file.&amp;nbsp;version: &quot;3.8&quot;services:  rstudio:    image: bioconductor/bioconductor_docker:RELEASE_3_15    ports:      - &quot;8787:8787&quot;    volumes:      - /home/namthip:/home/rstudio/namthip      - /home/namthip/R/host-site-library:/usr/local/lib/R/host-site-library    environment:      - R_LIBS_USER=/home/namthip/R/host-site-library      - PASSWORD=&amp;lt;MY_PASSWORD&amp;gt;✅ Step 2: Launch RStudio Server:Navigate to the directory where you saved docker-compose.yml.&amp;nbsp;Type this to start the container. sudo docker compose up -dNow, access RStudio Server by opening your browser and going to `localhost:8787`.✅ Step 3: Shutting Down:After finish using it, go to the directory you store docker-compose.yml again.  Then stop docker container by typing. sudo docker compose down📛 Don&#39;t forget to do this before shutting down your computer!Docker Compose makes managing multi-container Docker applications a breeze, and it&#39;s perfect for simplifying your RStudio Server setup. 💻✨▶️ Full info via my website: https://lnkd.in/gmTCD4Vphashtag#Docker hashtag#RStudio hashtag#DataScience hashtag#DockerCompose hashtag#R hashtag",
      section: "Posts",
      handler: () => {
        
          window.open("https://thewhispersofbiology.blogspot.com/2025/08/streamlining-rstudio-server-with-docker.html", "_blank");
        
      },
    },{id: "post-namthip-x-cancer-research-how-exciting-this-journey-is",
      
        title: "Namthip x Cancer Research-How exciting this journey is!",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/NamthipxCancerRes_AllEp/";
        
      },
    },{id: "post-the-conference-to-end-all-conferences-quot-woodstock-bio2-night-science-quot",
      
        title: 'The Conference To End All Conferences: &quot;Woodstock.Bio2 + Night Science&quot; <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "The most ridiculous, wild, and awesome academic conference ever! 🤪😂 LOLJust look at the hashtag they used:&amp;nbsp;#TheConferenceToEndAllConferences&amp;nbsp;&amp;nbsp;💥.&quot;The conference to end all conferences&quot; - how cool is that?! 🤩 (You should also check out the other hashtag on X/BlueSky:&amp;nbsp;#TCTeAC). The real name of the event is&amp;nbsp;Woodstock.Bio2 + Night ScienceI was following Prof. Rechavi and Prof. Yanai&#39;s X accounts, and the hashtag says &quot;conference,&quot; but the pictures… people on stage playing guitars? 🎸 Is this a concert or what? 🤯 They were even putting up posters in the middle of the forest! 🌲 It&#39;s just so damn cool. 😎&amp;nbsp;Even&amp;nbsp;Nature Career&amp;nbsp;just wrote an article about it! 📰 (But you can find all the sick photos by following the hashtags on X). This event brought together all kinds of disciplines, from biology all the way to physics 🔬⚛️, and included everyone from PhD students to professors. 👩‍🎓👨‍🏫&amp;nbsp;💥 The Presentation Theme 💥Each speaker had to present their work in 5 minutes using only one slide. ⏱️ The speakers were chosen randomly, and they all got to walk on stage to an intro song of their choice LOL. 🎶 They even made a Spotify playlist of all the songs! 🎧 Seriously, so extra.&amp;nbsp;If I&#39;d been there, I would&#39;ve used the Doraemon intro song, hahaha. 🤖And the presentations themselves? Some were in the form of poetry or rhyming verses. ✍️ Some had a ukulele soundtrack. 🎸 One person told their research as a bedtime story, and someone else was literally sprawled out on the floor in front of the podium during the talk LOL. 🤣&amp;nbsp;And remember how I said professors were there? One of them was Prof. Yanai, one of the heads of this whole thing, and he&#39;s a legend. He had volunteers stand on stage to act as &quot;genes&quot; and wave their arms to show when the gene was turned &quot;on&quot; or &quot;off.&quot; 🧬 This is so freaking cool. From a biologist&#39;s perspective, you might think, &quot;Well, we already understand that,&quot; but just imagine the look on a physicist&#39;s face! 😮 The point was to make sure everyone understood. 💡👉 I love what Illouz-Eliaz said:&quot;Making fun of ourselves or being silly makes for a more open atmosphere at the meeting, a place where we can be ourselves and show our vulnerability.&quot; 💖👉 And what Prof. Yanai said:&quot;Of course we need rigorous and reproducible science, but we also acknowledge the other side of the process: &#39;Let’s find inspiration to create new ideas and make connections.&#39;&quot; ✨&quot;What happens if just giving a lecture on a completely different topic gives you a new idea?&quot; 🧠&amp;nbsp;&amp;nbsp;This is all about 🌜 Night Science (a term that originated with François Jacob, a 1965 Nobel laureate in medicine). Night Science is the free-form, unstructured thought process that leads to 🌞 Day Science—the work we actually do, the hypotheses we test in a beautiful, step-by-step manner. 📝&amp;nbsp;😝 And the closing ceremony was just as epic! They went on a scavenger hunt for Darwin&#39;s papers! 🏃‍♀️🏃The conference ended with a poster session in the woods, games, music, debates, and even a trail run with that scavenger hunt. 🏞️ OMG!! 😲&amp;nbsp;Each person had a map and had to find four pages from different science books placed along the trail (one of the books was Darwin&#39;s On the Origin of Species). 📜 It&#39;s so intense that even the items you have to hunt for are pages from science books! 🤓&amp;nbsp;&amp;nbsp;Actually, scientists have been trying to work together like this for a while. In the era when everyone was focused on oncogenes, there was a specific conference just for oncogene researchers starting in 1985. The posters were hilarious every single year! 🤣 This is just a sample of some of the posters.A big thanks to Prof. Joan Brugge for sharing this story at the &quot;Cancer genetics: History and consequences&quot; meeting. If you want to read more, check out&amp;nbsp;&quot;A not so brief history of the Oncogene Meeting and its Cartoons&quot;&amp;nbsp;from the journal Oncogene in 2007.&amp;nbsp;&amp;nbsp;The funniest part is that there&#39;s a supplemental figure where they drew a bunch of key people in the oncogene field, but some weren&#39;t named. J. Simon wrote in the figure legend that he couldn&#39;t remember who everyone was and that when he asked T. Hunter, he couldn&#39;t remember either LOL. 🤦‍♂️ How can a figure legend be so funny?! 😂Eventually, that meeting stopped and was replaced by the&amp;nbsp;AACR, which brings together a huge number of cancer researchers every year. 🩺&amp;nbsp;Good ideas often pop up when we mix things together. 🧪 Sometimes we get brilliant ideas and concepts from physicists, like Stephen Hawking and Richard Feynman. 🌌 Getting all stiff and formal when talking about research just makes your mind go blank. 🥶I really want to go to Woodstock.Bio2 + Night Science! 🏕️#TheConferenceToEndAllConferences 💯The Lindau Nobel Laureate Meetings in 2026 will also be multidisciplinary, so that&#39;s another one I&#39;d love to go to. ✈️P.S. This post was written with a lot of hyper energy, hehe. 🤪&amp;nbsp;You can read the full story and see the photos in the comments. 👇🚫 Thai language: NO CANCER FB page/Blogger🧬 English language: The Whispers of Biology (LinkedIn/Blogger)&amp;nbsp;#AcademicConference, #ScienceCommunication, #InterdisciplinaryResearch, #ResearchInnovation, #CreativeScience, #ScienceCollaboration, #NightScience, and #AcademicLife.",
      section: "Posts",
      handler: () => {
        
          window.open("https://thewhispersofbiology.blogspot.com/2025/08/the-conference-to-end-all-conferences.html", "_blank");
        
      },
    },{id: "post-งานประชุมวิชาการที่บ้าบอและเกรียนที่สุดในโลก",
      
        title: 'งานประชุมวิชาการที่บ้าบอและเกรียนที่สุดในโลก <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "งานประชุมวิชาการที่บ้าบอและเกรียนที่สุดในโลก 5555&amp;nbsp;คือดู hashtag ที่เค้าใช้&amp;nbsp;&amp;nbsp;#TheConferenceToEndAllConferences&amp;nbsp;&quot;งานประชุมที่สับจบทุกงานประชุม&quot;&amp;nbsp;เปรี้ยวจ๊าดดดดด&amp;nbsp;(ลองตามใน X/BlueSky ดู&amp;nbsp;อันนี้ด้วย&amp;nbsp;#TCTeAC)ชื่องานจริงๆคือ&amp;nbsp;Woodstock.Bio2 + Night Scienceตอนแรกตาม X ของ Prof. Rechavi กับ Prof. Yanaiแล้วคือ Hashtag นี่ conference นะแต่ภาพคือคนดีดกีต้าบนเวทีนี่คอนเสิร์ตหรืออิหยังแปะโปสเตอร์กันกลางป่ากันไปอีกมันจ๊าบมากกกก&amp;nbsp;&amp;nbsp;ล่าสุดนี่ Nature Career เพิ่งเอามาเล่า(แต่ภาพจ๊าบๆไปตาม hashtag ใน X ได้อีกนะ)&amp;nbsp;งานนี้รวมทุกสาขาวิชาความว่าตั้งแต่ชีววิทยาลามไปยันฟิสิกส์&amp;nbsp;รวมตั้งแต่ระดับ นศ ป เอก จนระดับศาสตราจารย์เลย&amp;nbsp;&amp;nbsp;💥 ตีมการนำเสนอคนพูดจะต้องพูดงานตัวใน 5 นาที 1 สไลด์เท่านั้นแล้วการเรียกไปพูดบนเวทีคือสุ่ม&amp;nbsp;แล้วเปิดตัวด้วยเพลงที่คนพูดเลือกเอง&amp;nbsp;5555แล้วคือทำเป็น playlist ใน Spotify เลยจ้า สุดจริงๆ&amp;nbsp;คือถ้าฉันได้ไปกะเค้าด้วยจะใช้เพลง intro โดราเอม่อน&amp;nbsp;&amp;nbsp;แล้วตอนนำเสนอคือ&amp;nbsp;บางคนนำเสนอแบบบทกวี มาทรงคำคล้องจองงี้บางคนมี soundtrack เป็นอูคูเลเล่&amp;nbsp;คนเล่าเป็นนิทานก่อนนอนก็มี&amp;nbsp;แล้วคือมีคนไปนอนกองอยู่หน้าโพเดียมตอนพี่แกเล่าด้วย 5555&amp;nbsp;แล้วที่ว่าคนเข้างานนี้มีจนถึงเวลศาสตราจารย์หนึ่งในนั้นคือ Prof. Yanai หนึ่งในหัวหน้าแก๊งค์ของงานนี้&amp;nbsp;แล้วนี่คือตัวตึงเลย เค้าให้อาสาสมัครไปยืนบนเวทีทำตัวประหนึ่ง &quot;ยีน&quot; แล้วโบกแขน ตอนยีนเปิดหรือปิดจ๊าบจ๊าดดด คือในมุมนักชีวะอาจจะแบบว่าก็เข้าใจอยู่แล้วนี่นาแต่นึกสภาพนักฟิสิกส์ที่นั่งตาใสๆ สิทุกคนนนนคือเราต้องอธิบายให้ทุกคนเข้าใจว่าซั่น&amp;nbsp;👉ชอบที่&amp;nbsp;Illouz-Eliaz พูดว่า&amp;nbsp;&amp;nbsp;&amp;nbsp;“การทำตัวตลกๆ หรือโง่ๆ ทำให้บรรยากาศการประชุมเปิดกว้างมากขึ้น และเป็นที่ที่เราสามารถเป็นตัวของตัวเองและแสดงความเปราะบางได้”&amp;nbsp;&amp;nbsp;👉และที่ Prof. Yanai พูดว่า“แน่นอนว่าเราต้องการวิทยาศาสตร์ที่เข้มงวดและทำซ้ำได้ แต่เราก็ยอมรับอีกด้านหนึ่งของกระบวนการ นั่นคือ ‘มาหาแรงบันดาลใจเพื่อสร้างแนวคิดใหม่ๆ และสร้างความเชื่อมโยงกัน’&quot;&amp;nbsp;“จะเกิดอะไรขึ้นถ้าเพียงแค่การนำเสนอการบรรยายในหัวข้อที่แตกต่างกันโดยสิ้นเชิง มันจะทำให้คุณเกิดความคิดใหม่?”&amp;nbsp;&amp;nbsp;นั่นเพราะเรื่องราวของ&amp;nbsp;🌜&amp;nbsp;Night Science (คำนี่เริ่มมากจาก&amp;nbsp;François Jacob เจ้าของรางวัลโนเบลสาขากาารแพทย์ปี 1965) ซึ่งเป็นกระบวนการคิดแบบไร้กระบวนท่ากว่าจะได้มาเป็น Day Science&amp;nbsp;🌞&amp;nbsp;ซึ่งก็คืองานที่เราลงมือทำ สมมติฐานที่เราพิสูจน์แบบเรียงลำดับสวยงามเป็นขั้นเป็นตอน&amp;nbsp;&amp;nbsp;😝ตอนปิดงานก็ยังจ๊าบบบ วิ่งเทรลหากระดาษปู่ดาร์วินไปอีกแล้วงานประชุมครั้งนี้ก็ปิดท้ายด้วยนำเสนอโปสเตอร์กลางป่า เล่นเกม เล่นดนตรี โต้วาที&amp;nbsp;แล้วมีวิ่งเทรลแนวนั้นด้วย 5555 OMG!!คือแต่ละคนมีแผนที่และไปตามเอาหน้ากระดาษจากหนังสือวิทยาศาสตร์ที่วางไว้ตามทาง 4 เล่มกลับมา (หนึงสือเล่มนึงในนั้นคือ On the Origin of Species ของดาร์วิน) สุดแท้ของที่ต้องออกตามล่า ยังต้องเป็นหน้ากระดาษวิทย์ๆ แม่เอ้ยยยย&amp;nbsp;ที่จริงนักวิทย์พยายามจะทำงานร่วมกันแต่ก่อน ในยุคที่คนมุ่งไปทาง oncogene&amp;nbsp;&amp;nbsp;ก็มีงานประชุมเฉพาะชาว oncogene เลย ตั้งแต่ปี 1985&amp;nbsp;โปสเตอร์นี่เกรียนทุกกกกปี&amp;nbsp;และนี่คือตัวอย่างโปสเตอร์บางปี&amp;nbsp;ต้องขอบคุณที่ Prof. Joan Brugge เอาเรื่องนี้มาเล่าในงานประชุม Cancer genetics: History and consequences&amp;nbsp;อยากอ่านเรื่องนี้เพิ่มตามต่อได้ที่ &quot;A not so brief history of the Oncogene Meeting and its Cartoons&quot;&amp;nbsp;เป็นงานเขียนลงวารสาร Oncogene เมื่อ 2007&amp;nbsp;&amp;nbsp;ความฮาคือมี Supplement fig อันนึงที่เค้าวาดคนสำคัญหลายๆคนในฟีล oncogene แต่บางคนไม่ได้เขียนชื่อไว้ แล้ว&amp;nbsp;J Simon&amp;nbsp;ก็เขียนใน Figure legend ว่าเค้าจำไม่ได้แล้วว่าใครเป็นใครในภาพเนี่ย ไปถาม T Hunter ก็จำไม่ได้เหมือนกัน 555555555555 โอ๊ยยยยย Fig legend จะฮาไปไหนนนน 😝ตอนหลังงานนี้หยุดไปแล้วมี AACR เข้ามาแทนซึ่งรวมชาว cancer research ได้เยอะมากกกกกก จัดมาเรื่อยทุกปี&amp;nbsp;&amp;nbsp;เห็นคนไทยเข้าประชุม AACR เยอะเลยปีๆนึง แต่คนไทยที่เป็น AACR member มีไม่กี่คนหนึ่งนั้นคือ เจ้าฟ้าหญิงจุฬาภรณ์&amp;nbsp;ไอเดียดีๆ บ่อยครั้งที่โผล่ตอนที่เราเอานู้นผสมนี่บ้างทีเราก็ได้ไอเดีย/แนวคิดเด็ดๆ จากนักฟิสิกส์นะ&amp;nbsp;เช่น Stephen Hawking, Richard Feynmanและการนั่งเกร็งตัวแข็งทื่อ พิธีรีตรองเยอะแยะระหว่างคุยงานวิทย์ๆนี่&amp;nbsp;ทำให้หัวตื้อคิดอะไรไม่ออกเลยทีเดียว 😍&amp;nbsp;&amp;nbsp;อยากไป&amp;nbsp;Woodstock.Bio2 + Night Science&amp;nbsp;&amp;nbsp;&amp;nbsp;#TheConferenceToEndAllConferences&amp;nbsp;บ้างแล้วสิLindau Nobel Laureate Meetings ปี 2026&amp;nbsp;ก็เป็นปีที่รวมทุกสาขาวิชาเลยด้วยน่าไปที่สุดเลย&amp;nbsp;ปล. โพสต์นี้เขียนด้วยความดีด อิอิ&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/08/blog-post.html", "_blank");
        
      },
    },{id: "post-วันนึงโตขึ้น-เราจะไม่เป็นคนแบบนั้น-คนแบบที่เราไม่ชอบ",
      
        title: 'วันนึงโตขึ้น เราจะไม่เป็นคนแบบนั้น คนแบบที่เราไม่ชอบ <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;&quot;วันนึงโตขึ้น เราจะไม่เป็นคนแบบนั้น คนแบบที่เราไม่ชอบ&quot;&amp;nbsp;การโตเป็นผู้ใหญ่ไม่จำเป็นต้องเจ้ายศ เจ้าอย่างเสมอไป&amp;nbsp;มุมมองครั้งนี้อยากเตือนวัยรุ่น วัยของความครึ่งๆกลางๆ ระหว่างเด็กกับผู้ใหญ่&amp;nbsp;ถ้าไม่หมั่นเตือนใจตัวเองไว้ โตไปเราก็จะเป็นผู้ใหญ่แบบที่เราเคยไม่ชอบนั่นแหละ เพราะโตขึ้นลาภ ยศ สรรเสริญก็จะตามมาเป็นธรรมดาแตกต่างจากวัยเด็กที่ใครๆก็สอนให้เรานอบน้อมและเคารพทุกคนอยู่เสมอ อยากเล่าเรื่องผู้ใหญ่บางท่านที่เคยพบแล้วประทับใจให้ฟัง ซึ่งทุกคนในเรื่องเล่าก็กลายเป็นไอดอลของเราในด้านนั้นๆไปแล้ว&amp;nbsp;1. #ผู้ใหญ่และผู้บริหารที่นอบน้อม คงไม่คุ้นกับการที่ผู้ใหญ่ไหว้เด็กก่อน เจอป้าท่านนี้ทีไร แทบจะโยนข้าวของในมือทั้งหมดทิ้งเพื่อจะยกมือไหว้ก่อนให้ทัน ป้าไม่ได้ไหว้แค่เรา ยาม แม่บ้านคือป้ายกมือไหว้หมด แม้การไหว้จะไม่ใช่ทุกสิ่ง แต่นั้นทำให้สัมผัสได้ว่าป้านอบน้อม ไม่เคยเบ่งใส่ใครและเป็นผู้ใหญ่ที่ทำให้เด็กๆอย่างเราอยากเข้าหาและเอาเป็นแบบอย่างอยู่เสมอ และป้านี่แหละที่เป็นแบบอย่างให้เราอยากทำกิจกรรมเพื่อสังคม&amp;nbsp;2. #ผู้ใหญ่ที่ให้โอกาส ตั้งแต่มัธยมปลาย มีโอกาสได้เจออาจารย์อาวุโสท่านหนึ่งในค่าย ยศนำหน้าชื่อของ อ ในตอนนั้นคือ ศ.ดร.มรว. เห็นยศแล้วไม่รู้จะเข้าไปคุยอย่างไรดี ต้องทำเหมือนในข่าวพระราชสำนักหรือเปล่าเนี่ย ด้วยความเป็นเด็กบ้านนอกเลยคลานเข่า &amp;gt;&amp;lt; ตลกตัวเองจัง อาจารย์คุยแบบไม่ถือตัวเลย แล้วเด็กบ้านนอกวันนั้นก็ได้โอกาสเยอะแยะมากมายเพราะจุดเริ่มต้นครั้งนั้น ใครจะนึกว่าเด็กบ้านๆ ผมสั้น ตัวดำๆจะมีใครสนใจ..จริงมั้ย หลังจากนั้นก็ได้รู้จักการวิจัยมะเร็งมากขึ้น ได้ไปฝึกงาน แล้วนี่ก็มาเรียนต่อเรื่องมะเร็ง ทุกวันนี้ก็ยังติดต่ออาจารย์และส่งการ์ดวันครูให้อาจารย์ทุกปี คิดอยู่เสมอว่าถ้าวันนึงอยู่ในสถานะที่ให้โอกาสกับใครได้ เราก็จะให้ต่อเหมือนกับที่เราเคยได้รับมา&amp;nbsp;3. #ผู้ใหญ่ที่ไม่ถือตัว ครั้งหนึ่งเคยเข้าพบและได้ไปทานข้าวกับผู้บริหารระดับสูงของมูลนิธิจุฬาภรณ์ ท่านเป็นระดับคุณหญิง การพูดคุยในห้องทำงานเป็นกันเองมาก จากตอนแรกที่เรานั่งตัวเเข็งเป็นหุ่นยนต์ก็กลับมาเป็นคนได้อีกครั้ง &amp;gt;&amp;lt; จนตอนทานข้าว เข้าห้องอาหาร VIP ไปบุ๊ป เจอท่านฑูตนั่งทานอยู่ก่อน เรากำลังจะหันไปรินน้ำ แต่คุณหญิงหยิบแก้วไปรินให้เสียแล้ว นี่ว่าตัวเองเร็วแล้วนะ โอ้ววววทำไงดี จนท่านฑูตบอกว่าไม่เป็นไรทำตัวตามสบายเถอะ คุณหญิงรินให้แล้ว แล้วบทสนทนาในห้องอาหารก็ดำเนินต่อไปแบบสบายๆ&amp;nbsp;4. #ผู้ใหญ่และหมอที่เข้าใจคนไข้ ท่านเป็นหมอเจ้าของไข้ของเราเอง จากที่เคยคิดว่ายาเหมือนกันก็คือการรักษาเหมือนกัน ก็เปลี่ยนความคิดนี้ไปเลย เพราะการรักษาไม่ได้ต้องการแค่ยา แต่ต้องการคำแนะนำและหมอที่เข้าใจ มันให้ความรู้สึกเหมือนเรากับหมอเป็นทีมเดียวกันแล้วไปสู้รบตบมือกับโรค หมอทำให้เรารู้สึกว่ามีคนรับฟังและช่วยแก้ปัญหาที่เกิดจากโรค และหมอก็ช่วยเต็มที่จริงๆ เราเองก็เป็นคนไข้ที่เต็มที่เหมือนกัน หมอบอกอะไรมาทำหมด นอกจากมุมมองของคนไข้ เภสัชทุกคนก็ต้องเจอกับคนไข้ และเราก็จะเป็นเภสัชที่ดี ดูแลคนไข้ให้ดีแบบที่หมอดูแลเรา &amp;nbsp;วันที่เขียน 21 มีนาคม 2019&amp;nbsp;&amp;nbsp;เวลาผ่านมา 6 ปี ในระหว่าง 6 ปีนี้ คิดทบทวนดู อยากเพิ่มผู้ใหญ่ในดวงใจอีก 3 คน.5.&amp;nbsp;#ผู้ใหญ่ของครอบครัว ป้าๆกับลุง พอคิดย้อนไปตอนนี้เราก็โตพอที่จะเป็นน้า เป็นป้าคนได้แล้ว แต่ไม่ค่อยได้คิดเรื่องนี้เพราะพี่ๆน้องๆก็ไม่มีลูกกัน ตอนเด็กๆและจนมาถึงตอนนี้ ป้าน้อย ป้าเภา ลุงน้อย เป็นแบบอย่างเรื่องห่วงใยหลานๆ และเป็นธุระจัดการเรื่องในครอบครัวฝั่งบ้านยายมาตลอด การทำให้ครอบครัวรักและสามัคคีกันเป็นเรื่องที่สำคัญมากเลย&amp;nbsp;6.&amp;nbsp;#ผู้ใหญ่ที่สู้รบด้วยได้ 55555 อาจารย์ที่ปรึกษานั่นเอง เตรียม manuscript แต่ละฉบับเหมือนออกสงคราม หยิบดาบก่อนกดเข้า zoom ไรงี้เลยยยย แต่เถียงอาจารย์เฉพาะเรื่องวิทยาศาสตร์นะ นอกนั้นเป็นนักเรียนที่เรียบร้อยมากกกกก อิอิ คือมันสนุกนะ กับอาจารย์ท่านอื่นไม่น่าจะกล้าเลยแหละ วิจัยและวิทยาศาสตร์มันต้องฟีลนี้ ใครไม่สมเหตุสมผล แพ้!!! แล้วใครที่แพ้ ฉันเองจ้าาา แต่ยังสู้เก่ง กลัวกรรมตามทันจริงๆ เกิดต้องดูเเลเด็กๆนักเรียนขึ้นมานี่ แอร๊ &amp;nbsp;7.&amp;nbsp;#ผู้ใหญ่ที่วางตัวดี ผู้ใหญ่คนนี้เป็นรุ่นพี่คนหนึ่ง พี่เค้าวางตัวดีมาก น่าเกรงขาม ไม่เชื่ออะไรง่ายๆ ไม่ตัดสินใครง่ายๆ ทำงานเป็นทีมเริ่ดมากเว่อร์ เป็นนักวิทยาศาสตร์ที่มีเหตุผลทุกขั้นทุกตอน การทดลองแป๊ะสุดๆ นอกจากจะพยายามตามพี่เค้าเรื่องการวางตัว (ซึ่งตัวฉันเองก็ยังวางอะไรไม่ได้สักอย่าง 555) ก็ตามเรื่องวางแผนการทดลองด้วย 5555 ซึ่งอย่างหลังนี่ทำให้รอดชีวิตจากช่วงปริญญาเอกมาได้เลยแหละ&amp;nbsp;วันที่เขียน 21 มีนาคม 2025&amp;nbsp;&amp;nbsp;ทั้งหมดนี้ ก็ได้แต่บอกว่าให้เตือนตัวเองอยู่เสมอจำความรู้สึกตอนเป็นเด็กๆไว้ให้ดีถ้าโตเป็นผู้ใหญ่ ก็ให้เป็นผู้ใหญ่แบบที่เราอยากเจอตอนเราเป็นเด็ก&amp;nbsp;เพราะโตเป็นผู้ใหญ่มันไม่ง่าย แต่จะเป็นเด็กตลอดไปก็คงไม่ได้เหมือนกัน&amp;nbsp;&amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/08/blog-post.html", "_blank");
        
      },
    },{id: "post-ยามุ่งเป้าที่ใช้รักษาโรคหอบหืด-ตอน-4-4-กลุ่มยาที่ออกฤทธิ์ต่อ-tslp",
      
        title: '🧬 ยามุ่งเป้าที่ใช้รักษาโรคหอบหืด 🫁 ตอน 4/4: กลุ่มยาที่ออกฤทธิ์ต่อ TSLP <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "🧬 ยามุ่งเป้าที่ใช้รักษาโรคหอบหืด 🫁 ตอน 4/4:&amp;nbsp;กลุ่มยาที่ออกฤทธิ์ต่อ TSLP&amp;nbsp;&amp;nbsp;สวัสดีค่ะทุกคน! 👋 มาถึงยาตัวสุดท้ายในซีรีส์ &quot;ยามุ่งเป้าที่ใช้รักษาโรคหอบหืด&quot; ที่มิสนำมาฝากกันในครั้งนี้นะคะ!&amp;nbsp;สำหรับยาชีววัตถุหรือยามุ่งเป้านั้น ตามแนวทางการรักษาโรคหอบหืด (GINA 2025) แนะนำให้พิจารณาใช้ในขั้นที่ 5 ค่ะ&amp;nbsp;🌟 นั่นหมายความว่า ยาเหล่านี้สงวนไว้สำหรับผู้ป่วยหอบหืดชนิดรุนแรง (Severe Asthma) ที่แม้จะได้รับการรักษาด้วยยาควบคุมอาการอื่นๆ ในขนาดสูงสุดที่เหมาะสมแล้ว (เช่น ยาสเตียรอยด์ชนิดพ่นร่วมกับยาขยายหลอดลมออกฤทธิ์นาน) อาการก็ยังคุมได้ไม่ดี หรือยังมีการกำเริบบ่อยๆ นั่นเองค่ะ&amp;nbsp;💉 การเลือกใช้ยามุ่งเป้าตัวไหนนั้น คุณหมอจะพิจารณาจากลักษณะเฉพาะของอาการหอบหืดในผู้ป่วยแต่ละคน หรือที่เรียกว่า 🧬&quot;ฟีโนไทป์&quot; (Phenotype) โดยดูจากผลตรวจทางห้องปฏิบัติการ เช่น ระดับของสารบางอย่างในเลือด หรือจำนวนเซลล์เม็ดเลือดขาวบางชนิดค่ะ&amp;nbsp;🛡️ กลุ่มยามุ่งเป้าที่มีในปัจจุบัน ก็มีหลายตัวเลยและนี่คือตัวสุดท้ายที่เราจะมาทำความรู้จักกันค่ะ!&amp;nbsp;4. กลุ่มยาที่ออกฤทธิ์ต่อ TSLP (Anti-TSLP)&amp;nbsp;✅ เป้าหมาย: สาร Thymic Stromal Lymphopoietin (TSLP) ซึ่งเป็นสารตั้งต้นสำคัญที่กระตุ้นให้เกิดการอักเสบในทางเดินหายใจในภาพรวม ตั้งแต่ต้นทางเลยค่ะ เหมือนเป็นสวิตช์หลักที่เปิดการอักเสบในหลายๆ กระบวนการ&amp;nbsp;✅ ชื่อสามัญทางยา: Tezepelumab (เทเซเพลูแมบ)&amp;nbsp;✅ กลไก: ยาจะไปยับยั้ง TSLP โดยตรง ทำให้กระบวนการอักเสบตั้งแต่ต้นทางถูกตัดตอนลง ป้องกันไม่ให้เกิดการอักเสบต่อเนื่องไปจนถึงปลายทางได้ค่ะ&amp;nbsp;&amp;nbsp;✅ เหมาะกับ: ผู้ป่วยหอบหืดชนิดรุนแรง ไม่ว่าจะมีฟีโนไทป์แบบ T2-high หรือ T2-low (ซึ่งยาตัวอื่นๆ อาจตอบสนองได้ไม่ดีเท่า) ทำให้เป็นทางเลือกสำหรับผู้ป่วยที่ไม่มีไบโอมาเกอร์ที่ชัดเจนสำหรับยาตัวอื่นค่ะ ถือเป็นความหวังใหม่สำหรับผู้ป่วยบางรายเลยทีเดียว&amp;nbsp;☝️ ความพิเศษของยา Tezepelumab คือการออกฤทธิ์ที่ต้นน้ำของการอักเสบ ทำให้ครอบคลุมกลไกการเกิดหอบหืดได้กว้างขึ้น ไม่จำกัดอยู่แค่ในฟีโนไทป์บางประเภท ถือเป็นอีกทางเลือกที่น่าสนใจสำหรับผู้ป่วยที่การรักษาเดิมยังไม่ตอบสนองอย่างเต็มที่นะคะ&amp;nbsp;💖 สรุปและข้อคิดจากมิส💖ยามุ่งเป้าเหล่านี้เป็นความก้าวหน้าครั้งสำคัญในการรักษาโรคหอบหืดค่ะ ทำให้ผู้ป่วยหอบหืดชนิดรุนแรงมีทางเลือกในการรักษาที่มีประสิทธิภาพมากขึ้น และช่วยให้มีคุณภาพชีวิตที่ดีขึ้นอย่างเห็นได้ชัดเลยค่ะ อย่างไรก็ตาม ยาเหล่านี้เป็นยาที่ซับซ้อน และมีค่าใช้จ่ายสูง การตัดสินใจว่าจะใช้ยาตัวไหน และจะเหมาะสมกับเราหรือไม่นั้น 💋ต้องปรึกษาแพทย์ผู้เชี่ยวชาญด้านโรคระบบทางเดินหายใจเท่านั้นนะคะ💋 คุณหมอจะประเมินอาการ ตรวจหา &quot;เป้าหมาย&quot; ที่เหมาะสม และวางแผนการรักษาที่ดีที่สุดให้เราค่ะ 😊&amp;nbsp;หวังว่าข้อมูลนี้จะเป็นประโยชน์กับทุกคนนะคะ หากมีข้อสงสัยเพิ่มเติม สามารถปรึกษาคุณหมอประจำตัวได้เลยค่ะ 😊💋&amp;nbsp;💋 ติดตามเรื่องราวดีๆ และเป็นประโยชน์จากมิสหอบหืดได้ที่เพจ&amp;nbsp;💋 @มิสหอบหืด - Miss Asthma Thailand&amp;nbsp;หรืออ่านบทความย้อนหลังได้ที่👉 https://missasthmath.blogspot.com&amp;nbsp;#มิสหอบหืด #MissAsthmaTH #GINA2025 #ยามุ่งเป้าหอบหืด #Biologics #รักษาหอบหืด #หอบหืดชนิดรุนแรง #สุขภาพปอด #การแพทย์แม่นยำ #ทางเลือกการรักษา #Tezepelumab&amp;nbsp;📚 อ้างอิง&amp;nbsp;- https://www.myastrazeneca.co.uk/tezspire/how-it-works.html",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/2025/07/44-tslp.html", "_blank");
        
      },
    },{id: "post-ยามุ่งเป้าที่ใช้รักษาโรคหอบหืด-ตอน-3-4-กลุ่มยาที่ออกฤทธิ์ต่อ-ต่อ-il-5-หรือตัวรับ-il-5",
      
        title: '🧬 ยามุ่งเป้าที่ใช้รักษาโรคหอบหืด 🫁 ตอน 3/4:  กลุ่มยาที่ออกฤทธิ์ต่อ ต่อ IL-5 หรือตัวรับ IL-5 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;🧬 ยามุ่งเป้าที่ใช้รักษาโรคหอบหืด 🫁 ตอน 3/4:&amp;nbsp; กลุ่มยาที่ออกฤทธิ์ต่อ&amp;nbsp;ต่อ IL-5 หรือตัวรับ IL-5&amp;nbsp;สวัสดีค่ะทุกคน! 👋 กลับมาพบกับมิสในซีรีส์ &quot;ยามุ่งเป้าที่ใช้รักษาโรคหอบหืด&quot; กันต่อนะคะ!สำหรับยาชีววัตถุหรือยามุ่งเป้านั้น ตามแนวทางการรักษาโรคหอบหืด (GINA 2025) แนะนำให้พิจารณาใช้ในขั้นที่ 5 ค่ะ&amp;nbsp;🌟 นั่นหมายความว่า ยาเหล่านี้สงวนไว้สำหรับผู้ป่วยหอบหืดชนิดรุนแรง (Severe Asthma) ที่แม้จะได้รับการรักษาด้วยยาควบคุมอาการอื่นๆ ในขนาดสูงสุดที่เหมาะสมแล้ว (เช่น ยาสเตียรอยด์ชนิดพ่นร่วมกับยาขยายหลอดลมออกฤทธิ์นาน) อาการก็ยังคุมได้ไม่ดี หรือยังมีการกำเริบบ่อยๆ นั่นเองค่ะ&amp;nbsp;💉 การเลือกใช้ยามุ่งเป้าตัวไหนนั้น คุณหมอจะพิจารณาจากลักษณะเฉพาะของอาการหอบหืดในผู้ป่วยแต่ละคน หรือที่เรียกว่า 🧬&quot;ฟีโนไทป์&quot; (Phenotype) โดยดูจากผลตรวจทางห้องปฏิบัติการ เช่น ระดับของสารบางอย่างในเลือด หรือจำนวนเซลล์เม็ดเลือดขาวบางชนิดค่ะ&amp;nbsp;🛡️ กลุ่มยามุ่งเป้าที่มีในปัจจุบัน ก็มีหลายตัวเลยวันนี้เรามาทำความรู้จักตัวที่สามกันดีกว่าค่ะ!&amp;nbsp;3. กลุ่มยาที่ออกฤทธิ์ต่อ IL-5 หรือตัวรับ IL-5 (Anti-IL-5 / Anti-IL-5Rα)&amp;nbsp;✅ เป้าหมาย: สาร IL-5 เป็นสารที่กระตุ้นการสร้างและการทำงานของเซลล์เม็ดเลือดขาวชนิดอีโอซิโนฟิล (Eosinophil) ซึ่งเป็นตัวการสำคัญของการอักเสบในปอดของผู้ป่วยหอบหืดบางรายค่ะ&amp;nbsp;✅ ชื่อสามัญทางยา:&amp;nbsp;* Mepolizumab (มีโพลิซูแมบ)&amp;nbsp;* Reslizumab (เรสลิซูแมบ)&amp;nbsp;* Benralizumab (เบนราลิซูแมบ) (ตัวนี้จะออกฤทธิ์กับตัวรับของ IL-5 โดยตรง)&amp;nbsp;✅ กลไก: ยาในกลุ่มนี้จะไปยับยั้งการทำงานของ IL-5 โดยตรง หรือไปทำให้เซลล์อีโอซิโนฟิลที่มีบทบาทในการอักเสบลดลงค่ะ ส่งผลให้การอักเสบในทางเดินหายใจที่เกิดจากเซลล์กลุ่มนี้ลดลงอย่างจำเพาะเจาะจง อาการหอบหืดจึงดีขึ้น&amp;nbsp;&amp;nbsp;✅ เหมาะกับ: ผู้ป่วยหอบหืดที่มีภาวะอีโอซิโนฟิลในเลือดสูง (โดยคุณหมอจะดูผลการตรวจเลือดประกอบการพิจารณาค่ะ)&amp;nbsp;☝️ สำหรับผู้ป่วยหอบหืดที่มีระดับอีโอซิโนฟิลสูงเนี่ย การจัดการกับการอักเสบที่ต้นตอของเซลล์กลุ่มนี้โดยตรง ถือเป็นทางเลือกที่สำคัญมากๆ เลยนะคะ เพราะจะช่วยควบคุมอาการและลดการกำเริบได้อย่างมีประสิทธิภาพค่ะ&amp;nbsp;💖 สรุปและข้อคิดจากมิส💖ยามุ่งเป้าเหล่านี้เป็นความก้าวหน้าครั้งสำคัญในการรักษาโรคหอบหืดค่ะ ทำให้ผู้ป่วยหอบหืดชนิดรุนแรงมีทางเลือกในการรักษาที่มีประสิทธิภาพมากขึ้น และช่วยให้มีคุณภาพชีวิตที่ดีขึ้นอย่างเห็นได้ชัดเลยค่ะ อย่างไรก็ตาม ยาเหล่านี้เป็นยาที่ซับซ้อน และมีค่าใช้จ่ายสูง การตัดสินใจว่าจะใช้ยาตัวไหน และจะเหมาะสมกับเราหรือไม่นั้น 💋ต้องปรึกษาแพทย์ผู้เชี่ยวชาญด้านโรคระบบทางเดินหายใจเท่านั้นนะคะ💋 คุณหมอจะประเมินอาการ ตรวจหา &quot;เป้าหมาย&quot; ที่เหมาะสม และวางแผนการรักษาที่ดีที่สุดให้เราค่ะ 😊&amp;nbsp;หวังว่าข้อมูลนี้จะเป็นประโยชน์กับทุกคนนะคะ หากมีข้อสงสัยเพิ่มเติม สามารถปรึกษาคุณหมอประจำตัวได้เลยค่ะ 😊💋&amp;nbsp;💋 ติดตามเรื่องราวดีๆ และเป็นประโยชน์จากมิสหอบหืดได้ที่เพจ&amp;nbsp;💋 @มิสหอบหืด - Miss Asthma Thailand&amp;nbsp;หรืออ่านบทความย้อนหลังได้ที่👉 https://missasthmath.blogspot.com&amp;nbsp;#มิสหอบหืด #MissAsthmaTH #GINA2025 #ยามุ่งเป้าหอบหืด #Biologics #รักษาหอบหืด #หอบหืดชนิดรุนแรง #สุขภาพปอด #การแพทย์แม่นยำ #ทางเลือกการรักษา #Mepolizumab #Reslizumab #Benralizumab&amp;nbsp;📚 อ้างอิง-&amp;nbsp;&amp;nbsp;Menzella F, Biava M, Bagnasco D, Galeone C, Simonazzi A, Ruggiero P, Facciolongo N. Efficacy and steroid-sparing effect of benralizumab: has it an advantage over its competitors? Drugs Context. 2019 Apr 15;8:212580. doi: 10.7573/dic.212580. PMID: 31024635; PMCID: PMC6469746.",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/2025/07/34-il-5-il-5.html", "_blank");
        
      },
    },{id: "post-ยามุ่งเป้าที่ใช้รักษาโรคหอบหืด-ตอน-2-4-กลุ่มยาที่ออกฤทธิ์ต่อ-anti-il-4rα",
      
        title: '🧬 ยามุ่งเป้าที่ใช้รักษาโรคหอบหืด 🫁 ตอน 2/4:  กลุ่มยาที่ออกฤทธิ์ต่อ Anti-IL-4Rα <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;🧬 ยามุ่งเป้าที่ใช้รักษาโรคหอบหืด 🫁 ตอน 2/4:&amp;nbsp; กลุ่มยาที่ออกฤทธิ์ต่อ Anti-IL-4Rα&amp;nbsp;สวัสดีค่ะทุกคน! 👋 กลับมาพบกับมิสในซีรีส์ &quot;ยามุ่งเป้าที่ใช้รักษาโรคหอบหืด&quot; กันต่อนะคะ!สำหรับยาชีววัตถุหรือยามุ่งเป้านั้น ตามแนวทางการรักษาโรคหอบหืด (GINA 2025) แนะนำให้พิจารณาใช้ในขั้นที่ 5 ค่ะ🌟 นั่นหมายความว่า ยาเหล่านี้สงวนไว้สำหรับผู้ป่วยหอบหืดชนิดรุนแรง (Severe Asthma) ที่แม้จะได้รับการรักษาด้วยยาควบคุมอาการอื่นๆ ในขนาดสูงสุดที่เหมาะสมแล้ว (เช่น ยาสเตียรอยด์ชนิดพ่นร่วมกับยาขยายหลอดลมออกฤทธิ์นาน) อาการก็ยังคุมได้ไม่ดี หรือยังมีการกำเริบบ่อยๆ นั่นเองค่ะ💉 การเลือกใช้ยามุ่งเป้าตัวไหนนั้น คุณหมอจะพิจารณาจากลักษณะเฉพาะของอาการหอบหืดในผู้ป่วยแต่ละคน หรือที่เรียกว่า 🧬&quot;ฟีโนไทป์&quot; (Phenotype) โดยดูจากผลตรวจทางห้องปฏิบัติการ เช่น ระดับของสารบางอย่างในเลือด หรือจำนวนเซลล์เม็ดเลือดขาวบางชนิดค่ะ🛡️ กลุ่มยามุ่งเป้าที่มีในปัจจุบัน ก็มีหลายตัวเลยวันนี้เรามาทำความรู้จักตัวที่สองกันดีกว่าค่ะ!2. กลุ่มยาที่ออกฤทธิ์ต่อ IL-4 receptor alpha (Anti-IL-4Rα)&amp;nbsp;✅ เป้าหมาย: ตัวรับสัญญาณของสาร IL-4 และ IL-13 ซึ่งเป็นสารสื่อกลางสำคัญที่ทำให้เกิดการอักเสบในทางเดินหายใจหลายรูปแบบ รวมถึงการสร้างเมือกที่มากเกินไป และการหดเกร็งของหลอดลม&amp;nbsp;✅ ชื่อสามัญทางยา: Dupilumab (ดูพิลูแมบ)&amp;nbsp;✅ กลไก: ยาจะไปบล็อกตัวรับสัญญาณที่ใช้ร่วมกันของ IL-4 และ IL-13 ทำให้การอักเสบที่เกิดจากสารเหล่านี้ลดลงโดยตรง ส่งผลให้การอักเสบในทางเดินหายใจลดลง หลอดลมขยายตัวดีขึ้น และการสร้างเมือกลดลงค่ะ&amp;nbsp;✅ เหมาะกับ: ผู้ป่วยหอบหืดที่มีการอักเสบแบบ T2-high (ซึ่งมักจะสัมพันธ์กับภูมิแพ้และเซลล์เม็ดเลือดขาวอีโอซิโนฟิลที่สูง) และผู้ป่วยที่มีปัญหาเมือกเหนียวข้นในทางเดินหายใจมากๆ ค่ะ&amp;nbsp;☝️ ยา Dupilumab ไม่ได้ใช้แค่ในผู้ป่วยหอบหืดเท่านั้นนะคะ แต่ยังถูกนำไปใช้ในการรักษาโรคภูมิแพ้อื่นๆ ที่มีกลไกการอักเสบคล้ายกัน เช่น ผิวหนังอักเสบภูมิแพ้ (Atopic Dermatitis) หรือริดสีดวงจมูกที่มีติ่งเนื้อ (Chronic Rhinosinusitis with Nasal Polyps) ค่ะ นี่แหละคือความเจ๋งของยามุ่งเป้า ที่ออกฤทธิ์ได้ตรงจุดจริงๆ!👉 การที่ยาไปจัดการกับการอักเสบได้ตรงเป้าหมาย ทำให้ช่วยควบคุมอาการหอบหืดได้ดีขึ้นอย่างมีนัยสำคัญ ลดการกำเริบ และช่วยให้คุณภาพชีวิตดีขึ้นได้เยอะเลยค่ะ! 💖💖 สรุปและข้อคิดจากมิส💖ยามุ่งเป้าเหล่านี้เป็นความก้าวหน้าครั้งสำคัญในการรักษาโรคหอบหืดค่ะ ทำให้ผู้ป่วยหอบหืดชนิดรุนแรงมีทางเลือกในการรักษาที่มีประสิทธิภาพมากขึ้น และช่วยให้มีคุณภาพชีวิตที่ดีขึ้นอย่างเห็นได้ชัดเลยค่ะ อย่างไรก็ตาม ยาเหล่านี้เป็นยาที่ซับซ้อน และมีค่าใช้จ่ายสูง การตัดสินใจว่าจะใช้ยาตัวไหน และจะเหมาะสมกับเราหรือไม่นั้น 💋ต้องปรึกษาแพทย์ผู้เชี่ยวชาญด้านโรคระบบทางเดินหายใจเท่านั้นนะคะ💋 คุณหมอจะประเมินอาการ ตรวจหา &quot;เป้าหมาย&quot; ที่เหมาะสม และวางแผนการรักษาที่ดีที่สุดให้เราค่ะ 😊หวังว่าข้อมูลนี้จะเป็นประโยชน์กับทุกคนนะคะ หากมีข้อสงสัยเพิ่มเติม สามารถปรึกษาคุณหมอประจำตัวได้เลยค่ะ 😊💋💋 ติดตามเรื่องราวดีๆ และเป็นประโยชน์จากมิสหอบหืดได้ที่เพจ&amp;nbsp;💋 @มิสหอบหืด - Miss Asthma Thailand&amp;nbsp;หรืออ่านบทความย้อนหลังได้ที่👉 https://missasthmath.blogspot.com#มิสหอบหืด #MissAsthmaTH #GINA2025 #ยามุ่งเป้าหอบหืด #Biologics #รักษาหอบหืด #หอบหืดชนิดรุนแรง #สุขภาพปอด #การแพทย์แม่นยำ #ทางเลือกการรักษา #Dupilumab📚 อ้างอิง-&amp;nbsp;Ferrante G, Tenero L, Piazza M, Piacentini G. Severe pediatric asthma therapy: Dupilumab. Front Pediatr. 2022 Nov 22;10:963610. doi: 10.3389/fped.2022.963610. PMID: 36483465; PMCID: PMC9723147.&amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/2025/07/24-anti-il-4r.html", "_blank");
        
      },
    },{id: "post-quot-tony-hunter-quot-ไม่ใช่-quot-tony-hamster-quot",
      
        title: '&quot;Tony Hunter&quot; ไม่ใช่ &quot;Tony Hamster&quot; <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;คุยกับอาจารย์ว่าอยากเขียนบทความเล่นๆ   เกี่ยวกับนักวิทยาศาสตร์ที่เป็นคนค้นพบ Tyrosine phosphorylation&amp;nbsp;  .  แอดจำชื่อที่ อ บอกมา &quot;Tony Hamster&quot;   เสริชเท่าไหร่ก็ไม่เจอ  ปรากฏเราจำผิด เค้าชื่อ &quot;Tony Hunter&quot;   .  &quot;วิ่งนะ วิ่งนะ แฮมทาโร่...ของอร่อยที่สุด ก็คือเมล็ดทานตะวันนนนนนน&quot;   .  เรื่อง Kinase เป็นเรื่องที่น่าสนใจ   เคยโดนอาจารย์ท่านนึงถามคำถามเกี่ยวกับโปรตีน  ประมาณว่าเยอะที่สุด หรือสำคัญที่สุด อะไรทำนองนี้ จำไม่ค่อยได้นาน 10 ปีละ  แต่คำตอบคำเดียวคือ Kinase!!&amp;nbsp;  .  การค้นพบนี้นำมาสู่ tyrosine kinases และยา tyrosine kinase inhibitors (TKIs)   ซึ่งเป็นยามะเร็งแบบมุ่งเป้าในเวลาต่อมา เช่น!  - Imatinib (Gleevec)  - Dasatinib (Sprycel)  - Erlotinib (Tarceva)  - Sunitinib (Sutent)  - Nilotinib (Tasigna)  - Gefitinib (Iressa)  - Cabozantinib (Cabometyx)  - Axitinib (Inlyta)  .  ยาพวกนี้นะเป็นยามะเร็งมุ่งเป้าแบบที่เป็นโมเลกุลขนาดเล็กด้วย   ส่วนใหญ่ยามุ่งเป้ามักจะเป็นชีวโมเลกุลที่ซับซ้อน   .  ไปขุดประวัติ Tony Hamster เอ้ยยยยย Tony Hunter กันเถอะ!",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/07/tony-hunter-tony-hamster.html", "_blank");
        
      },
    },{id: "post-อิมครานิบ-imcranib-ยามุ่งเป้าแบบเม็ดของเจ้าฟ้าหญิงจุฬาภรณ์",
      
        title: 'อิมครานิบ (Imcranib) ยามุ่งเป้าแบบเม็ดของเจ้าฟ้าหญิงจุฬาภรณ์ <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;💊💊 #Imcranib (#อิมครานิบ)💊💊 = อิมมาทินิบ (Imatinib) นี่ชื่อสามัญทางยา💊💊 = ยามุ่งเป้าที่หลุดสิทธิบัตรแล้ว&amp;nbsp;ยา Imatinib (ชื่อการค้า Glivec) เป็นยามุ่งเป้าชนิดเม็ดที่ถูกผลิตขึ้นตั้งแต่ปี 2001 และเป็นยาที่ปฏิวัติการรักษามะเร็งเม็ดเลือดขาวชนิดเรื้อรังแบบ Myeloid (CML) อย่างสิ้นเชิง ปัจจุบันยาตัวนี้ได้หมดสิทธิบัตรแล้ว ทำให้มีการผลิตยาชื่อสามัญ (Generic drug) หรือยาเลียนแบบออกมาได้ในราคาที่เข้าถึงได้มากขึ้น แน่นอนว่ายาที่ผลิตเลียนแบบต้องมีการศึกษาหลายๆอย่างเพื่อให้แน่ใจว่ามีประสิทธิภาพเทียบเท่ายาต้นฉบับ (การศึกษาชีวสมมูล หรือ Bioequivalence Study) ซึ่ง #อิมครานิบ เป็นข่าวดีสำหรับผู้ป่วยชาวไทยอย่างที่สุดเลย========================🟠Imatinib รักษาโรคอะไรได้บ้าง และมี &quot;เป้า&quot; อย่างไร?Imatinib เป็นยาในกลุ่ม TKI แต่ไม่ได้หมายความว่าจะใช้ได้กับมะเร็งทุกชนิดที่มี Tyrosine Kinase ผิดปกติ เพราะยาตัวนี้จะออกฤทธิ์จำเพาะเจาะจงกับ Tyrosine Kinase บางตัวเท่านั้น เช่น:1️⃣มะเร็งเม็ดเลือดขาวเรื้อรังแบบ Myeloid (CML) และมะเร็งเม็ดเลือดขาวชนิด Ph+ ALL:✅เป้าหมาย: โปรตีนลูกผสม BCR-ABL ซึ่งเกิดจากการที่โครโมโซม 9 และ 22 สลับตำแหน่งกัน (Ph หรือ Philadelphia Chromosome) โปรตีน BCR-ABL นี้มีฤทธิ์เป็น Tyrosine Kinase ที่ทำงานผิดปกติ ทำให้เซลล์เม็ดเลือดขาวแบ่งตัวไม่หยุด✅การตรวจพบเป้า: ทำได้โดยการตรวจทางพันธุกรรม (Genetic testing) เช่น FISH (Fluorescence In Situ Hybridization) หรือ PCR (Polymerase Chain Reaction) เพื่อหาการกลายพันธุ์ของ BCR-ABL2️⃣มะเร็ง GIST (Gastrointestinal Stromal Tumor): มะเร็งเนื้อเยื่ออ่อนในทางเดินอาหาร✅ เป้าหมาย: โปรตีน C-KIT หรือ PDGFRA (Platelet-Derived Growth Factor Receptor Alpha) ที่มีการกลายพันธุ์ผิดปกติ ทำให้เซลล์มะเร็งเติบโตและแบ่งตัวอย่างควบคุมไม่ได้✅การตรวจพบเป้า: ทำได้โดยการตรวจทางพยาธิวิทยาและโมเลกุล (Immunohistochemistry and Molecular testing) จากชิ้นเนื้อ3️⃣มะเร็งผิวหนังชนิด Dermatofibrosarcoma Protuberans (DFSP):✅ เป้าหมาย: โปรตีนลูกผสม COL1A1-PDGFB ซึ่งกระตุ้นการทำงานของ Tyrosine Kinase ทำให้เซลล์มะเร็งแบ่งตัวมากผิดปกติ✅ การตรวจพบเป้า: ตรวจทางพันธุกรรมจากชิ้นเนื้อ================👊🏼 นี่คือเหตุผลว่าทำไมยามุ่งเป้าถึงไม่สามารถใช้ได้กับทุกคนในมะเร็งชนิดเดียวกันได้ 👊🏼 ผู้ป่วยจำเป็นต้องได้รับการตรวจหา &quot;เป้า&quot; ที่จำเพาะเจาะจงก่อนเสมอ เพื่อให้แน่ใจว่ายาจะออกฤทธิ์ได้อย่างมีประสิทธิภาพ=================🧬🧬เกร็ดน่ารู้🧪🧪 บุคคลสำคัญผู้ที่ค้นพบเอนไซม์ Tyrosine Kinase คือ ศาสตราจารย์ ดร. โทนี่ ฮันเตอร์ (Prof. Tony Hunter) 👏 ผู้พลิกโฉมวงการแพทย์มะเร็ง และในปีนี้ท่านยังได้รับรางวัลอันทรงเกียรติอย่างรางวัลสมเด็จเจ้าฟ้ามหิดลอีกด้วย👏 ความสำเร็จของท่านเป็นรากฐานสำคัญที่นำไปสู่การพัฒนายามุ่งเป้ามากมายในปัจจุบัน เราจะมาเจาะลึกเรื่องราวของท่านในโพสต์หน้าค่ะ รอติดตามกันได้เลย! 👏👏👏 แอดฟัง Prof บรรยายมา 2 รอบสนุกทุกรอบ รอบสองเป็นกันเองมาก แต่งตัวมาแบบชาวร็อคเลย อิอิอ้างอิง- Buhl Rasmussen, A. S., Andersen, C. L., Weimann, A., Yang, T., Tron, C., Gandemer, V., … Schmiegelow, K. (2024). Therapeutic drug monitoring of imatinib – how far are we in the leukemia setting? Expert Review of Clinical Pharmacology, 17(3), 225–234. https://doi.org/10.1080/17512433.2024.2312256- https://www.gelbe-liste.de/wirkstoffe/Imatinib_47277เรียบเรียงโดยภญ.ดร.กฤชติยาภรณ์ คงธนะวานิชนักวิจัยมะเร็งที่เป็นเภสัชกรได้นิดหน่อย#ยามุ่งเป้า #TargetedTherapy #รักษามะเร็ง #ยาไทย #Imatinib #TyrosineKinase #BCRABL #CKIT #มะเร็งเม็ดเลือดขาว #มะเร็งGIST #มะเร็งผิวหนัง #การตรวจวินิจฉัย #TonyHunter #รางวัลสมเด็จเจ้าฟ้ามหิดล #NoCancerTH",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/07/imcranib.html", "_blank");
        
      },
    },{id: "post-ยาเคโม-vs-ยามะเร็งมุ่งเป้า",
      
        title: 'ยาเคโม Vs ยามะเร็งมุ่งเป้า 🎯 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;เรื่องจริงของยามะเร็งมุ่งเป้า✅อาการข้างเคียงน้อย❌ใช้ได้กับคนไข้มะเร็งทุกคน❌ใช้ได้กับทุกชนิดมะเร็ง❌มะเร็งชนิดเดียวกันต้องได้ยามุ่งเป้าเหมือนกัน&quot;ยามุ่งเป้า&quot; (Targeted Therapy)🎯 ที่ถือเป็นความหวังใหม่ในการรักษามะเร็ง แต่รู้ไหมว่ายามุ่งเป้าไม่ใช่ยาวิเศษที่ใช้ได้กับมะเร็งทุกชนิด หรือแม้แต่มะเร็งชนิดเดียวกันก็ไม่ได้หมายความว่าจะใช้ได้กับทุกคน! วันนี้เราจะมาทำความเข้าใจกันให้ลึกขึ้นค่ะ==============เคมีบำบัด 💉vs ยามุ่งเป้า 🎯 : ต่างกันอย่างไร?ก่อนอื่น มาเปรียบเทียบให้เห็นภาพชัดๆ ระหว่างยาเคมีบำบัด (Chemotherapy) กับยามุ่งเป้ากันก่อน:    💉ยาเคมีบำบัด: เปรียบเสมือนการทิ้งระเบิด 💥 ฆ่าทุกเซลล์ที่แบ่งตัวเร็ว ไม่ว่าจะเป็นเซลล์มะเร็งหรือเซลล์ปกติในร่างกาย เช่น เซลล์เม็ดเลือด เซลล์รากผม ทำให้เกิดผลข้างเคียงหลายอย่าง    🎯ยามุ่งเป้า: เปรียบเสมือนสไนเปอร์ 🎯 ที่จะเล็งเป้าหมายเฉพาะเจาะจงที่เซลล์มะเร็งที่มี &quot;เป้า&quot; ให้ยาสามารถเข้าไปโจมตีได้ ทำให้มีผลข้างเคียงต่อเซลล์ปกติน้อยกว่า==============🎯🎯&quot;เป้า&quot; ที่ว่าคืออะไร?🎯🎯เป้าหมายของยามุ่งเป้าส่วนใหญ่คือ โปรตีนหรือเอนไซม์ที่ผิดปกติ ซึ่งมีบทบาทสำคัญต่อการเจริญเติบโต การแบ่งตัว หรือการอยู่รอดของเซลล์มะเร็ง โปรตีนเหล่านี้มักเป็นตัวรับสัญญาณ หรือเอนไซม์นี่คือเหตุผลว่าทำไมยามุ่งเป้าถึงไม่สามารถใช้ได้กับทุกคนในมะเร็งชนิดเดียวกันได้! ผู้ป่วยจำเป็นต้องได้รับการตรวจหา &quot;เป้า&quot; ที่จำเพาะเจาะจงก่อนเสมอ เพื่อให้แน่ใจว่ายาจะออกฤทธิ์ได้อย่างมีประสิทธิภาพ==============☝️☝️แล้วจะรู้ได้อย่างไรว่ามี &quot;เป้า&quot; หรือไม่?☝️☝️การตรวจหาเป้าหมายทำได้หลากหลายวิธี ขึ้นอยู่กับชนิดของมะเร็งและเป้าหมายที่ต้องการตรวจ เช่น:✅การตรวจทางพยาธิวิทยา (Pathology): ตรวจจากชิ้นเนื้อเพื่อดูการแสดงออกของโปรตีนบางชนิด✅การตรวจทางพันธุกรรม (Genetic Testing/Molecular Testing): ตรวจหาการกลายพันธุ์ของยีน หรือโปรตีนผิดปกติที่เกี่ยวข้องกับมะเร็งจากเลือดหรือชิ้นเนื้อ เช่น PCR, FISH, NGS (Next-Generation Sequencing)การตรวจหาเป้าหมายเหล่านี้มีความสำคัญอย่างยิ่งในการตัดสินใจเลือกการรักษาด้วยยามุ่งเป้า เพื่อให้ผู้ป่วยได้รับประโยชน์สูงสุดจากการรักษา และลดโอกาสเกิดผลข้างเคียงที่ไม่จำเป็น#ยามุ่งเป้า #TargetedTherapy #รักษามะเร็ง #ยาไทย #Imatinib #TyrosineKinase #BCRABL #CKIT #มะเร็งเม็ดเลือดขาว #มะเร็งGIST #มะเร็งผิวหนัง #การตรวจวินิจฉัย #TonyHunter #รางวัลสมเด็จเจ้าฟ้ามหิดล #NoCancerTH",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/07/vs.html", "_blank");
        
      },
    },{id: "post-ยามะเร็งมุ่งเป้า-2-ตำรับแรกของไทย",
      
        title: 'ยามะเร็งมุ่งเป้า 2 ตำรับแรกของไทย <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;สุดยอดข่าวดี! ศาสตราจารย์ ดร. สมเด็จพระเจ้าน้องนางเธอ เจ้าฟ้าจุฬาภรณวลัยลักษณ์ฯ ทรงนำทีมผลิต &quot;ยามุ่งเป้า&quot; สู้มะเร็งได้เองตั้งแต่ต้นน้ำถึงปลายน้ำ! 🇹🇭หลายคนอาจจะเคยได้ยินข่าวดีเรื่องยาที่ช่วยรักษามะเร็ง ที่ผลิตโดยฝีมือคนไทย จนถึงขั้นผลิตได้เองตั้งแต่ต้นน้ำถึงปลายน้ำ โดยไม่ต้องพึ่งพาเทคโนโลยีจากต่างประเทศ! แต่รู้ไหมว่ายาที่พูดถึงไม่ได้มีแค่ตัวเดียว! เรามียามุ่งเป้าถึง 2 ชนิดด้วยกัน ที่พร้อมเป็นความหวังใหม่ให้กับผู้ป่วยมะเร็งแล้วการวิจัยยาในระดับต้นน้ำในเมืองไทยนี่คือมีสดๆร้อนๆเลย เมื่อตอนแอดมินจบเภสัชใหม่ๆ พยายามหาโรงงานยาที่วิจัยยาตั้งแต่ต้นน้ำคือหาไม่ได้ในไทย แต่ตอนนี้มีแล้วทุกคนนนนนน👉 ทำความรู้จัก &quot;ยามุ่งเป้า&quot; คืออะไร?ยามุ่งเป้า หรือ Targeted Therapy คือ ยารักษามะเร็งที่ออกฤทธิ์จำเพาะเจาะจงกับเซลล์มะเร็ง โดยเข้าไปยับยั้งการทำงานของโปรตีนหรือกลไกที่จำเป็นต่อการเติบโตและแพร่กระจายของเซลล์มะเร็ง ทำให้เกิดผลข้างเคียงต่อเซลล์ปกติในร่างกายน้อยกว่ายาเคมีบำบัดทั่วไป นี่แหละคือจุดเด่นที่ทำให้ยามุ่งเป้าแตกต่าง!👉 2 ยามุ่งเป้าความหวังใหม่ของคนไทย1️⃣ #เฮอร์ดารา (HERDARA) - ยาชีววัตถุตัวแรกของไทย! 🧬✅ชื่อสามัญทางยา: ทราสทูซูแมบ (Trastuzumab)✅กลุ่มยา: ยาชีววัตถุ (Biologics) หรือยาที่ผลิตจากสิ่งมีชีวิต ซึ่งมีความซับซ้อนในการผลิตสูงกว่ายาสังเคราะห์ทั่วไป✅กลไกการออกฤทธิ์: เข้าไปจับกับโปรตีน HER2 (Human Epidermal growth factor Receptor 2) บนผิวเซลล์มะเร็ง ซึ่งโปรตีนนี้มีบทบาทสำคัญในการควบคุมการเจริญเติบโตและการแบ่งตัวของเซลล์มะเร็ง เมื่อยาเข้าไปจับ จะไปยับยั้งสัญญาณการเติบโตของเซลล์มะเร็งเหล่านั้น✅ใช้รักษา: มะเร็งเต้านมและมะเร็งอื่นๆ ที่เกี่ยวข้องกับโปรตีน HER2✅ link ทะเบียนยาในคอมเม้น2️⃣#อิมครานิบ 100 (IMCRANIB 100) - ยารักษามะเร็งมุ่งเป้าชนิดเม็ดตำรับแรกที่ผลิตขึ้นในประเทศไทย! 💊✅ชื่อสามัญทางยา: อิมาทินิบ (Imatinib)✅กลุ่มยา: ยารักษามะเร็งแบบมุ่งเป้าชนิดเม็ด✅ กลไกการออกฤทธิ์: เป็นยาในกลุ่ม Tyrosine Kinase Inhibitor (TKI) โดยจะเข้าไปยับยั้งการทำงานของเอนไซม์ไทโรซีนไคเนส (Tyrosine Kinase) ที่ผิดปกติ ซึ่งเป็นโปรตีนสำคัญในการส่งสัญญาณการเจริญเติบโตและแบ่งตัวของเซลล์มะเร็ง รวมถึงโปรตีน BCR-ABL ที่พบในมะเร็งเม็ดเลือดขาวบางชนิด และโปรตีน C-KIT ที่พบในมะเร็งอื่นๆ✅ใช้รักษา: มะเร็งเม็ดเลือดขาว, มะเร็งกระเพาะอาหารและลำไส้, และมะเร็งผิวหนัง ในผู้ป่วยที่แพทย์วินิจฉัยว่าเหมาะสม✅ link ทะเบียนยาในคอมเม้นทั้งสองยานี้เป็นผลงานชิ้นโบว์แดงของประเทศไทย ที่แสดงให้เห็นถึงศักยภาพและความมุ่งมั่นในการวิจัยและพัฒนาเพื่อผู้ป่วยมะเร็งอย่างแท้จริง! น่าภาคภูมิใจกับความสำเร็จของคนไทยมากๆ เลยแอดจะบอกนี่คือพระอัจฉริยะภาพและพระวิสัยทัศน์ของพระองค์ท่านซึ่งคนไทยโชคดีมาก พระองค์ท่านวางรากฐานจากสถาบันวิจัย มีโรงเรียนนักวิจัยและโรงพยาบาลตามมา มีโรงเรียนแพทย์และสาธารณสุขอีก ล่าสุดที่มีโรงงานผลิตเภสัชภัณฑ์คือตอนนี้ฟันเฟืองทุกอย่างมันเกือบครบวงจรเลย และเร็วนี้ก็จะมีคณะใหม่ที่จะช่วยสนับสนุนงานในส่วนของยาและการวิจัยยาเพิ่มขึ้นมาอีกด้วย #ยามุ่งเป้า #TargetedTherapy #รักษามะเร็ง #ยาไทย #เฮอร์ดารา #อิมครานิบ #ข่าวดี #โรคมะเร็ง #มะเร็ง #ภัยเงียบ #NoCancerTH",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/07/2.html", "_blank");
        
      },
    },{id: "post-ยาหอบหืดมุ่งเป้า-ก็มีนะ",
      
        title: '🧬 ยาหอบหืดมุ่งเป้า...ก็มีนะ💊 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "🧬 ยาหอบหืดมุ่งเป้า...ก็มีนะ💊&amp;nbsp;ข่าวดังวงการยาช่วงนี้คงหนีไม่พ้น &quot;#ยามะเร็งมุ่งเป้า&quot; ยานี้เค้าจะรักษากันแบบตรงจุด ตรงเป้าหมาย ทำให้การรักษามีประสิทธิภาพมากขึ้นมากๆ  ในวงการโรคหอบหืดเอง เราก็มียาแบบนี้เหมือนกันนะ! นี่แหละคือหัวใจของการแพทย์แบบแม่นยำอย่างหนึ่ง (#PrecisionMedicine) วันนี้มิสจะพามาทำความรู้จักกับ&quot;ยามุ่งเป้าสำหรับโรคหอบหืด&quot;  หรือ &quot;การแพทย์แบบแม่นยำสำหรับหอบหืด&quot; ค่ะ!===========================&amp;nbsp;ยามุ่งเป้าคืออะไร? แล้ว &quot;เป้า&quot; ที่ว่าอยู่ไหน? ยามุ่งเป้าสำหรับหอบหืด ก็คือยาที่ถูกออกแบบมาเพื่อออกฤทธิ์กับ &quot;เป้าหมาย&quot; หรือ กลไกเฉพาะเจาะจงที่ทำให้เกิดอาการหอบหืดในร่างกายของเราแต่ละคนค่ะ ไม่ใช่แค่ลดการอักเสบทั่วไป แต่ลงลึกไปถึงต้นตอ เหมือนการยิงธนูที่ต้องมีเป้าให้เล็ง ถึงจะแม่นยำและได้ผลที่สุด!  หมายความว่า... ก่อนที่เราจะใช้ยามุ่งเป้าได้ คุณหมอจะต้องตรวจหาสาเหตุหรือ &quot;เป้าหมาย&quot; ที่ผิดปกติในร่างกายเราให้เจอก่อนนะคะ เช่น การอักเสบจากเซลล์เม็ดเลือดขาวชนิดใด หรือสารเคมีตัวไหนที่กำลังทำงานผิดปกติ การรักษานี้จึงเป็น &quot;การแพทย์แม่นยำ&quot; ที่แท้จริง เพราะเราไม่ได้ยิงปืนแบบหว่านแห แต่เล็งไปที่จุดกำเนิดปัญหาโดยตรงเลยค่ะ!=====================&amp;nbsp; สิ่งที่ต้องเข้าใจเกี่ยวกับ &quot;ยามุ่งเป้า&quot; ของหอบหืด:หลายคนอาจจะเคยได้ยินว่ายามุ่งเป้าของมะเร็งนั้นออกฤทธิ์โดยการ &quot;ฆ่าเซลล์มะเร็ง&quot; ใช่ไหมคะ? แต่สำหรับยามุ่งเป้าของหอบหืดนั้นแตกต่างออกไปค่ะ! ยาเหล่านี้ไม่ได้มีฤทธิ์ฆ่าเซลล์ แต่จะไป &quot;ยับยั้ง&quot; หรือ &quot;ปรับเปลี่ยน&quot; การทำงานของสารเคมี หรือเซลล์บางชนิดในร่างกายที่ทำให้เกิดการอักเสบในหลอดลมและก่อให้เกิดอาการหอบหืด ค่ะ โดยจะไปบล็อกสัญญาณ หรือหยุดกระบวนการที่นำไปสู่การอักเสบและความผิดปกติ ทำให้หลอดลมสงบลง และอาการดีขึ้นนั่นเองค่ะ======================&amp;nbsp;ข้อดีของยามุ่งเป้าสำหรับหอบหืด สำหรับผู้ป่วยหอบหืดบางราย โดยเฉพาะคนที่มีอาการรุนแรง คุมยาก หรือมีลักษณะเฉพาะตัว ยามุ่งเป้าอาจช่วยพลิกคุณภาพชีวิตได้เลยนะ! ลดความถี่และความรุนแรงของการกำเริบ: อาการหอบกำเริบที่เคยเป็นบ่อยๆ จะลดลงอย่างเห็นได้ชัด ทำให้ใช้ชีวิตได้ปกติมากขึ้น ลดการพึ่งพายาสเตียรอยด์ชนิดรับประทาน: ซึ่งเป็นยาที่คุมอาการได้ดี แต่ก็มีผลข้างเคียงถ้าใช้ต่อเนื่องนานๆ การที่ยามุ่งเป้าช่วยลดการใช้สเตียรอยด์จึงดีต่อร่างกายในระยะยาวค่ะ ควบคุมอาการได้ดีขึ้นมาก: หายใจได้เต็มปอด ทำกิจกรรมที่อยากทำได้ ไม่ต้องกังวลเรื่องอาการหอบหืดอีกต่อไป ลดการเข้าโรงพยาบาล/ห้องฉุกเฉิน: เมื่ออาการคุมได้ดี ก็ไม่ต้องไปหาหมอฉุกเฉินบ่อยๆ ค่ะ===================================&amp;nbsp; 🛡️ กลุ่มยามุ่งเป้าที่มีในปัจจุบัน ก็มีหลายตัวเลย1.  กลุ่มยาที่ออกฤทธิ์ต่อ IgE (Anti-IgE)2.  กลุ่มยาที่ออกฤทธิ์ต่อ IL-5 หรือตัวรับ IL-5 (Anti-IL-5 / Anti-IL-5Rα)3.  กลุ่มยาที่ออกฤทธิ์ต่อ IL-4 receptor alpha (Anti-IL-4Rα)4.  กลุ่มยาที่ออกฤทธิ์ต่อ TSLP (Anti-TSLP)&amp;nbsp;===================================&amp;nbsp; แต่ๆๆ... สิ่งสำคัญที่ต้องทราบคือ &quot;ยามุ่งเป้า&quot; เหล่านี้ มักจะมีราคาสูง  เนื่องจากเป็นยาที่ผ่านการวิจัยพัฒนามาอย่างซับซ้อน และผลิตขึ้นมาเพื่อออกฤทธิ์เฉพาะเจาะจงมากๆ ทำให้บางครั้งอาจจะไม่ครอบคลุมสิทธิการรักษาพื้นฐานทั้งหมด หรืออาจต้องมีค่าใช้จ่ายส่วนเกินค่อนข้างมากค่ะ&amp;nbsp; สำคัญมากๆ: ยามุ่งเป้าเหล่านี้ ไม่ใช่ยาสามัญประจำบ้าน และ ไม่ได้เหมาะกับผู้ป่วยหอบหืดทุกคน นะคะ! การตัดสินใจว่าจะใช้ยามุ่งเป้าหรือไม่ ขึ้นอยู่กับการวินิจฉัย การตรวจหา &quot;เป้าหมาย&quot; และดุลยพินิจของแพทย์ผู้เชี่ยวชาญด้านโรคระบบทางเดินหายใจเท่านั้นค่ะ&amp;nbsp;ใครที่สนใจหรือสงสัยเกี่ยวกับยามุ่งเป้า ควรปรึกษาแพทย์ประจำตัว เพื่อประเมินอาการและพิจารณาว่าการรักษาด้วยยามุ่งเป้าเป็นทางเลือกที่เหมาะสมกับคุณหรือไม่นะคะ ห้ามซื้อมาใช้เองเด็ดขาดเลย!&amp;nbsp;หวังว่าข้อมูลนี้จะเป็นประโยชน์กับทุกคนนะคะ&amp;nbsp;โพสต์ถัดไปมิสจะเล่าให้เรื่องยามุ่งเป้าที่ใช้ในปัจจุบันค่ะ ใครคิดว่าตัวเองใช้ยามุ่งเป้าอยู่แล้ว เอามาโชว์กันได้นะคะ&amp;nbsp;&amp;nbsp;#ยามุ่งเป้าหอบหืด #PrecisionMedicine #การแพทย์แบบแม่นยำสำหรับหอบหืด #การรักษาหอบหืด #หอบหืด #MissAsthmaTH #สุขภาพปอด #ทางเลือกการรักษา #ยาใหม่",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/2025/07/blog-post_12.html", "_blank");
        
      },
    },{id: "post-️-เคล็ดลับคุมหอบจากคุณแพรว-ผู้รอดชีวิตจาก-icu",
      
        title: '🌬️💨 เคล็ดลับคุมหอบจากคุณแพรว ผู้รอดชีวิตจาก ICU 💪 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;🌬️💨 เคล็ดลับคุมหอบจากคุณแพรว ผู้รอดชีวิตจาก ICU 💪🎉✨ เย้ๆ วันนี้มิสขอเปิดบ้านต้อนรับแขกคนพิเศษ คุณแพรวค่ะ 😍 หลังจากที่มิสชวนคุณแพรวมาแบ่งปันประสบการณ์การคุมโรคหอบหืด บอกเลยว่าคุณแพรวคุมได้ดีมากๆ เลยค่ะ เรามาดูกันดีกว่าว่าคุณแพรวมีเคล็ดลับอะไรมาฝากพวกเราบ้างน้าาาคุณแพรวบอกว่าอาจจะอธิบายไม่เก่ง แต่จะแชร์ประสบการณ์ให้ฟังอย่างหมดเปลือกเลยค่ะ 🥰 คุณแพรวโชคดีมากๆ ที่เจอคุณหมอที่ดีและใส่ใจจริงๆ ค่ะคุณแพรวเล่าว่า หลังจากเฉียดตายจากการเข้าห้อง ICU เพราะหอบกำเริบมาแล้ว สิ่งที่รู้เลยก็คือ **ต้องกินยา พ่นยาอย่างสม่ำเสมอ แม้จะไม่มีอาการก็ต้องทำค่ะ** เพราะคนส่วนใหญ่พออาการดีขึ้นแล้วก็จะหยุดยาเอง ซึ่งอาจทำให้อาการกำเริบได้อีก 😭ความโชคดีของคุณแพรวคือ&quot;ได้คุณหมอดีมากๆ คุณหมอจะให้ฉีดวัคซีนไข้หวัดใหญ่ทุกปี และวัคซีนป้องกันปอดอักเสบด้วยค่ะ สำหรับคนที่เป็นหอบ คุณหมอใส่ใจในอาการมากๆ และจะนัดตรวจทุกเดือนเพื่อเช็คว่าคะแนนประเมินอาการยังอยู่ในระดับไหน โรงพยาบาลก็จะมีใบประเมินอาการเป็นข้อย่อยๆ ทำให้เรารู้สาเหตุว่าอาการกำเริบเกิดจากอะไร แพรวคิดว่าอาการที่คุมอยู่และสงบลงได้ดี ส่วนหนึ่งก็เป็นเพราะยาที่คุณหมอให้ด้วยค่ะ&quot;-----💊 ยาที่ช่วยควบคุมอาการหอบของคุณแพรว 🌈คุณแพรวบอกว่า &quot;ยาพ่น 2 ตัวที่คุณหมอให้พ่นวันละ 1 ครั้ง ควบคุมอาการได้ดีมากๆ เลยค่ะ นอกจากนี้ยังมีที่พ่นจมูกก่อนนอน เพื่อไม่ให้น้ำมูกไหลตอนเช้าๆ ด้วยนะคะ และคุณหมอจะให้ยาพ่นฉุกเฉินติดตัวไว้ด้วย แม้จะไม่ค่อยได้ใช้เลยก็ตาม ส่วนยากินก็มีแค่ไม่กี่ตัวค่ะ&quot;คุณแพรวถึงกับต้องอวยยศให้คุณหมอเลยค่ะว่าดูแลคนไข้ดีมากๆ ใส่ใจป้องกันทุกทางไม่ให้หอบกำเริบเลย 🙏✨☝❗❗❗ อ๊ะๆๆ แต่มิสบอกก่อนเลยนะว่า ไม่ต้องหาลอกยาคุณแพรวเลยน้าาา ยาใครยามันนะจ๊ะ ระดับของโรคของแต่ละคนแตกต่างกันนะ ----- 💖 มิสสรุปแนวทางการดูแลตัวเองของคุณแพรว มาให้แล้วด้วย ไปดูกันเลย 👇✅ ทานยา พ่นยาอย่างสม่ำเสมอ ไม่ขาดยา✅ หาหมอตามนัดทุกครั้ง✅ หลีกเลี่ยงสิ่งที่กระตุ้นอาการ✅ ออกกำลังกายเบาๆคุณแพรวเล่าว่าเมื่อก่อนเวลาไปทำงานต้องพกเครื่องพ่นยาแบบเสียบปลั๊กไปด้วยเลยค่ะ เพราะเคยเป็นหนักมาก เกือบเสียชีวิต นอน ICU หลายคืนเลยค่ะ 😥 ต้องขอขอบคุณคุณหมอที่รักษาและใส่ใจมากๆ ค่ะ-----เรื่องราวของคุณแพรวน่าสนใจและเป็นประโยชน์มากๆ เลยนะคะ มิสหวังว่าจะเป็นกำลังใจและให้ความรู้กับทุกคนได้ไม่มากก็น้อยค่ะ ❤️ อย่าลืมดูแลตัวเองให้ดี และทำตามคำแนะนำของคุณหมออย่างเคร่งครัดนะคะ-----💋 ติดตามเรื่องราวดีๆ และเป็นประโยชน์จากมิสหอบหืดได้ที่เพจ&amp;nbsp;💋 @มิสหอบหืด - Miss Asthma Thailand&amp;nbsp;หรืออ่านบทความย้อนหลังได้ที่👉 https://missasthmath.blogspot.com&amp;nbsp;#มิสหอบหืด #MissAsthmaTH #ควบคุมหอบ #ประสบการณ์ผู้ป่วย #ดูแลตัวเอง #ชีวิตกับหอบหืด #เคล็ดลับดีๆ",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/2025/07/icu.html", "_blank");
        
      },
    },{id: "post-ยามุ่งเป้าที่ใช้รักษาโรคหอบหืด-ตอน-1-กลุ่มยาที่ออกฤทธิ์ต่อ-ige",
      
        title: '🧬 ยามุ่งเป้าที่ใช้รักษาโรคหอบหืด 🫁 ตอน 1:  กลุ่มยาที่ออกฤทธิ์ต่อ IgE <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;🧬 ยามุ่งเป้าที่ใช้รักษาโรคหอบหืด 🫁 ตอน 1:&amp;nbsp; กลุ่มยาที่ออกฤทธิ์ต่อ IgEสำหรับยาชีววัตถุหรือยามุ่งเป้านั้น ตามแนวทางการรักาาโรคหอบหืด (GINA 2025) แนะนำให้พิจารณาใช้ในขั้นที่ 5 ค่ะ 🌟 นั่นหมายความว่า ยาเหล่านี้สงวนไว้สำหรับผู้ป่วยหอบหืดชนิดรุนแรง (Severe Asthma) ที่แม้จะได้รับการรักษาด้วยยาควบคุมอาการอื่นๆ ในขนาดสูงสุดที่เหมาะสมแล้ว (เช่น ยาสเตียรอยด์ชนิดพ่นร่วมกับยาขยายหลอดลมออกฤทธิ์นาน) อาการก็ยังคุมได้ไม่ดี หรือยังมีการกำเริบบ่อยๆ นั่นเองค่ะ💉การเลือกใช้ยามุ่งเป้าตัวไหนนั้น คุณหมอจะพิจารณาจากลักษณะเฉพาะของอาการหอบหืดในผู้ป่วยแต่ละคน หรือที่เรียกว่า 🧬&quot;ฟีโนไทป์&quot; (Phenotype) โดยดูจากผลตรวจทางห้องปฏิบัติการ เช่น ระดับของสารบางอย่างในเลือด หรือจำนวนเซลล์เม็ดเลือดขาวบางชนิดค่ะ----- 🛡️ กลุ่มยามุ่งเป้าที่มีในปัจจุบัน ก็มีหลายตัวเลยวันนี้เรามาทำความรู้จักตัวแรกกันดีกว่าค่ะ1.  กลุ่มยาที่ออกฤทธิ์ต่อ IgE (Anti-IgE)✅ ชื่อสามัญทางยา: Omalizumab (โอมาลิซูแมบ)✅ กลไก: ยาจะไปจับกับ IgE ซึ่งเป็นแอนติบอดีที่เกี่ยวข้องกับปฏิกิริยาภูมิแพ้ ทำให้ IgE ไม่สามารถไปกระตุ้นเซลล์ต่างๆ ให้หลั่งสารก่อการอักเสบได้ค่ะ เหมือนไปล็อกกุญแจสำคัญของอาการแพ้นั่นเอง✅ เหมาะกับ: ผู้ป่วยที่มีอาการหอบหืดที่สัมพันธ์กับภูมิแพ้ และมีระดับ IgE ในเลือดสูง☝หลายคนคงรู้จักยา Omalizumab กันใช่ไหมคะ แต่รู้ไหมคะว่าขนาดยาที่เราใช้เนี่ย ขึ้นอยู่กับ 2 อย่างหลักๆ เลยนะ นั่นก็คือ ✅น้ำหนักตัวของเรา ✅ค่าการแพ้ IgE 🤔 นั่นก็แปลว่าถ้าเราดูแลตัวเองดีๆ พยายามหลีกเลี่ยงสิ่งที่แพ้ 🤧 และรักษาน้ำหนักตัวให้อยู่ในเกณฑ์ที่เหมาะสม 💪 ก็จะช่วยให้คุณหมอสามารถปรับลดยาที่เราใช้ได้ค่ะ👉การลดยาเนี่ย ไม่ใช่แค่ช่วยลดค่าใช้จ่ายในการรักษาที่ค่อนข้างสูงเท่านั้นนะคะ 💸 แต่ยังช่วยลดโอกาสเกิดอาการข้างเคียงจากยาได้อีกด้วยค่ะ ดีต่อสุขภาพและดีต่อกระเป๋าสตางค์ด้วยนะ ที่สำคัญสำหรับคนกลัวเข็มอย่างมิสคือ โดนจิ้มน้อยลงค่ะ 5555 🤩💖 สรุปและข้อคิดจากมิส💖ยามุ่งเป้าเหล่านี้เป็นความก้าวหน้าครั้งสำคัญในการรักษาโรคหอบหืดค่ะ ทำให้ผู้ป่วยหอบหืดชนิดรุนแรงมีทางเลือกในการรักษาที่มีประสิทธิภาพมากขึ้น และช่วยให้มีคุณภาพชีวิตที่ดีขึ้นอย่างเห็นได้ชัดเลยค่ะ อย่างไรก็ตาม ยาเหล่านี้เป็นยาที่ซับซ้อน และมีค่าใช้จ่ายสูง การตัดสินใจว่าจะใช้ยาตัวไหน และจะเหมาะสมกับเราหรือไม่นั้น 💋ต้องปรึกษาแพทย์ผู้เชี่ยวชาญด้านโรคระบบทางเดินหายใจเท่านั้นนะคะ💋 คุณหมอจะประเมินอาการ ตรวจหา &quot;เป้าหมาย&quot; ที่เหมาะสม และวางแผนการรักษาที่ดีที่สุดให้เราค่ะ 😊หวังว่าข้อมูลนี้จะเป็นประโยชน์กับทุกคนนะคะ หากมีข้อสงสัยเพิ่มเติม สามารถปรึกษาคุณหมอประจำตัวได้เลยค่ะ 😊💋💋 ติดตามเรื่องราวดีๆ และเป็นประโยชน์จากมิสหอบหืดได้ที่เพจ 💋@มิสหอบหืด - Miss Asthma Thailand หรืออ่านบทความย้อนหลังได้ที่👉 https://missasthmath.blogspot.com #มิสหอบหืด #MissAsthmaTH #GINA2025 #ยามุ่งเป้าหอบหืด #Biologics #รักษาหอบหืด #หอบหืดชนิดรุนแรง #สุขภาพปอด #การแพทย์แม่นยำ #ทางเลือกการรักษา&amp;nbsp;📚 อ้างอิง&amp;nbsp;- GINA2025&amp;nbsp;- https://www.xolair.com/&amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/2025/07/1-ige.html", "_blank");
        
      },
    },{id: "post-หอบหืด-vs-หอบแฮ่กๆ",
      
        title: 'หอบหืด vs หอบแฮ่กๆ <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;หอบหืด vs หอบแฮ่กๆแยกหอบกับไม่หอบว่ายากแล้วแยกหอบหืดกำเริบกับหอบแฮ่กๆเพราะออกกำลังกายยากยิ่งกว่า.กว่าเราจะแยกได้ก็เละเทะพอดูช่วงแรกๆ นึกว่าคือหอบแฮ่กๆก็เลยเฉยๆไปๆมาๆ เฮ้ยยย ยังเหนื่อยๆหน้าแดงไม่หายสักทีสุดท้ายพ่นยาเองไม่ดีขึ้น ก็ต้องเข้าห้องฉุกเฉิน &amp;gt;&amp;lt;.จากอาการหอบหืดต่างจากหอบแฮ่กๆ คือ&amp;nbsp;หอบแฮ่กจากออกกำลังจะไม่มีอาการไอ&amp;nbsp;แน่นหน้าอก หายใจติดขัด หรือได้ยินเสียงวี๊ดแต่ก็แยกยาก ต้องค่อยๆสังเกตเอง.ของเราจะมีการออกกำลังกายที่ต้องระวัง เช่นอะไรที่เหนื่อยมากๆ เช่น วิ่งเร็วๆ&amp;nbsp;ปั่นขึ้นภูเขาหรือทางวิบากปั่นผ่านสวนดอกไม้(เราแพ้ดอกไม้).ทั้งยังมีเรื่องของการใช้ยาเพื่อป้องกันอาการหอบโดยใช้ก่อนออกกำลังกายในเรื่องนี้ต้องปรึกษาหมอเจ้าของไข้นะคะ.การออกกำลังกายสำหรับคนไข้หอบหืดอย่างเราๆต้องทำให้ถูกที่ ถูกเวลา เพราะเหมือนดาบสองคมมันทำให้โรคดีขึ้นก็ได้หรือจะทำให้โรคยิ่งแย่ก็ได้#SeverAsthma #คนไข้บ้าพลัง&amp;nbsp;#ทีมหอบหื่น #ทีมภูมิชนะ♥️มาแชร์ประสบการณ์ป่วยๆแบบถึกๆ&amp;nbsp;ที่🥊กลุ่มคนไข้บ้าพลัง กันเถอะปล. ทริปเก่าเมื่อหลายปีก่อน",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/2025/07/vs.html", "_blank");
        
      },
    },{id: "post-ใบสำคัญสำหรับหอบหืดวัยเรียน",
      
        title: 'ใบสำคัญสำหรับหอบหืดวัยเรียน <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "สวัสดีค่ะทุกคน! 👋&amp;nbsp;วันนี้มิสมีเรื่องสำคัญมากๆๆๆ มาบอกต่อค่ะ! โดยเฉพาะคุณพ่อคุณแม่บ้านไหนมีเจ้าตัวเล็กเป็นหอบหืดแล้วกำลังจะไปโรงเรียน หรือเรียนอยู่แล้วเนี่ย ต้องอ่านให้จบเลยนะ! 📣มิสแอบเห็นใบสำคัญจากคุณแม่น้องปิงมา&amp;nbsp;(ขอบคุณคุณแม่ที่อนุญาตให้แชร์นะคะ)&amp;nbsp;Unchulee Jimm&amp;nbsp;เรื่องนี้แหละ คือหัวใจอย่างนึงของการดูแลน้องๆ เลยค่ะ!ยาพ่นฉุกเฉินในโรงเรียน: คุณครูรู้...น้องปลอดภัย! 💖เวลาลูกๆ เรามีอาการหอบหืดกำเริบที่โรงเรียน #ยาพ่นฉุกเฉิน เนี่ยแหละคือฮีโร่ตัวจริง!&amp;nbsp;แต่แค่มีอย่างเดียวไม่พอแล้วนะคะ!&amp;nbsp;สิ่งที่สำคัญยิ่งกว่าคือ...✨ คนที่ดูแลน้องที่โรงเรียน ไม่ว่าจะเป็นคุณครูประจำชั้น คุณครูเวร หรือพยาบาลโรงเรียน ต้องรู้และเข้าใจวิธีใช้ยาพ่นฉุกเฉินนี้ด้วยนะคะ! ✨เหมือนเคสของน้องปิงในรูปเลยค่ะ ที่คุณแม่เขียนไว้ชัดเจนเลยว่าน้องปิงใช้ที่บ้านเป็นแล้ว และขอขอบคุณคุณครูที่ช่วยดูแล 🥺 นี่แหละคือความร่วมมือที่สำคัญที่สุดค่ะ!และนี่คือ 2 สิ่งที่ #ห้ามลืมเด็ดขาด เลยนะคะ!&amp;nbsp;* เช็ควันหมดอายุ! 📆 คุณพ่อคุณแม่ต้องเช็คเป็นประจำนะคะว่ายาพ่นยังไม่หมดอายุรึเปล่า? บางทีซื้อมานานแล้วลืมเช็คเนี่ย อันตรายมากๆ เลยค่ะ! ยาหมดอายุมันจะใช้ไม่ได้ผลนะคะ!&amp;nbsp;* ชวนคุณครูมาลองฝึกใช้! 👩‍🏫 ไม่ต้องกังวลเลยนะคะ! ลองบอกคุณครูเลยว่า &#39;คุณครูคะ หนู/ผมขอรบกวนคุณครูลองถือ ลองกด ลองทำท่าใช้ยาพ่นอันนี้หน่อยได้ไหมคะ/ครับ&#39; เพื่อให้คุณครูคุ้นมือ จะได้ไม่ลนลานเวลาฉุกเฉินจริงๆ ค่ะ! (และอย่าลืมบอกจำนวนครั้งที่ต้องพ่นตามคำแนะนำของคุณหมอด้วยนะคะ เหมือนที่ในรูปน้องปิงบอกว่า &#39;หากอาการไม่ดีขึ้น ให้พ่นซ้ำได้อีกกี่ครั้ง&#39;)จำไว้นะคะ... ยาจะช่วยได้ก็ต่อเมื่อคนที่ดูแลน้องใช้เป็น! การเตรียมตัวล่วงหน้าคือสิ่งที่ดีที่สุดค่ะ!บ้านไหนมีเคล็ดลับดีๆ ในการเตรียมยาพ่นฉุกเฉินให้ลูกที่โรงเรียน หรือมีประสบการณ์อยากแชร์ มาคอมเมนต์บอกกันหน่อยน้าาาา! 💬#หอบหืดไม่หอบใจ #ยาพ่นฉุกเฉิน #หอบหืดในเด็ก #โรงเรียนปลอดภัย #MissAsthmaTH #รู้ทันหอบหืด #หายใจคล่องชีวิตปัง",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/2025/07/blog-post_4.html", "_blank");
        
      },
    },{id: "post-โกโกวาสั่ง-เซลล์มะเร็งก็ต้องเผ่นแล้ววว-ep-2",
      
        title: 'โกโกวาสั่ง เซลล์มะเร็งก็ต้องเผ่นแล้ววว (Ep.2) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;“โกโกวาสั่ง เซลล์มะเร็งก็ต้องเผ่นแล้ววว” Ep.2 มาแล้ววววว .เมื่อเซลล์มะเร็งต้องวิ่ง!!! เซลล์ไม่ได้มีขาเหมือนคนนี่นา? วิ่งได้เหรอแล้วจะวิ่งเพื่ออะไร? มะเร็งเป็นที่ตรงไหนก็ตรงนั้นหรือเปล่า.เคยได้ยินเรื่องมะเร็งกระจายไปอวัยวะอื่น (Metastasis) กันบ้างใช่มั้ยเฮ้ยยย มะเร็งมันวิ่งตรงดิ่งไปอีกอวัยวะเลยเหรอ??ใจเย็นทุกคนนนน.เซลล์มะเร็งเคลื่อนที่จากอวัยวะนึงไปอรกที่นึงได้แต่ๆ มีกระบวนการของมันอยู่หลายขั้นตอนเลยหล่ะ(แปะรูปในเม้น).นึกภาพตามแอดนะทุกคน1. เซลล์มะเร็งเนี่ยมันต้องเคลื่อนย้ายมันออกจากอวัยวะเริ่มต้นก่อน2. เคลื่อนออกไปแล้วต้องมุดเข้าหลอดเลือด3. มันอาศัยหลอดเลือดนี่แหละไปลั้ลลาๆทั่วร่างเรา4. มันต้องมุดออกจากเส้นเลือดเข้าสู่อวัยวะที่ 2ด้วย.โอ้โห ไม่ง่ายเลยนะเนี่ยการที่เซลล์มะเร็งจะกระจายไปอวัยวะอื่น.นักวิจัยเราก็มีวิธีพิสูจน์ว่าเซลล์มะเร็งจะเคลื่อนที่ได้ ไปยังอวัยวะอื่นได้โดยหลายวิธีทดสอบเลย.วันนี้แอดจะมาเล่าวิธีนึงให้ฟังกัน (รูปในเม้นนะ) นั่นคือ ดูเซลล์อพยพ หรือดูเซลล์มะเร็งวิ่งนั่นเอง (Migration assay).โดยการเลี้ยงเจ้าเซลล์มะเร็งนี่แหละแล้วขูดเอาตรงที่อยู่ตรงกลางแผ่นเลี้ยงออกตรงช่องที่เราขูดเนี่ยถ้าเซลล์มะเร็งมันเคลื่อนที่ได้มันจะขยับๆออกมาอยู่ตรงกลางช่อง.มันมีขา? เหรอ เซลล์มะเร็งหน่ะ มันมีสิ่งที่เสมือนขา คือพวกโครงสร้างแข็งๆในเซลล์ใช้เพื่อขยับเขยื้อน กระดึ๊บๆ ไปเรื่อยๆได้.ถึงรู้กันอยู่แล้วว่ามะเร็งมันกระจายไปอวัยวะอื่นได้แล้วจะทดสอบทำไมอีกนะ.นักวิจัยทำเพื่อหายาเพื่อมาหยุดยั้งการเเพร่กระจายของมะเร็งนี่แหละยังมีองค์ความรู้อีกมากโขเลยยยยที่ยังขาดหายไปเพื่อให้เข้าใจโรคมะเร็งมากขึ้นรอลุ้น Ep. ในซีรี่ #มะเร็งเกมวิจัยแซ่บหลาย ต่อไปกันเลยยยยยอยากรู้เรื่องอะไรของมะเร็งก็บอกแอดได้เลย#มะเร็งเกม  #โกโกวาXชอลซู  #กระโดดเชือกเซลล์มะเร็ง  #SquidGameSeason3  #NetflixThailand  #แลนด์มาร์ก12เมตร  #กิจกรรมลานคนเมือง  #ดูหนังกลางแปลง  #เที่ยวกรุงเทพ  #Eventไทย",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/07/ep2.html", "_blank");
        
      },
    },{id: "post-น้องกุมารโกโกวากับน้ำแดงของนาง-ep-1",
      
        title: 'น้องกุมารโกโกวากับน้ำแดงของนาง (Ep.1) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;รอ Squid Game กันอยู่ใช่มั้ย~~มาพบกับ Cancer Game“มะเร็งเกม วิจัยแซ่บหลาย“กันก่อนดีกว่า.Ep.1 น้องกุมารโกโกวากับน้ำแดงของนางน้ำแดงนี้คืออะไรเลือดผู้เข้าแข่งขันหรือเปล่า.แต่สำหรับมะเร็งน้ำแดงนี้คืออาหารเลี้ยงเซลล์คือปกติเราไม่ได้ใช้แฟนต้าหรือมิรินด้ามาให้เซลล์มะเร็งซดนะทุกคน.ที่จริงแล้วสิ่งที่มะเร็งกินก็คือสิ่งหล่อเลี้ยงเซลล์ทุกเซลล์ในตัวเรานั่นแหละทุกคนคงคิดถึงเลือดแน่ๆ.เราเลี้ยงเซลล์มะเร็งในจานเลี้ยงโดยพยายามจำลองให้เหมือนร่างกายมาที่สุด แต่ !!! แดดงๆนั่นไม่ใช่เลือดดดด.ปกติอาหารเลี้ยงเซลล์นี่ใสๆ เลยส่วนประกอบหลักๆที่ฮิตที่สุดคือซีรั่มและอื่นๆอีกมากมาย ดูภาพต่อในเม้นนะ.ที่เป็นสีคือสีชี้วัดการเปลี่ยนแปลงของอาหาร(pH indicator)เอาไว้ดูว่าเซลล์มะเร็งกินหมดหรือยังกินไปแล้วมากหรือน้อยถ้าอาหารเหลือน้อย ของเสียมากขึ้นสีแดงๆก็จะเปลี่ยนเป็นสีส้มและเหลืองตามลำดับคือสีเหมือนฉี่ไปอีก 55555.เพราะงั้นเซลล์มะเร็งไม่ได้กินแฟนต้านะทุกคนนั่นคืออาหารเลี้ยงเซลล์ตอนต่อไป ep.2 มะเร็งกระโดเชือก เวอร์ชั่นเส้าหลินมันคืออะไรไปลุ้นกันนนนน#มะเร็งเกม  #โกโกวาXชอลซู  #กระโดดเชือกเซลล์มะเร็ง  #SquidGameSeason3  #NetflixThailand  #แลนด์มาร์ก12เมตร  #กิจกรรมลานคนเมือง  #ดูหนังกลางแปลง  #เที่ยวกรุงเทพ  #Eventไทย",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/07/ep1.html", "_blank");
        
      },
    },{id: "post-แผนปฏิบัติการหอบหืดคืออะไร-ทำไมทุกคนควรมี",
      
        title: 'แผนปฏิบัติการหอบหืดคืออะไร ทำไมทุกคนควรมี <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;รอบนี้มิสได้ &quot;แผนปฏิบัติการหอบหืด&quot; กลับบ้านมาด้วยหล่ะไว้โพสหน้าเอามาให้ดูกันนนว่าหน้าเป็นยังไงจะเป็นยาหลวง ยาผีบอก หรืออะไรกันน๊าาาา===============&quot;แผนปฏิบัติการหอบหืด&quot; (Asthma Action Plan) เนี่ย มันสำคัญม๊ากมากกกกก!  ไม่ใช่แค่กระดาษแผ่นเดียว แต่มันคือ คู่มือช่วยชีวิต ของพวกเราเลยนะ! ทำไมถึงสำคัญอะเหรอ? มาดูกัน! ===============ทำไมต้องมีแผนหอบหืดติดตัว?     เหมือนมีพี่เลี้ยงส่วนตัว! : แผนนี้แหละจะบอกหมดเลยว่าต้องทำยังไงทีละสเต็ปเวลาอาการหอบหืดกำเริบ! ทำให้เรารู้สึกว่า เราคุมอาการได้ ไม่ใช่ให้โรคมาคุมเราอีกต่อไป! สบายใจขึ้นเยอะเลย!    ไหวตัวทันก่อนเรื่องใหญ่! : เจ้าแผนนี้จะช่วยให้เรารู้ สัญญาณเตือน ตั้งแต่เนิ่นๆ เลยนะ! จะได้รีบจัดการทันที ก่อนที่อาการจะหนักจนต้องวิ่งโร่ไปโรงพยาบาล! ไม่ต้องลุ้นให้เหนื่อยเลย!    ลดดราม่าห้องฉุกเฉิน! : พอทำตามแผนเป๊ะๆ อาการกำเริบก็จะเบาลง หรือบางทีก็ไม่เกิดเลย! ทำให้เรา ไม่ต้องเข้าห้องฉุกเฉินบ่อยๆ ไง ประหยัดเวลา ประหยัดค่าใช้จ่าย แถมไม่ต้องเครียดด้วย!    ชีวิตแฮปปี้ขึ้นเยอะ! : พอคุมอาการได้ดีขึ้น ก็แปลว่าเราจะ ไม่ต้องขาดเรียน ขาดงานบ่อยๆ อยากไปเที่ยว อยากทำกิจกรรมอะไรก็ทำได้เต็มที่! ใช้ชีวิตได้เหมือนคนทั่วไปเลย ฟินจะตาย!    คนรอบข้างก็เข้าใจ! : เวลาเกิดเหตุฉุกเฉินจริงๆ แผนนี้จะช่วยให้ ครอบครัว เพื่อน พยาบาล หรือคุณหมอ ก็รู้ได้ทันทีว่าต้องช่วยยังไง ไม่ต้องนั่งงง หรือกังวลว่าต้องทำอะไรดี! คือดีมากๆ!    เพื่อเราคนเดียวเลยนะ! : ที่สำคัญคือแผนนี้เค้าไม่ได้ทำมาแบบหว่านแหนะ! แต่ ปรับให้เข้ากับอาการ ยา และสิ่งกระตุ้นของแต่ละคนโดยเฉพาะ! เป็นของเราจริงๆ ไม่ซ้ำใคร!ใครที่ยังไม่มีแผนปฏิบัติการหอบหืด หรือมีแล้วแต่อยากอัปเดต ลองคุยกับคุณหมอดูนะ! มันช่วยให้ชีวิตเราง่ายขึ้นเยอะจริงๆ เลย! #หอบหืดไม่หอบใจ #สู้กับหอบหืด #หายใจคล่องชีวิตปัง#เรื่องหอบหืดต้องรู้ #เคล็ดลับดูแลหอบหืด#คนเป็นหอบหืดเข้าใจดี #แชร์ประสบการณ์หอบหืด#MissAsthmaTH",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/2025/07/blog-post.html", "_blank");
        
      },
    },{id: "post-namthip-x-งานวิจัยมะเร็ง-ตอนที่-7",
      
        title: 'Namthip x งานวิจัยมะเร็ง ตอนที่ 7 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "ถ้าเธอติ่ง GOT7 ฉันก็คงติ่งนักวิทยาศาสตร์.รูปนี้เป็นงานประชุมเมื่อปลายมีนาที่ผ่านซึ่งฉันอยู่ในรูป? เปล่าเลยยยย เข้าแบบออนไลน์แงงงงแต่เป็นงานที่ฟินมาก เหมือนนักวิทยาศาสตร์รุ่นเก๋ามารวมตัวกันเหมือนไปฟังคุณปู่ คุณตาเล่าเรื่อง ดีดไม่ต้องหลับต้องนอนกันไปเลย.ในความกรี๊ดกร๊าดในผลงานว่า “เค้าค้นพบอะไร”สิ่งที่น่าทึ่งกว่าคือ “คิดมาได้ไง”.ถ้าถามว่าอยากได้อะไรที่สุดในการเรียน ป เอกคำตอบอย่างเดียวเลย “เป็น Philosopehr”หรือง่ายๆก็คือ “Thinker”แต่ดูเหมือนว่ามันจะไม่ได้มาง่ายๆแฮะ.วิธีคิดทางวิทยาศาตร์เป็นสิ่งที่สำคัญมากที่สุดอย่างนึงเราเองพร่ำถามคำถามนี้มาตลอดตั้งแต่เริ่มรู้จักวิทยาศาสตร์เริ่มตั้งแต่ตอนมีข่าวนักวิจัยหญิงจากญี่ปุ่นคนนึงตอนนั้นดังมากใช้ชุดเมดเป็นชุดแลปเก๋ๆแต่สุดท้ายก็มีข่าวออกมาว่างานนั้นลวงโลกPI ฆ่าตัวตาย แถมด้วยนักวิจัยคนนั้นผันตัวเข้าวงการ AV.ตอนเรียน ป เอก อาจารย์ที่ปรึกษาเคยตีพิมพ์ Nature Letterก็สงสัยมาตลอดว่า อาจารย์ทำยังไงถึงคิดได้อย่างนี้ตอนนั้นพอมีช่วงว่าง ถึงขั้นปริ้นเปเปอร์ของ อ ทั้งหมดมาอ่านเป็นรีมเลย แต่สุดท้ายก็ยังหาคำตอบไม่ได้อยู่ดี.วิธีคิดทางวิทยาศาสตร์มันซับซ้อนและแตกต่างจากกระบวนอย่างชัดเจนของตัวมันอยู่มากทั้งที่เราวางแผนการทดลองอย่างเป็นเหตุเป็นผลมีลำดับขั้นที่ชัดเจนราวกับช่วงที่มีแสงส่องทางอย่าง DAY SCIENCEแต่ลำดับความคิดนั้นกว่าจะตกผลึกได้กลับเต็มไปด้วยความสับสน ลังเล หมุนวนอยู่ในหัวตลอดทั้งคืนหรือ NIGHT SCIENCE.Night Science ถูกพูดถึงครั้งแรกโดย François Jacob (Noble 1965)และถูกขุดขึ้นมาอีกครั้งโดย Itai Yanai และเพื่อนเค้ามี podcast ที่เชิญนักวิจัยดังๆมาคุยเรื่องนี้ด้วยนะแต่เรื่องการคิดมันซับซ้อนเกินกว่าจะเรียกว่า How to.สิ่งหนึ่งที่พัฒนากระบวนการคิดได้มากก็คือการแก้ปัญหาจริงๆ นั่นก็คือทำวิจัยนั่นแหละและที่สำคัญคือทิศทางการวิจัยซึ่งเรื่องนี้ scientific lineage สำคัญมาก(เคยเขียนไว้ในบทความก่อนๆ).การจะคิดได้ดูเหมือนจะซับซ้อนการได้กระทบไหล่ ฟังผลงาน มีโอกาสถามคำถามคือสิ่งที่กระตุกต่อมคิดได้ชั้นเลิศเอาทุกอย่างกลับมายำรวมกัน (แบบมีหลักการ)แล้วใช้จริงกับงานวิจัยตรงหน้า.การได้ฟังเรื่องเล่า รู้จักการค้นพบ ได้เล่ามันออกจากความที่ว่าเราอินจริงๆเหมือนที่อาจารย์ปรึกษาชอบทำ 5555มันคือการสร้างแรงบันดาลใจอย่างนึง.มีคำกล่าวว่า ครูที่ดีสอนครูที่ดีขึ้น ยกตัวอย่างสุดยอดครู สร้างแรงบันดาลใจ.คงจะดีกว่าเมากันในวงการวิทย์คือเล่าให้คนนอกวงการฟังแล้วเค้าฟินไปด้วยถ้าได้ไปฟังเจ้าของรางวัลโนเบลตัวเป็นๆคงจะฟินมาก คงจะเตรียมตัวโดยขุดอ่านงานของเค้าจนตาเปียกตาแฉะรวมไปถึงบริบทการค้นพบ สิ่งที่ขาดสิ่งที่การค้นพบนี้าเติมเต็ม.และนี่คือที่มาของการสมัครงานประชุมลินเดาเยอรมันจะเรียกหามั้ยไม่รู้รู้แต่หัดภาษาเยอรมันมาสักพักละ 5555ภาพจาก Cancer Genetics: History and Consequencesจัดโดย Cold Spring Harbor Laboratory.ตอนอื่นๆ ของการบุกดงวิจัยที่เคยเขียนไว้-&amp;nbsp;ตอนที่ 0:&amp;nbsp;&amp;nbsp;สะเปะสะปะกว่าจะมาถึงเส้นทางวิจัย&amp;nbsp;-&amp;nbsp;ตอนที่ 1:&amp;nbsp;ค่ายไม่เล็กที่มีแต่ผู้ใหญ่ใจดีปูทางเด็กบ้านนอกสู่เส้นทางวิจัย-&amp;nbsp;ตอนที่ 2: ตรึงใจเด็ก ม.ปลาย เปิดโลกวิจัยที่สถาบันวิจัยจุฬาภรณ์-&amp;nbsp;ตอนที่ 3: ตะลุยดงวิจัย ทำไมวิจัยมีมะเร็งมีหลายแบบจัง-&amp;nbsp;ตอนที่ 4: รู้จักมะเร็งแบบเหนือชั้น เหนือพันธุกรรมคืออะไร&amp;nbsp;-&amp;nbsp;ตอนที่ 5: เมื่อฉันรักวิทยาศาสตร์ อย่างที่ไม่สนมะรงมะเร็งอะไรทั้งนั้น- ตอนที่ 6: ปริญญาเอก วิชาหนังชีวิต Scientific Lineage และผู้ช่วยชีวิตอย่าง Mentor&amp;nbsp;- ตอนที่ 7: ถ้าเธอติ่ง GOT7 ฉันก็ติ่งนักวิทยาศาสตร์#NamthipPhDstory&amp;nbsp;#NamthipCancerResearchJourney#NoCancer&amp;nbsp;#NoCancerTH&amp;nbsp;&amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/06/CancerRes-07.html", "_blank");
        
      },
    },{id: "post-เมื่อมะเร็งถูกควบคุมโดยหมูเด้งและพวก",
      
        title: 'เมื่อมะเร็งถูกควบคุมโดยหมูเด้งและพวก <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "วิถีฮิปโป ระดับโมเลกุล (Hippo pathway)&amp;nbsp; จะเกี่ยวข้องกับมะเร็งอย่างไรไปดูกันเลย! .ในร่างกายของเรามีวิธีสุดอัศจรรย์มากมายที่ควบคุมการเติบโตของเซลล์และอวัยวะ! ซึ่งมักเริ่มตั้งแต่ระดับโมเลกุลและการสื่อสารกันของโมเลกุลต่างๆ (pathway).วันนี้เราจะมาพูดถึงวิถีหมูเด้งเอ้ยยย วิถีฮิโป (Hippo pathway) กัน . รู้หรือไม่? วิถี Hippo เป็นเหมือนผู้พิทักษ์ร่างกายของเรา: คอยห้ามปรามไม่ให้เซลล์แบ่งตัวมากเกินไป ทำให้อวัยวะมีขนาดพอเหมาะ ไม่เล็กไม่ใหญ่เกินไป ช่วยให้บาดแผลหายเร็วขึ้น!. แต่ถ้าวิถี Hippo ทำงานผิดพลาด... อาจนำไปสู่โรคร้ายต่างๆ เช่น:- มะเร็ง - โรคหัวใจ - โรคปอด - โรคไต - โรคตับ - โรคตา - ภูมิคุ้มกันบกพร่อง . วิถี Hippo กับมะเร็ง!1. ฮิปโปยับยั้งการกลายพันธุ์จากเซลล์ปกติไปเป็นเซลล์มะเร็ง (Tumor suppressor)2. เมื่อฮิปโปไม่ทำงาน ทำให้ไม่สามารถควบคุมการแบ่งตัวของเซลล์ได้เหมือนปกติ เซลล์จะแบ่งตัวอย่างควบคุมไม่ได้ มะเร็งหลายชนิดพบว่าวิถีฮิปโปไม่ทำงานเชียวหล่ะ 3. วิถีฮิปโปยังเกี่ยวข้องกับเซลล์ต้นกำเนิดมะเร็งอีกด้วย.นักวิจัยกำลังศึกษาวิธีใช้วิถี Hippo เพื่อรักษาโรคต่างๆ โดยเฉพาะมะเร็งอยู่หล่ะ! . Reference:Fu, M., Hu, Y., Lan, T. et al. The Hippo signalling pathway and its implications in human health and diseases. Sig Transduct Target Ther 7, 376 (2022). https://doi.org/10.1038/s41392-022-01191-9 #หมูเด้ง  #ฮิปโป  #nocancer  #NoCancerTH #NoCancerThailand",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/04/blog-post.html", "_blank");
        
      },
    },{id: "post-ต่อสู้กับมะเร็ง-กว่า-100-ปีจากภาพวาด",
      
        title: 'ต่อสู้กับมะเร็ง กว่า 100 ปีจากภาพวาด <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "ต่อสู้กับมะเร็ง กว่า 100 ปีจากภาพวาด&amp;nbsp;ภาพคนนี้เป็นภาพเก่าตั้งแต่ปี 1932 นี่มันมหากาพย์ของการต่อสู้ของมนุษย์กับมะเร็งชัดๆ.นักรบสีแดงถือดาบและโล่ห์เผชิญหน้ากับกลุ่มหนวดสีดำจำนวนมาก(มะเร็ง) ภาพอันทรงพลังนี้เป็นสัญลักษณ์ของการต่อสู้กับมะเร็ง .ภาพนี้นอกจากจะเป็นปกงานประชุม Cancer Genetics: History &amp;amp; Consequence ยังถูกใช้ในวารสาร Science Transnational Medicine เมื่อปี 2011 อีกด้วย.บทความในวารสาร Science ฉบับนั้นคือ &quot;Integrating Cancer Control into Global Health&quot;พูดถึงบทบาทของ National Cancer Institute&#39;s (NCI) ในการแก้ไขปัญหาภาระมะเร็งที่เพิ่มขึ้นในประเทศกำลังพัฒนา (รวมถึงไทยด้วย) ว่าโดยเน้นย้ำถึงความสำคัญของการวิจัย ความร่วมมือ และอื่นๆ.มหากาพย์มะเร็งทั่วโลกที่มีมานานจะมีการศึกาายังไงต่อ รอติดตามที่เพจ NO CANCER ได้เลยยย.ข้อมูลภาพศิลปะTitle: Original Vintage Poster Fight Against CancerPublisher: France (1932)Illustrator: Marc Saint-Saens#มะเร็ง #งานวิจัยมะเร็ง #ยารักษามะเร็ง #Cancer #NoCancer",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/04/100.html", "_blank");
        
      },
    },{id: "post-fight-against-cancer-1932",
      
        title: 'Fight Against Cancer 1932 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Fight Against CancerThis image is an old one, from 1932.&amp;nbsp;It&#39;s truly an epic depiction of humanity&#39;s fight against cancer.A red warrior holding a sword and shield confronts a mass of black tentacles (cancer).This powerful image symbolizes the fight against cancer.&amp;nbsp;Besides being the cover of the Cancer Genetics: History &amp;amp; Consequence conference, this image was also used in the journal Science Translational Medicine back in 2011.&amp;nbsp;The article in that Science journal issue was &quot;Integrating Cancer Control into Global Health.&quot;It discussed the role of the National Cancer Institute&#39;s (NCI) in addressing the increasing cancer burden in developing countries (including Thailand), emphasizing the importance of research, collaboration, and other things.The long-standing global cancer saga – how will it be studied going forward?&amp;nbsp;Art Information:Title: Original Vintage Poster Fight Against Cancer Publisher: France (1932)Illustrator: Marc Saint-Saens&amp;nbsp;#มะเร็ง #งานวิจัยมะเร็ง #ยารักษามะเร็ง #Cancer #NoCancer #CancerResearch #cshhist25&amp;nbsp;Thank this picture from Cold Spring Harbor Meeting&amp;nbsp;Let&#39;s talk cancer research!I believe in the power of sharing.Blogging &amp;amp; sharing thoughts helps me learn &amp;amp; stay inspired.🌸 My blog (English): The Whispers of Biology (https://kuchikinamthip.github.io/ ).🍀 FB (Thai): NO CANCER THAILAND (https://www.facebook.com/NoCancerTH/).All are welcome!",
      section: "Posts",
      handler: () => {
        
          window.open("https://thewhispersofbiology.blogspot.com/2025/04/fight-against-cancer-1932.html", "_blank");
        
      },
    },{id: "post-cancer-genetics-history-amp-consequences",
      
        title: "Cancer Genetics - History &amp; Consequences",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/CancerGenetic_Hist-CSHL/";
        
      },
    },{id: "post-popular-computational-biology-language-with-r-proj-my-computer-workbench",
      
        title: "Popular Computational Biology Language with R - [Proj:My Computer Workbench]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Comp4_R/";
        
      },
    },{id: "post-namthip-x-งานวิจัยมะเร็ง-ตอนที่-0",
      
        title: 'Namthip x งานวิจัยมะเร็ง ตอนที่ 0 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;Namthip x งานวิจัยมะเร็ง ตอนที่ 0        จากโพสก่อนที่เล่าถึงเส้นทางการวิจัยมะเร็งที่เริ่มเรื่องมาตั้งแต่ ม.5 - ป.เอกตอนที่ 0 นี้คือเรื่องความสะเปะสะปะกว่าจะมาถึงเส้นทางวิจัยและวิทยาศาสตร์.เรื่องมันเริ่มมาจากโจทย์แค่ว่าทำไมยายถึงต้องตายเพราะมะเร็งทำไมหมอช่วยยายไม่ได้ถ้ามีทางดีดีที่ยายไม่ตาย เราก็คงไม่ต้องมานั่งร้องอยู่อย่างนี้นั่นหล่ะความคิดเด็ก ม.2.ตอนนั้นก็กวาดทุกอย่างที่ขวางหน้าหรือต้องเป็นหมอศัลย์นะ?หรือว่าต้องโภชนาการต้านมะเร็ง?หรือว่าต้องแบบหมอสมหมาย ทองประเสริฐ?สิงซีเอ็ดบุ๊คสุดๆ อ่านฟรีบ้าง ซื้อบ้าง (มัน 18 ปีก่อน เน็ตยังไม่แพร่หลาย 555).พ่อกับแม่ก็พยายามสนับสนุนนะ คือเค้าจะเป็นสายแบบเป็นแบ็คจะไม่ชี้นำ แต่ถ้าดีดจะไปทางไหนจะช่วยดัน มันหรือถีบนะไม่แน่ใจ .ช่วง ม.2 แม่ก็พาไปเจอรุ่นพี่ที่ทำงานเก่าของแม่คุณลุง ดร.วิรัตน์ คำศรีจันทร์ที่มาบรรยายเกี่ยวกับงานวิจัยอะไรสักอย่างจำได้เลยว่าใส่ชุดยุวกาชาดไปนั่งฟังบรรยายซึ่งก็น่าจะไม่ค่อยรู้เรื่องด้วยแล้วก็ไปทานข้าวต่อกับวิทยากรตอนนี้จำอะไรไม่ได้เลยว่าคุยอะไรจำได้อย่างเดียวคือ งานวิจัยนี่ดูเป็นอะไรที่เป็นเหตุเป็นผลแฮะ.ช่วงนั้นก็ดูข่าวพระราชสำนักของเจ้าฟ้าหญิงจุฬาภรณ์คือต้องลุ้นว่าวันนั้นจะมีข่าวของท่านรึป่าวถ้ามีบางที่ทำนู้นนี่อยู่ ก๋ง อาม่าจะรีบตะโกนเรียกให้มาดู เราก็จะมานั่งจ้องหน้าทีวีพร้อมสมุดจดเล่มนึงถ้าวันนี้ที่กำลังเรียน ป เอก อยู่ได้ย้อนกลับไปอ่านคงฮา นี่จดอะไรไว้!!!.ในวันเด็กๆแบบนั้น ภาษาง่ายๆอย่างที่ถ่ายทอดในข่าวพระราชสำนักดีมากๆเลยนะบางทีบางจุดเวลาเราไม่ได้ต้องการเข้าในเนื่อหาลึกซึ้งหรอกเราแค่ต้องการแรงบันดาลใจหน่ะนาทีนั้นวิทยาศาสตร์ดูเป็นสิ่งที่ก้าวหน้าและเต็มไปด้วยความหวัง.ตัดภาพมาที่อีกจุดสำคัญตอน ม.4แม่คงเห็นว่ามันยังไม่หยุดบ้าก็เลยส่งไปเพื่อนสนิทแม่ที่ทำงานหน่วยมะเร็งของ รพ.มอ.ก็เอาเลยฉายเดี่ยวไป รพ มอ ไปถามทางงมๆดมๆให้ถึงหน่วยเค้าที่บ้านก็จะทรงถีบแบบนี้ ที่ใครไม่สบายพาไปวนได้รอบ รพ ทีแบบนี้เตะให้ไปคนเดียวส่งแค่หน้า รพ เหมือนพ่อแม่เตี๊ยมกันมา =..= แล้วแม่ไม่อยากพบเพื่อนเอ่อะ งงไต.อิฉันก็ไปเจอน้าเค้า ถามนู้นนี่จำได้ว่าคำถามมันก็ออกมาทางแนวๆชอบวิจัยแล้วแหละเริ่มสนใจว่ามะเร็งถ่ายทอดทางพันธุกรรม บลาๆแต่โดนถามกลับว่าลองเริ่มต้นจากการดูแลสุขภาพ อาหารการกินให้ห่างไกลมะเร็งดูมั้ยหลังจากนั้นก็กลับมาต้มผักอยู่พักนึง มีนั่งรถตู้ไปเข้าฟังบรรยายพวกโภชนาการต้านมะเร็งที่หาดใหญ่ด้วยเด็กสุดในงานประชุม+หน้าตาคงมึน มีพี่ใจดีพามาส่งคิวรถตู้กลับนครฯ 5555.กลับมาก็ตอบตัวเองได้ว่า น้องไม่ชอบบบบบบบ น้องไม่อินนนนการต้มผัก.หลังจากนั้นก็เลยตามหาอะไรที่เป็นเหตุเป็นผลอะไรที่มีคำอธิบายอะไรที่มีการพิสูจน์อะไรมีความหวัง มีความก้าวหน้าเหลือคำตอบเดียวหล่ะวิจัย!.จุดเริ่มต้นของวิจัยที่น่าหลงใหลเริ่มมาจากนั่งคุยกับคุณลุง ดร.วิรัตน์ในห้องอาหาร ที่ทำงานเก่าของแม่.ตอนนั้นถึงจะเริ่มรู้ตัวว่าชอบงานวิจัยแต่มันคือเวิ้งใหม่ที่ใหญ่มากกกกกงานวิจัยกว้างมากกกก แต่อยากเป็นหมอด้วยอยู่นะจะมีมั้ยนะหมอที่เป็นนักวิจัยด้วยนี่.ผ่านมา 18 ปี กำลังจะสอบจบ ป.เอกก็มาใช้ที่ทำงานเก่าของแม่เป็นสถานที่สอบรู้สึกอุ่นใจที่จุดจบวนกลับมาที่จุดเริ่มต้น แถมอาจารย์ที่ปรึกษาจะบินมาสอบให้เองด้วย    ตอนอื่นๆ ของการบุกดงวิจัยที่เคยเขียนไว้-&amp;nbsp;ตอนที่ 0:&amp;nbsp;&amp;nbsp;สะเปะสะปะกว่าจะมาถึงเส้นทางวิจัย&amp;nbsp;-&amp;nbsp;ตอนที่ 1:&amp;nbsp;ค่ายไม่เล็กที่มีแต่ผู้ใหญ่ใจดีปูทางเด็กบ้านนอกสู่เส้นทางวิจัย-&amp;nbsp;ตอนที่ 2: ตรึงใจเด็ก ม.ปลาย เปิดโลกวิจัยที่สถาบันวิจัยจุฬาภรณ์-&amp;nbsp;ตอนที่ 3: ตะลุยดงวิจัย ทำไมวิจัยมีมะเร็งมีหลายแบบจัง-&amp;nbsp;ตอนที่ 4: รู้จักมะเร็งแบบเหนือชั้น เหนือพันธุกรรมคืออะไร&amp;nbsp;-&amp;nbsp;ตอนที่ 5: เมื่อฉันรักวิทยาศาสตร์ อย่างที่ไม่สนมะรงมะเร็งอะไรทั้งนั้น- ตอนที่ 6: ปริญญาเอก วิชาหนังชีวิต Scientific Lineage และผู้ช่วยชีวิตอย่าง Mentor&amp;nbsp;- ตอนที่ 7: ถ้าเธอติ่ง GOT7 ฉันก็ติ่งนักวิทยาศาสตร์#NamthipPhDstory&amp;nbsp;#NamthipCancerResearchJourney#NoCancer&amp;nbsp;#NoCancerTH&amp;nbsp;&amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/02/Namthip-CancerRes-0.html", "_blank");
        
      },
    },{id: "post-หอบหืดแบบโหดๆ-ก็จบปริญญาเอกได้นะ-ตอนที่-1-แรงใจ",
      
        title: 'หอบหืดแบบโหดๆ ก็จบปริญญาเอกได้นะ ตอนที่ 1: แรงใจ <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "หอบหืดแบบโหดๆ ก็จบปริญญาเอกได้นะ ตอนที่ 1: แรงใจ&amp;nbsp;แปลงร่างจาก dog หมา เป็น ดร. แล้ว~~~กรุณาเรียกฉันว่าดร. มิสหอบหืด (Dr. Miss Asthma).มิสว่ามันค่อนข้างเกินความคาดหมายของใครหลายๆ คนเลยนะการจบ ป เอก ในครั้งนี้.เรียกว่า ถ้าป่วยขนาดนี้เรียนไม่จบ ก็คงไม่มีใครว่าอะไรยกเว้นทุนการศึกษา 555555.วันนี้มิสอยากจะแชร์เรื่องที่มิสคิดว่าสำหรับที่สุดในการเอาตัวรอดผ่านช่วงเวลาที่หอบโหดๆงานวิจัยก็ต้องทำ เล่มวิทยานิพนธ์ก็ต้องเขียน.อันดับ 1 เลย มิสว่า….มันคือ แรงใจ.ที่เค้าว่าใจเป็นนาย กายเป็นบ่าวคือเรื่องจริงมิสมองว่าเราไม่สามารถควบคุมทุกอย่างในชีวิตได้แล้วเราจะมาปวดหัวกับเรื่องที่คุมไม่ได้ไปเพื่ออะไร.มิสปล่อยให้เรื่องการรักษาเป็นหน้าที่ของหมอเลยนะไม่ต้องคิดแทนหมอ แค่ว่าหมอสั่งอะไรก็ทำหมอให้กินปลากิน ตากแดดบ่อยๆ ก็ตากเดินไหวก็เดิน เดินไม่ไหวก็นอนนนนน.เรื่องคนนู้นคนนี้ไม่เข้าใจมิสก็เจอ มิสว่าคนเป็นหอบหืดทุกคนเจอหอบหืดเป็นโรคไม่มีแผลและโรคไม่มีแผลคือโรคที่เจ็บปวดปวดจากตัวโรคแล้ว ยังปวดใจจากคนที่ไม่เข้าใจอีกมิสว่าการอธิบายเรื่องสำคัญบอกเค้าไปตรงๆว่าเราเป็นยังไง เหนื่อยหรืออึดอัดไม่ต้องคาดหวังหรอกว่าเค้าจะเข้าใจแค่ได้สื่อสารไปดีกว่าเราอึดอัดและทนไว้.มิสโชคดีมากที่ แม่เป็นพยาบาลน้องเป็นหมอ เค้าก็จะพอเข้าใจง่ายหน่อยแต่ไม่มีอะไร 100% นะทุกคน.ส่วนสุดท้ายคือเรื่องเรียนต้องบอกเลยว่าปริญญาเอกไม่ใช่เรื่องง่ายๆคนที่เข้ามาเรียนไม่ใช่ทุกคนจะจบที่มิสเห็นแทบจะครึ่งๆที่ลาออกไปกลางคันมิสโชคดีที่ชอบทำวิจัยมากกกกคือมิสสนุกกับมัน ถ้าผลวิจัยไม่ได้ดั่งใจ มิสก็ไม่โทษตัวเองงานวิจัยที่มิสทำคือต้องวุ่นกับการเลี้ยงเซลล์มะเร็งนั่นแปลว่ามิสต้องทำแลป ช่วงที่มิสสุขภาพดี มิสทำแลปตุนไว้เยอะมาก.ถึงช่วงที่หอบหืดแย่มากจนนอน รพ ไป 16 ครั้ง ICU (MRCU) ล้วนๆ ใส่ท่อช่วยหายใจไป 7 ครั้ง ทั้งหมดเกิดขึ้นใน 3 ปี.3 ปีนี้เป็นช่วงที่มิสต้องกลับมาพักที่บ้านต่างจังหวัดกอบโกยงานวิจัยทั้งหมดเป็นงานเขียนเพื่อใช้จบ ป เอกช่วงแรกมันยากมากเลย มิสร้องไห้ทุกวัน เป็นแบบนั้นอยู่เป็นเดือนๆจนสุดท้ายทำใจได้.ช่วงนั้นเป็นช่วงชีวิตที่มิสเหลือที่ยึดเหนี่ยวอยู่ไม่กี่อย่างเป็นคนที่มิสคิดว่ายังเชื่อว่ามิสทำได้นั่นคือ ครอบครัว อาจารย์ที่ปรึกษา หมอเจ้าของไข้และเจ้าของทุนการศึกษา.มิสได้รับทุนหลวงมาและเวลาทุกนาทีมิสต้องทำงาน ตั้งใจเรียนให้คุ้มที่ทุนช่วยเหลือมิสไม่งั้นมิสจะรู้สึกผิด .ครอบครัวเป็นส่วนที่สำคัญมากตัั้งแต่เฝ้าไข้ หิ้วไปห้องน้ำตอนเดินไม่ไหวและอีกมากมายนับไม่หมด.อาจารย์หมอ ช่วยมิสทุกทางเพื่อให้ได้การรักษาดีที่สุด เร็วที่สุด.สุดท้ายคืออาจารย์ที่ปรึกษาวิทยานิพนธ์สิ่งเป็นคนที่สำคัญที่สุดในชีวิตการเรียน ป เอกและชีวิตหลังจากนี้เลยนะมิสโชคดีที่ได้เรียนกับอาจารย์ที่ดี สอนมิสทั้งเรียนเรื่อง เรื่องใช้ชีวิต และสนับสนุนมิสในทุกด้านที่มิสสนใจ.ตอนนี้มิสสอบจบมาแล้ว ก็ยังโดนอาจารย์ด่าเรื่องบ้างานและต้องพักผ่อนอยู่ 5555 จะบ้าตายยยย อยากทำนู้น ทำนี่กองพะเนิน.มิสเป็นกำลังใจให้แม่ๆที่มีลูกเป็นหอบหืดทุกคนนะคะ รวมถึงน้องๆวัยเรียนและทุกคนที่อยู่ในวัยทำงานด้วย .มิสทำเพจเล่าเรื่องเกี่ยวกับงานวิจัยมะเร็งแบบสนุกๆ เข้าใจง่ายๆไว้ด้วย&amp;nbsp;&amp;nbsp;อันนีเลยเพจ NO CANCER :&amp;nbsp; เพราะวิจัยมะเร็งนั้นลึกซึ้ง ของมิส&amp;nbsp;.&amp;nbsp;#มิสหอบหืด #หอบหืด #missasthma #missasthmathailand",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/2025/02/1.html", "_blank");
        
      },
    },{id: "post-สุราษฎร์-เกี่ยวอะไรกับงานวิจัยมะเร็ง",
      
        title: 'สุราษฎร์ เกี่ยวอะไรกับงานวิจัยมะเร็ง <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "สุราษฎร์ object เกี่ยวอิหยังกับงานวิจัยมะเร็งหรือเพราะหอยใหญ่ ไข่แดง แหล่งธรรมะคือที่จริงฝรั่งเค้าออกเสียงว่า &quot;ซูรัด (Seurat)&quot;แต่คือนักวิจัยสาวชาวนครศรีธรรมราชอย่างเราก็คิดเป็นอื่นไม่ได้อีกเลยจ้าาา สุราษฎร์หิวไข่ดาวเค็ม 5555555.งานวิจัยมะเร็งเนี่ยมันมีการวิเคราะห์กันระดับเซลล์เดี่ยวๆ (Single cell) เลยแล้วเครื่องมือที่วิเคราะห์มันชื่อ สุราษฎร์ (Seurat)ปกติเนี่ยชื่อเครื่องมือมันจะมีที่มาไอเราก็สงสัยว่าคนคิดเกิดที่สุราษฎร์ ชอบกินไข่เค็มไชยาเคยมาสวนโมกข์หรือยังไงนะ.คนคิดค้นเค้าก็ไม่ได้บอกชัดเจนแต่มีจุดเชื่อมโยงที่น่าสนใจอย่างนึงถ้าค้นคำว่า Seurat ในกูเกิ้ลนี่อย่างแรกที่เจอคือ ภาพสีๆที่ทำมาจากจุดๆ.นั่นคือผลงานศิลปะชาวฝรั่งเศสของ Georges Seurat (อ่านว่า เซอรา).ก็เลยไปเปิดเว็บไซด์ของแลปวิจัยที่พัฒนาเครื่องมือ Seurat ดูไปเจอรูปเมืองกลางคืนที่ภาพแตกๆเป็นจุดๆกลมๆซึ่งภาพนี้แอดเคยแอบบ่นในใจว่าทำไมแลปดังๆเอารูปแตกๆมาขึ้นเว็บนะแต่ก็ยังแอบสะกิดใจว่า ภาพไม่ชัดแต่ดันไม่ชัดแบบเป็นวงกลม น่าจะแตกเป็นสี่เหลี่ยมดิ.ซึ่งมันจริงงงงงงงงงงแรงบันดาลของชื่อเครื่องมือวิเคราะห์นี้จะต้องมาจากผลงานศิลปะของ Georges Seurat แน่ๆ.คือที่เราต้องสนใจเซลล์เดี่ยวขนาดนี้เนี่ยเพราะว่ามีเรื่องของความแตกต่างของแต่ละเซลล์ในมะเร็งก้อนเดียวกันหรือ Tumor Heterogeneityภาพเซลล์แต่ละเซลล์เนี่ยมันจะโดนนำเสนอด้วยจุด เห็นจุดคนละสีในกราฟมั้ยนั่นเลยยยย แต่ละกลุ่มคือคนละพวก.นึกภาพง่ายๆเลยนะ เราให้เคโมก้อนยุบ เฮ้ยแบบนี้มันต้องตายเกลี้ยงแน่ๆวันดีคืนร้ายอยู่ๆนังมะเร็งมันโผล่กลับมาแล้วมันมาจากไหนแว๊~~~~~~มันมาจากนังเซลล์ที่ไม่ตายตอนแรกแล้วออกลูกออกหลานนี่เราเลยต้องศึกษาระดับเซลล์เดี่ยวเพื่อเข้าใจมันให้หมดจะได้หาวิธีจัดการมันต่อไป จะได้ตายเกลี้ยงๆไม่ต้องโผล่กลับมาอีกต่อปายยยยยยยยยยยย",
      section: "Posts",
      handler: () => {
        
          window.open("https://nocancerth.blogspot.com/2025/02/blog-post.html", "_blank");
        
      },
    },{id: "post-namthip-x-งานวิจัยมะเร็ง-ตอนที่-6",
      
        title: 'Namthip x งานวิจัยมะเร็ง ตอนที่ 6 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;Namthip x งานวิจัยมะเร็ง ตอนที่ 6&amp;nbsp;ตอนนี้ที่รอคอยยยยว่าด้วยเรื่องราวตอนเรียนปริญญาเอกScientific Lineage และ Mentor.จากเรื่องราวตอนก่อนๆ ตั้งแต่ ม.ต้น จนปี 6 ป ตรี เภสัช ที่ชีวิตว้าวุ่นกับการหาแลปเรียนต่อมากกว่าสอบใบประกอบวิชาชีพ.การเรียนต่อคือการเบี่ยงเข็มไปในทางที่ยิ่งแคบ ยิ่งเฉพาะทาง และแน่นอนเส้นทางอาชีพที่แคบลงไปอีกนี่ทำให้คิดหนักมากว่าเรียนอะไร ที่ยิ่งไปกว่านั้นคือ ชอบวิจัยแบบไหนของมะเร็งเพราะวิจัยมะเร็งนั้นกว้างมากกกกกกกกก.ถึงตรงนี้ขอบคุณอาจารย์ทุกท่านๆที่ให้โอกาสได้ค้นหาตัวเองว่าชอบวิจัยมะเร็งแบบไหนนะคะ.ด้วยเหตุผลหลายๆอย่าง เลยตัดสินใจเรียนปริญญาเอก สาขาเภสัชวิทยา ที่ศิริราช (มันคือ โทควบเอก ถ้าจบ ป ตรีด้วยเกียรตินิยม จะสมัครเรียนแบบนี้ได้เลยไม่ต้องผ่านโท) ซึ่งการเข้าเรียนแบบนี้ก็ถูกนับเป็นนักเรียน ป เอก แต่วิชาเรียนเยอะกว่า.การเรียน ป เอก นั้น จุดสำคัญคือทำวิจัยล้วนๆ แทบไม่มีอะไรผสมเอาหล่ะวะ สมใจอยาก 55555 อยากร่ำไปด้วยทำแลปไปด้วย สภาพพพพ.คือวิจัยนี่ไม่ได้เหมือนแลปที่เราทำตอนเรียนมัธยมที่ใสๆกุ๊งกิ๊ง เพราะเป็นการทดสอบกฏหรือทฤษฎีที่คนทั้งโลกทำมาเป็นล้านครั้งก็ได้ผลเหมือนเดิมหรือโปรเจคจบตอน ป ตรี ที่ใสๆ ฟรุ้งฟริ้งกระดิ่งแมว.วิจัย ป เอก มันคือการสร้างองค์ความรู้ใหม่และก็เพราะความใหม่นี่แหละ ก็เกี่ยวข้องกับว่าแล้วช้านนนจะเจอมันมั้ย แล้วทำไงจะเจอ.เพราะงี้นี่เองอาจารย์ที่ปรึกษาจึงเป็นบุคคลที่สำคัญที่สุดแต่อย่าได้คาดหวังว่าจะเกาะอาจารย์เหมือนปลิงเกาะหน้าแข้ง 555เข้าไปเรียนแรกๆ อาจารย์บอกเลย“ผมเป็นสไตล์แบบถีบลงน้ำ ถ้าคุณว่ายใกล้จะเข้าฝั่งได้ ผมก็จะถีบคุณไปอีก”.หลังจากนั้นสภาพฉันก็~~~เหมือนช้างที่ตกน้ำ จมลงไปทั้งตัว ตาลีตาเหลือก โดยมีเพียงปลายงวงเท่านั้นที่โผล่มาสูดอากาศ คาบอ้อย อร๊ายยยย เกือบตายยย แต่พองานวิจัยทำท่าจะไปผิดทางออกทะเล อาจารย์ก็แอบโยนอ้อยแหละ 5555.ถึงแม้การเรียน ป เอก จะเป็นไปอย่างชิคๆนักเรียนแต่ละคนทำโปรเจคกันไปคนละทิศละทาง(Stephen Hawing ก็ถูกสอนแบบนี้)แต่มันเป็นการฝึกเรื่อง independent ที่จบไปก็ต้องเจอ.แบบนี้ก็สนุกนะ ทิศทางของงานวิจัยก็คุยได้ว่าอยากให้เป็นแบบไหน แต่ต้องโน้มน้าวอาจารย์ให้ได้ว่าทำไมแบบนี้น่าทำ ทำไมจะซื้ออันนั้นอันนี้มาทำวิจัยจบท้ายด้วยว่า อ ซื้อไอเดียนี้หรือเปล่าคะพร้อมแบมือขอตังค์ .ดูเหมือนการเรียนจะเป็นแบบคิดเอง เออเองแต่ที่จริงก็มีหลายๆอย่างที่สนับสนุนให้เองเองได้ทั้ง journal club, lab meeting, สังคมพี่ๆน้องๆในแลปและสำคัญสุดคืออาจารย์ที่ปรึกษา.คิดว่ามันคงเป็นเรื่องของสไตล์ที่ถ่ายทอดกันมาเรื่อยๆจากรุ่นสู่รุ่นของการให้คำปรึษาซึ่ง อ แต่ละคนก็แตกต่างกันฝรั่งถึงขั้นใช้คำว่า Scientific Lineage เลยเคยเจอเว็บไซด์ที่นับลูกๆหลานๆทางวิชาการของนักวิจัยดังๆด้วย.ถึงกระนั้นอาจารย์ที่ปรึกษาก็ไม่ใช่พระเจ้าในเมื่อเรากำลังดีลกับการหาองค์ความรู้ใหม่ที่ก็คงไม่มีใครนอกจากพระเจ้าที่รู้ว่าการทดลองนี้งานวิจัยนี้จะไปไกลได้แค่ไหนหรือทำยังไงถึงจะไขปริศนานี้ได้นอกจากนีความรู้บนโลกยังกว้างใหญ่ไพศาลมากมายจนใครจะไปรู้ ไปจำได้ทุกอย่าง.“เรื่องนี้ ผมไม่มีความรู้”นี่เป็นคำที่ออกจากปาก อ ที่ปรึกษาบ่อยๆซึ่งเป็นคำที่เราชอบนะ ตรงไปตรงมาดีคำนี้มักไม่ได้มาโดดๆหรอก ส่วนใหญ่ อ ก็จะแนะหน่อยๆว่าน่าจะเริ่มยังไงแต่ที่ไม่แนะก็มี เอ้ยยยย ยังไงนะก็ต้องงมๆ หาเอง ซึ่งกระบวนการงมก็มีค่าเพราะครั้งต่อๆไปก็งมเก่งขึ้น เร็วขึ้นมั่วไปมั่วมาจนช่ำชอง ชำชาญว่างั้นนนนนน.สุดท้ายนี้การเรียนปริญญาเอกก็เหมือนเอาคนไปติดอาวุธ ฝึกปรือให้ทำงานวิจัยได้เองบ่อยครั้งที่การทดลองไม่ได้เป็นไปตามคาดอย่างเดียวที่ต้องรีบเลยคือ ล้มแล้วต้องลุกให้ไววางแผนให้ดีดี ถ้าแผนดีแต่ยังพังให้โทษ biology อย่าโทษตัวเองงง นักวิจัยไม่ใช่พระเจ้า ~~~.จนผ่านมาถึง 6 ตอนที่เขียนมาศาสตร์วิจัยนี้เป็นอะไรที่ลึกซึ้งและศาสตร์นี้ต้องการ mentor ที่ไม่ใช่แค่ชี้นำทางวิชาการ แต่รวมไปถึงเรื่องอื่นๆด้วยรู้สึกโชคดีที่ได้มาเป็นนักเรียนของอาจารย์ก็เลยทำของขวัญที่ระลึกสวยๆให้อาจารย์แม้ว่า 99.99% จะเป็นการก่อกวนบาทาอาจารย์เป็นส่วนใหญ่ อิอิ &amp;nbsp;.&amp;nbsp;ตอนอื่นๆ ของการบุกดงวิจัยที่เคยเขียนไว้-&amp;nbsp;ตอนที่ 0:&amp;nbsp;&amp;nbsp;สะเปะสะปะกว่าจะมาถึงเส้นทางวิจัย&amp;nbsp;-&amp;nbsp;ตอนที่ 1:&amp;nbsp;ค่ายไม่เล็กที่มีแต่ผู้ใหญ่ใจดีปูทางเด็กบ้านนอกสู่เส้นทางวิจัย-&amp;nbsp;ตอนที่ 2: ตรึงใจเด็ก ม.ปลาย เปิดโลกวิจัยที่สถาบันวิจัยจุฬาภรณ์-&amp;nbsp;ตอนที่ 3: ตะลุยดงวิจัย ทำไมวิจัยมีมะเร็งมีหลายแบบจัง-&amp;nbsp;ตอนที่ 4: รู้จักมะเร็งแบบเหนือชั้น เหนือพันธุกรรมคืออะไร&amp;nbsp;-&amp;nbsp;ตอนที่ 5: เมื่อฉันรักวิทยาศาสตร์ อย่างที่ไม่สนมะรงมะเร็งอะไรทั้งนั้น- ตอนที่ 6: ปริญญาเอก วิชาหนังชีวิต Scientific Lineage และผู้ช่วยชีวิตอย่าง Mentor&amp;nbsp;- ตอนที่ 7: ถ้าเธอติ่ง GOT7 ฉันก็ติ่งนักวิทยาศาสตร์#NamthipPhDstory&amp;nbsp;#NamthipCancerResearchJourney#NoCancer&amp;nbsp;#NoCancerTH&amp;nbsp;&amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/02/Namthip-CancerRes-6.html", "_blank");
        
      },
    },{id: "post-ฝันร้ายของวันแห่งความรัก",
      
        title: 'ฝันร้ายของวันแห่งความรัก <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;ฝันร้ายของวันแห่งความรัก&amp;nbsp;วันแห่งความรักเป็นวันที่มิสจะเก็บตัวอยู่ในบ้านเหม็นความรักของคนมีคู่?ไม่ใช่~~~~~.มิสแพ้ดอกไม้มากกกกกกวันนี้เป็นวาเลนไทน์เป็นวันแห่งดอกไม้นานาชนิดกระทั่งใน รพ ก็ไม่เว้น.เมื่อ 2 ปีก่อนมิสไปหาหมอตามนัด นัดวันวาเลนไทน์พอดีเลยหลังจากหลบดอกไม้อย่างดโชกโชนมาทั้งวันสุดท้ายก็แพ้จนได้.สรุปวันนั้นเข้าห้องฉุกเฉินแล้วก็ไม่ได้กลับบ้าน แฮร่~~~.เรื่องแพ้ดอกไม้นี่มีประสบการณ์เยอะมากทั้งแพ้แบบปั่นๆจักรยานเป็น 100 กม. อยู่ๆก็หอบ หาสาเหตุ คุยกับพี่ในก๊วน จนเจอว่าแถวนั้นปลูกดอกไม้เป็นทุ่งเลย .คือมิสแพ้ทั้งที่ไม่เห็นตัวดอกไม้เกสรลอยมาก็สัมผัสได้ ยิ่งกว่าคุณริวจิตสัมผัส ก็มิสหอบหืดปอดสัมผัสนี่แหละจ้า &amp;gt;&amp;lt;",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/2025/02/blog-post.html", "_blank");
        
      },
    },{id: "post-namthip-ph-d-thesis-defense-photo",
      
        title: "Namthip - Ph.D. Thesis Defense Photo 📷",
      
      description: "Image gallery",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/KK_DefensePic/";
        
      },
    },{id: "post-namthip-ph-d-thesis-defense-acknowledgment",
      
        title: "Namthip - Ph.D. Thesis Defense Acknowledgment 🤓",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/KK_PhD-defense/";
        
      },
    },{id: "post-happy-teachers-39-day-2025",
      
        title: "Happy Teachers&#39; Day 2025",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/10yr_teacherDay/";
        
      },
    },{id: "post-namthip-the-best-poster-presentation-2021",
      
        title: "Namthip - The Best Poster Presentation 2021 🎉",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/KK_2021BestPoster/";
        
      },
    },{id: "post-ยาหอบหืดแบบฉีด-omalizumab",
      
        title: 'ยาหอบหืดแบบฉีด: Omalizumab <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "ยาหอบหืดแบบฉีด Omalizumabยาเข็มละ 20,000 แต่บางคนต้องฉีด 8 เข็ม = 80,000 บาทต่อเดือน.เท่าที่มิสถามหลายๆคนจากโพสก่อนหน้าหลายคนได้ใช้ยามุ่งเป้าสำหรับโรคหืดซึ่งส่วนใหญ่คือตัวนี้!!.ยานี้ชื่อสามัญคือ Omalizumab (โอมาริซูแมป)ชื่อทางการค้า Xolair® (โซแล)(งงมั้ยว่าทำไมยาเดียวมี 2 ชื่อ).ยานี้สำหรับคนไข้โรคหืดแบบขี้แพ้คือแพ้เยอะอ่ะ หมอจะต้องตรวจเลือดดูค่าภูมิแพ้ที่ชื่อ total IgE (ค่าไอจีชนิดอีทั้งหมด)ปล.ค่าภูมิแพ้มีหลายตัวมากกกกก.การใช้ยาว่าทำไมคนนี้ฉีด 1 เข็มแต่อีกคนปาไป 4 เข็มจะคำนวณจาก1. ค่าภูมิแพ้ total IgE 2. น้ำหนักตัว!!! .แพ้มาก อ้วนมากยิ่งแพงนะทุกคน.มิสเคยตรวจค่าภูมิแพ้ total IgE ตัวนี้พบว่าถ้าเลี่ยงสิ่งที่แพ้นะค่า total IgE มิสลดด้วยแหละ.เพราะงั้นอย่างนึงที่คนไข้ทำได้คือ1. เลี่ยงสิ่งที่ทำให้เราแพ้2. ลดน้ำหนัก.น้ำหนักเนี่ยมีผลต่อโรคหอบด้วยนะอ้วนก็ทำให้หอบเพิ่มขึ้นได้ด้วย .เพราะยามุ่งเป้าพวกนี้ราคาแพงมากกกกไม่ใช่ทุกคนที่จะจ่ายไหว/เบิกได้.โพสต่อๆมิสจะมาบอกข่าวดีเราอาจจะได้ใช้ยา omalizumab นี้ในราคาที่ถูกลง .อ้างอิงขนาดยา Xolair : https://www.xolairhcp.com/.../dosing-and.../dosing.htmlมาคุยกันได้ที่Facebook: มิสหอบหืด - Miss Asthma Thailand #หอบหืด #มิสหอบหืด #MissAsthma #MissAsthmaThailand",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/2025/01/omalizumab.html", "_blank");
        
      },
    },{id: "post-ตอนที่-1-คุณหมอดูแลเรายังไงแล้วเราดูแลตัวเองยังไงดี",
      
        title: 'ตอนที่ 1: คุณหมอดูแลเรายังไงแล้วเราดูแลตัวเองยังไงดี <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "ซีรี่แกะรอยวิธีคุมโรคหืดตามหนังสือของคุณหมอ ตอนที่ 1 คุณหมอดูแลเรายังไงแล้วเราดูแลตัวเองยังไงดีน๊าาาา.วันโรคหืดปีนี้เค้าเน้นเรื่องข้อมูลมากกกกอยากให้คนไข้โรคหอบหืดได้รับข้อมูลดีดีไว้ดูแลตัวเองกัน.มิสก็เลยขโมยข้อมูลในวงการคุณหมอมาให้คนไข้อย่างเราๆได้ดูกันนี่บุกหลังบ้านหมอฝุดๆ .คุณหมอดูแลเรายังไง ดูแลตัวเองยังไงได้บ้าง.ภาพนี้จะบอกเรื่องราวทั้งหมดดดดที่มิสจะเล่าทั้งซีรี่ ซึ่งคงจะยาวมากกกกกกกกก.คุณหมอดูเเลเราตาม 3 ส่วนใหญ่ๆคือป - ประเมินท - ทบวนป - ปรับ.ซึ่งแต่ละอันหัวข้อแยกย่อยเยอะมากๆเลยหล่ะ.แต่ส่วนที่เราดูแลตัวเองได้ และจะช่วยให้คุณหมอดุแลเราง่ายขึ้นไปด้วยก็คือเกือบทั้งหมดเช่นกันมิสได้แปะรูปสวยๆของมิสพร้อมขีดเส้นแดงๆไว้ให้แล้วเกือบทั้งหมดเลยจริงๆใช่มั้ยหล่ะ.ตอนหน้าอยากรู้ข้อมูลเส้นสีแดงเส้นไหนดีช่วยมิสโหวตกันหน่อยคอมเม้นไว้เล๊ยยยย.อ้างอิงภาพ- Guideline for adult asthma management in Thailand 2022 by Thai Asthma Councilมาคุยกันได้ที่Facebook: มิสหอบหืด - Miss Asthma Thailand#Asthma#WorldAsthmaDay#worldasthmaday2024#หอบหืด #มิสหอบหืด#MissAsthma #MissAsthmaThailand#คนไข้บ้าพลัง #ทีมหอบหื่น",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/2025/01/blog-post.html", "_blank");
        
      },
    },{id: "post-namthip-x-งานวิจัยมะเร็ง-ตอนที่-5",
      
        title: 'Namthip x งานวิจัยมะเร็ง ตอนที่ 5 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Namthip x งานวิจัยมะเร็ง ตอนที่ 5&amp;nbsp;Ep นี้ เราจะมาเล่าถึงช่วงชีวิตที่เทเรื่องมะรง มะเร็งทิ้งไปเลยครัชอ้าววว เฮ้ยยย น้ำทิพย์มีช่วงชีวิตนั้นด้วยเหรอมีครัชชช ฟินด้วย แต่มาลำบากตอนจะเรียนต่อเรื่องเป็นมาไง ทำไมเท มาฟังกัน.เท้าความตอนที่แล้วๆมาตั้งแต่ ม.ต้นที่ค้นหาว่าตัวเองชอบมะเร็งแบบไหนจนมาเจอทิศทางงานวิจัยมะเร็ง แล้วได้ตะลอนทัวร์แลปนู้นนี่ .เรื่องความเทนี้เกิดขึ้นตอน ป ตรี ช่วงปี 3-6ตอนนั้นดีดเต็มที่ ชอบวิจัยขึ้นสมองรุ่นพี่มักสปอยกันมาว่าไปติดต่ออ คนนี้ในคณะสิ อ ชอบทำวิจัยทำงานวิจัยเกี่ยวกับมะเร็งด้วยก็เริ่มไปวอแว อ ฉ่อย ในคาบเรียนซึ่งก็คือตอนปี 3 นั่นเอง.จำได้เลยว่าชีวิตของการเรียนแลปวิชา pharm analysisจุดมุ่งหมายคือการตั้งวงเม้ากับจารย์ฉ่อยหลังปั่นแลปเสร็จ แต่ชาวบ้านยังทำไม่เสร็จเราก็เม้าสิครัช โต๊ะแลปหลังห้องเลย รอไร 555+จำเรื่องที่เม้าไม่ได้ จำได้คือมันสนุก 555แล้วถ้าเป็นเรื่องวิจัยนะ อ จะอินมากพอ อ อินจะขยับเก้าอี้เข้ามาในวงมากขึ้นเรื่อยๆ.ไปๆมาๆเลยเกิดโครงการ mini project ขึ้นในปิดเทอมที่เป็นรอยต่ออาเซียนโปรเจคที่ทำคือวุ่นวายกับยาไวอากร้าและเครื่อง HPLC สนุกสนานแทบจะกางเต็นท์นอนแลปสามสี่ทุ่มเครื่องกรีดร้อง guard column ตันโทรตาม อ บันเทิงแท้.พอปี 5 เป็นโปรเจคจบก็ยังเกาะอาจารย์ต่อตอนนั้นกลุ่มแลปอีกกลุ่มที่ อ เป็น co-advisorก็ได้ทำงานเกี่ยวกับมะเร็งนะส่วนของกลุ่มเราเป็นแนวโรคติดเชื้อไปเลยแต่ก็ไม่ได้อะไร เฉยๆ แฮะ แนวว่าจารย์จะให้ทำโปรเจคอะไรก็อันนั้นหล่ะจ๊าดดดไป โลดดดดด.ช่วงทำโปรเจคเป็นช่วงที่สนุกมากทิ้งความมะเร็งไปเลย 5555กลายร่างเป็นปลิงเกาะแข้ง advisor แทน กิกิแล้วก็สิงแลป หมายิก(ไล่)ที่ตึกแลปกลัวผีหลอก ปริ้นใบขอเข้าแลปนอกเวลามาเป็นปึกๆให้ อ เซ็นต์ไว้แล้วค่อยมาใส่วันที่กันเองเจอพี่ยามมาเปิดประตูแบบหน้าเซ็งๆ คงนึกว่าไอเด็กพวกนี้จะเข้าแลปค่ำๆอีกละ .เป็นช่วงเวลาที่ค่อยๆซึมซับกระบวนการทางวิทยาศาสตร์ทีละเล็ก ทีละน้อย วิธีคิดเอยอะไรเอยมันคือกระบวนการหล่อหลอมชั้นเลิศซึ่งเป็นสูตรเฉพาะของอาจารย์แต่ละคนละมั้งซึ่งบรรยายไม่ได้เลยว่ามันคือยังไงเพราะงี้มั้งถึงได้มีคำศัพท์ scientific lineage รู้ตัวอีกทีก็ชอบวิทยาศาสตร์ไปแล้ววิทย์ที่เป็นอะไรก็ได้ด้วยหน่ะสิ.คือมันไม่ได้มีอะไรผิดเลยที่เราจะเปิดใจกว้างๆ แล้วตามหาว่าตัวเองชอบอะไร ไม่ต้องยึดติดกับมะเร็งก็ได้.ตอนนั้นเริ่มคุยเรื่องเรียนต่อ ว่า ป ตรีน่าจะไม่พออ แนะนำให้เตรียมตัวหลายอย่าง อ บอกอะไรก็ทำ เช่นทำเกรดให้ดีๆ ได้เกียรตินิยมยิ่งดีก็ปั่นเกรดจนถึงเกียรตินิยม.มาถึงปี 6  ที่ชาวบ้านเตรียมสอบใบประกอบเภสัชส่วนเรา…วุ่นวายกับตัวเองจะสมัครใช้ทุนเภสัชดีมั้ย มีตำแหน่งแนวๆ resident ด้วยหรือจะเรียนต่อดี จะเรียนโท หรือโทควบเอกก็ไม่รู้เรียนที่ไหนก็ไม่รู้ เรียนเรื่องอะไรยังไม่รู้เลย.Pharmacokinetics ก็ชอบ แนวๆออกแบบโรงงานยาก็ชอบเทรน Immuno ก็มาแรงBioinformatics ก็น่าสนใจPharmacogenetics ก็ว๊าวมากPrecision medicine ที่เล็งมานานก็บูมละ.เป็นปีฝึกงานที่ไปตามงานอีเว้นท์ทุนต่างๆ ไปปรึกษา อ และพี่ๆ ตามแลปที่เคยไปฝึกและอ่าน Review article มากกว่าหนังสืออีกมั้ง.สุดท้ายก็สรุปกับตัวเองว่าเรียนในไทยก็เฟี้ยวได้เลือกแนววิจัยใช่ที่สุด(คิดนานมากกก)และเกี่ยวกับมะเร็งเพราะแรงผลักดันนั้นสำคัญไม่น้อยเลยทำวิจัยจนเฉาตายขึ้นมา เหลือแต่แรงผลักดันนะเอาจริง.และนั่นแหละเป็นจุดเริ่มต้นของป.เอก แบบโทควบเอกโดยแว๊บไปทำงานเก็บตังค์ปีนึงแล้วค่อยมาสมัครเรียน .มาถึงตอนนี้ก็ขอบคุณเมทแลปและอาจารย์ที่ปรึกษา อ อภิชาต อธิไภริน ภาพนี้เป็นภาพระดับตำนานกับเครื่อง HPLC เสียดายตอนรับปริญญา ไม่ได้ถ่ายรูปกับ อ เลยมัวแต่หลบดงดอกไม้ &amp;gt;&amp;lt;. ตอนอื่นๆ ของการบุกดงวิจัยที่เคยเขียนไว้-&amp;nbsp;ตอนที่ 0:&amp;nbsp;&amp;nbsp;สะเปะสะปะกว่าจะมาถึงเส้นทางวิจัย&amp;nbsp;-&amp;nbsp;ตอนที่ 1:&amp;nbsp;ค่ายไม่เล็กที่มีแต่ผู้ใหญ่ใจดีปูทางเด็กบ้านนอกสู่เส้นทางวิจัย-&amp;nbsp;ตอนที่ 2: ตรึงใจเด็ก ม.ปลาย เปิดโลกวิจัยที่สถาบันวิจัยจุฬาภรณ์-&amp;nbsp;ตอนที่ 3: ตะลุยดงวิจัย ทำไมวิจัยมีมะเร็งมีหลายแบบจัง-&amp;nbsp;ตอนที่ 4: รู้จักมะเร็งแบบเหนือชั้น เหนือพันธุกรรมคืออะไร&amp;nbsp;-&amp;nbsp;ตอนที่ 5: เมื่อฉันรักวิทยาศาสตร์ อย่างที่ไม่สนมะรงมะเร็งอะไรทั้งนั้น- ตอนที่ 6: ปริญญาเอก วิชาหนังชีวิต Scientific Lineage และผู้ช่วยชีวิตอย่าง Mentor&amp;nbsp;- ตอนที่ 7: ถ้าเธอติ่ง GOT7 ฉันก็ติ่งนักวิทยาศาสตร์#NamthipPhDstory&amp;nbsp;#NamthipCancerResearchJourney#NoCancer&amp;nbsp;#NoCancerTH&amp;nbsp;&amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/02/Namthip-CancerRes-5.html", "_blank");
        
      },
    },{id: "post-moo-deng-hippo-pathway-x-cancer-no-cancer",
      
        title: "Moo Deng - Hippo pathway x Cancer - [NO CANCER]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/NOCANCER-Hippo/";
        
      },
    },{id: "post-screen-command-to-maintain-terminal-screen-unix-trick",
      
        title: "Screen command to Maintain Terminal Screen - [Unix trick]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/CompUnix1_Screen/";
        
      },
    },{id: "post-tracking-verions-of-code-by-git-version-control-proj-my-computer-workbench",
      
        title: "Tracking verions of code by Git Version Control - [Proj:My Computer Workbench]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Comp5_Git/";
        
      },
    },{id: "post-reproducible-computational-biology-workflow-by-nf-core-proj-my-computer-workbench",
      
        title: "Reproducible Computational Biology Workflow by nf-core - [Proj:My Computer Workbench]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Comp3_nf/";
        
      },
    },{id: "post-containerization-using-docker-proj-my-computer-workbench",
      
        title: "Containerization using Docker - [Proj:My Computer Workbench]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Comp2_Docker/";
        
      },
    },{id: "post-operating-system-using-linux-proj-my-computer-workbench",
      
        title: "Operating System using Linux - [Proj:My Computer Workbench]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Comp1_OS/";
        
      },
    },{id: "post-what-are-go-msigdb-kegg-ora-and-gsea",
      
        title: "What are GO, MSigDB, KEGG, ORA, and GSEA?",
      
      description: "What are those terms in transcriptomics analysis?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/msigDB_ORA_GSEA/";
        
      },
    },{id: "post-namthip-งานวิจัยมะเร็ง-ตอนที่-4",
      
        title: 'Namthip × งานวิจัยมะเร็ง ตอนที่ 4 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Namthip × งานวิจัยมะเร็ง ตอนที่ 4&amp;nbsp; เท้าความตอนที่แล้วๆมา หลังจากที่ค้นหาตัวเองจนเจอว่าอยากมุ่งไปรู้จักมะเร็งมากขึ้นในทางของวิทยาศาสตร์พิสูจน์ให้เห็นกันได้ ได้ไปดูงานสั้นๆ ที่สถาบันวิจัยจุฬาภรณ์ (CRI) พร้อมกับแบกกระดาษอีกหนึ่งปึกกลับบ้าน.กลับมามหาลัยครั้งนี้รอบปิดเทอมเปลี่ยนแปลงไป เลยมีช่วงว่างว่างที่เพื่อนคนอื่นเค้าไปเที่ยว ตปท บ้าง ทำงานพิเศษบ้าง ส่วนช้านนนน แคะกระปุกเอาตังค์ไปฝึกงานที่แลปอีกแล้วจ้า.กลับมาที่กระดาษปึกโตจาก CRIปึกนั้นมีรายชื่อนักวิจัยชั้นเซียนที่อาจารย์รู้จักให้ดูว่าเราสนใจไปฝึกแลปไหนต่อทั้งพันธุศาสตร์มะเร็ง พัฒนาระบบนำส่งยามะเร็งสารพัดเลยหล่ะ.คิดหนักว่าจะไปที่ไหน น่าสนใจทุกที่เลยเครียดละทีนี้ ตัดสินใจไม่ได้จนมาสะดุดตากับภาพอาจารย์คนนึงฮึ๋ยยยย คุ้นๆ เราเคยอ่านข่าวงานของ อ เค้าตั้งแต่เรียนม.ปลาย อาจารย์หมอท่านนี้ทำวิจัยมะเร็งโพรงหลังจมูกเป็น idol เราเลย หมอที่ทำวิจัยด้วยนี่ สุดยอดกลับไปคุ้ยลังที่บ้านก็เจอจริงๆโอโห้ปริ้นไว้นานโข แม็คเย็บกระดาษขึ้นสนิมหล่ะ.เอาหว่ะ ติดต่ออาจารย์คนนี้ไปเลยอ อภิวัฒน์ ที่คณะแพทย์ จุฬา(อ เป็นเจ้าของงานวิจัยมณีแดง).มี อ หนิง อ ฉ่อย ช่วยดูทั้งเรื่องเอกสารและเรื่องเตรียมตัวก่อนไปปริ้นงานวิจัยของ อ อภิวัฒน์มาอ่านอ่านไปก็มึนไป .ถึงเวลาฝึกงาน ก็ไปกันเลยจ้า หอบผ้าหอบสมบัติขึ้นรถไฟไปบางกอกด้วยความเบี้ยน้อย หอยน้อยและบังเอิญญญญพี่เมทตอนเรียนปี 1 (พี่นิท)เป็นพยาบาลที่ รพ จุฬาก็เลยได้ไปสิงหอพี่แก ตลอดเวลาฝึก 1 เดือนได้ค้นพบแหล่งของกินถูกๆ แถวนั้นด้วย.แต่ความยากคือ มันคือหอพักพยาบาล ใน รพ จุฬาฯและอิฉันต้องปลอมตัวเข้า-ออกหอน้ำทิพย์ผู้แบกชุดใส่เป๋ามาเปลี่ยนใน รพ ทุกวันจนมีพี่ post doc (พี่คิว)มาเจอ 5555 หนูปลอมตัวอยู่ค่ะพี่ อายจ๊าดดดด.การฝึกงาน 1 เดือน เป็นไปแบบ…ฝึกไป จะร้องกลับบ้านไป แงงงงงไม่เคยห่างบ้านนานขนาดนี้เนื้อหาก็ยาก แงงงงง.ภาวะเหนือพันธุกรรม (epigenetics)ไม่ได้เป็นเรื่องที่เคยเรียนมาก่อนมาปุ๊บเจองานวิจัยระดับโมเลกุลเงิบ ไปเกือบไม่เป็นเลยไปอ่าน ไปขุด ไปหาเอาแถวนั้น.รอดมาได้นี่เพราะพี่ๆในแลปใจดีเลยหล่ะอ่านไรงงๆมึนๆไป ก็ไปคุยกับพี่ๆพี่เค้าก็ช่วยอธิบายจนเข้าใจ .ตอนนั้นพี่แพร ซึ่งกำลังเรียน ป โท เป็นพี่เลี้ยงให้มี อ นครินทร์  อ พี่ยุ้ยให้พวกเราก่อกวนด้วยพี่ณัฐเป็นพี่หมีประจำแลป พี่ณัฐมักจะโผล่มาจากตรงไหนสักตรงของแลปแล้วก็มาอธิบายไรแบบเป๊ะๆเป๊ะยันว่าทำไม แอลกอฮอล์ต้อง 70% เอาดี๊พีอ๊อป ชาวใต้บ้านอยู่คอน แหลงกันรู้เรื่องเป็นพิเศษ อธิบายเรื่อง flow cytometry ยังจำได้จนถึงตอนนี้ชาวแก๊งค์มุมห้องอย่างพี่แบงค์ พี่เหมย .ใดๆคือนอกจากสอนเรื่องวิจัยแล้วพวกพี่คือหลอกผีเก่งมากกกกกชั้นล่างจากแลปก็คือห้องเรียนกับอาจารย์ใหญ่แล้วฉันออกไม่เคยออกจากแลปเป็นคนสุดท้ายเลยจ่ะ.ท็อปฟอร์มการหลอกผีคือพี่ณัฐแล้วตอนนี้คือพี่ณัฐไปสวรรค์แล้วด้วยถ้ากลับไปลั้ลลาที่แลปรอบหน้าจะโดนหลอกแหลกลานกว่าเก่ามั้ยนะ แหะๆ.จุฬาทำให้ได้เข้าฟังพี่ๆสอบ defense บ้างกรรมการสอบถามโหดมาก แต่พี่เค้าก็ตอบได้หมดแบบชิลๆ เป็นต้นแบบชั้นเลิศเลย จนตอนนี้เวลาสอบอะไรเกี่ยวกับงานวิจัยก็จะนึกถึงตอนพวกพี่ๆเค้าสอบ อยากเซียนๆแบบนั้น.ระหว่างฝึกแลปที่จุฬาก็มี อ จากมหาลัยแวะเวียนมาดูใจ เอ้ยยย ให้กำลังใจอ โอ๋ พาไปกินขนมอ หนิง พาไปนอนด้วยคืนนึง 555อ มาก็คือมาเพราะอยากมาจริงๆ ที่จริง อ ไม่ต้องมานิเทศด้วยซ้ำเพราะไม่ใช่ฝึกงานของหลักสูตรเลย .การฝึกงานตอนนั้นจบลงแบบที่คิดว่าพันธุศาสตร์จ๋าๆ นี่มันยากแท้ยิ่งเหนือพันธุศาสตร์แบบจ๋าๆนี่ยิ่งซับซ้อนไปอีก.หรือว่าเราควรห่างกันสักพักนะกับงานวิจัยซับซ้อนขนาดนั้นดูๆไปก่อนก็ได้ ยังไม่ขึ้นปี 4 เลยยังเหลือเวลาให้ตามหางานวิจัยมะเร็งที่ชอบอยู่. ตอนอื่นๆ ของการบุกดงวิจัยที่เคยเขียนไว้-&amp;nbsp;ตอนที่ 0:&amp;nbsp;&amp;nbsp;สะเปะสะปะกว่าจะมาถึงเส้นทางวิจัย&amp;nbsp;-&amp;nbsp;ตอนที่ 1:&amp;nbsp;ค่ายไม่เล็กที่มีแต่ผู้ใหญ่ใจดีปูทางเด็กบ้านนอกสู่เส้นทางวิจัย-&amp;nbsp;ตอนที่ 2: ตรึงใจเด็ก ม.ปลาย เปิดโลกวิจัยที่สถาบันวิจัยจุฬาภรณ์-&amp;nbsp;ตอนที่ 3: ตะลุยดงวิจัย ทำไมวิจัยมีมะเร็งมีหลายแบบจัง-&amp;nbsp;ตอนที่ 4: รู้จักมะเร็งแบบเหนือชั้น เหนือพันธุกรรมคืออะไร&amp;nbsp;-&amp;nbsp;ตอนที่ 5: เมื่อฉันรักวิทยาศาสตร์ อย่างที่ไม่สนมะรงมะเร็งอะไรทั้งนั้น- ตอนที่ 6: ปริญญาเอก วิชาหนังชีวิต Scientific Lineage และผู้ช่วยชีวิตอย่าง Mentor&amp;nbsp;- ตอนที่ 7: ถ้าเธอติ่ง GOT7 ฉันก็ติ่งนักวิทยาศาสตร์#NamthipPhDstory&amp;nbsp;#NamthipCancerResearchJourney#NoCancer&amp;nbsp;#NoCancerTH&amp;nbsp;&amp;nbsp;. ผ่านไป 10 ปี ไม่รู้เรื่องราววนมาอีท่าไหนตอนนี้กำลังลองเอา data sequencing ของพวก epigenetics มาลองเล่นดู.ผ่านมา 10 ปี คน 2 คนในโพสต์นี้ไปเป็นนางฟ้า เทวดาบนสวรรค์กันซะแล้วด้วยความระลึกถึง อ หนิง และ พี่ณัฐ นะคะ ^^",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2024/09/Namthip-CancerRes-4.html", "_blank");
        
      },
    },{id: "post-namthip-งานวิจัยมะเร็ง-ตอนที่-3",
      
        title: 'Namthip × งานวิจัยมะเร็ง ตอนที่ 3 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;Namthip × งานวิจัยมะเร็ง ตอนที่ 3&amp;nbsp;.เท้าความตอนที่แล้ว หลังจากที่จุดเปลี่ยนคือการขอเลื่อนสอบเพื่อไปค่าย Thai Sci Campได้ไปดูแลปที่สถาบันวิจัยจุฬาภรณ์ (CRI) 2 ชม. ทั้งหมดเกิดขึ้นช่วงประมาณ ม.5 แล้ว อ.ที่ CRI ก็บอกว่าไว้เรียนปี 3 ค่อยกลับมา CRI ใหม่.ตอนนั้นรู้สึกว่างานวิจัยน่าจะมีอะไรดีดีที่ทำให้คนไข้รอดจากมะเร็งได้มากขึ้นหลังจากหาข้อมูลเรื่องมะเร็งมาหลายๆด้าน ก็พบว่าวิทยาศาสตร์และงานวิจัยน่าจะเป็นคำตอบที่ดีที่สุดช่วงหลังจากนั้นก็มีพยายามจะเข้าโครงการนู้นนี่ที่เป็นแนวๆวิทยาศาสตร์ที่น่าจะทำใหรู้จักงานวิจัยมากขึ้นว่ามันคืออะไร.คิดโครงงานขึ้นมาชิ้นนึง คัดเลือกผ่านรอบแรกของโครงการนึงไปแบบงงๆเดินทางไปสัมภาษณ์แบบโคตรงงและทุลักทุเลในขณะที่เพื่อนคนอื่นๆ มีโน้ตบุคพร้อมงานนำเสนอสุดอลังการที่ชนะเลิศโครงการอื่นมาแล้วและก็ต้องยอมรับว่าหลายๆอย่างไม่ได้เอื้ออำนวยนักคุณไม่ได้ไปต่อ แต่นี่ก็อาจจะถือว่ามาไกลมากแล้ว จนถึงตอนนี้ที่เรียน ป เอก อยู่ก็รู้สึกว่าที่ผ่านมาเจอกลีบกุหลาบบ้าง ไมยราบบ้าง(ซึ่งดูเหมือนจะมากกว่า 555).อย่างไรก็ยังไม่เลิกบ้า ยังคงแถกตัวไปตามความฝันต่อไป แม้จะพังๆไปบ้างก็ตามตอน ม.6 อยากเรียนหมอ อยากเป็นหมอที่ทำวิจัยมะเร็งมีอาจารย์หมอนักวิจัยคนนึงเป็น idol (สุดท้ายได้ไปฝึกงานกับ อ ท่านนี้ด้วย).ตอนสอบเข้ามหาลัยก็สอบหมอนั่นแหละ แต่ไม่ติด 5555ก็เลยเรียนเภสัช ไม่อยากเป็นเภสัชเลย คิดว่าคงไม่ชอบถ้าต้องนั่งจ่ายยาที่ รพ ทั้งวันไม่รู้ว่าเภสัชทำอย่างอื่นได้ด้วย แต่พอรู้ว่าเภสัชมีวิจัยยาก็เริ่มสนใจขึ้นมา.ก็เรียนเภสัชที่ ม.วลัยลักษณ์เข้าไปเรียนปีแรก ก็เอาเลยจ้า ไปบอกอาจารย์เลยว่าอยากไปฝึกงาน CRIในใจคือทุกอย่างพร้อมแค่ให้เรียนปี 3 กับมีเอกสารจากมหาลัย.ระหว่างนั้นก็บุกมาก ด้วยความที่เป็นนักเรียนโครงการโอลิมปิกวิชาการทั้งเคมีและชีวะของ ม.วลัยลักษณ์ อยู่ก่อนแล้วก็ติดต่ออาจารย์ที่รู้จัก อาจารย์ก็แนะนำต่อๆกันมีหลายท่านมากที่กรุณามาตั้งแต่มัธยม.- อ.สุภาภรณ์ ดอกไม้ศรีจันทร์ ที่ได้แวะไปก่อกวน อ ที่ห้องทำงานบ่อยครั้งเลย เรียกว่าเปิดโลก bioinformatics มาก- อ.จิตรบรรจง ตั้งปอง แรกๆมักจะแนะนำตัวกับ อ ว่าเด็กมัธยมที่เคยโทรไปปรึกษา อ เรื่องงานวิจัยมะเร็ง ตอนมัธยมมีครั้งนึงไปหา อ ที่ห้องพัก ก็พบว่าห้องใหญ่จังถึงได้รู้จากป้ายหน้าห้องว่า อ เป็นคณบดี &amp;gt;&amp;lt; วันนั้นเป็นการพูดถึงงานวิจัยมะเร็งอีกครั้งนึงที่จำไม่เคยลืม แล้ว อ ก็ได้แนะนำให้รู้จัก อ.วรางคณา จุ้งลก ได้ไปดูแลปเลี้ยงเซลล์ของ อ เค้าด้วย แถมยังได้รู้จักกับพี่โบว์ พี่ ป.เอก ที่ฮามากคือเราเคยเจอกันที่สนามบาสมาก่อน คราวนี้เลยสนิทเลยหล่ะ - อ.วรพงศ์ ภู่พงศ์ อาจารย์ทำงานเกี่ยวกับสารสกัดธรรมชาติ ได้ไปสิงแลปอยู่พักนึง ไปครั้งแรก อ บอกว่าให้ไปหาพี่รอน เราก็แบบ หูวววว พี่ชื่อรอน แบบรอน วีสลี่ งี้แน่เลย ท่องบทสนทนาภาษาอังกฤษไปเลยจ้า ปรากฏพี่อิมรอนเป็นคนไทย โป๊ะหนึ่งฉึก แลปนี้ครื้นเครงไม่เว้นวันหยุด วันปีใหม่ ยิ่งดึกยิ่งคึก 5555 มีเพลงภาษาอาหรับคลอๆไปด้วย มีทั้งพี่ๆ ป โท ป เอก คือพี่รอน พี่หญิงและอาจารย์ให้ก่อกวนตลอดเวลา ตอนนั้นตึกนวัตกรรมเปิดใหม่ๆเลย เข้าแลปนี่ต้องสแกนนิ้วมือด้วยอย่างหรูอ่ะ เป็นช่วงนี้ดีดมาก ช่วงนั้นเรียนปี 3 วิชาเรียนแลปของเภสัชก็เยอะอยู่แล้ว บางวันทำแลปสกัดสารเสร็จต้องเขียนรายงานของแลปที่เป็นวิชาเรียนต่อจนเกือบเช้า พอเช้าก็ไปทำแลปอีกวิชานึง จนคุยกับคู่หูทำแลปว่าเราควรจะนอนกันบ้างหล่ะ.เวลาเรียนล่วงเลยมาถึง ปี 3 ก็ได้กลับไปดูงานที่สถาบันวิจัยจุฬาภรณ์ตามที่ตั้งใจไว้ตอนนั้นอาจารย์ที่ปรึกษา อ.ปาจรีย์ ช่วยเรื่องเอกสารทุกอย่างเลย รักจารย์มากมายอ. บุษบรรณ สอน sterile เทคนิค เปิดห้องแลปเทคโนเพื่อจะเช็ดตู้ laminar air flowคือเราตื่นเต้นกระทั่งเช็ดตู้ ตัดภาพมาตอนนี้ ขี้เกียจเช็ดตู้สุดๆ.อ เกรียงศักดิ์ ที่ CRI ให้ไปดูงาน 5 วัน ตอนแรกก็รู้สึกว่าแป๊ปเดียวจังเลย T^T ตั้งตาคอยมาตั้งหลายปี แงงงก็แคะกระปุกเอาตังค์เก็บเป็นทุนไปดูงานก็ขอพักกับหอเพื่อน และซื้อข้าวโรงอาหารม เกษตร ข้าวราคาถูกมากกกกอ ทัศนี เตือนไว้ว่าระวังข้าวที่ CRI ไว้เพราะไม่อิ่มแน่ๆ แล้วคือจริงงง ได้เจอพี่อัง แลปชั้นใกล้ๆ เพราะ อ ทัศนีฝากฝังไว้ แล้วก็เป็นครั้งแรกที่รู้จักขนมอร่อยๆแถวนั้น.นับเป็นช่วงชีวิตที่ adventure มากกับรถเมล์ กทม.แต่ที่เด็ดกว่าคือรถไฟหน้า CRI แบบโอ้วโหวววว ไฟขาวๆ มาแต่ไกล วิ่งแทบไม่ทัน .กลับมาเรื่องงานวิจัยมะเร็ง 555เป็น 5 วันที่คุ้มค่ามาก ได้ดูตั้งแต่เลี้ยงเซลล์ ไปจนถึงการตรวจหาโปรตีนเดินตามอาจารย์และพี่ๆคนอื่นแทบทั้งวันทั้งวันได้คิด ได้ถาม แต่โดยมากถามไปก็จะโดนอาจารย์ถามกลับ 555แต่ละวันผ่านไปแบบให้สมองไปเยอะมากปวดหัวและปวดขามากไปพร้อมๆกัน หลังจากดูงานครบเวลาอาจารย์ยังเชียร์ให้ไปดูงานที่อื่นอีกอ ปริ้นข้อมูลแลปนู้นแลปนี้มาให้เป็นปึกๆเลย.หลังจากใช้เวลาค้นหาตัวเองอยู่พักใหญ่ก็เริ่มรู้สึกแล้วว่าอะไรเป็นสิ่งที่ทำให้หัวใจเราลิงโลดอาจจะเป็นมะเร็งในมุมของงานวิจัยก็ได้ที่เป็นคำตอบ.แต่ก็ถึงเวลาที่ต้องกลับมาเรียน ป ตรี ต่อให้จบด้วยทั้งยังเป็นช่วงที่คณะมีโครงการ Mini project ที่ทำให้ต้องคิดหนักว่าตกลงเราชอบอะไรกันแน่.ในช่วงเวลาที่ต้องตัดสินใจว่าจะเรียนจบเภสัชแล้วจะทำอย่างไรต่อกับอนาคตก็เป็นช่วงที่อาจารย์ที่ปรึกษาเป็นคนที่มีผลต่อการตัดสินใจมากที่สุดในช่วงเวลาที่เป็นอีกหัวเลี้ยวหัวต่อนึงของชีวิตไว้ค่อยเล่าตอนต่อไปหล่ะกัน ตอนนี้ยาวมากๆแล้ว.ตอนอื่นๆ ของการบุกดงวิจัยที่เคยเขียนไว้-&amp;nbsp;ตอนที่ 0:&amp;nbsp;&amp;nbsp;สะเปะสะปะกว่าจะมาถึงเส้นทางวิจัย&amp;nbsp;-&amp;nbsp;ตอนที่ 1:&amp;nbsp;ค่ายไม่เล็กที่มีแต่ผู้ใหญ่ใจดีปูทางเด็กบ้านนอกสู่เส้นทางวิจัย-&amp;nbsp;ตอนที่ 2: ตรึงใจเด็ก ม.ปลาย เปิดโลกวิจัยที่สถาบันวิจัยจุฬาภรณ์-&amp;nbsp;ตอนที่ 3: ตะลุยดงวิจัย ทำไมวิจัยมีมะเร็งมีหลายแบบจัง-&amp;nbsp;ตอนที่ 4: รู้จักมะเร็งแบบเหนือชั้น เหนือพันธุกรรมคืออะไร&amp;nbsp;-&amp;nbsp;ตอนที่ 5: เมื่อฉันรักวิทยาศาสตร์ อย่างที่ไม่สนมะรงมะเร็งอะไรทั้งนั้น- ตอนที่ 6: ปริญญาเอก วิชาหนังชีวิต Scientific Lineage และผู้ช่วยชีวิตอย่าง Mentor&amp;nbsp;- ตอนที่ 7: ถ้าเธอติ่ง GOT7 ฉันก็ติ่งนักวิทยาศาสตร์#NamthipPhDstory&amp;nbsp;#NamthipCancerResearchJourney#NoCancer&amp;nbsp;#NoCancerTH&amp;nbsp;&amp;nbsp;ปล. ภาพนี้ ดูน่าเชื่อถือมากอ่ะ ไม่เหมือนตัวจริง 55555",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2021/09/Namthip-CancerRes-3.html", "_blank");
        
      },
    },{id: "post-namthip-งานวิจัยมะเร็ง-ตอนที่-2",
      
        title: 'Namthip × งานวิจัยมะเร็ง ตอนที่ 2 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Namthip ×  งานวิจัยมะเร็ง ตอนที่ 2&amp;nbsp;เท้าความตอนที่แล้วสุดท้ายก็กล้าเดินเข่าเข้าไปขอ e-mail อาจารย์.หลังจากนั้นก็ดีดอย่างหนัก 555จากวิทยาศาสตร์ที่เรียนไปวันๆ กลายเป็นน่าสนุกขึ้นมาทันตา เคมีเกรด 2 ที่เคยได้มาก็กลายเป็นเกรด 4 จนติดโอลิมปิกวิชาการเคมี การอ่านหนังสือตั้งแต่นั้นก็ไม่ใช่แค่เอาไปตอบข้อสอบอีกต่อไป แต่คือการอ่านให้เข้าใจและพยายามคิดต่อ โผล่ไปห้องพักครูเคมีบ่อยมาก พร้อมกับแบกหนังสืิอไปด้วย คุณครูคนนั้นคือ อ.สุคนธ์ มณีฉาย หนังสือที่ชอบตอนนั้นคือหนังสือของ อ.กฤษณา ชุติมา ซึ่งเป็นหนังสือที่ดูจะอธิบายละเอียดและลึกซึ้งกว่าระดับมัธยมมากนับแต่นั้นมามาตราฐานของการสอบจึงไม่ใช่คะแนนแต่เป็นความเข้าใจ ถึงจะได้คะแนนดีแต่ไม่เข้าใจก็ตามไปถามครูถึงห้อง &amp;gt;&amp;lt;บางครั้งหนังสือ 2 เล่มก็เขียนไม่เหมือนกันและครูก็บอกว่าทำไม แบบนี้หล่ะที่น่าสนุก.E-mail ส่งไปถึง อ.ชิษณุสรร อ ตอบกลับมาเป็นภาษาอังกฤษในทุกครั้งและทุกครั้งเช่นกันที่ต้องเปิดดิกชันนารีแปลทุกคำ.มีครั้งนึงอยู่ในค่ายโอลิมปิกวิชาการ ยืมคอมเพื่อนเปิด เจอศัพท์ที่ไม่รู้(มันคือคำว่า appointment) ก็เดินไปถามเพื่อนคนนู้นคนนี้ว่านี่แปลว่าอะไร &quot;อาจารย์บอกว่าถ้ามาที่สถาบันวิจัยจุฬาภรณ์ก็นัดอาจารย์ได้&quot;.หลังจากที่ติดต่อ อ ผ่าน e-mail สัักพักด้วยภาระงานของ อ ที่มากอ ชิษณุสรร เลยให้ อ นักวิจัยท่านอื่นดูแลต่อซึ่งก็คือ อ.ดร.เกรียงศักดิ์ เลิศประภามงคล .อ เกรียงศักดิ์น่ารักมาก อ e-mail กลับมาเพราะเราเงียบหายไป พร้อมส่งบทความเกี่ยวกับมะเร็งเป็นภาษาไทยมาให้อ่าน.จากนั้นเลยได้ติดต่อกับ อ เกรียงศักดิ์้เรื่อยมาจนช่วงปิดเทอม ม.5 ขึ้น ม.6 ได้ไปที่สถาบันวิจัยจุฬาภรณ์ (CRI) ครั้งแรกเพราะต้องเดินทางผ่าน กทม ไปธุระจังหวัดอื่นและไปคนเดียว โดยมีเพื่อนเเม่มารับคือเลิ่กลั่กตั้งแต่นั่งรถทัวร์คนเดียวครั้งแรก.ได้อยู่ที่ CRI แค่ 2 ชม. แต่ถึงตอนนี้ก็ยังจำอะไรๆได้มากมายเหมือนเวลาเพิ่งผ่านไปไม่นาน.อ บอกว่าให้ไปที่ตึกโดมสูงๆ(ตอนนั้นตึกนั้นคือสูงที่สุดหล่ะ)เข้าไปต้องแลกบัตรและมีการตรวจความปลอดภัยแน่นหนามากอ ต้องลงมารับที่ชั้นล่างด้วย ไม่งั้นเข้าตึกไม่ได้.ตึกโดมที่สูงนั้นเป็นทรงกระบอก ตรงกลางเป็นช่องว่างที่เห็นทุกชั้น มีลิฟต์แก้วใสๆ หูยยยย เพิ่งเคยเห็นลิฟต์ใสๆ ตึกสูงๆ ขนาดนี้ด้านล่างเป็นลานหินอ่อนและโต๊ะสีขาวราวกับสวนยุโรป บนสุดของตึกนี้เป็นกระจกแปลกตากว่าชั้นอื่นๆ.ตอนขึ้นลิฟต์ก็พยายามกระดึ๊บๆตัวไปดูแถวกระจก สูงจังและรู้สึกบรึ๋ยๆ บอกไม่ถูก อ บอกว่าชั้นบนสุดนั้นเป็นที่ทำงานของเจ้าฟ้าหญิงจุฬาภรณ์  รู้สึกเหมือน my idol อยู่ไม่ไกล &amp;gt;&amp;lt;.ขึ้นไปถึงห้องแลปมีข้าวของมากมายแบบที่ไม่เคยเห็นในห้องเรียนวิชาเคมีมีคนในเสื้อกาวน์ยาวมากมายที่กำลังทำงานกับหลอดอะไรสักอย่างหรือไม่ก็เครื่องมือแปลกๆรอบๆห้องติดด้วยโปสเตอร์ที่มีกราฟบ้าง ภาพบ้าง พร้อมภาษาอังกฤษเต็มไปหมด.อ พาไปดูเครื่องนึงตอนนั้นตื่นเต้นมากเปิดมาโอโห้ควันขาวๆฟุ้งเลย มันคือตู้เย็นอันใหญ่ แช่ที่ -80 องศาคือเด็กบ้านนอกอ่ะนะ หิมะก็ไม่เคยเห็นตู้เย็นที่บ้านก็แช่ขันใส่น้ำมีดอกมะลิลอยตุ๊บป่องอยู่บ้างในบางทีจำได้ว่าเผลอพูดว่า &quot;หูวววว&quot; ออกไปด้วย เขินจัง.แล้ว อ ก็พาไปแนะนำให้รู้จักพี่คนนึงจำได้แค่ว่าเค้าเป็นนักศึกษาเภสัชและกำลังยุ่งอยู่กระบอกตวงขนาดใหญ่น่าจะ 1-2 Lซึ่งก็ตื่นเต้นอีกเช่นกันเพราะที่ รร มีแค่ 10 ml จิ๋วไปเลย.อ พาไปดูโปสเตอร์บางอัน จำได้ว่าเกี่ยวกับวนิลาที่มีฤทธิ์ทางมะเร็ง แล้วก็ได้กระดาษงานวิจัยมาด้วยเหมือนจะเป็นฉบับจริงเลยนะ ทุกวันนี้ก็ยังเก็บไว้คู่กับสมุดจดเล่มเดียวกันกับวันที่ไปดูแลปวันนั้นเมื่อไม่นานนี้เพิ่งเอาออกมาอ่าน เข้าใจขึ้นตั้งเยอะ10 ปี ผ่านไปพัฒนาขึ้นบ้างเหมือนกันนะเนี่ย ^^.ก่อนกลับอยู่ๆก็มีนักวิจัยคนนึงเดินเข้ามาปรึกษา อยืนอยู่ตรงนั้นจะให้ไม่ได้ยินก็ทำไม่ได้ไม่ใช่สิ่งที่สุภาพเท่าไหร่ที่ไปยืนฟังผู้ใหญ่คุยกันเเต่สิ่งที่ได้ยินเป็นเรื่องที่ประทับใจและเป็น inspiration เลยหล่ะเหมือนนักวิจัยคนนั้นจะติดปัญหา มาเพื่อปรึกษาหาทางแก้ เค้ากับ อ discuss อยู่พักนึงแล้วเหมือนจะได้ทางออกที่ดีอ ก็แนะนำให้รู้จักว่าพี่คนนั้นเป็นหมอแต่ทำงานวิจัยด้วย.โหหหห อย่างเท่ห์รักษาคนก็ได้ งานวิจัยหายารักษามะเร็งก็ทำได้.อยากเก่งๆแบบนี้บ้าง (ไฟนี่ลุกโชนน).เหตุการณ์วันนั้นจบลงเวลา 2 ชม.หมดไปไวมาก เป็น 2 ชม.ที่จำไม่ลืมวันนั้นใส่เสื้อยืด กางเกงยีนส์(มันคือชุดธรรมดาที่ดีที่สุดที่มีหล่ะ &amp;gt;&amp;lt;) เสื้อนี่เขียน &quot;แพทย์-สาด&quot; หราซะจนพี่หมอนักวิจัยคนนั้นทักว่าซื้อจากไหน.อ แนะนำให้อ่านงานวิจัยมะเร็งใน ncbi หรือ google scholar (ตอนนั้นไม่รู้ว่าทั้งสองอย่างคืออะไร ตอนนี้รู้ดีเลย 5555)และบอกว่าไว้เรียน ป ตรี ปี 3 เเล้วค่อยกลับไปใหม่จะได้มีพื้นฐานความรู้พอที่จะเข้าใจงานวิจัยมากขึ้น.แทบจะนับวันรอตั้งแต่วันนั้นเป็นต้นมา.ส่วนจะได้กลับไปที่สถาบันวิจัยจุฬาภรณ์อีกหรือไม่ มีอะไรเกิดขึ้นในช่วงเรียน ป ตรีไว้ติดตามต่อไปนะคะ กิกิ. ตอนอื่นๆ ของการบุกดงวิจัยที่เคยเขียนไว้-&amp;nbsp;ตอนที่ 0:&amp;nbsp;&amp;nbsp;สะเปะสะปะกว่าจะมาถึงเส้นทางวิจัย&amp;nbsp;-&amp;nbsp;ตอนที่ 1:&amp;nbsp;ค่ายไม่เล็กที่มีแต่ผู้ใหญ่ใจดีปูทางเด็กบ้านนอกสู่เส้นทางวิจัย-&amp;nbsp;ตอนที่ 2: ตรึงใจเด็ก ม.ปลาย เปิดโลกวิจัยที่สถาบันวิจัยจุฬาภรณ์-&amp;nbsp;ตอนที่ 3: ตะลุยดงวิจัย ทำไมวิจัยมีมะเร็งมีหลายแบบจัง-&amp;nbsp;ตอนที่ 4: รู้จักมะเร็งแบบเหนือชั้น เหนือพันธุกรรมคืออะไร&amp;nbsp;-&amp;nbsp;ตอนที่ 5: เมื่อฉันรักวิทยาศาสตร์ อย่างที่ไม่สนมะรงมะเร็งอะไรทั้งนั้น- ตอนที่ 6: ปริญญาเอก วิชาหนังชีวิต Scientific Lineage และผู้ช่วยชีวิตอย่าง Mentor&amp;nbsp;- ตอนที่ 7: ถ้าเธอติ่ง GOT7 ฉันก็ติ่งนักวิทยาศาสตร์#NamthipPhDstory&amp;nbsp;#NamthipCancerResearchJourney#NoCancer&amp;nbsp;#NoCancerTH&amp;nbsp;&amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/02/Namthip-CancerRes-2.html", "_blank");
        
      },
    },{id: "post-namthip-x-งานวิจัยมะเร็ง-ตอนที่-1",
      
        title: 'Namthip x งานวิจัยมะเร็ง ตอนที่ 1 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "&amp;nbsp;Namthip x งานวิจัยมะเร็ง ตอนที่ 1&amp;nbsp;อยากบันทึกเรื่องราววิทยาศาสตร์ตอนวัยเด็กไว้สักหน่อยเป็นเรื่องราวที่อยากบันทึกไว้อ่านเองที่จริงควรจะเขียนตั้งแต่เหตุการณ์จบลงใหม่ๆ เพราะความรู้สึกจะยังคงสดใหม่ ภาษาก็อาจจะยังขำๆ กลับมาอ่านก็คงจะอมยิ้มไปอีกแบบแต่บันทึกตอนนี้ก็ไม่สาย เพราะไม่รู้ว่าต่อไปวิทยาศาสตร์และงานวิจัยจะยังสดใสน่าตื่นเต้นเหมือนที่คิดตอนเด็กมั้ย งั้นรีบเขียนเลยแล้วกัน.บันทึกนี้คือบันทึกความรู้สึกที่อยู่ในใจย้อนกลับไปเมื่อสิบปีก่อน บางส่วนอาจจะเกี่ยวข้องกับการเมืองยุคปัจจุบันแต่ถ้าเสพด้วยใจที่เป็นกลาง เป็นเหตุเป็นผล เข้าใจบริบทของสังคม เวลาและเข้าใจว่าทั้งหมดคือเรื่องราววิทยาศาสตร์ไม่ใช่การเมืองเรื่องเล่าทั้งหมดจะไม่ชวนให้ตะขิดตะขวงใจแต่อย่างใดขอใช้ภาษาตามประสาเด็กๆ เมื่อสิบกว่าปีก่อนหล่ะกัน.ชอบวิทยาศาสตร์มาตั้งแต่เด็ก แต่เรียนไม่ค่อยเก่งหรอกชอบเล่นมากกว่า ทำของเล่นกับพ่อ หรือวุ่นวายกับสีดอกไม้หลังบ้านที่เอามาเล่นกับกรดเบส.จนหลังจากที่ยายเสียชีวิตเพราะมะเร็งตอนนั้นก็ไม่รู้ว่าทำไมหมอช่วยยายไม่ได้ก็คิดนะว่าการแพทย์เป็นทางหนึ่ง แต่อาจจะมีทางที่ดีกว่าเขียนๆไปน้ำตาไหลเฉย &amp;gt;&amp;lt;พร้อมๆ กันนั้นเห็นข่าวพระราชสำนักของเจ้าฟ้าหญิงจุฬาภรณ์ก่อนจะดูหนัง ก็ต้องดูข่าวพระราชสำนักก่อนทุกวันก็นั่งลุ้นพร้อมสมุดจดว่าจะมีข่าวเจ้าฟ้าหญิงมั้ย บางทีก๋ง อาม่าก็จะตะโกนเรียกให้มาดู.คือข่าวพระราชสำนักที่เล่าว่าเจ้าฟ้าหญิงทำอะไรเกี่ยวกับวิทยาศาสตร์ในแต่ละวันจะถูกเล่าแบบเข้าใจง่าย ภาษาง่ายๆ เด็กมัธยมตอนนั้นก็พอจะเข้าใจบ้างเจ้าฟ้าหญิงเป็น idol เลยหล่ะ.แต่ก็ได้แต่นั่งดูข่าวไป โดยที่ไม่รู้จะเข้าใกล้งานวิจัยมะเร็งให้มากกว่านี้ได้ยังไงงานวิจัยหรือพวกโครงงานต่างกันยังไงยังไม่รู้เลย.กระทั่งมีค่าย Thai Science Camp ครั้งที่ 2 เปิดรับสมัคร(เรื่องเมื่อ 10 ปีที่แล้ว ปี 2010 นานจัง &amp;gt;&amp;lt;)คัดโดยเรียงความไม่ถึงหน้ากระดาษ A4 คุ้นๆว่าตอนนี้คัดยากกว่าตอนนั้นมากจัดที่ กทม. และมีค่าเดินทางให้แต่ตรงกับช่วงสอบของโรงเรียนพอดิบพอดีเพื่อนๆเลยไม่มีใครสมัครไปเลยส่วนเรามีพ่อเกรียน พอได้รับคัดเลือกก็ไปบอกพ่อตอนนั้นคิดว่าจะไม่ไปแล้ว เพราะขาดสอบดูเป็นเรื่องใหญ่จังพ่อบอกว่านี่ลูกจะได้ไปค่ายของประเทศไปขอครูเลื่อนสอบเลย เกรียนจริงอะไรจริง.ตอนไปตื่นเต้นมาก ไม่เคยไป กทม. แม่ก็เลยไปส่ง ซึ่งก็ Taxi ยาวๆไป 555+มาถึงแบบโหหห ตึกลูกเต๋าที่ข้างในมีลูกแก้วให้จับแล้วจะหัวฟูๆคือเห็นในทีวี ที่นั้นคือ อพวช.ทั้งค่ายเจอเพื่อนคนใต้แค่คนเดียว คือก็พูดภาษากลางนะ แต่คงทองแดงหนักมาก เพื่อนๆทำหน้างง แต่พี่ staff ที่เป็นคนใต้นี่ขำตลอด เกิดอะไรขึ้นเนี่ย =..=.มีอาจารย์เยอะแยะมากมายมาบรรยายตื่นเต้นไปบ้าง งงไปบ้าง บางอย่างก็แบบเฮ้ยยย มีแบบนี้ด้วยเหรอ.จำได้ว่าตอนนั้น อ.นำชัย เอารูปเซลล์มะเร็งขึ้นมาแล้วถามว่าอันนี้รูปอะไร ขณะที่ทั้งห้องเงียบกริบเราตอบขึ้นมาด้วยความตื่นเต้น หัวใจนี่เต้นแทบจะหลุดออกมาจากอกเพราะอ่านเรื่องมะเร็งแบบงูๆปลาๆจากใน internet มาพอดูเห็นรูปก็เลยจำได้แบบ ไม่ต้องเดาจากลักษณะอะไรทั้งนั้น.อ.พิมพ์ใจ ที่พรีเซนอะไรสักอย่างเรืองแสงที่เจอเพราะปลาที่ทิ้งไว้ในตู้ ตอนนั้นเลยรู้ว่า อ เป็นคนใต้ด้วยอ.ที่บรรยายเรื่องคณิตศาสตร์ที่สุดแสนน่าเบื่อในห้องเรียนว่ามันเอามาเชื่อกับชีววิทยาได้อย่างน่าทึ่งอ.ยอดหทัย ที่เล่าเรื่องสีสวยๆ จากดอกไม้และหมวกของราชวงศ์อียิปต์จนลืมไปเลยว่าสีก็สามารถอธิบายได้ด้วยวิทยาศาสตร์.แล้วก็มีบรรยายโดย อ.ชิษณุสรร อาจารย์บอกว่า อ ทำงานเกี่ยวกับโปรตีนตอน อ เริ่มพูดก็ยังงงๆว่าทำไมเรื่องโปรตีนถึงได้ดูใหญ่โตขนาดนั้นพาลคิดถึงโปรตีนเมื่อตอน ม.4 (ตอนไปค่ายคือ ม.5)ก็นึกได้แค่ว่าโปรตีนมีโครงสร้าง 3 มิติ เป็นส่วนประกอบของเซลล์แล้วก็นึกถึงหมู ไก่ ปลา ถั่ว แล้วก็ยังนึกไม่ออกอยู่ดีว่าแล้วโปรตีนจะมีอะไรมากไปกว่านี้อีกเหรอจนถึงตอนนี้ก็รู้แล้วว่าโปรตีนนี่แหละซุปเปอร์ไซย่าสำคัญอาจจะเอาไว้เขียนไว้ที่ NO Cancer: เพราะวิจัยมะเร็งนั้นลึกซึ้ง เร็วๆนี้.นอกจากเรื่องโปรตีนยังจำนู้นนี่นั้นที่ อ เล่าได้เยอะมากแต่จุดสำคัญที่พลิกชีวิตคือ สไลด์ที่ 2 (ถ้าไม่ตื่นเต้นจนจำผิดอ่ะนะ)มันคือสไลด์ที่อาจารย์แนะนำตัวว่าทำงานที่สถาบันวิจัยจุฬาภรณ์ใจนี่เต้นตุบๆ เลยตื่นเต้นนนนนนนนนน แต่ก็กลัวด้วย.กลัวที่ว่าก็เพราะอาจารย์ดูเป็นอาจารย์ผู้ใหญ่มากดูจากที่อาจารย์คนอื่นๆ ที่มาบรรยายต้องนอบน้อมนอกจากนี้ อ ยังเป็น ศาสตราจารย์สำหรับเด็กบ้านนอกนี่แค่ ดร. ก็กล้าๆกลัวๆแล้วแค่นั้นยังไม่พอยังมียศ หม่อมราชวงศ์อยู่ด้านหน้าอีก.เอาจริงๆ เลยคือไม่กล้าเข้าไปหา อค่ายนี่มี 3 วัน คือทำใจตั้งแต่วันแรกจนวันสุดท้ายแอบมองหาอาจารย์ทุกวันนะ แต่ไม่กล้าอ่ะ ไม่กล้า &amp;gt;&amp;lt;.จนกระทั่งวันสุดท้าย วันมอบเกียรติบัตรอาจารย์ต้องมาแน่ๆ ตื่นเต้นกว่าเดิมไปอีก &amp;gt;&amp;lt;เพราะยังคงไม่กล้าอยู่ดี ระหว่างรอรับเกียรติบัตร ก็อธิฐานในใจถ้าได้รับเกียรติบัตรจากอาจารย์จะเข้าไปคุย ถ้าไม่ได้เดี๋ยวทำใจอีกที.วันนั้นมี อ ยืนมอบเกียรติบัตร 3 คนถ้าจะให้อธิฐานเป็นจริง ต้องนับเพื่อนว่ามันจะลง 3 ที่ใครแล้วขอสลับแต่เดี๋ยวๆ ไม่ได้ๆ เดี๋ยวไม่ศักดิ์สิทธิ์มาคิดตอนนี้ทำไมตอนเด็กเราถึงได้เป็นขนาดนี้นะ 5555.สุดท้ายเพื่อนมันยืนกันไม่นิ่งเลย นับไม่ถูกไม่สลับแล้วกัน ดวงๆล้วนๆพอใกล้ถึงก็แบบนับหล่ะ ไม่ได้รับกับอาจารย์แน่ๆ.แต่เรื่องพลิกจ้า ตอนเค้าเรียกขึ้นไปเนี่ยพี่เค้าจะเรียกชื่อ แล้วเซ็ตนั้น มีเพื่อนคนนึงกลับบ้านไปแล้ว เพรางั้นที่ควรจะเป็นคือคนหลังก็ร่นไปก่อน ให้ถ่ายรูปครบ แต่มันไม่เป็นอย่างนั้นหน่ะสิเพื่อนคนนึงไม่ยอมเลื่อน พี่เค้าเรียกก็ไม่เลื่อนรอบนั้นเลยมีรูปถ่ายแบบที่ อ ยืนว่างอยู่ 1 คน.แล้วพอรันต่อไปปรากฏว่าเราก็เลยได้รับเกียรติบัตรกับ อ ชิษณุสรร ตามที่อธิฐานไว้.ก็ทำใจกับคิดอยู่พักนึงว่าจะเข้าไปหาอาจารย์ยังไงนะ คืออาจารย์เป็นหม่อมราชวงศ์ด้วย.ถึงจุดนี้ต้องจินตนาการในบริบทเด็กบ้านนอกที่เคยระบายสีธงชาติอย่างตั้งอกตั้งใจแล้วนั่งริมถนนรอรับเสด็จพระเทพด้วย &amp;gt;&amp;lt;.สุดท้ายคือเดินเข่าพร้อมสมุดบันทึกเข้าไปหาอาจารย์จ้า &amp;gt;&amp;lt; เขิน คือตอนนั้นอาจารย์ยืนอยู่อาจารย์ก็ใจดีมากอ บอกว่า “ยืนขึ้นเถอะ อาจารย์ปวดหลัง”มัวแต่ตื่นเต้น ก็จำไม่ได้แล้วว่าสุดท้ายยืนหรือเปล่า.เราบอก อ ว่าสนใจงานวิจัยมะเร็งและเห็นว่าอาจารย์ทำงานที่สถาบันวิจัยจุฬาภรณ์อาจารย์ก็ถามว่ารู้ได้ยังไง เลยบอกไปว่าเห็นจากสไลด์ของอาจารย์แล้วอาจารย์ให้ e-mail มา ซึ่งเราในตอนนั้นก็ส่งเมลล์ไม่ค่อยจะเป็นและอาจารย์ยังบอกอีกว่า เขียนมาเป็นภาษาไทยได้แต่อาจารย์จะตอบกลับเป็นภาษาอังกฤษนะ.นี่หล่ะจุดเริ่มต้นอย่างเป็นทางการของน้ำทิพย์และงานวิจัยมะเร็งและนับเเต่เวลานั้น โอกาสที่ได้มาก็เสมือนสิ่งที่เปลี่ยนชีวิตไปเลย.รอตอนต่อไปก็ยังคงมีเรื่องราวที่นึกย้อนไปก็ชวนให้อมยิ้มในความเด็กๆของตัวเองปล.รูปนี้ตอนเรียน ป ตรี เพราะตอนไปค่ายไม่มีรูปเก็บไว้เลย. ตอนอื่นๆ ของการบุกดงวิจัยที่เคยเขียนไว้-&amp;nbsp;ตอนที่ 0:&amp;nbsp;&amp;nbsp;สะเปะสะปะกว่าจะมาถึงเส้นทางวิจัย&amp;nbsp;-&amp;nbsp;ตอนที่ 1:&amp;nbsp;ค่ายไม่เล็กที่มีแต่ผู้ใหญ่ใจดีปูทางเด็กบ้านนอกสู่เส้นทางวิจัย-&amp;nbsp;ตอนที่ 2: ตรึงใจเด็ก ม.ปลาย เปิดโลกวิจัยที่สถาบันวิจัยจุฬาภรณ์-&amp;nbsp;ตอนที่ 3: ตะลุยดงวิจัย ทำไมวิจัยมีมะเร็งมีหลายแบบจัง-&amp;nbsp;ตอนที่ 4: รู้จักมะเร็งแบบเหนือชั้น เหนือพันธุกรรมคืออะไร&amp;nbsp;-&amp;nbsp;ตอนที่ 5: เมื่อฉันรักวิทยาศาสตร์ อย่างที่ไม่สนมะรงมะเร็งอะไรทั้งนั้น- ตอนที่ 6: ปริญญาเอก วิชาหนังชีวิต Scientific Lineage และผู้ช่วยชีวิตอย่าง Mentor&amp;nbsp;- ตอนที่ 7: ถ้าเธอติ่ง GOT7 ฉันก็ติ่งนักวิทยาศาสตร์#NamthipPhDstory&amp;nbsp;#NamthipCancerResearchJourney#NoCancer&amp;nbsp;#NoCancerTH&amp;nbsp;&amp;nbsp;",
      section: "Posts",
      handler: () => {
        
          window.open("https://write-2-thrive.blogspot.com/2025/02/Namthip-CancerRes-1.html", "_blank");
        
      },
    },{id: "news-my-combio-portfolio-my-computer-workbench-format-changes-smile-easy-to-read",
          title: 'My ComBio Portfolio: My Computer Workbench format changes :smile: easy to read!',
          description: "",
          section: "News",},{id: "news-my-combio-portfolio-transcriptome-dataset1-completed",
          title: 'My ComBio Portfolio: Transcriptome dataset1 completed! 🧪',
          description: "",
          section: "News",},{id: "news-my-combio-portfolio-epigenome-chip-seq-is-recently-updated-sparkles-sparkles",
          title: 'My ComBio Portfolio: Epigenome (ChIP-seq) is recently updated 🧬 :sparkles: :sparkles:',
          description: "",
          section: "News",},{id: "news-updated-all-social-volunteer-projects-the-whispers-of-biology-no-cancer-exercise-mania-patients-miss-asthma-write2thrive",
          title: 'Updated all Social/Volunteer Projects: 🧬The Whispers of Biology–🦀NO Cancer–🏀Exercise Mania Patients–💋Miss Asthma–🍀Write2Thrive',
          description: "",
          section: "News",},{id: "news-my-combio-portfolio-phenomics-coding-x-flow-cytometry-was-recently-added",
          title: 'My ComBio Portfolio: “Phenomics - Coding x Flow Cytometry” was recently added! 🎨...',
          description: "",
          section: "News",},{id: "news-my-3rd-paper-as-1st-author-high-content-confocal-analysis-of-tumorigenesis-cancer-stem-cells-and-drug-response-in-3d-cholangiocarcinoma-cultures-was-published-in-scientific-report-full-paper-resources",
          title: 'My 3rd paper as 1st author “High-content confocal analysis of tumorigenesis, cancer stem...',
          description: "",
          section: "News",},{id: "news-my-combio-portfolio-phenomics-coding-x-high-throughput-imaging-2d-3d-models-was-fully-updated",
          title: 'My ComBio Portfolio: “Phenomics - Coding x High-Throughput Imaging (2D/3D Models)” was fully...',
          description: "",
          section: "News",},{id: "projects-3d-sisp-for-3d-multi-spheroid-quantitative-analysis",
          title: '3D-SiSP for 3D multi-spheroid quantitative analysis',
          description: "Scientific Reports publication on 3D multi-spheroid CSC models and drug response profiling",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3D-SiSP/";
            },},{id: "projects-cca-stem-cell",
          title: 'CCA Stem Cell',
          description: "Cholangiocarcinoma Stem Cell Research",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CSC/";
            },},{id: "projects-computer-workbench-setting",
          title: 'Computer Workbench Setting',
          description: "How my computers are set up with reproducibility in mind.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ComSetting/";
            },},{id: "projects-exercise-mania-patients",
          title: 'Exercise Mania Patients',
          description: "We are friends who have our own diseases and WE understand each other!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/EMP/";
            },},{id: "projects-epigenomics-chip-seq",
          title: 'Epigenomics (ChIP-seq)',
          description: "My epigenomic (ChIP-seq) portfolio",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Epigenome_ChIP/";
            },},{id: "projects-phenomics-coding-x-flow-cytometry",
          title: 'Phenomics - Coding x Flow Cytometry',
          description: "My portfolio on how I used coding to help discover insight from flow cytometric result.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/FlowCytometry/";
            },},{id: "projects-phenomics-coding-x-high-throughput-imaging-2d-3d-models",
          title: 'Phenomics - Coding x High-Throughput Imaging (2D/3D Models)',
          description: "My portfolio on high-throughput imaging of 2D and 3D cell cultures and image analysis. :)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/HT_imaging/";
            },},{id: "projects-miss-asthma-thailand",
          title: 'Miss Asthma THAILAND',
          description: "Helping as an asthmatic friend for fostering a supportive environment and promoting asthma awareness.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MissAsthma/";
            },},{id: "projects-no-cancer-thailand",
          title: 'NO Cancer THAILAND',
          description: "Simplifying cancer science for the public, promoting understanding of cancer biology and precision medicine.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/NoCancer/";
            },},{id: "projects-transcriptomics",
          title: 'Transcriptomics',
          description: "My transcriptomics portfolio :)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Transcriptome/";
            },},{id: "projects-the-whispers-of-biology",
          title: 'The Whispers of Biology',
          description: "Sharing my scientific thoughts, computational biology tricks, and other insights with scientific friends. I hope we can pursue our passion for science together.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/WhispersBiology/";
            },},{id: "projects-write-to-thrive-growing-together-in-ink",
          title: 'Write to Thrive - Growing Together in Ink',
          description: "My Personal Blog, where I share my perspective and lived experiences in Thai language.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Write2Thrive/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%6B%72%69%74%74%69%79%61%62%68%6F%72%6E@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/kuchiki.namthip", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/KuchikiNamthip", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/kuchiki_namthip", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kuchikinamthip", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@kuchikinamthip", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0009-9689-2552", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Krittiyabhorn-Kongtanawanich/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=https://scholar.google.co.th/citations?user=afWylV4AAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.sisyspharm.org/", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/KuchikiNamthip", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@NO-CANCER-THAILAND", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
