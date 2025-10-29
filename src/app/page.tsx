"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Shield, Target, TrendingUp, Users, Zap, Code, Star, Linkedin, Twitter, Github, Globe } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Services", id: "feature" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="TechFlow"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Transforming Ideas"
          description="We build cutting-edge software solutions that scale with your business. From AI integration to cloud infrastructure, we turn your vision into powerful technology."
          tag="Innovation First"
          tagIcon={Zap}
          buttons={[
            { text: "Start Your Project", href: "contact" },
            { text: "View Our Work", href: "feature" }
          ]}
          imageSrc="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern tech startup workspace"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose TechFlow"
          description="We combine technical expertise with business acumen to deliver solutions that drive real results for your company."
          tag="Our Approach"
          tagIcon={Target}
          bulletPoints={[
            {
              title: "Agile Development",
              description: "Fast iterations and continuous delivery to bring your product to market quickly",
              icon: Zap
            },
            {
              title: "Scalable Architecture",
              description: "Built to grow with your business, handling millions of users and transactions",
              icon: TrendingUp
            },
            {
              title: "24/7 Support",
              description: "Round-the-clock technical support to keep your systems running smoothly",
              icon: Shield
            }
          ]}
          buttons={[
            { text: "Learn More", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/7688173/pexels-photo-7688173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Tech team collaboration"
          imagePosition="left"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Our Services"
          description="Comprehensive technology solutions tailored to your business needs"
          tag="What We Do"
          tagIcon={Code}
          features={[
            {
              id: "01",
              title: "AI & Machine Learning",
              description: "Harness the power of artificial intelligence to automate processes and gain insights from your data",
              imageSrc: "https://images.pexels.com/photos/17486100/pexels-photo-17486100.png?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "AI technology visualization"
            },
            {
              id: "02",
              title: "Cloud Infrastructure",
              description: "Scalable, secure cloud solutions that grow with your business and reduce operational costs",
              imageSrc: "https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cloud computing infrastructure"
            },
            {
              id: "03",
              title: "Mobile Development",
              description: "Native and cross-platform mobile apps that deliver exceptional user experiences",
              imageSrc: "https://images.pexels.com/photos/7947951/pexels-photo-7947951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mobile app development"
            },
            {
              id: "04",
              title: "Web Applications",
              description: "Modern, responsive web applications built with the latest technologies and best practices",
              imageSrc: "https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Web development workspace"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="The brilliant minds behind TechFlow's innovative solutions"
          tag="Our People"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Founder & CEO",
              description: "Former Google engineer with 15+ years in tech. Led development teams at three successful startups.",
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson CEO portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/sarah-johnson" },
                { icon: Twitter, url: "https://twitter.com/sarahj" }
              ]
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO",
              description: "MIT graduate specializing in distributed systems and AI. Previously architected systems at Microsoft.",
              imageSrc: "https://images.pexels.com/photos/3831164/pexels-photo-3831164.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen CTO portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/michael-chen" },
                { icon: Github, url: "https://github.com/mchen" }
              ]
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Head of Design",
              description: "Award-winning UX designer with expertise in enterprise software and mobile applications.",
              imageSrc: "https://images.pexels.com/photos/28550000/pexels-photo-28550000.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez designer portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/emily-rodriguez" },
                { icon: Globe, url: "https://emilydesigns.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Trusted by startups and enterprises worldwide"
          tag="Success Stories"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "David Kim",
              role: "CTO, StartupXYZ",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait"
            },
            {
              id: "2",
              name: "Lisa Wang",
              role: "VP Engineering",
              company: "Growth Corp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Wang portrait"
            },
            {
              id: "3",
              name: "James Miller",
              role: "Product Manager",
              company: "InnovateLab",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7648239/pexels-photo-7648239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Miller portrait"
            },
            {
              id: "4",
              name: "Anna Foster",
              role: "Founder",
              company: "Digital Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4427630/pexels-photo-4427630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Anna Foster portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Transform Your Business?"
          description="Get in touch with our team to discuss your project and discover how we can help you achieve your goals."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "company", type: "text", placeholder: "Company Name", required: false },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your project...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",
              items: [
                { label: "AI & Machine Learning", href: "feature" },
                { label: "Cloud Infrastructure", href: "feature" },
                { label: "Mobile Development", href: "feature" },
                { label: "Web Applications", href: "feature" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Testimonials", href: "testimonial" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Documentation", href: "https://docs.techflow.com" },
                { label: "Help Center", href: "https://help.techflow.com" },
                { label: "API Reference", href: "https://api.techflow.com" }
              ]
            }
          ]}
          copyrightText="© 2025 TechFlow. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}