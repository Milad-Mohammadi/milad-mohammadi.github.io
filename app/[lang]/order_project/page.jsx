"use client";
import {
  Button,
  Input,
  ScrollShadow,
  Select,
  SelectItem,
  Spacer,
  Textarea,
} from "@nextui-org/react";
import PageContainer from "@/app/components/container/PageContainer";
import { getDictionary } from "../dictionaries";
import TextTitleMedium from "@/app/components/text/TextTitleMedium";
import TextBody60 from "@/app/components/text/TextBody60";
import TextTitleSmall from "@/app/components/text/TextTitleSmall";
import Link from "next/link";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const plans = ["مشاوره", "وب‌سایت", "اندروید"];
  const menuClassnames =
    "hover:text-primary hover:font-bold dark:hover:text-onBlack";

  const onSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const plan = formData.get("plan");
    const email = formData.get("email");
    const company = formData.get("company");
    const projectName = formData.get("projectName");
    const country = formData.get("country");
    const state = formData.get("state");
    const description = formData.get("description");

    const formattedText = `
  Name: ${name}
  Plan: ${plan}
  Company: ${company}
  Project Name: ${projectName}
  Country: ${country}
  State: ${state}
  Description: ${description}
`;

    fetch("https://formcarry.com/s/zWGUQedrzGY", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, formattedText }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");
        } else if (response.code === 422) {
          setError(response.message);
        } else {
          setError(response.message);
        }
      })
      .catch((error) => {
        setError(error.message ? error.message : error);
      });
  };

  return (
    <PageContainer language={lang}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 p-6">
        <ScrollShadow
          hideScrollBar
          className="order-last md:order-first h-fit md:h-[700px]"
        >
          <TextTitleMedium
            text="روند توسعه وب‌سایت و  اپلیکیشن اندروید"
            className="my-4"
          />
          <TextBody60 text="پروسه توسعه وب و اپلیکیشن می‌تواند بسته به نوع پروژه، مراحل متفاوتی داشته باشد. به صورت کلی، روند توسعه وب‌سایت و اپلیکیشن توسط تیم من به صورت زیر می‌باشد." />

          <TextTitleSmall text="مراحل کلی" className="mt-4 mb-1" />
          <Link href="#rules">
            <TextBody60
              text="■ قوانین و مقررات پیش از قرارداد"
              className={menuClassnames}
            />
          </Link>
          <Link href="#order">
            <TextBody60
              text="■ دریافت سفارش پروژه"
              className={menuClassnames}
            />
          </Link>
          <Link href="#meeting">
            <TextBody60
              text="■ جلسه مشاوره و ارائه پیشنهادات تخصصی"
              className={menuClassnames}
            />
          </Link>
          <Link href="#contract">
            <TextBody60 text="■ عقد قرارداد" className={menuClassnames} />
          </Link>
          <Link href="#design">
            <TextBody60 text="■ طراحی" className={menuClassnames} />
          </Link>
          <Link href="#development">
            <TextBody60 text="■ توسعه" className={menuClassnames} />
          </Link>
          <Link href="#test">
            <TextBody60 text="■ تست نهایی" className={menuClassnames} />
          </Link>
          <Link href="#teach">
            <TextBody60 text="■ آموزش کامل" className={menuClassnames} />
          </Link>
          <Link href="#finish">
            <TextBody60 text="■ نهایی‌سازی پروژه" className={menuClassnames} />
          </Link>

          <div id="rules" className="pt-16">
            <TextTitleSmall
              text="قوانین و مقررات پیش از قرارداد"
              className="mb-1"
            />
            <TextBody60 text="🔴 سفارشاتی که موارد ناقض قانون در آن ها وجود داشته باشد (مثلا: وبسایت یا اپلیکیشن شرط‌بندی، اپلیکیشن با امکان تقلب توسط ادمین و پروژه‌هایی با محتوای غیراخلاقی و...)، با عرض معذرت قابل قبول نیستند و پاسخی در رابطه با این نوع سفارشات دریافت نخواهید کرد." />
            <TextBody60 text="🔴 پرداخت‌ها در پروژه باید منطبق با توافق صورت گرفته در قرارداد باشند و هرگونه بدقولی در پرداخت باعث اتمام همکاری خواهد شد." />
            <TextBody60 text="🔴 اگر نیازمندی‌های پروژه به صورت کامل مشخص نیستند و ابهاماتی برای شما در این رابطه وجود دارد از فرم مربوطه در همین صفحه می‌توانید درخواست مشاوره تخصصی داشته باشید. هزینه مشاوره برای یک جلسه یک ساعته ۲۶۰ هزار تومان می‌باشد." />
          </div>

          <div id="order" className="pt-16">
            <TextTitleSmall text="دریافت سفارش پروژه" className="mb-1" />
            <TextBody60 text="معمولا سفارش پروژه پس از ارتباط با شما و دریافت جزئیات پروژه، حداکثر طی ۴۸ ساعت (دو روز کاری) بررسی خواهد شد و نتیجه بررسی برای تعیین وقت مشاوره تخصصی و ارائه پیشنهادات تیم توسعه توسط شخص بنده از طریق ایمیل اعلام خواهد شد." />
          </div>

          <div id="meeting" className="pt-16">
            <TextTitleSmall
              text="جلسه مشاوره و ارائه پیشنهادات تخصصی"
              className="mb-1"
            />
            <TextBody60 text="پس از بررسی دقیق نیازمندی‌های پروژه، با شما تماس خواهیم گرفت و زمان مناسبی را برای جلسه حضوری یا آنلاین تنظیم خواهیم کرد تا به صورت دقیق‌تر و این بار از دید شما پروژه را بررسی کنیم تا جزئیات کوچک را برای پیاده‌سازی پروژه از دست ندهیم. در این جلسه پیشنهادات تخصصی مرتبط با پروژه شما برای بهبود کیفیت و دستیابی به نسخه مطلوب از نیازمندی‌های شما نیز ارائه خواهد شد. پس از پایان جلسه، پیش‌قراردادی تنظیم و برای شما ارسال خواهد شد." />
          </div>

          <div id="contract" className="pt-16">
            <TextTitleSmall text="عقد قرارداد" className="mb-1" />
            <TextBody60 text="پس از تایید پیش‌فرارداد و ضمیمه‌های مربوطه و نهایی شدن قیمت، قرارداد اصلی تنظیم خواهد شد که در دو نسخه‌ی فیزیکی به امضای طرفین خواهد رسید." />
          </div>

          <div id="design" className="pt-16">
            <TextTitleSmall text="طراحی" className="mb-1" />
            <TextBody60 text="اگر رابط کاربری پروژه شما طراحی نشده باشد، این کار در این مرحله به صورت کامل انجام خواهد شد. در مراحل بعدی، رابط کاربری دقیقا مطابق آنچه در این مرحله طراحی شده است پیاده‌سازی خواهد شد. طبق آنچه در قرارداد ذکر خواهد شد شما می‌توانید با تعداد و درصد مشخص تغییرات مورد نظر خود را در طراحی اعمال کنید و پس از تایید نهایی فاز بعدی شروع خواهد شد." />
          </div>

          <div id="development" className="pt-16">
            <TextTitleSmall text="توسعه" className="mb-1" />
            <TextBody60 text="این مرحله مهم‌ترین و زمان‌برترین مرحله کار است و خود شامل مراحل متعددی می‌شود. این مراحل به صورت دقیق به کارفرما توضیح داده خواهد شد و گزارش پیشرفت در هر مرحله به صورت متنی و خروجی (ویدیویی / اپلیکیشن - طبق توافق قرارداد) تقدیم خواهد شد." />
          </div>

          <div id="test" className="pt-16">
            <TextTitleSmall text="تست نهایی" className="mb-1" />
            <TextBody60 text="ممکن است ایراداتی در محصول نهایی وجود داشته باشد که حین کار متوجه آن نشده‌ایم، در این مرحله، تست کامل توسط تیم توسعه و همچنین کارفرما انجام خواهد شد و ایرادات موجود در محصول رفع خواهد شد. در این مرحله اطمینان پیدا می‌کنیم که کاربر نهایی با مشکل خاصی در محصول روبرو نشود." />
          </div>

          <div id="teach" className="pt-16">
            <TextTitleSmall text="آموزش کامل" className="mb-1" />
            <TextBody60 text="پس از تکمیل توسعه و تست نهایی، آموزش کامل استفاده از وبس‌سایت یا اپلیکیشن به کارفرما داده می‌شود، با توجه به نوع پروژه، این آموزش می‌تواند در قالب‌های متفاوتی (متنی، صوتی یا ویدیویی) باشد." />
          </div>

          <div id="finish" className="pt-16">
            <TextTitleSmall text="نهایی‌سازی پروژه" className="mb-1" />
            <TextBody60 text="در این مرحله، برای وب‌سایت‌ها، پروژه روی دامنه‌ی اصلی مستقر خواهد شد و برای اپلیکیشن‌های اندرویدی، خروجی اصلی به کارفرما ارائه شده و در صورت توافق، در فروشگاه‌های نرم‌افزاری (مثل Play Store، کافه بازار یا مایکت) بارگذاری می‌شود." />
          </div>

          <div id="time" className="pt-20">
            <TextTitleSmall text="مدت زمان مورد نیاز" className="mb-1" />
            <TextBody60 text="بسته به نوع محصول (وب‌سایت یا اپلیکیشن اندروید) زمان متغیر بوده و کاملا بستگی به نوع و حجم پروژه دارد. این زمان می‌تواند از دو هفته تا دو ماه (برای پروژه‌های عادی) و چندین ماه (برای پروژه‌های خاص و یا بزرگ) به طول انجامد. در رابطه با این زمان به صورت کامل صحبت صورت خواهد گرفت و محدودیت زمانی و مهلت پیمانکار (تیم توسعه من) در قرارداد ذکر خواهد شد." />
          </div>

          <div id="price">
            <TextTitleSmall text="عوامل موثر بر قیمت" className="mt-4 mb-1" />
            <TextBody60 text="نوع پروژه، نیازمندی‌های خاص و موارد متعدد مرتبط با طراحی و توسعه روی قیمت نهایی موثر خواهند بود، در جلسه اولیه با کارفرما با توجه به بودجه و محدودیت زمانی کارفرما، پیشنهاداتی در این رابطه ارائه خواهد شد که انتخاب نهایی بر عهده کارفرما خواهد بود، اما تنوع زمانی و قیمت به پروژه و نوع آن بستگی دارد." />
          </div>

          <div id="payment">
            <TextTitleSmall text="نحوه‌ی پرداخت" className="mt-4 mb-1" />
            <TextBody60 text="هزینه‌های مربوط به سرور/هاست و دامنه به صورت جداگانه اعلام خواهد شد و توسط من دریافت نخواهد شد. هزینه طراحی و توسعه اما بسته به توافق صورت گرفته در قرارداد، پرداخت‌ها در چند مرحله صورت می‌گیرد. یک سوم از هزینه در هنگام عقد قرارداد، یک سوم هزینه پس از نهایی‌سازی طراحی و یک‌سوم هزینه پس از اتمام پروژه دریافت می‌شود." />
          </div>

          <div id="question">
            <TextTitleSmall text="سوالی دارید؟" className="mt-4 mb-1" />
            <TextBody60 text="اگر هنوز ابهاماتی دارید که به آن‌ها پاسخ داده نشده است، می‌توانید سوال خود را با استفاده از راه‌های ارتباطی زیر از من بپرسید و یا برای تنظیم وقت مشاوره تخصصی از طریق فرم موجود در همین صفحه اقدام کنید." />
          </div>
        </ScrollShadow>
        <form className="flex flex-col gap-4 mt-10" onSubmit={onSubmit}>
          <Input
            name="name"
            type="name"
            variant="bordered"
            placeholder="نام و نام خانوادگی"
          />

          <Input
            name="email"
            type="email"
            variant="bordered"
            placeholder="ایمیل"
          />

          <Select
            name="plan"
            variant="bordered"
            placeholder="پلن مورد نظر"
            classNames={{
              value: `${lang === "fa" ? "text-start px-6" : ""}`,
              placeholder: `${lang === "fa" ? "text=start" : ""}`,
            }}
          >
            {plans.map((plan) => (
              <SelectItem key={plan} value={plan}>
                {plan}
              </SelectItem>
            ))}
          </Select>

          <Input
            name="company"
            variant="bordered"
            placeholder="نام شرکت / مجموعه"
          />

          <Input
            name="projectName"
            variant="bordered"
            placeholder="نام پروژه"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <Input name="country" variant="bordered" placeholder="کشور" />
            <Input name="state" variant="bordered" placeholder="استان" />
          </div>

          <Textarea name="message" variant="bordered" placeholder="توضیحات" />
          <Button className="w-full" color="primary" type="submit">
            ارسال
          </Button>
        </form>
      </div>
    </PageContainer>
  );
}
