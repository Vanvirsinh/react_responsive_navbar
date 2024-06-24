import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PageComponent = ({ path, title }) => {
    return (
        <div className="flex gap-x-3 items-center bg-white absolute bottom-5 left-[50%] -translate-x-[50%] p-5 rounded-md">
            <span className="lg:text-lg md:text-md sm:text-sm font-semibold">{path}</span>
            <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
            <h1 className="lg:text-lg md:text-md sm:text-sm font-semibold">{title}</h1>
        </div>
    );
};

export const Home = () => <PageComponent path="/" title="Home Page" />;
export const About = () => <PageComponent path="/about" title="About Page" />;
export const Solutions = () => <PageComponent path="/solutions" title="Solutions Page" />;
export const Products = () => <PageComponent path="/products" title="Products Page" />;
export const Blog = () => <PageComponent path="/blog" title="Blog's Page" />;
export const Contact = () => <PageComponent path="/contact" title="Contact Page" />;
export const FrontEndDev = () => <PageComponent path="/services/web-devlopment/front-end" title="Front End Development Page" />;
export const BackEndDev = () => <PageComponent path="/services/web-devlopment/back-end" title="Back End Development Page" />;
export const FullStackDev = () => <PageComponent path="/services/web-devlopment/full-stack" title="Full Stack Development Page" />;
export const AppDevelopment = () => <PageComponent path="/services/app-development" title="App Development Page" />;
export const CloudService = () => <PageComponent path="/services/cloud-services" title="Cloud Services Page" />;
export const AIandML = () => <PageComponent path="/services/ai-and-ml" title="AI & Machine Learning Page" />;
export const ThreatIntelligence = () => <PageComponent path="/services/cybersecurity/threat-intelligence" title="Threat Intelligence Page" />;
export const NetworkSecurity = () => <PageComponent path="/services/cybersecurity/network-security" title="Network Security Page" />;
export const Compliance = () => <PageComponent path="/services/cybersecurity/compliance" title="Compliance Page" />;
export const Regulations = () => <PageComponent path="/services/cybersecurity/regulations" title="Regulations Page" />;