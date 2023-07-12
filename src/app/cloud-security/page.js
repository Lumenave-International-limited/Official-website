import React from "react";
import Grid from "@/components/innerPages/Grid";
import GridTwo from "@/components/innerPages/GridTwo";

const mainContent = [
  "Private Cloud Security",
  "The growing need to maximize investment, ensure service availability, and reduces time-to-market, is making many organization move their applications from physical servers to virtual servers.\n\nThe movement of applications to virtual but shared infrastructure not only comes with its attended resource bottlenecks but also comes with some security challenges-less visibility, less control of sensitive data,and high exposure to malware infection.\n\nLUMENAVE Security Solutions for private cloud help organizations define the critical security boundaries in their private cloud environment as data enters and leave the virtual machines. It gives organization that comfort of having thier information exchange within and outside the private cloud environment.",
  "/images/inner-images/cloud-1.jpg",
  "Public Cloud Security",
  "The adoption of public cloud services like Microsoft Azure, Microsoft Office365, Amazon Web Services, Google Web Services and many others is happening at a rapid pace. Today, organizations are gearing towards improving service availability, stay in constant touch with customer, and reduces operational cost.\n\nHence, it is no surprise that small and even large organization are putting their business applications in public infrastrucutre not own or control by them; thus trading security with availability.\n\nThat not withstanding, organizations still want to prevent unauthorized access to their data. They want to maintain some level of privacy and security to avoid data breaches. Hence, the need to providing security for data in public cloud has become a critical business necessity.\n\nLUMENAVE Security Solutions for public cloud from leading and industry - tested security companies put security power on the hands of the cloud subscribers. It provides an additional and a fallback security layer over the first - level protection by public cloud service provider. Hence, organizations have the confidence that their data remain secure, and is accessed by only authorized users only while residing public cloud.",
  "/images/inner-images/cloud-2.jpg",
  "Hybrid Cloud Security",
  "Datacenter landscape has evolved as a result of the improving capabilities of existing visualization technologies. Today, the choices for organizations to host their applications used in providing services to customer have become enormous.\n\nOrganizations now have datacenter consisting of physical, virtual and cloud infrastructure combined to provide location-independent services to customers.\n\nWith this approach, comes the significant challenges of visibility, availability and ensuring the right protection is given to data as they move from physical, virtual to cloud infrastructure.\n\nLUMENAVE Hybrid Cloud Security Options provides organization a holistic protection covering for all ares of their hybrid infrastructure across physical,virtual and cloud services-public and private cloud inclusive.",
  "/images/inner-images/cloud-3.webp",
];

const subContent = [
  "Solution Benefits",
  "Solution Brief",
  "Solution Portfolio",
  [
    "Extend Visibility and Control to Resources",
    "Maintain Same Security with Scalability",
    "Demonstrate Compliance",
    "Manage security policies efficiently on",
  ],
  [
    "Mcafee: Securing the Private Cloud",
    "WhitePaper: Protecting the Private Cloud with Integrated and Automated Security",
  ],
  [
    "Symantec EndPoint Protection",
    "Symantec DataCenter Security-Server and Server Advanced",
    "Mcafee Virtual Network Security Platform",
    "Mcafee Endpoint Protection-Advanced Suite",
    "Trend Micro OfficeScan EndPoint Protection for Enterprise",
  ],
  [
    "Provides visibility and continuously monitoring all of infrastructure for policy violations, suspicious activity,unexpected changes to files, configurations, and settings.",
    "Provides a single-pane and integrated platform for monitoring physical, virtual, Openstack, and Amazon Web Services servers",
    "Protect your critical servers against zero-hour attacks and emerging vulnerabilities.",
    "Provide advanced level protection for unpatched applications and systems running on legacy platform.",
    "Agentless anti-malware protection, network intrusion prevention, and file reputation services ensures the underlying performance impact of the virtual infrastructure is not minimized",
    "Provides seamless integration with VMware NSX, vShield and vCNS, thus ensuring consistent policy orchestration across multiple virtual machines",
  ],
  [
    "Symantec Data Center Security: Server, Monitoring, and Advanced Edition",
    "McAfee Public Cloud Server Security Suite",
    "Mcafee Server Security Suite: Essentials and Advanced",
  ],
  [
    "Symantec Data Center Security Datasheets: Server, Monitoring, and Advanced Edition",
    "McAfee Public Cloud Server Security Suite Datasheets",
    "Mcafee Solution Brief: Embrace Public Clouds with Confidence",
    "Mcafee: Watch the Video:Complete Security Solution for Amazon Web Services and Azure Workloads",
  ],
  [
    "Secure network, storage, and compute environments from advanced threats.",
    "Provides a single-pane and integrated platform for monitoring physical, virtual, Openstack, and Amazon Web Services servers",
    "Easily scale your security as you change or add new cloud providers.",
    "Keep operational costs down and do more with fewer resources.",
    "Get security that’s optimized for virtual environments and hybrid deployments.",
    "Obtain visibility so that you can protect your data, no matter where it resides.",
  ],
  [
    "Symantec Data Center Security: Server, Monitoring, and Advanced Edition",
    "McAfee Public Cloud Server Security Suite.",
    "Mcafee Server Security Suite: Essentials and Advanced",
  ],
  [
    "Symantec Data Center Security: Server, Monitoring, and Advanced Edition",
    "McAfee Public Cloud Server Security Suite Datasheets",
    "Mcafee Solution Brief: Essentials and Advanced.",
  ],
];

const page = () => {
  return (
    <div style={{ whiteSpace: "pre-line" }}>
      <Grid
        image={mainContent[2]}
        title={mainContent[0]}
        body={mainContent[1]}
      />
      <GridTwo
        title={subContent[0]}
        list={subContent[3]}
        titleTwo={subContent[1]}
        listTwo={subContent[4]}
        titleThree={subContent[2]}
        listThree={subContent[5]}
      />
      {/* <div>
        <h5>{ subContent[0] }</h5>
      </div> */}
      <Grid
        image={mainContent[5]}
        title={mainContent[3]}
        body={mainContent[4]}
        className="grid-row-reverse"
      />
      <GridTwo
        title={subContent[0]}
        list={subContent[6]}
        titleTwo={subContent[1]}
        listTwo={subContent[7]}
        titleThree={subContent[2]}
        listThree={subContent[8]}
      />
      <Grid
        image={mainContent[8]}
        title={mainContent[6]}
        body={mainContent[7]}
      />
      <GridTwo
        title={subContent[0]}
        list={subContent[9]}
        titleTwo={subContent[1]}
        listTwo={subContent[10]}
        titleThree={subContent[2]}
        listThree={subContent[11]}
      />
    </div>
  );
};
export default page;
