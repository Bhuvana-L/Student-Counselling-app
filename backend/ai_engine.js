// ai_engine.js
// Keyword-based AI reply engine

const aiKnowledgeBase = [
  // ------------------------------
// PART 3 — Q201 to Q300
// ------------------------------

// ai_engine.js
// Format: { k: "keyword", r: "reply" }
// MindCare — Emotional + Academic + Teacher-related QA
// 200 entries included (keyword-based). Each reply is 2-3 short sentences.

  // 1-20: General emotional support
  { k: "stress", r: "I’m sorry you’re feeling stressed. Take a deep breath, rest for a few minutes, and remember you don’t have to carry this alone." },
  { k: "anxiety", r: "Anxiety can feel overwhelming sometimes. Try slow breathing and grounding, and know a counsellor will listen and support you." },
  { k: "panic", r: "You’re safe in this moment. Try breathing slowly and focusing on small, steady actions — someone cares and will help you through it." },
  { k: "depressed", r: "It hurts to feel this way and your feelings are valid. Reach out and let someone help carry this weight with you." },
  { k: "sad", r: "I’m really sorry you’re feeling sad right now. Allow yourself to feel, and please tell a counsellor or friend — you don’t have to be alone." },
  { k: "lonely", r: "Feeling lonely is painful and understandable. Try reaching out to one person, even a short message — connection often eases the ache." },
  { k: "homesick", r: "Missing home is natural and honest. Keep in touch, make small familiar rituals, and be gentle as you adjust." },
  { k: "broken", r: "It hurts to feel broken, and I’m sorry you’re going through that. Healing is slow but real — you deserve kindness and support along the way." },
  { k: "hopeless", r: "I’m sorry hope feels distant right now. Please share this with a counsellor — small steps and support can help hope return." },
  { k: "empty", r: "Feeling empty is heavy to carry. Let someone know and try small, gentle activities that bring tiny comfort." },

  // 21-40: Overwhelm, burnout, self-care
  { k: "overwhelmed", r: "You’re handling a lot and it’s okay to pause. Put one thing down, take a breath, and do the next small step when you’re ready." },
  { k: "burnout", r: "Burnout is your mind and body asking for rest. You deserve permission to slow down and recover; talk to someone who can support that." },
  { k: "tired", r: "You sound exhausted. Rest is not selfish — it’s essential, so give yourself a genuine break and hydrate." },
  { k: "sleep", r: "Sleep matters for your mind and mood. Try a calm routine, dim lights, and gentle breathing before bed." },
  { k: "fatigue", r: "Being tired all the time is rough and real. Please consider short naps, better hydration, and telling a counsellor how you feel." },
  { k: "numb", r: "Numbness can be a protective response to pain. You’re allowed time to feel safe, and you don’t have to do it alone." },
  { k: "burned out", r: "When everything feels heavy, your system is asking for care. Rest, set a tiny boundary, and reach out to someone supportive." },
  { k: "drained", r: "Your energy being low is a sign to slow down. Do one small, comforting thing for yourself now." },
  { k: "exhausted", r: "You’ve been pushing so hard, I can hear your fatigue. Let yourself recharge and ask for help — that’s strength, not weakness." },
  { k: "need rest", r: "Your body and mind need rest; that’s okay. Give yourself a short, guilt-free pause and return when you can." },

  // 41-60: Study/exam related emotional replies
  { k: "exam", r: "Exams are stressful and they can trigger big emotions. Study in small focused blocks and be kind to yourself between sessions." },
  { k: "exam stress", r: "Exam stress is real and heavy — you’re not alone in feeling it. Break the work into small parts, rest well, and use past papers to build confidence." },
  { k: "test", r: "Tests can make the mind race. Prepare with brief practice sessions, and breathe through the anxiety before you start." },
  { k: "fail", r: "Failing a test doesn’t define your worth. Learn what you can from it, then be gentle with yourself as you try again." },
  { k: "marks", r: "Marks feel important, but they don’t measure your value. Focus on learning and gradual improvement, not perfection." },
  { k: "revision", r: "Revision becomes easier with small, repeated cycles. Make short notes and revisit them regularly — your brain will thank you." },
  { k: "panic in exam", r: "If you panic in an exam, pause and breathe slowly for a minute. Start with the easiest questions to rebuild confidence." },
  { k: "couldn't finish", r: "Not finishing is painful, but it doesn’t erase your effort or potential. Reflect on pacing and try a different strategy next time." },
  { k: "last minute studying", r: "Last-minute cramming is stressful and inefficient. Try a quick plan: prioritize key topics and rest well before the test." },
  { k: "exam fear", r: "Exam fear is normal. Practice small breathing routines and mock tests to reduce the fear over time." },

  // 61-80: Motivation, procrastination, focus
  { k: "motivation", r: "When motivation is low, start with 5 minutes — small action builds momentum. Celebrate the tiny wins." },
  { k: "procrastination", r: "Procrastination often hides fear or overwhelm. Break the task into tiny steps and begin with the smallest one." },
  { k: "focus", r: "Focus is a muscle you can train. Short focused sessions with tiny breaks work better than marathon efforts." },
  { k: "can't focus", r: "If focusing is hard today, try a 20-minute task with no phone notifications. Tiny focus periods add up." },
  { k: "lazy", r: "Feeling lazy is not your identity — it’s often fatigue or a sign of burnout. Rest, then try a small task." },
  { k: "lack drive", r: "A lack of drive is a signal to rest and re-evaluate small goals. Start tiny and be gentle with progress." },
  { k: "no energy", r: "Low energy can come from stress or sleep loss. Drink water, rest briefly, and try a gentle walk." },
  { k: "stuck", r: "Feeling stuck is painful but temporary. Move one small piece forward and celebrate that movement." },
  { k: "can't start", r: "Starting is the hardest part; try setting a timer for 5 minutes and do anything on the task until it ends." },
  { k: "slow progress", r: "Slow progress is still progress. Keep a small log of wins — they add up into real change." },

  // 81-100: Relationships, friendships, breakups
  { k: "friend", r: "Friendship problems hurt deeply. Share your feelings in a calm way or seek someone who can listen without judgement." },
  { k: "argue", r: "Arguments escalate when feelings are high. Pause, breathe, and try to communicate your need calmly." },
  { k: "breakup", r: "A breakup cuts deep and it’s okay to grieve. Give yourself time and surround yourself with small comforts and safe people." },
  { k: "trust", r: "Trust is fragile and rebuilding it takes time. Be honest and consistent, and let trust grow slowly." },
  { k: "lonely friend", r: "If a friend makes you feel lonely, talk about how you feel or widen your circle gently." },
  { k: "jealous", r: "Jealousy shows how much you care, but it can be explored calmly. Communicate your feelings honestly when you’re calm." },
  { k: "left out", r: "Being left out is painful. Reach out to one person and express your feelings — it can open a new path." },
  { k: "friend left", r: "Losing a friend hurts. Allow yourself to grieve and slowly rebuild with people who respect you." },
  { k: "friend broke trust", r: "When trust breaks, your feelings are valid. Consider steps that protect you and allow healing if possible." },
  { k: "support", r: "Asking for support is brave. Reach out to someone you trust or your counsellor — you deserve help." },

  // 101-120: Family & home issues
  { k: "parents", r: "Family tension can be heavy. Speak calmly, set boundaries gently, and share what you need honestly." },
  { k: "home problems", r: "Home challenges affect your whole self. Seek a trusted listener and prioritize your safety and well-being." },
  { k: "pressure from family", r: "Family pressure can feel crushing. Communicate your feelings and ask for small changes to ease the stress." },
  { k: "arranged marriage fear", r: "That’s a big life event and feeling anxious is normal. Talk through your concerns with someone you trust." },
  { k: "financial stress", r: "Financial worries hurt deeply. Make a simple budget, seek practical help, and talk about it with trusted mentors." },
  { k: "relationship with parents", r: "Parent-child relationship has ups and downs. Honest conversations can open doors to understanding." },
  { k: "homesick", r: "Missing home is painful but common. Keep little routines that remind you of comfort and call home when you can." },
  { k: "family abuse", r: "If you face abuse, your safety matters above all. Please reach out to emergency contacts and a trusted adult immediately." },
  { k: "caretaker stress", r: "Caring for someone drains energy. Ask for practical help and set boundaries where possible." },
  { k: "family pride", r: "Family expectations can add pressure. Discuss realistic goals and seek help from mentors or counsellors." },

  // 121-140: Career, internships, placements
  { k: "internship", r: "Finding internships can feel scary. Apply often, build a small project, and reach out to seniors for referrals." },
  { k: "placement", r: "Placements are important but not everything. Focus on skills, projects, and consistent practice." },
  { k: "resume", r: "A clear resume with projects and skills matters. Keep it short, honest, and targeted to the job." },
  { k: "job fear", r: "Fear about future jobs is normal. Build small daily habits that grow your skills and confidence." },
  { k: "career", r: "Career choices evolve; you don’t need it all figured out now. Try internships to learn quickly and refine your path." },
  { k: "no opportunities", r: "Lack of opportunities is frustrating. Create small projects, network, and apply widely." },
  { k: "interview anxiety", r: "Interview nerves are normal. Practice answers aloud, breathe before you begin, and remember they’re evaluating fit too." },
  { k: "skill gap", r: "A skill gap can be filled step by step. Identify one skill, practice consistently, and track progress." },
  { k: "freelance fear", r: "Starting freelance work is uncertain. Start small, build testimonials, and let confidence grow with experience." },
  { k: "career change", r: "Changing careers is brave. Learn incrementally, connect with people in that field, and try small steps." },

  // 141-160: Subject-specific academic help
  { k: "dsa", r: "DSA becomes clearer with repeated practice. Start with arrays and linked lists, then move to trees and graphs." },
  { k: "algorithms", r: "Algorithms need step-by-step tracing and practice. Dry-run code on paper and explain it out loud." },
  { k: "c programming", r: "C is powerful and low-level. Practice pointers and memory concepts with small programs." },
  { k: "python", r: "Python is great for quick prototyping. Write small scripts and explore libraries like numpy and pandas." },
  { k: "java", r: "Java shines with OOP structure. Practice classes, interfaces, and collection usage." },
  { k: "os", r: "OS concepts become easier with diagrams. Visualize scheduling and memory to solidify ideas." },
  { k: "dbms", r: "Database practice is hands-on — write joins and normalization exercises to build fluency." },
  { k: "networking", r: "Networking is layered. Learn the OSI model and practice subnetting step by step." },
  { k: "web", r: "Web development grows with projects. Build a small site and deploy it to learn the full stack." },
  { k: "react", r: "React is component-based; start with simple components and hooks to manage state." },

  // 161-180: AI/ML and data topics
  { k: "ai", r: "AI starts with fundamentals and data. Learn basic algorithms, try simple projects, and build gradually." },
  { k: "machine learning", r: "ML is patience and experiments. Start with linear models then move to decision trees and ensembles." },
  { k: "deep learning", r: "Deep learning needs data and compute. Begin with simple neural nets and experiment on small datasets." },
  { k: "nlp", r: "NLP is about language patterns. Start with tokenization and simple sentiment tasks to learn the flow." },
  { k: "cv", r: "Computer vision is practical — try simple OpenCV scripts and explore pre-trained models." },
  { k: "kaggle", r: "Kaggle helps you learn with datasets and kernels. Start with beginner competitions and read top notebooks." },
  { k: "data science", r: "Data science is about asking good questions. Clean data, visualize carefully, and practice modeling." },
  { k: "pandas", r: "Pandas makes data manipulation easier. Practice groupby, merge, and pivot operations frequently." },
  { k: "tensorflow", r: "TensorFlow helps build neural nets; follow tutorials and understand layers and loss functions." },
  { k: "pytorch", r: "PyTorch is flexible and pythonic — experiment with small models and autograd to learn fast." },

  // 181-200: Teacher / teaching related emotional & practical replies
  { k: "teacher", r: "If a teacher’s lessons feel unclear, that’s frustrating and valid. Try asking specific questions after class or seeking alternative explanations online; your learning matters." },
  { k: "bad teacher", r: "A teacher who doesn’t explain well can make learning painful. Try polite clarification requests, use other resources, and report persistent issues to a mentor if needed." },
  { k: "teacher not good", r: "It hurts when a teacher’s style doesn’t match your needs. Form a small study group, use recorded lectures or online courses, and tell your department calmly about difficulties." },
  { k: "teaching style", r: "Different teaching styles suit different learners. If one approach isn’t working, ask for examples, practical sessions, or external videos to supplement." },
  { k: "class unclear", r: "When a class feels unclear, it’s okay to say so — ask a pointed question or get classmates’ notes and compare to fill gaps." },
  { k: "teacher harsh", r: "A harsh teacher can hurt morale. Keep professional distance, seek support from friends or mentors, and document problematic behaviour if needed." },
  { k: "teacher favouritism", r: "Perceived favouritism is painful and unfair. Focus on your work, document instances if necessary, and seek guidance from a counselor or head of department." },
  { k: "teacher praise", r: "Positive feedback from teachers feels validating. Save those moments as reminders of your progress and strengths." },
  { k: "can't understand teacher", r: "If the teacher’s pace is too fast, ask for a slower example or visit office hours. You deserve clarity and time to learn." },
  { k: "teacher help", r: "Good teachers want you to learn — ask for practical examples or extra resources. If help isn’t available, find peers or online lectures to bridge the gap." },
  // ---------------------------
// AI ENGINE DATA (201 - 500)
// ---------------------------



  // 201–220: College life + assignments
  { k: "assignment", r: "Assignments can pile up quickly and feel overwhelming. Break them into tiny chunks and do one part at a time. You’re capable, even if it feels like too much right now." },
  { k: "college pressure", r: "College pressure is real and heavy. Remember to breathe and take things one day at a time. You’re stronger than you think." },
  { k: "semester", r: "Semester work gets intense. Make small plans, rest in between, and trust yourself to grow through it." },
  { k: "project", r: "Projects can feel confusing at first. Start with a simple plan and build one small piece daily — progress will come." },
  { k: "submission", r: "Submission deadlines create stress. Prioritize tasks and keep calm — you will get through this." },
  { k: "attendance", r: "Low attendance can be stressful. Talk to your teacher, explain honestly, and take small steps to improve it." },
  { k: "lab", r: "Labs can be tricky. Revise the procedure and observe carefully — you’ll learn faster than you expect." },
  { k: "internal marks", r: "Internal marks can feel unfair. Focus on what you can control and communicate openly with your teacher if needed." },
  { k: "notes", r: "Notes don’t have to be perfect; they just need to help you. Keep them simple and organized." },
  { k: "record", r: "Record writing feels tiring. Do a little each day and don’t pressure yourself to finish all at once." },
  { k: "journal", r: "Journals take time but also teach discipline. Keep it neat and don’t overthink the format." },
  { k: "late submission", r: "Late submissions happen to everyone. Take responsibility, be honest, and focus on improving next time." },
  { k: "practical", r: "Practical sessions can be nerve-wracking. Stay calm and review the basics — confidence grows step by step." },
  { k: "presentation", r: "Presentations make many students nervous. Practice once or twice aloud and breathe slowly before starting." },
  { k: "viva", r: "Viva exams test not just knowledge but calmness. Answer slowly and confidently — it’s okay not to know everything." },
  { k: "panel", r: "Facing panels feels scary. Maintain eye contact, breathe, and trust your preparation." },
  { k: "college mess", r: "College mess food frustrations are real. Try to eat what feels safe and supplement with fruits if possible." },
  { k: "hostel", r: "Hostel life can be lonely at times. Make your room a comfortable space and talk to people who feel safe." },
  { k: "roommate", r: "Roommate issues are common. Try open communication and set small boundaries respectfully." },
  { k: "canteen", r: "Canteen food moods happen! Eat slowly and hydrate — your body deserves care." },

  // 221–240: Friendships & conflicts
  { k: "group fight", r: "Group fights drain a lot of emotional energy. Take time to step back, breathe, and only return when you feel calm." },
  { k: "ignored", r: "Being ignored hurts deeply. Your feelings matter — consider talking openly or giving space for clarity." },
  { k: "trust issues", r: "Trust issues grow from past pain. It’s okay to move slowly and protect your heart." },
  { k: "fake friends", r: "Fake friends teach us strong lessons. Surround yourself with people who value you genuinely." },
  { k: "best friend fight", r: "Fights with best friends hurt the most. Give each other space and reconnect gently when emotions settle." },
  { k: "friendship doubt", r: "Doubts are natural. Communicate kindly and listen with an open mind." },
  { k: "misunderstanding", r: "Misunderstandings happen when emotions run high. Try clearing things calmly — honesty heals." },
  { k: "sharing problem", r: "It takes courage to share your problems. Open up slowly and with people you trust." },
  { k: "friend left me", r: "Losing a friend is painful. Allow yourself to heal and believe that better connections will come." },
  { k: "lost trust", r: "Losing trust is heavy. Heal at your own pace, without guilt." },
  { k: "jealous friend", r: "A jealous friend may be insecure. Set boundaries and protect your peace." },
  { k: "friend replaced me", r: "Feeling replaced hurts deeply. Remember your worth doesn’t depend on someone’s attention." },
  { k: "backstab", r: "Being betrayed shakes your confidence. Take time to recover and lean on people who treat you with honesty." },
  { k: "friend moved away", r: "Distance changes routines but not bonds. Stay connected through small messages." },
  { k: "clingy friend", r: "Clinginess often comes from fear. Gently set boundaries while still being kind." },
  { k: "friend pressure", r: "Friends can unknowingly pressure us. Say no gently — protecting your mental space is not wrong." },
  { k: "friend comparing", r: "Comparison hurts your confidence. Remind yourself that your journey is unique and valid." },
  { k: "friend ignoring texts", r: "Ignored messages hurt. Give them space and don’t jump to conclusions — people handle things differently." },
  { k: "group avoided me", r: "Feeling excluded is painful. Try connecting with individuals rather than the whole group." },
  { k: "friend attitude", r: "Sometimes people behave differently due to their own stress. Give it time and talk with honesty." },

  // 241–260: Love, crushes, relationships
  { k: "crush", r: "Having a crush is exciting and confusing. Enjoy the feeling slowly — you don’t need to rush anything." },
  { k: "one-sided", r: "One-sided love can ache deeply. Your feelings are real, but you deserve love that comes back to you." },
  { k: "relationship problem", r: "Relationships go through tough phases. Honest communication and emotional safety matter most." },
  { k: "fight with partner", r: "Fights happen even in good relationships. Listen gently and speak when calm." },
  { k: "insecure", r: "Insecurity grows from fear of losing someone. Talk openly and practice small acts of self-love." },
  { k: "breakup pain", r: "Breakups feel like carrying a storm inside you. Grieve slowly and allow yourself to heal." },
  { k: "overthinking relationship", r: "Overthinking often comes from fear. Breathe, ground yourself, and avoid jumping to conclusions." },
  { k: "long distance", r: "Long distance is challenging but not impossible. Communicate regularly and maintain trust." },
  { k: "jealous partner", r: "Jealousy often hides insecurity. Both partners need calm conversations and reassurance." },
  { k: "mixed signals", r: "Mixed signals can be confusing. Ask clearly — you deserve clarity, not confusion." },
  { k: "rebound", r: "Rebound feelings are natural but fragile. Take time to understand what your heart really needs." },
  { k: "moving on", r: "Moving on is slow and personal. Celebrate tiny emotional steps and allow yourself to heal." },
  { k: "trust partner", r: "Trust builds from honesty and small consistent actions. Share your feelings calmly." },
  { k: "love failure", r: "Love failure hurts like nothing else. Let yourself cry and heal — better days are ahead." },
  { k: "heartbreak", r: "Heartbreak feels heavy on the chest. You don’t have to rush healing — it’s okay to take time." },
  { k: "commitment", r: "Commitment takes clarity and emotional safety. Make decisions when your mind is calm." },
  { k: "compatibility", r: "Compatibility grows with shared values and communication. Learn each other slowly." },
  { k: "breakup recovery", r: "Recovering from breakup takes patience. Surround yourself with supportive people." },
  { k: "rejected", r: "Rejection stings, but it doesn’t define your worth. You deserve someone who truly sees you." },
  { k: "infatuation", r: "Infatuation feels intense but passes with time. Give yourself space to understand your feelings." },

  // 261–280: Teachers, teaching quality & classroom issues
  { k: "teacher scolded", r: "Being scolded by a teacher can feel humiliating. Take a moment to breathe — it’s okay to feel hurt." },
  { k: "teacher insulted", r: "Teachers can sometimes speak harshly without understanding the impact. Remember, one moment doesn’t define you." },
  { k: "teacher misunderstands", r: "Misunderstanding can be resolved with calm communication. Try approaching the teacher respectfully later." },
  { k: "teacher strict", r: "Strict teachers can feel scary but they often want discipline. Try to understand their expectations slowly." },
  { k: "teacher shouted", r: "Getting shouted at hurts emotionally. Be gentle with yourself and take a moment to reset." },
  { k: "boring class", r: "Boring classes make learning harder. Try taking structured notes or summarizing to stay engaged." },
  { k: "teacher ignores", r: "Being ignored by a teacher feels bad. Politely ask your doubt a second time — you deserve guidance." },
  { k: "class fast", r: "If the class goes too fast, note down keywords and revisit them later. You’re doing your best." },
  { k: "teacher doesn't explain", r: "Some teachers teach too quickly or vaguely. Use peer notes or online lectures to fill gaps." },
  { k: "teacher favourites", r: "Favoritism can feel unfair. Focus on your progress and speak with a mentor if it affects grades." },
  { k: "teacher biased", r: "Bias is hurtful and unprofessional. Document incidents and talk to a trusted authority if needed." },
  { k: "teacher helpful", r: "Helpful teachers make learning brighter. Appreciate them and continue asking doubts." },
  { k: "teacher motivates", r: "A motivating teacher is a gift. Keep their advice close whenever you feel lost." },
  { k: "teacher rude", r: "Rudeness from teachers hurts deeply. Set emotional boundaries and talk to someone supportive." },
  { k: "teacher humiliates", r: "Humiliation in class leaves emotional scars. You deserve respect — try reporting or seeking support." },
  { k: "teacher appreciation", r: "Appreciating a teacher builds connection. A simple thank you can brighten their day." },
  { k: "teacher slow", r: "A slow-paced class can feel boring. Use it to take perfect notes and clear fundamentals." },
  { k: "teacher too fast", r: "Fast teachers make topics confusing. Record key points and learn them slowly later." },
  { k: "teacher doubt", r: "Asking doubts is not a weakness. It shows your willingness to learn — keep going." },
  { k: "teacher supportive", r: "Supportive teachers are anchors during stress. Trust them and share your academic worries." },

  // 281–300: Discipline & concentration
  { k: "no discipline", r: "Discipline grows slowly, not overnight. Start with one small routine and stick to it." },
  { k: "can't study", r: "Studying feels impossible sometimes. Try 10 minutes — small beginnings lead to big results." },
  { k: "study block", r: "Study blocks happen when your brain is tired. Rest briefly and return with a fresh mind." },
  { k: "distracted", r: "Distraction is normal. Keep your phone away and study in short intervals." },
  { k: "sleepy while studying", r: "Sleepiness means your brain needs rest. Take a power nap and then continue." },
  { k: "mind wandering", r: "A wandering mind shows tiredness. Bring it back gently without judging yourself." },
  { k: "no consistency", r: "Consistency is built, not given. Start with a tiny daily habit and grow from there." },
  { k: "slow learner", r: "Being a slow learner is not a flaw — it means you understand deeply. Keep going steadily." },
  { k: "study routine", r: "A study routine helps your brain feel safe. Pick 3 fixed time slots — simple and clean." },
  { k: "study fear", r: "Fear of studying comes from overwhelm. Break topics into the smallest parts possible." },

  // 301–320: Confidence & self-worth
  { k: "low confidence", r: "Confidence grows from small wins. Celebrate every tiny achievement — they matter." },
  { k: "self doubt", r: "Self-doubt appears when you’re growing. You’re capable, even if your mind says otherwise." },
  { k: "worthless", r: "You are not worthless — your mind is tired. You matter more than you think." },
  { k: "failure fear", r: "Fear of failure is normal. Take one small risk and you’ll see you’re stronger than the fear." },
  { k: "comparison", r: "Comparison steals your peace. Focus on your journey — it’s unique and meaningful." },
  { k: "body shaming", r: "Body shaming hurts deeply. You deserve love, respect, and kindness exactly as you are." },
  { k: "inferiority", r: "Feeling inferior comes from old wounds. Heal slowly and surround yourself with supportive people." },
  { k: "mistakes", r: "Mistakes are part of learning. Be kind to yourself while growing." },
  { k: "identity", r: "Finding yourself takes time. Explore slowly and trust your instincts." },
  { k: "fear people", r: "Fear of people is real. Try small social interactions to gently build comfort." },

  // 321–340: Mental health deep emotional replies
  { k: "crying", r: "Crying doesn’t make you weak — it releases pain. Let the tears come and breathe." },
  { k: "can't stop crying", r: "Your emotions are overflowing and that’s okay. Sit, breathe, and let your body settle." },
  { k: "heart heavy", r: "A heavy heart means unspoken pain. Share it with someone who genuinely listens." },
  { k: "mind blank", r: "A blank mind shows exhaustion. Rest a bit — clarity will return slowly." },
  { k: "mental breakdown", r: "Breakdowns are not failures — they are alarms. Pause everything and ask for support." },
  { k: "overthink", r: "Overthinking comes from fear and uncertainty. Write your thoughts down — it brings relief." },
  { k: "trauma", r: "Trauma stays in the body and heals slowly. Please talk to a professional if you feel ready." },
  { k: "pain inside", r: "Silent pain is the heaviest. You deserve to be heard." },
  { k: "can't breathe", r: "Slow down — inhale deeply, exhale slowly. You're safe now." },
  { k: "fear of future", r: "The future feels scary when you’re overwhelmed. Focus on today — that’s enough." },

  // 341–360: Engineering subjects emotional replies (CSE/ISE specific)
  { k: "compiler", r: "Compiler design feels tough at first. Try understanding the flow—lexical → syntax → semantic." },
  { k: "microcontroller", r: "Microcontrollers need hands-on practice. Try blinking LEDs and basic experiments." },
  { k: "signals", r: "Signal processing becomes easier with visual graphs. Try plotting waveforms to understand patterns." },
  { k: "image processing", r: "Image processing is visual and fun. Start with filters and edge detection to build confidence." },
  { k: "iot", r: "IoT becomes interesting once you build a simple project. Try sensor + ESP32 to begin." },
  { k: "cn", r: "Computer Networks needs diagrams — draw them to understand better." },
  { k: "toc", r: "Theory of computation feels abstract. Practice automata diagrams to simplify it." },
  { k: "se", r: "Software engineering is about structure. Make clean diagrams and flowcharts." },
  { k: "maths", r: "Math struggles are common. Try solving 3–5 problems daily." },
  { k: "physics", r: "Physics becomes easier when you visualize concepts in real life." },
  { k: "chemistry", r: "Chemistry needs understanding, not memorizing — connect reactions like stories." },
  { k: "biology", r: "Biology is detailed but beautiful. Break concepts into parts." },
  { k: "electronics", r: "Electronics needs clear fundamentals. Practice small circuits to learn faster." },
  { k: "circuits", r: "Circuits look confusing but follow simple rules — identify input, output and flow." },
  { k: "switching theory", r: "Switching theory gets easier with truth tables. Practice Karnaugh maps step by step." },
  { k: "machine", r: "Machines are just rules applied repeatedly. Understand concepts, then apply formulas." },
  { k: "graphs", r: "Graph theory can be fun — draw nodes and edges to understand deeply." },
  { k: "matrix", r: "Matrices are systematic. Focus on patterns and transformations." },
  { k: "probability", r: "Probability is about understanding possibilities — use real-life examples." },
  { k: "statistics", r: "Statistics helps you understand data stories. Practice visualizations to learn better." },

  // 361–380: Health, lifestyle & wellness
  { k: "headache", r: "Headaches come from stress or dehydration. Drink water and rest your eyes for a bit." },
  { k: "stomach pain", r: "Stomach discomfort often signals stress. Try breathing slowly and stay hydrated." },
  { k: "back pain", r: "Back pain signals posture strain. Stretch gently and take short breaks." },
  { k: "no appetite", r: "Loss of appetite happens when you're stressed. Eat small, light foods gradually." },
  { k: "overeating", r: "Emotional eating is understandable. Be kind to yourself and try mindful snacks." },
  { k: "head spinning", r: "Feeling dizzy means your body needs rest. Sit or lie down, breathe slowly." },
  { k: "cold", r: "Colds need warmth and rest. Stay hydrated and take it easy." },
  { k: "fever", r: "Fever signals your body is fighting. Rest well and monitor your temperature." },
  { k: "body pain", r: "Body ache reflects hidden stress. Rest, stretch, and hydrate well." },
  { k: "weak", r: "Weakness is not failure — it's your body asking for care." },
  { k: "period pain", r: "Period pain can be intense. Use heat pads, rest, and stay hydrated." },
  { k: "acne", r: "Acne is common and not your fault. Keep a gentle routine and don’t stress about it." },
  { k: "weight", r: "Your worth isn't measured by weight. Treat your body kindly." },
  { k: "dark circles", r: "Dark circles often mean tiredness or stress. Sleep well and hydrate more." },
  { k: "fatigue", r: "Fatigue signals exhaustion. Pause and rest — it's allowed." },
  { k: "health anxiety", r: "Health anxiety is scary. Slowly separate fact from fear — you’re not alone." },
  { k: "panic attack", r: "A panic attack feels deadly but it isn’t. Breathe slowly and tell yourself you’re safe." },
  { k: "nausea", r: "Nausea comes from stress sometimes. Rest and breathe calmly." },
  { k: "overheat", r: "Feeling overheated? Drink water and find a cool space." },
  { k: "low bp", r: "Low BP causes dizziness. Sit down, hydrate, and rest." },

  // 381–400: Social pressure, self-esteem & environment
  { k: "society pressure", r: "Society expects too much. Live at your own pace — you’re not in a race." },
  { k: "fear of judgement", r: "Judgement fear comes from past hurt. Strength grows from believing in your own voice." },
  { k: "public speaking", r: "Public speaking scares many. Practice with one friend first and build confidence slowly." },
  { k: "introvert", r: "Being an introvert is not a weakness. Your quiet strength is powerful." },
  { k: "extrovert", r: "Being extroverted brings energy — use it gently without draining yourself." },
  { k: "social anxiety", r: "Social anxiety makes simple tasks hard. Take tiny steps like saying hi to one person." },
  { k: "crowd", r: "Crowded places feel overwhelming. Step aside, breathe, and return when comfortable." },
  { k: "peer pressure", r: "Peer pressure pushes you away from your truth. Listen to yourself — your comfort matters." },
  { k: "reputation", r: "Reputation changes with time. Focus on being genuine, not perfect." },
  { k: "embarrassed", r: "Embarrassment fades faster than you think. People forget sooner than we imagine." },
  { k: "awkward", r: "Awkwardness means you're human. Give yourself permission to feel it." },
  { k: "shy", r: "Shyness is gentle strength. Speak slowly and in small steps — you’re doing fine." },
  { k: "heaviness", r: "Heaviness inside needs kindness. Slow down and comfort yourself like a friend would." },
  { k: "guilt", r: "Guilt means you care, but don’t punish yourself endlessly. Learn and move forward." },
  { k: "shame", r: "Shame isolates you, but you deserve compassion. Share with someone safe." },
  { k: "anger", r: "Anger is often bottled hurt. Breathe deeply and calm yourself before reacting." },
  { k: "irritated", r: "Irritation is a sign of emotion"},
  
  {
    k: "dsa",
    r: "DSA feels huge, but every expert once felt the same. Start slowly—one structure at a time. The more you practice, the more patterns your mind starts recognising."
  },
  {
    k: "arrays",
    r: "Arrays are just continuous memory blocks, nothing to fear. Start with simple traversals and gradually try insert/delete. With consistency, it becomes your comfort topic."
  },
  {
    k: "linked list",
    r: "Pointers feel confusing because they’re new, not because you’re weak. Draw diagrams—visual memory makes linked lists simple and beautiful to understand."
  },
  {
    k: "stack",
    r: "Stack is just LIFO, like a pile of books. Start with push/pop operations. Once your basics settle, problems become surprisingly easy."
  },
  {
    k: "queue",
    r: "Think of a real queue: first in, first out. Circular queue might trouble you at first, but one hand-drawn example clears everything."
  },
  {
    k: "tree",
    r: "Trees look heavy but they’re just connections. Practice inorder, preorder, and postorder—your brain will start seeing patterns naturally."
  },
  {
    k: "binary tree",
    r: "Binary trees rely on recursion, so trust the flow. Write small examples and trace them—you’ll feel your understanding grow."
  },
  {
    k: "bst",
    r: "BSTs are all about comparisons. Insert/search become easy once you understand the left-small, right-large intuition."
  },
  {
    k: "graph",
    r: "Graphs feel messy because they're flexible. But once BFS and DFS become clear, everything else becomes manageable."
  },
  {
    k: "bfs",
    r: "BFS is simply visited level-by-level using a queue. Think of it like waves spreading—slow, steady and predictable."
  },
  {
    k: "dfs",
    r: "DFS goes deep first, then backtracks. It’s just controlled exploration. Once you trace a few examples, confidence grows."
  },
  {
    k: "hashing",
    r: "Hashing is powerful: it speeds up search drastically. Collisions happen—don’t fear them—techniques like chaining are made to handle it."
  },

  {
    k: "oops",
    r: "OOP is storytelling in code. Understand classes and objects deeply—inheritance and polymorphism will start making emotional sense too."
  },
  {
    k: "class",
    r: "Class is just a blueprint—simple and elegant. Think of it as describing something, and object as its real-world version."
  },
  {
    k: "inheritance",
    r: "Inheritance is like passing qualities from parent to child. Once you see it in one example, everything becomes intuitive."
  },
  {
    k: "polymorphism",
    r: "Polymorphism is the same action taking different forms. Overloading/overriding feel tricky initially, but they add elegance to your logic."
  },
  {
    k: "abstraction",
    r: "Abstraction removes noise and shows only what matters. Think of using a phone—you don’t need to see the circuits inside."
  },
  {
    k: "encapsulation",
    r: "Encapsulation protects data like a shield. It teaches you to respect boundaries in code, just like in real life."
  },

  {
    k: "dbms",
    r: "DBMS is everywhere—from apps to banks. Focus on queries and joins; once they click, everything else flows smoothly."
  },
  {
    k: "sql",
    r: "SQL isn’t hard—it's a language built for clarity. Master SELECT first, then slowly build toward joins."
  },
  {
    k: "join",
    r: "Joins become easy when visualized. Draw two tables—see how rows connect. It’s like matching puzzle pieces."
  },
  {
    k: "normalization",
    r: "Normalization is organising data properly. Understand 1NF → 2NF → 3NF one by one—there is no rush."
  },
  {
    k: "transaction",
    r: "Transactions ensure consistency. Once you understand ACID properties, you’ll appreciate their purpose deeply."
  },

  {
    k: "os",
    r: "OS looks huge, but focus on CPU scheduling, deadlocks, and memory. With time, everything feels connected beautifully."
  },
  {
    k: "deadlock",
    r: "Deadlock happens when systems wait forever. It’s real-life traffic jam logic—understanding the conditions solves the fear."
  },
  {
    k: "cpu scheduling",
    r: "Scheduling is just time management for processes. FCFS, SJF, RR feel clear with 2–3 examples."
  },
  {
    k: "threads",
    r: "Threads run tasks simultaneously. Visualize them as lightweight processes—then concepts make sense naturally."
  },
  {
    k: "paging",
    r: "Paging breaks memory into small pieces. Think of dividing a notebook—easy to manage and fast to access."
  },
  {
    k: "segmentation",
    r: "Segmentation groups memory logically. It’s cleaner and helps you understand memory organization better."
  },

  {
    k: "cn",
    r: "Computer Networks shines once OSI/TCP models are clear. Everything else becomes easier and logical."
  },
  {
    k: "osi",
    r: "OSI has seven layers—learn them with real examples like email or web browsing. It becomes memorable and fun."
  },
  {
    k: "tcp ip",
    r: "TCP/IP is simpler with four layers. Focus on application and transport layers—most questions come from there."
  },
  {
    k: "subnetting",
    r: "Subnetting feels scary, but it's pure logic. Do 3–4 problems with diagrams—you’ll break the fear fast."
  },
  {
    k: "routing",
    r: "Routing finds the best path. Dijkstra’s algorithm is the heart—understand it gently, not forcefully."
  },

  {
    k: "se",
    r: "Software Engineering is real-world logic. Understand SDLC models with real examples—everything feels natural then."
  },
  {
    k: "uml",
    r: "UML diagrams are storytelling tools. Use case and class diagrams are the most important—practice a few."
  },
  {
    k: "sdlc",
    r: "SDLC is simply plan → build → test → deploy. The flow feels smooth after one project understanding."
  },

  {
    k: "compiler",
    r: "Compiler is a pipeline of stages. Lexical → Syntax → Semantic → Code generation—each step is logical."
  },
  {
    k: "lexical analysis",
    r: "Lexical analysis breaks code into tokens. Imagine splitting a sentence into meaningful words."
  },
  {
    k: "parsing",
    r: "Parsing checks grammar of code. LL and LR parsing feel easier with small examples."
  },
  {
    k: "syntax tree",
    r: "Syntax tree is a visual representation of code structure. Once you draw 2–3 trees, the idea becomes clear."
  },

  {
    k: "python",
    r: "Python is simple and forgiving. Start with loops and lists—your confidence grows naturally."
  },
  {
    k: "java",
    r: "Java is strict but powerful. Master OOP + strings + exceptions—you’ll feel proud of your progress."
  },
  {
    k: "c",
    r: "C requires patience. Pointers will scare you at first, but once you understand memory, you’ll feel strong."
  },
  {
    k: "javascript",
    r: "JavaScript gives life to webpages. Start with DOM and events—small successes build big confidence."
  },
  {
    k: "html",
    r: "HTML is structure. Build 2–3 pages—your understanding deepens without effort."
  },
  {
    k: "css",
    r: "CSS is creativity. Learn Flexbox and Grid—they make layouts easy and enjoyable."
  },
  {
    k: "node",
    r: "Node.js is backend made simple. Master routing and APIs first—rest becomes smooth."
  },
  
  {
    k: "ai",
    r: "AI feels big because it imitates human thinking. Start with search algorithms and logic—slowly, you’ll notice how beautifully everything connects."
  },
  {
    k: "search algorithm",
    r: "Search algorithms are the foundation of AI. Visualize the steps—your brain naturally learns the path and decisions being made."
  },
  {
    k: "bfs in ai",
    r: "BFS explores level by level, just like expanding your comfort zone slowly. Once visualized, it stops feeling scary."
  },
  {
    k: "dfs in ai",
    r: "DFS goes deep first then backtracks. Just like solving life problems—you explore deeply and return if needed."
  },
  {
    k: "heuristic",
    r: "Heuristics guide decisions smartly. Think of them as intuition—imperfect but helping you reach faster."
  },
  {
    k: "a star",
    r: "A* is optimal and fast because it mixes real cost + estimated cost. It’s like smart planning in life: combine facts with intuition."
  },
  {
    k: "ml",
    r: "Machine learning feels overwhelming at first, but remember—models learn the way humans do: slowly, with examples."
  },
  {
    k: "machine learning",
    r: "ML is pattern recognition. Start with simple algorithms like Linear Regression and let your confidence grow step by step."
  },
  {
    k: "supervised learning",
    r: "Supervised learning is like learning with a teacher guiding you with labeled examples. Slowly, you begin making your own predictions too."
  },
  {
    k: "unsupervised learning",
    r: "Unsupervised learning is self-exploration—discovering patterns without help. Cluster visualizations make it more intuitive."
  },
  {
    k: "regression",
    r: "Regression predicts numbers using trends. Plot the data once—seeing the line makes everything make sense."
  },
  {
    k: "classification",
    r: "Classification groups items meaningfully. Visualising 2D plane predictions brings clarity and confidence."
  },
  {
    k: "logistic regression",
    r: "Despite its name, logistic regression is classification. The sigmoid curve is the heart—once understood, fear reduces."
  },
  {
    k: "svm",
    r: "SVM finds the best boundary between classes. Imagine drawing the perfect line separating two groups—it’s powerful and elegant."
  },
  {
    k: "naive bayes",
    r: "Naive Bayes seems simple but is surprisingly strong. It’s like trusting probabilities logically rather than overthinking."
  },
  {
    k: "decision tree",
    r: "Decision trees split decisions step by step. Just like life—one choice leads to another."
  },
  {
    k: "random forest",
    r: "Random Forest uses many trees for stability. It teaches that collective wisdom often beats individual decisions."
  },
  {
    k: "knn",
    r: "KNN predicts based on similar neighbors. It’s comforting—what’s close to you influences the outcome."
  },
  {
    k: "k means",
    r: "K-Means groups similar data. Initializing clusters right helps a lot—visualizing them gives clarity."
  },
  {
    k: "pca",
    r: "PCA reduces dimensions but keeps the soul of data. It feels magical once you see the visual transformation."
  },
  {
    k: "feature selection",
    r: "Feature selection removes noise and highlights useful signals. It’s like simplifying your life by focusing on what matters."
  },
  {
    k: "overfitting",
    r: "Overfitting means the model memorizes instead of learning. Just like humans, too much detail can confuse clarity."
  },
  {
    k: "underfitting",
    r: "Underfitting happens when the model learns too little. Every algorithm needs the right balance—just like life."
  },
  {
    k: "deep learning",
    r: "Deep Learning feels intense because it mimics the brain. Start with basics—gradually the magic becomes logical."
  },
  {
    k: "neural network",
    r: "Neural networks learn through weights adjusting slowly. Be patient—the concept grows clearer with each example."
  },
  {
    k: "activation function",
    r: "Activation functions decide how strongly a neuron fires. They bring life to networks—ReLU and sigmoid are great to start with."
  },
  {
    k: "relu",
    r: "ReLU is simple—negative becomes zero. It gives models strength by making training faster and more stable."
  },
  {
    k: "sigmoid",
    r: "Sigmoid squashes values between 0 and 1. It’s a gentle curve—great for binary outputs."
  },
  {
    k: "cnn",
    r: "CNNs see images like humans—through edges and patterns. Understanding filters feels emotional because it mirrors our vision."
  },
  {
    k: "pooling",
    r: "Pooling reduces image size while preserving features. It’s like focusing only on important details."
  },
  {
    k: "rnn",
    r: "RNNs remember sequences. They understand order like humans remember sentences or melodies."
  },
  {
    k: "lstm",
    r: "LSTMs handle long-term memory. They forget only what’s not needed—beautiful, just like emotional healing."
  },
  {
    k: "transformer",
    r: "Transformers changed AI with attention mechanisms. They learn relationships globally, not step by step."
  },
  {
    k: "attention",
    r: "Attention tells the model what to focus on. It’s powerful—just like in real life"
  },
  {
    k: "nlp",
    r: "NLP teaches machines language. Start with tokenization and stemming—your confidence grows quickly."
  },
  {
    k: "tokenization",
    r: "Tokenization breaks sentences into words. It’s the first step in understanding meaning."
  },
  {
    k: "stemming",
    r: "Stemming cuts words to their root form. It simplifies input so models learn better."
  },
  {
    k: "lemmatization",
    r: "Lemmatization is smarter—all words return to meaningful roots. It’s slow but logically beautiful."
  },
  {
    k: "bag of words",
    r: "BoW converts text to numbers. It’s simple and shows that even basic models can be powerful."
  },
  {
    k: "tf idf",
    r: "TF-IDF highlights important words. It’s like noticing which details matter in a story."
  },
  {
    k: "embedding",
    r: "Embeddings convert meaning into vectors. Words with similar feelings stay close—it’s emotional and mathematical."
  },
  {
    k: "word2vec",
    r: "Word2Vec learns word relationships like friendships. Similar words become neighbors in vector space."
  },
  {
    k: "bert",
    r: "BERT understands context deeply. It reads both forward and backward—like humans trying to understand emotions."
  },
  {
    k: "computer vision",
    r: "Computer Vision makes machines see. Start with image filters—you’ll enjoy watching transformations."
  },
  {
    k: "edge detection",
    r: "Edge detection highlights boundaries. It’s how machines learn to identify shapes and structures."
  },
  {
    k: "object detection",
    r: "Object detection finds what’s inside an image. YOLO and R-CNN are great to explore slowly."
  },
  {
    k: "data science",
    r: "Data Science is storytelling through data. Clean → explore → model—this flow makes learning smooth and enjoyable."
  },
  {
    k: "data cleaning",
    r: "Cleaning data feels boring but brings clarity. Beautiful insights appear once noise disappears."
  },
  {
    k: "eda",
    r: "EDA helps you understand data deeply. Each chart reveals a hidden story waiting to be seen."
  },
  
  {
    k: "cyber security",
    r: "Cybersecurity protects systems from unseen threats. It may feel technical, but remember—you’re learning how to protect others and create safety. That purpose makes the effort meaningful."
  },
  {
    k: "malware",
    r: "Malware harms systems silently. Understanding types like viruses, worms, and Trojans helps you feel more in control, not scared."
  },
  {
    k: "virus in computer",
    r: "A virus attaches itself to programs and spreads. It's like negativity—once identified, removing it restores peace."
  },
  {
    k: "worm attack",
    r: "Worms spread without human action. Their behavior teaches how one careless click can open doors—awareness is your shield."
  },
  {
    k: "trojan",
    r: "Trojans hide inside trusted software. It’s a reminder that not everything safe-looking is harmless—stay thoughtful online."
  },
  {
    k: "ransomware",
    r: "Ransomware locks your data until ransom is paid. Harsh, but learning prevention gives you power to protect yourself."
  },
  {
    k: "phishing",
    r: "Phishing tricks people emotionally. Awareness and double-checking links protect you more than any tool."
  },
  {
    k: "ddos attack",
    r: "DDoS overwhelms a server with traffic. It’s like being mentally overloaded—systems crash when pressure is too high."
  },
  {
    k: "sql injection",
    r: "SQL injection manipulates a database query. Validating input creates strong walls—logic defeats danger."
  },
  {
    k: "xss attack",
    r: "XSS injects malicious scripts into websites. Sanitizing data is like cleaning your mind—keeps everything safe and clear."
  },
  {
    k: "brute force attack",
    r: "Brute force tries passwords repeatedly. Strong passwords are your emotional and digital armor."
  },
  {
    k: "firewall",
    r: "Firewalls filter traffic. They remind you that setting boundaries protects both systems and people."
  },
  {
    k: "ids ips",
    r: "IDS detects threats, IPS blocks them. Together, they feel like intuition plus action—a perfect duo."
  },
  {
    k: "encryption",
    r: "Encryption converts data into unreadable form. It’s like sharing secrets only with those you trust."
  },
  {
    k: "hashing",
    r: "Hashing stores irreversible values. It’s one-way for a reason—some information shouldn’t be undone."
  },
  {
    k: "md5",
    r: "MD5 is a hashing algorithm but outdated. Good to learn, not good to use for security today."
  },
  {
    k: "sha256",
    r: "SHA256 is secure and widely used. It gives strong protection with minimal weakness."
  },
  {
    k: "zero trust",
    r: "Zero Trust means ‘trust no one, verify everything.’ Emotionally and digitally, this principle avoids damage."
  },
  {
    k: "network security",
    r: "Network security guards the routes your data travels. Understanding layers gives you confidence."
  },
  {
    k: "vpn",
    r: "VPN encrypts your connection. It’s like travelling invisibly—safe and private."
  },
  {
    k: "authentication",
    r: "Authentication verifies identity. Strong methods protect systems like clarity protects relationships."
  },
  {
    k: "authorization",
    r: "Authorization decides permissions. Even trusted people need boundaries."
  },
  {
    k: "social engineering",
    r: "Social engineering manipulates emotions to steal information. Awareness is the biggest defense."
  },
  {
    k: "cyber ethics",
    r: "Cyber ethics means using knowledge with responsibility. Ethical skills make you a protector, not a threat."
  },

  // IoT
  {
    k: "iot",
    r: "IoT connects devices to communicate. It’s a world where everything collaborates—like a community supporting each other."
  },
  {
    k: "iot architecture",
    r: "IoT architecture has sensors, networks, and cloud layers. Understanding flow makes everything click."
  },
  {
    k: "sensor",
    r: "Sensors collect real-world data. They remind us that small observations create big insights."
  },
  {
    k: "actuator",
    r: "Actuators convert data into actions. It’s technology responding to emotion-like triggers."
  },
  {
    k: "mqtt",
    r: "MQTT is a lightweight messaging protocol. Perfect for IoT because it respects limited power and bandwidth."
  },
  {
    k: "coap",
    r: "CoAP is designed for constrained devices. Simplicity makes it strong for IoT environments."
  },
  {
    k: "iot security",
    r: "IoT devices are vulnerable because they’re everywhere. Securing them feels like caring for a huge family of devices."
  },
  {
    k: "arduino",
    r: "Arduino brings ideas to life. Your creativity becomes reality when circuits respond to your code."
  },
  {
    k: "raspberry pi",
    r: "Raspberry Pi is a tiny computer with big capabilities. It encourages you to experiment and innovate."
  },
  {
    k: "smart home",
    r: "Smart homes automate daily tasks. It’s amazing how simple sensors create comfort and ease."
  },
  {
    k: "wearable devices",
    r: "Wearables collect health data. They remind you that technology can genuinely improve human well-being."
  },
  {
    k: "embedded system",
    r: "Embedded systems perform specific tasks. They’re quiet heroes inside every device you use."
  },

  // Networking
  {
    k: "computer networks",
    r: "Networks connect multiple systems. Once layers are clear, the subject becomes meaningful and logical."
  },
  {
    k: "osi model",
    r: "OSI Model has 7 layers. It’s like stairs—take one step at a time and everything makes sense."
  },
  {
    k: "tcp ip model",
    r: "TCP/IP has 4 layers and is used in real networks. It simplifies OSI but keeps the essence."
  },
  {
    k: "ip address",
    r: "An IP address is a device’s identity. Just like humans need names, devices need addresses."
  },
  {
    k: "ipv4",
    r: "IPv4 uses 32 bits and is nearly exhausted. Learning subnetting builds a strong foundation."
  },
  {
    k: "ipv6",
    r: "IPv6 offers huge address space. It’s the future—embrace it slowly."
  },
  {
    k: "subnetting",
    r: "Subnetting divides networks logically. Practice makes it feel surprisingly elegant."
  },
  {
    k: "mac address",
    r: "MAC address is hardware identity. It’s permanent—like a fingerprint."
  },
  {
    k: "router",
    r: "A router forwards packets intelligently. It chooses the best path—like life directing you to better roads."
  },
  {
    k: "switch",
    r: "Switches connect devices in a network. They make communication efficient and organized."
  },
  {
    k: "dns",
    r: "DNS translates domain names to IPs. It’s like a phonebook for the internet."
  },
  {
    k: "dhcp",
    r: "DHCP assigns IP addresses automatically. It brings order to chaos effortlessly."
  },

  // Cloud
  {
    k: "cloud computing",
    r: "Cloud computing offers resources over the internet. It removes heavy burdens and gives flexibility."
  },
  {
    k: "iaas",
    r: "IaaS provides virtual hardware. You control almost everything with full freedom."
  },
  {
    k: "paas",
    r: "PaaS offers a ready platform for developers. It frees you from managing infrastructure."
  },
  {
    k: "saas",
    r: "SaaS provides ready-to-use software. It’s convenient and effortless for users."
  },
  {
    k: "virtualization",
    r: "Virtualization creates multiple virtual machines. It teaches resource sharing in a powerful way."
  },
  {
    k: "docker",
    r: "Docker packages applications as containers. It removes the ‘it works on my system’ problem."
  },
  {
    k: "kubernetes",
    r: "Kubernetes orchestrates containers automatically. It’s complex but becomes beautiful once understood."
  },
  {
    k: "aws",
    r: "AWS is the largest cloud provider. Start with EC2 and S3—small steps build big confidence."
  },
  {
    k: "azure",
    r: "Azure integrates beautifully with Microsoft services. It's beginner-friendly and powerful."
  },
  {
    k: "gcp",
    r: "GCP is known for speed and AI features. A great choice if you love data science."
  }



];


// Named export
export default function getAIReply(message) {
  if (!message || typeof message !== "string") {
    return "I'm here to help — please tell me your concern.";
  }

  const msg = message.toLowerCase();
  for (const entry of aiKnowledgeBase) {
    if (msg.includes(entry.k)) return entry.r;
  }

  return "I understand your concern. I will notify your counsellor shortly.";
}