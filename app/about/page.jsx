"use client";
import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="pt-[120px] md:pb-[50px] pt-20px pb-[20px]">
      <div className="container mx-auto">
        <Heading title="אודות" />
        <div className="alcohol-market-content">
          <div className="grid md:grid-cols-2 2xl:gap-20 md:gap-10 gap-5 py-[40px]">
            <div className="">
              <Image src="/images/about4.avif" alt="about" height={400} width={400} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="">
                <h2 className="text-[16px] font-medium">
                  מוצרים נבחרים וביקורות:
                </h2>
                <ul className="list-disc list-inside">
                  <li>
                    כתוב ביקורות ותיאורים מפורטים של יינות פופולריים, מותגי
                    וויסקי ורכיבים לקוקטיילים הזמינים בשוק שלך.
                  </li>
                  <li>
                    הדגש תכונות ייחודיות, תוויות טעם והמלצות להגשה לכל מוצר.
                  </li>
                  <li>
                    כלול תמונות באיכות גבוהה של הבקבוקים והקוקטיילים כדי לשואף
                    את המבקרים.
                  </li>
                </ul>
              </div>
              <div className="">
                <h2 className="text-[16px] font-medium">
                  טיפים ומתכונים למיקסולוגיה:
                </h2>
                <ul className="list-disc list-inside">
                  <li>
                    הצע מגוון של מתכונים לקוקטיילים הכוללים סוגי אלכוהול שונים,
                    כמו קוקטיילים קלאסיים של וויסקי, קוקטיילים מבוססי יין
                    ומשקאות מעורבים יצירתיים.
                  </li>
                  <li>
                    ספק הוראות שלב אחרי שלב, בנוסף לטיפים לבחירת הרכיבים הנכונים
                    והתיקונים.
                  </li>
                  <li>
                    כלול סרטונים או GIFים המדגימים טכניקות הכנת הקוקטיילים
                    ללומדים חזותיים.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 2xl:gap-20 md:gap-10 gap-5 py-[40px]">
            <div className="flex flex-col gap-3">
              <div className="">
                <h2 className="text-[16px] font-medium">
                  חינוך על יין וויסקי:
                </h2>
                <ul className="list-disc list-inside">
                  <li>
                    צור מאמרים מידעניים ומדריכים על נושאים כמו זני יין, שיטות
                    ייצור של וויסקי, תהליכי ההתבגרות וטכניקות טעימה.
                  </li>
                  <li>
                    הצע המלצות לשילובי מזון המתאימים ליינות וויסקי מסוימים.
                  </li>
                  <li>
                    שלב תרשימים או טבלאות להמחשת מושגים מרכזיים ופרופילי טעם.
                  </li>
                </ul>
              </div>
              <div className="">
                <h2 className="text-[16px] font-medium">עונות ונושאי חג:</h2>
                <ul className="list-disc list-inside">
                  <li>
                    קורט תוכן סביב מגמות עונתיות וחגים, והצע משקאות מתאימים
                    למקרים כמו חג ההודיה, חג המולד, ראש השנה, וכו'.
                  </li>
                  <li>
                    המלץ על קוקטיילים בערכות או שילובי יין לברביקיו בקיץ, לילות
                    חורף נעימים, בראנצ'ים באביב, וכו'.
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <Image src="/images/about.avif" alt="about" height={400} width={400} />
            </div>
          </div>
          <div className="grid md:grid-cols-2 2xl:gap-20 md:gap-10 gap-5 py-[40px]">
            <div className="">
              <Image src="/images/about3.avif" alt="about" height={500} width={500} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="">
                <h2 className="text-[16px] font-medium">
                  חדשות וטרנדים בתעשיית האלכוהול:
                </h2>
                <ul className="list-disc list-inside">
                  <li>
                    הישאר מעודכן עם התפתחויות האחרונות בתעשיית האלכוהול, כולל
                    השקות מוצרים חדשים, אירועי תעשייה וטרנדים חדשים.
                  </li>
                  <li>
                    כתוב מאמרים המדוברים בחדשנות בהילחם, שיטות ייצור של יין,
                    מאמצי הקיימות, והעדפות הצרכנים.
                  </li>
                  <li>
                    ראייון עם מומחים בתעשיית האלכוהול, ברמנים וסומלייה על תובנות
                    ופרספקטיבות על נושאים נוכחיים.
                  </li>
                </ul>
              </div>
              <div className="">
                <h2 className="text-[16px] font-medium">
                  התייחסות לבריאות ולטיפול:
                </h2>
                <ul className="list-disc list-inside">
                  <li>
                    עסוק בשאלות נפוצות ובדאגות על השפעת הצריבה של צריבת
                    האלכוהול.
                  </li>
                  <li>
                    ספק מידע על שימור, תרגולים בשתייה אחראית ועל יתרונות
                    בריאותיים אפשריים (לדוגמה, חומצות חומצית ביין אדום).
                  </li>
                  <li>
                    הצע אפשרויות לקוקטיילים ללא אלכוהול או אפשרויות עם כמות
                    נמוכה של אלכוהול עבור אלה שמחפשים אלטרנטיבות קלות יותר.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 2xl:gap-20 md:gap-10 gap-5 py-[40px]">
            <div className="flex flex-col gap-3">
              <div className="">
                <h2 className="text-[16px] font-medium">
                  תכונות אינטרקטיביות וחידושים:
                </h2>
                <ul className="list-disc list-inside">
                  <li>
                    מעורר עניין את המבקרים עם חידושים אינטרקטיביים או סקרים
                    לגלות את ההעדפות שלהם בשתייה או ברמה הידע.
                  </li>
                  <li>
                    צור אתגרים או תחרויות בעלות נושאים בהם המשתמשים יכולים לשלוח
                    מתכונים קוקטיילים או שילובי יין לסיכוי להופיע באתר.
                  </li>
                  <li>
                    יישם מערכת דירוג או קטע ביקורות משתמשים כדי לעודד אינטראקציה
                    ומשוב מהקהילה.
                  </li>
                </ul>
              </div>
              <div className="">
                <h2 className="text-[16px] font-medium">
                  מותגים מובחרים ושותפויות:
                </h2>
                <ul className="list-disc list-inside">
                  <li>
                    שתף פעולה עם מותגי אלכוהול, יקבים וישיות להצגת מוצריהם דרך
                    תוכן ממומן או מבצעים מוצגים.
                  </li>
                  <li>
                    הצע הנחות או מבצעים בלעדיים למבקרים הרוכשים מוצרים דרך
                    קישורי איפיון באתר שלך.
                  </li>
                  <li>
                    הדגש כל שותפויות או שיתופי פעולה עם עסקים מקומיים או אירועים
                    בתעשיית האלכוהול.
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <Image src="/images/about1.avif" alt="about" height={400} width={400} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
