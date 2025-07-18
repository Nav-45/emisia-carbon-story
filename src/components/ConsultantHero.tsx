import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Globe, Factory, Truck, FileText, Mail, Database, 
  BarChart3, Upload, Download, Users, ArrowRight, 
  CheckCircle, Settings, TrendingUp, FileCheck,
  Zap, Target, Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Floating particle component for carbon visualization
const CarbonParticle = ({ delay = 0, duration = 3 }) => (
  <motion.div
    className="absolute w-2 h-2 bg-carbon-light rounded-full opacity-60"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.6, 0],
      scale: [0, 1, 0],
      y: [-20, -60],
      x: Math.random() * 40 - 20,
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2,
    }}
  />
);

// Scene 1: Where Emissions Begin
const SceneOne = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.8, 1, 1.1]);

  return (
    <motion.section 
      ref={ref}
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-surface to-surface-light"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          style={{ scale }}
          className="relative mx-auto w-80 h-80 mb-8"
        >
          {/* Globe */}
          <motion.div
            className="w-32 h-32 bg-gradient-to-br from-primary to-primary-variant rounded-full mx-auto mb-8 relative shadow-elegant"
            animate={{ rotate: isInView ? 360 : 0 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Globe className="w-16 h-16 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </motion.div>

          {/* Industrial elements */}
          <motion.div 
            className="flex justify-around items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, staggerChildren: 0.2 }}
          >
            {[Factory, Truck, Database, Zap].map((Icon, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.2 }}
              >
                <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center shadow-soft border border-border-subtle">
                  <Icon className="w-6 h-6 text-text-secondary" />
                </div>
                {/* Carbon particles */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <CarbonParticle key={i} delay={i * 0.5 + index * 0.3} />
                ))}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Where Emissions <span className="text-primary">Begin</span>
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Emissions start at every step – raw materials, energy, logistics, and more.
          </p>
        </motion.div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-carbon-light rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [-10, -30],
            }}
            transition={{
              duration: 4,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </motion.section>
  );
};

// Scene 2: The Consultant's Challenge
const SceneTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const documentItems = [
    { icon: FileText, label: "Invoices", delay: 0 },
    { icon: Mail, label: "Emails", delay: 0.2 },
    { icon: Database, label: "Excel Sheets", delay: 0.4 },
    { icon: FileCheck, label: "PDFs", delay: 0.6 },
    { icon: BarChart3, label: "Emission Factors", delay: 0.8 },
  ];

  return (
    <motion.section 
      ref={ref}
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-surface-light to-surface"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            The Consultant's <span className="text-accent">Challenge</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Carbon consultants piece together data from scattered sources…
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central consultant figure */}
          <motion.div
            className="w-24 h-24 bg-gradient-to-br from-primary to-primary-variant rounded-full mx-auto mb-8 flex items-center justify-center shadow-elegant"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <Users className="w-12 h-12 text-white" />
          </motion.div>

          {/* Floating documents */}
          <div className="relative h-80">
            {documentItems.map((item, index) => {
              const angle = (index * 72) * (Math.PI / 180); // 72 degrees between items
              const radius = 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={item.label}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%)`,
                  }}
                  initial={{ 
                    opacity: 0, 
                    x: 0, 
                    y: 0,
                    rotate: 0 
                  }}
                  animate={isInView ? { 
                    opacity: 1, 
                    x, 
                    y,
                    rotate: Math.random() * 20 - 10
                  } : {}}
                  transition={{ 
                    delay: item.delay + 0.7,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <Card className="p-4 bg-surface shadow-soft border border-border-subtle hover:shadow-elegant transition-all duration-300">
                    <item.icon className="w-8 h-8 text-text-secondary mx-auto mb-2" />
                    <p className="text-sm text-text-secondary font-medium">{item.label}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// Scene 3: A Complex Puzzle
const SceneThree = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const scopeItems = [
    { number: "1", label: "Direct Emissions", color: "bg-gradient-to-br from-red-500 to-red-600" },
    { number: "2", label: "Energy Indirect", color: "bg-gradient-to-br from-yellow-500 to-orange-500" },
    { number: "3", label: "Other Indirect", color: "bg-gradient-to-br from-green-500 to-emerald-600" },
  ];

  const unitItems = ["kWh", "£", "kg", "L", "km"];
  const lcaStages = ["Cradle-to-Gate", "Gate-to-Gate", "Gate-to-Grave"];

  return (
    <motion.section 
      ref={ref}
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-surface to-surface-light"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            A Complex <span className="text-primary">Puzzle</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            …map it to frameworks, scopes, and factors…
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Scope grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            {scopeItems.map((scope, index) => (
              <motion.div
                key={scope.number}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0 
                } : {}}
                transition={{ 
                  delay: 0.7 + index * 0.2,
                  duration: 0.6,
                  type: "spring"
                }}
                className="relative"
              >
                <Card className="p-6 bg-surface shadow-soft border border-border-subtle hover:shadow-elegant transition-all duration-300">
                  <div className={`w-16 h-16 ${scope.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-elegant`}>
                    <span className="text-2xl font-bold text-white">{scope.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Scope {scope.number}</h3>
                  <p className="text-sm text-text-secondary">{scope.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Units animation */}
          <motion.div 
            className="flex justify-center flex-wrap gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
          >
            {unitItems.map((unit, index) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -10, 0]
                } : {}}
                transition={{ 
                  delay: 1.4 + index * 0.1,
                  duration: 0.5,
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }
                }}
                className="px-4 py-2 bg-accent rounded-full text-accent-foreground font-medium shadow-soft"
              >
                {unit}
              </motion.div>
            ))}
          </motion.div>

          {/* LCA stages */}
          <motion.div 
            className="flex justify-center flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.8 }}
          >
            {lcaStages.map((stage, index) => (
              <motion.div
                key={stage}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 2 + index * 0.2 }}
                className="px-6 py-3 bg-surface border border-border-subtle rounded-lg shadow-soft"
              >
                <span className="text-text-secondary font-medium">{stage}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Scene 4: Introducing Capture
const SceneFour = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.section 
      ref={ref}
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-surface-light to-surface"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Introducing <span className="text-primary">Capture</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Capture automates carbon calculations — from invoices to scope-tagged outputs.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Upload flow */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex-1"
            >
              <Card className="p-8 bg-surface shadow-soft border border-border-subtle">
                <Upload className="w-12 h-12 text-text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-text-primary mb-2">Upload Data</h3>
                <p className="text-text-secondary">Drag & drop invoices, receipts, activity data</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, type: "spring" }}
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-elegant"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="flex-1"
            >
              <Card className="p-8 bg-surface shadow-soft border border-border-subtle">
                <Settings className="w-12 h-12 text-text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-text-primary mb-2">Auto-Process</h3>
                <p className="text-text-secondary">AI extracts, categorizes, and maps to scopes</p>
              </Card>
            </motion.div>
          </div>

          {/* Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1 }}
            className="relative"
          >
            <Card className="p-8 bg-surface shadow-elegant border border-border-subtle">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[1, 2, 3].map((scope) => (
                  <motion.div
                    key={scope}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.3 + scope * 0.1 }}
                    className={`p-4 rounded-lg ${
                      scope === 1 ? 'bg-red-100 border border-red-200' :
                      scope === 2 ? 'bg-yellow-100 border border-yellow-200' :
                      'bg-green-100 border border-green-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-text-primary">Scope {scope}</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-2xl font-bold text-text-primary">
                      {scope === 1 ? '1.2' : scope === 2 ? '3.8' : '42.1'} tCO₂e
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="text-center">
                <span className="text-sm text-text-secondary">✓ Auto-tagged • ✓ Verified • ✓ Export Ready</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Scene 5: Clean Output, Client-Ready
const SceneFive = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const chartData = [
    { scope: "Scope 1", value: 3, color: "bg-red-500" },
    { scope: "Scope 2", value: 8, color: "bg-yellow-500" },
    { scope: "Scope 3", value: 89, color: "bg-green-500" },
  ];

  return (
    <motion.section 
      ref={ref}
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-surface to-surface-light"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Clean Output, <span className="text-accent">Client-Ready</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            From messy data to verified results — delivered faster, with transparency.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chart visualization */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <Card className="p-8 bg-surface shadow-elegant border border-border-subtle">
                <h3 className="text-xl font-semibold text-text-primary mb-6">Emissions Breakdown</h3>
                <div className="space-y-4">
                  {chartData.map((item, index) => (
                    <motion.div
                      key={item.scope}
                      initial={{ opacity: 0, width: 0 }}
                      animate={isInView ? { opacity: 1, width: `${item.value}%` } : {}}
                      transition={{ delay: 0.7 + index * 0.2, duration: 1 }}
                      className="relative"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-text-secondary font-medium">{item.scope}</span>
                        <span className="text-text-primary font-bold">{item.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div
                          className={`h-3 rounded-full ${item.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${item.value}%` } : {}}
                          transition={{ delay: 0.7 + index * 0.2, duration: 1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Export options */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="space-y-6"
            >
              {[
                { icon: FileText, label: "PDF Report", desc: "Client-ready sustainability report" },
                { icon: Download, label: "CSV Export", desc: "Raw data for further analysis" },
                { icon: TrendingUp, label: "API Access", desc: "Integrate with client systems" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.2 }}
                >
                  <Card className="p-6 bg-surface shadow-soft border border-border-subtle hover:shadow-elegant transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-text-primary">{item.label}</h4>
                        <p className="text-sm text-text-secondary">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// Scene 6: Built for Consultants
const SceneSix = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const features = [
    { icon: Layers, title: "Scope mapping logic", desc: "Intelligent categorization across all three scopes" },
    { icon: Database, title: "Emission factor database", desc: "Comprehensive, up-to-date factors from trusted sources" },
    { icon: Settings, title: "LCA stage builder", desc: "Flexible workflow for any assessment methodology" },
    { icon: BarChart3, title: "Spend + activity data support", desc: "Handle both financial and physical data seamlessly" },
    { icon: Target, title: "Integration-ready", desc: "API-first platform for existing consultant workflows" },
  ];

  return (
    <motion.section 
      ref={ref}
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-surface-light to-surface"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Built for <span className="text-primary">Consultants</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Everything you need. Nothing you don't.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-8 h-full bg-surface shadow-soft border border-border-subtle hover:shadow-elegant transition-all duration-300 group">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary to-primary-variant rounded-lg mx-auto mb-6 flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// Scene 7: Get Early Access
const SceneSeven = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.section 
      ref={ref}
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-surface to-surface-variant relative overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Get <span className="text-primary">Early Access</span>
          </h2>
          <p className="text-xl text-text-secondary mb-12 leading-relaxed">
            Join the next generation of carbon consultants. Streamline your LCA process, 
            deliver better results, and scale your practice.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <Button 
              size="lg"
              className="h-14 text-lg font-semibold bg-primary hover:bg-primary-variant text-white shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
            >
              Request Access
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="h-14 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Try the Demo
            </Button>
            <Button 
              variant="secondary"
              size="lg"
              className="h-14 text-lg font-semibold bg-surface-variant hover:bg-accent transition-all duration-300"
            >
              Join Pilot Network
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="text-text-secondary"
          >
            <p className="mb-4">Trusted by leading sustainability consultants</p>
            <div className="flex justify-center space-x-8 text-sm">
              <span>✓ Free during beta</span>
              <span>✓ Priority support</span>
              <span>✓ Feature input</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background data flow visualization */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </motion.section>
  );
};

// Main component
const ConsultantHero = () => {
  const { scrollY } = useScroll();
  const scrollProgress = useTransform(scrollY, [0, 7000], [0, 100]);

  return (
    <div className="relative">
      {/* Progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollProgress.get() / 100 }}
      />

      {/* Scene components */}
      <SceneOne />
      <SceneTwo />
      <SceneThree />
      <SceneFour />
      <SceneFive />
      <SceneSix />
      <SceneSeven />
    </div>
  );
};

export default ConsultantHero;