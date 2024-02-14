"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    question: "1. הסכמה לתנאים",
    answer:
      'תנאים והגבלות אלה מהווים הסכם משפטי מחייב שנערך בינך, בין אם באופן אישי ובין אם מטעם ישות ("אתה") לבין משקאות מיוחדים מוגבל, העושה עסקים כ-בורסת הוויסקי ("בורסת הוויסקי", "אנחנו", "אנחנו" ", או "שלנו"), לגבי הגישה והשימוש שלך לאתר https://thewhiskyexchange.com וכן כל טופס מדיה אחר, ערוץ מדיה, אתר נייד או אפליקציה לנייד הקשורים, מקושרים או קשורים אליהם באופן אחר (ביחד , האתר"). אנחנו רשומים באנגליה ובוויילס ויש לנו את המשרד הרשום שלנו ב- בית אליקסיר,שדרת ויטבי, פארק רויאל, לונדון  7SF. מספר הרישום של החברה שלנו הוא 4449145. מספר המע"מ שלנו הוא GB364951176. מספר ה-EORI שלנו הוא GB364951176000. אנו מורשים למכור אלכוהול. אתה מסכים שעם הגישה לאתר קראת, הבנת והסכמת להיות מחויב לכל תנאי השימוש הללו. אם אינך מסכים לכל תנאי השימוש הללו, נאסר עליך במפורש להשתמש באתר ועליך להפסיק את השימוש לאלתר. תנאים והגבלות משלימים או מסמכים שעשויים להתפרסם באתר מעת לעת משולבים בזאת כאן בהפניה. אנו שומרים לעצמנו את הזכות, לפי שיקול דעתנו הבלעדי, לבצע שינויים או שינויים בתנאי שימוש אלה מעת לעת. אנו נודיע לך על כל שינוי על ידי עדכון התאריך "העדכון האחרון" של תנאי שימוש אלה, ואתה מוותר על כל זכות לקבל הודעה ספציפית על כל שינוי כזה. אנא ודא שאתה בודק את התנאים הרלוונטיים בכל פעם שאתה משתמש באתר שלנו כדי שתבין אילו תנאים חלים. אתה תהיה כפוף, ותיחשב כאילו נודע לך וכמי שקיבלת, את השינויים בכל תנאים מתוקנים של שימוש על ידי המשך השימוש שלך באתר לאחר תאריך פרסום תנאי השימוש המתוקנים כאמור. המידע המסופק באתר אינו מיועד להפצה או שימוש על ידי כל אדם או ישות בכל תחום שיפוט או מדינה שבה הפצה או שימוש כאלה יהיו. בניגוד לחוק או לתקנה או שיכפוף אותנו לכל דרישת רישום בתוך תחום שיפוט או מדינה כזו. בהתאם לכך, אותם אנשים שבוחרים לגשת לאתר ממקומות אחרים עושים זאת מיוזמתם והם האחראים הבלעדיים לעמידה בחוקים המקומיים, אם וככל שהחוקים המקומיים חלים.',
  },
  {
    question: "2.זכויות קניין רוחני",
    answer:
      'אלא אם צוין אחרת, האתר הוא הקניין שלנו וכל קוד המקור, מסדי הנתונים, הפונקציונליות, התוכנה, עיצובי האתרים, האודיו, הווידאו, הטקסט, התמונות והגרפיקה באתר (יחד, "התוכן") והסימנים המסחריים, השירות סימנים וסמלי לוגו הכלולים בהם ("הסימנים") הם בבעלותנו או בשליטתנו או ברישיון לנו, ומוגנים על ידי חוקי זכויות יוצרים וסימני מסחר וזכויות קניין רוחני שונות וחוקי תחרות בלתי הוגנים של בריטניה, ארצות הברית, זכויות יוצרים בינלאומיות חוקים, ואמנות בינלאומיות. התוכן והסימנים מסופקים באתר "כמות שהם" למידע שלך ולשימוש אישי בלבד. למעט כפי שצוין במפורש בתנאי שימוש אלה, אין להעתיק, לשכפל, לצבור, לפרסם מחדש, להעלות, לפרסם, להציג בפומבי, לקודד, לתרגם, לשדר, להפיץ, למכור, להעניק רישיון, לא להעתיק אף חלק מהאתר או תוכן או סימנים. מנוצל אחרת לכל מטרה מסחרית שהיא, ללא אישור מפורש מראש ובכתב שלנו. בתנאי שאתה זכאי להשתמש באתר, ניתן לך רישיון מוגבל לגשת לאתר ולהשתמש בו ולהוריד או להדפיס עותק של כל חלק מהתוכן שאליו השגת גישה נאותה אך ורק לשימושך האישי והלא מסחרי. אנו שומרים לעצמנו את כל הזכויות שלא הוענקו לך במפורש באתר ובאתר, לתוכן ולסימנים.',
  },
  {
    question: "3. נציגות משתמשים",
    answer:
      "על ידי השימוש באתר, אתה מצהיר ומתחייב כי: (1) כל פרטי הרישום שתשלח יהיו נכונים, מדויקים, עדכניים ומלאים; (2) תשמור על דיוק המידע האמור ותעדכן מיידית את פרטי הרישום לפי הצורך; (3) יש לך את הכשירות המשפטית ואתה מסכים לציית לתנאי שימוש אלה; (4) אינך קטין בשטח השיפוט שבו אתה מתגורר; (5) לא תיגש לאתר באמצעים אוטומטיים או לא אנושיים, בין אם באמצעות בוט, סקריפט או אחר; (6) לא תשתמש באתר לכל מטרה בלתי חוקית או לא מורשית; וכן (7) השימוש שלך באתר לא יפר שום חוק או תקנה החלים. אם תספק מידע שהוא לא נכון, לא מדויק, לא עדכני או לא שלם, יש לנו את הזכות להשעות או לסיים את חשבונך ולסרב לכל דבר. שימוש נוכחי או עתידי באתר (או כל חלק ממנו).",
  },
  {
    question: "4.רישום משתמש",
    answer:
      "ייתכן שתידרש להירשם לאתר. אתה מסכים לשמור על סודיות הסיסמה שלך ותהיה אחראי לכל שימוש בחשבון ובסיסמה שלך. אנו שומרים לעצמנו את הזכות להסיר, לתבוע מחדש או לשנות שם משתמש שבחרת אם אנו קובעים, לפי שיקול דעתנו הבלעדי, ששם משתמש כזה אינו הולם, מגונה או מעורר התנגדות אחרת.",
  },
  {
    question: "5.מוצר",
    answer:
      "אנו עושים כל מאמץ להציג בצורה מדויקת ככל האפשר את הצבעים, התכונות, המפרטים והפרטים של המוצרים הזמינים באתר. עם זאת, איננו מבטיחים שהצבעים, התכונות, המפרטים והפרטים של המוצרים יהיו מדויקים, מלאים, אמינים, עדכניים או נקיים משגיאות אחרות, וייתכן שהתצוגה האלקטרונית שלך לא תשקף במדויק את הצבעים והפרטים בפועל של מוצרים. כל המוצרים כפופים לזמינות, ואיננו יכולים להבטיח שהפריטים יהיו במלאי. אנו שומרים לעצמנו את הזכות להפסיק כל מוצר בכל עת מכל סיבה שהיא. המחירים של כל המוצרים כפופים לשינויים. במידת הצורך, קופסאות מצגת יסופקו רק עם בקבוק במקום בו הם מתוארים בתצלום המוצר, שימו לב כי ניתן לארוז את קופסאות המצגת בנפרד כדי להגן עליהן במעבר.",
  },
  {
    question: "6. רכישות ותשלום",
    answer:
      "אתה מסכים לספק מידע רכישה וחשבון עדכני, מלא ומדויק עבור כל הרכישות שבוצעו דרך האתר. בנוסף, אתה מסכים לעדכן מיידית את פרטי החשבון והתשלום, כולל כתובת דואל, אמצעי תשלום ותאריך תפוגה של כרטיס תשלום, כדי שנוכל להשלים את העסקאות שלך וליצור איתך קשר לפי הצורך. מע מ וכל מס מכירה ומכסים רלוונטיים יתווספו למחיר הרכישות כפי שנראה כנדרש על ידינו. אנו עשויים לשנות מחירים בכל עת. כל התשלומים יהיו בפאונד בריטי אלא אם נבחר מטבע אחר. אתה מסכים לשלם את כל החיובים במחירים שהיו אז בתוקף עבור הרכישות שלך וכל דמי משלוח החלים, ואתה מאשר לנו לחייב את ספק התשלומים שבחרת עבור כל סכומים כאלה בעת ביצוע ההזמנה. אנו שומרים לעצמנו את הזכות לתקן כל שגיאה או טעויות בתמחור, גם אם כבר ביקשנו או קיבלנו תשלום.",
  },
  {
    question: "7. מדיניות החזרות/החזרים",
    answer:
      "אנא עיין במדיניות ההחזרה שלנו המפורסמת באתר לפני ביצוע רכישות כלשהן.",
  },
];
const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="lg:mt-28 mb-10 mx-5 md:mx-0" data-aos="fade-up">
        <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[880px]  md:w-[600px] sm:w-[500px]   mx-auto mt-20 2xl:mt-44 lg:mt-28 sm:mt-24  nav">
          <h1 className="font-semibold text-[25px] sm:text-[25px] lg:text-2xl lg:my-10 ">
          תנאים והגבלות
          </h1>
          <div className=" ">
            {faqData.map((faq, index) => (
              <div key={index} className="mt-4 border-b border-gray-300">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleAccordion(index)}
                >
                  <h2 className="text-[#6d6c6c] font-medium text-[12px] lg:text-[16px] 2xl:text-[18px] py-3">
                    {faq.question}
                  </h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transition-transform transform ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`panel ${
                    activeIndex === index ? "show" : "hidden"
                  } text-gray-700 2xl:text-[18px] 2xl:leading-8 my-2 leading-7`}
                >
                  <p className="text-[12px] lg:text-[16px] 2xl:text-[18px] mb-81024 lg:mb-10">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
