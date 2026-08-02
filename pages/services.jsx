import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import ServicesGrid from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="خدماتنا"
        description="تعرف على جميع الخدمات الطبية التي يقدمها دكتور عمرو يزيد: جراحات الشبكية والجسم الزجاجي، حقن الشبكية، علاج الشبكية بالليزر، علاج المياه البيضاء وزراعة العدسات."
        path="/services"
      />
      <PageBanner title="خدماتنا" crumb="خدماتنا" />
      <ServicesGrid services={services} />
    </>
  );
}
