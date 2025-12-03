import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { Globe, Factory, Truck, FileText, Mail, Database, BarChart3, Upload, Download, Users, ArrowRight, CheckCircle, Settings, TrendingUp, FileCheck, Zap, Target, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Floating particle component for carbon visualization
const CarbonParticle = ({
  delay = 0,
  duration = 3
}) => <motion.div className="absolute w-2 h-2 bg-carbon-light rounded-full" initial={{
  opacity: 0,
  scale: 0
}} animate={{
  opacity: [0, 0.8, 0],
  scale: [0, 1, 0],
  y: [-20, -60],
  x: Math.random() * 40 - 20
}} transition={{
  duration,
  delay,
  repeat: Infinity,
  repeatDelay: Math.random() * 2
}} />;

// Scene 1: Where Emissions Begin (Hero - Always Visible)
const SceneOne = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.1
  });
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Immediate load state - show content right away
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    // Trigger initial animation immediately
    const timer = setTimeout(() => setHasLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  return <motion.section ref={ref} style={{
    opacity,
    background: 'var(--gradient-hero)'
  }} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Animated Emisia Logo */}
        <motion.div className="relative mx-auto w-36 h-12 md:w-40 md:h-14 mb-6 flex items-center justify-center" style={{
        scale
      }}>
          {/* Three squares animation - Sequential reveal */}
          <div className="flex gap-1">
            {/* First square */}
            <motion.div className="w-10 h-10 md:w-12 md:h-12 bg-emisia-green rounded-lg relative overflow-hidden" initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: [0, 1, 1, 1, 1, 0],
            x: [-30, 0, 0, 0, 0, -30]
          }} transition={{
            duration: 4.1,
            delay: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2
          }} style={{
            filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
          }}>
              <div className="absolute bottom-0 right-0 w-5 h-5 md:w-6 md:h-6 bg-white rounded-tl-full"></div>
            </motion.div>

            {/* Second square */}
            <motion.div className="w-10 h-10 md:w-12 md:h-12 bg-emisia-green rounded-lg relative overflow-hidden" initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: [0, 0, 1, 1, 1, 0],
            x: [-30, -30, 0, 0, 0, -30]
          }} transition={{
            duration: 4.1,
            delay: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2
          }} style={{
            filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
          }}>
              <div className="absolute bottom-0 right-0 w-5 h-5 md:w-6 md:h-6 bg-white rounded-tl-full"></div>
            </motion.div>

            {/* Third square */}
            <motion.div className="w-10 h-10 md:w-12 md:h-12 bg-emisia-green rounded-lg relative overflow-hidden" initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: [0, 0, 0, 1, 1, 0],
            x: [-30, -30, -30, 0, 0, -30]
          }} transition={{
            duration: 4.1,
            delay: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2
          }} style={{
            filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
          }}>
              <div className="absolute bottom-0 right-0 w-5 h-5 md:w-6 md:h-6 bg-white rounded-tl-full"></div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={hasLoaded ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        delay: 0.8,
        duration: 0.8
      }} className="max-w-2xl mx-auto">
          {/* High contrast, readable text */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Automated Carbon Reporting<span className="text-primary">Made Accessible</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed font-medium">AI-powered automation that turns invoices and supplier data into carbon emissions without the spreadsheets.</p>
          
          {/* Animated Icons Section */}
          <motion.div className="flex justify-center items-center gap-8 md:gap-12 mt-8 mb-6" initial={{
          opacity: 0,
          y: 20
        }} animate={hasLoaded ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          delay: 1.2,
          duration: 0.8
        }}>
            {/* Factory Icon */}
            <motion.div className="flex flex-col items-center" whileHover={{
            scale: 1.1
          }} animate={{
            y: [0, -8, 0]
          }} transition={{
            y: {
              duration: 2.5,
              repeat: Infinity,
              delay: 0,
              ease: "easeInOut"
            }
          }}>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-emisia-green/10 rounded-full flex items-center justify-center">
                <Factory className="w-6 h-6 md:w-8 md:h-8 text-emisia-green" />
              </div>
            </motion.div>

            {/* Transport/Truck Icon */}
            <motion.div className="flex flex-col items-center" whileHover={{
            scale: 1.1
          }} animate={{
            y: [0, -8, 0]
          }} transition={{
            y: {
              duration: 2.5,
              repeat: Infinity,
              delay: 0.6,
              ease: "easeInOut"
            }
          }}>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-emisia-green/10 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 md:w-8 md:h-8 text-emisia-green" />
              </div>
            </motion.div>

            {/* Database Icon */}
            <motion.div className="flex flex-col items-center" whileHover={{
            scale: 1.1
          }} animate={{
            y: [0, -8, 0]
          }} transition={{
            y: {
              duration: 2.5,
              repeat: Infinity,
              delay: 1.2,
              ease: "easeInOut"
            }
          }}>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-emisia-green/10 rounded-full flex items-center justify-center">
                <Database className="w-6 h-6 md:w-8 md:h-8 text-emisia-green" />
              </div>
            </motion.div>

            {/* Energy/Lightning Icon */}
            <motion.div className="flex flex-col items-center" whileHover={{
            scale: 1.1
          }} animate={{
            y: [0, -8, 0]
          }} transition={{
            y: {
              duration: 2.5,
              repeat: Infinity,
              delay: 1.8,
              ease: "easeInOut"
            }
          }}>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-emisia-green/10 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-emisia-green" />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div className="mt-8" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.5
        }}>
            <motion.div animate={{
            y: [0, 8, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity
          }} className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center">
              <motion.div animate={{
              y: [2, 6, 2]
            }} transition={{
              duration: 1.5,
              repeat: Infinity
            }} className="w-1 h-3 bg-primary rounded-full mt-2" />
            </motion.div>
            <p className="text-sm text-gray-500 mt-2">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background particles - subtle and immediate */}
      <div className="absolute inset-0 overflow-hidden">
        {hasLoaded && Array.from({
        length: 20
      }).map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-carbon-light rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        opacity: [0, 0.4, 0],
        y: [-10, -30]
      }} transition={{
        duration: 4,
        delay: Math.random() * 2,
        repeat: Infinity,
        repeatDelay: Math.random() * 3
      }} />)}
      </div>
    </motion.section>;
};

// Scene 2: The Consultant's Challenge
const SceneTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2
  });
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const documentItems = [{
    icon: FileText,
    label: "Invoices",
    delay: 0
  }, {
    icon: Mail,
    label: "Emails",
    delay: 0.1
  }, {
    icon: Database,
    label: "Excel Sheets",
    delay: 0.2
  }, {
    icon: FileCheck,
    label: "PDFs",
    delay: 0.3
  }, {
    icon: BarChart3,
    label: "Emission Factors",
    delay: 0.4
  }];
  return <motion.section ref={ref} style={{
    opacity
  }} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-surface-light to-surface relative">
      <div className="container mx-auto px-6 text-center">
        {/* Section entrance indicator */}
        <motion.div initial={{
        width: 0
      }} animate={isInView ? {
        width: "100px"
      } : {}} transition={{
        duration: 0.8
      }} className="h-1 bg-primary mx-auto mb-8 rounded" />

        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        delay: 0.2,
        duration: 0.8
      }} className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Your Frustration, Our Solution<span className="text-accent">Challenge</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium text-center">You shouldn’t need enterprise budgets to meet basic sustainability requirements.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central consultant figure with bounce effect */}
          <motion.div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-variant rounded-full mx-auto mb-8 flex items-center justify-center shadow-elegant" initial={{
          opacity: 0,
          scale: 0
        }} animate={isInView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          delay: 0.4,
          duration: 0.6,
          type: "spring",
          stiffness: 200
        }} whileInView={{
          scale: [1, 1.1, 1],
          transition: {
            duration: 2,
            repeat: Infinity
          }
        }}>
            <Users className="w-12 h-12 text-white" />
          </motion.div>

          {/* Floating documents with better feedback */}
          <div className="relative h-80">
            {documentItems.map((item, index) => {
            const angle = index * 72 * (Math.PI / 180);
            const radius = 180;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return <motion.div key={item.label} className="absolute" style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%)`
            }} initial={{
              opacity: 0,
              x: 0,
              y: 0,
              rotate: 0
            }} animate={isInView ? {
              opacity: 1,
              x,
              y,
              rotate: Math.random() * 20 - 10
            } : {}} transition={{
              delay: item.delay + 0.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }} whileInView={{
              y: [y, y - 10, y],
              transition: {
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2
              }
            }}>
                  <Card className="p-4 bg-surface shadow-soft border border-border-subtle hover:shadow-elegant transition-all duration-300 px-[16px]">
                    <item.icon className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 font-medium">{item.label}</p>
                  </Card>
                </motion.div>;
          })}
          </div>
        </div>
      </div>
    </motion.section>;
};

// Scene 3: A Complex Puzzle
const SceneThree = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2
  });
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const scopeItems = [{
    number: "1",
    label: "Direct Emissions",
    color: "bg-gradient-to-br from-red-500 to-red-600"
  }, {
    number: "2",
    label: "Energy Indirect",
    color: "bg-gradient-to-br from-yellow-500 to-orange-500"
  }, {
    number: "3",
    label: "Other Indirect",
    color: "bg-gradient-to-br from-green-500 to-emerald-600"
  }];
  const unitItems = ["kWh", "£", "kg", "L", "km"];
  const lcaStages = ["Cradle-to-Gate", "Gate-to-Gate", "Gate-to-Grave"];
  return <motion.section ref={ref} style={{
    opacity
  }} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-surface to-surface-light">
      <div className="container mx-auto px-6 text-center">
        {/* Section entrance indicator */}
        <motion.div initial={{
        width: 0
      }} animate={isInView ? {
        width: "100px"
      } : {}} transition={{
        duration: 0.8
      }} className="h-1 bg-primary mx-auto mb-8 rounded" />

        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        delay: 0.2,
        duration: 0.8
      }} className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            A Complex <span className="text-primary">Puzzle</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            …map it to frameworks, scopes, and factors…
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Scope grid with bounce effects */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" initial={{
          opacity: 0
        }} animate={isInView ? {
          opacity: 1
        } : {}} transition={{
          delay: 0.3
        }}>
            {scopeItems.map((scope, index) => <motion.div key={scope.number} initial={{
            opacity: 0,
            y: 60,
            rotateX: -90
          }} animate={isInView ? {
            opacity: 1,
            y: 0,
            rotateX: 0
          } : {}} transition={{
            delay: 0.4 + index * 0.15,
            duration: 0.7,
            type: "spring",
            stiffness: 100
          }} whileInView={{
            y: [0, -5, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3
            }
          }} className="relative">
                <Card className="p-6 bg-surface shadow-soft border border-border-subtle hover:shadow-elegant transition-all duration-300">
                  <div className={`w-16 h-16 ${scope.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-elegant`}>
                    <span className="text-2xl font-bold text-white">{scope.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Scope {scope.number}</h3>
                  <p className="text-sm text-gray-600">{scope.label}</p>
                </Card>
              </motion.div>)}
          </motion.div>

          {/* Units animation with better visibility */}
          <motion.div className="flex justify-center flex-wrap gap-4 mb-8" initial={{
          opacity: 0
        }} animate={isInView ? {
          opacity: 1
        } : {}} transition={{
          delay: 0.8
        }}>
            {unitItems.map((unit, index) => <motion.div key={unit} initial={{
            opacity: 0,
            scale: 0
          }} animate={isInView ? {
            opacity: 1,
            scale: 1
          } : {}} transition={{
            delay: 0.9 + index * 0.1,
            duration: 0.5,
            type: "spring"
          }} whileInView={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
            transition: {
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2
            }
          }} className="px-4 py-2 bg-accent rounded-full text-gray-800 font-semibold shadow-soft">
                {unit}
              </motion.div>)}
          </motion.div>

          {/* LCA stages */}
          <motion.div className="flex justify-center flex-wrap gap-4" initial={{
          opacity: 0
        }} animate={isInView ? {
          opacity: 1
        } : {}} transition={{
          delay: 1.2
        }}>
            {lcaStages.map((stage, index) => <motion.div key={stage} initial={{
            opacity: 0,
            x: -50
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            delay: 1.3 + index * 0.15,
            type: "spring"
          }} whileInView={{
            scale: [1, 1.05, 1],
            transition: {
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5
            }
          }} className="px-6 py-3 bg-surface border border-border-subtle rounded-lg shadow-soft">
                <span className="text-gray-700 font-medium">{stage}</span>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
    </motion.section>;
};

// Scene 4: Introducing Capture
const SceneFour = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2
  });
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  return <motion.section ref={ref} style={{
    opacity
  }} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-surface-light to-surface">
      <div className="container mx-auto px-6 text-center">
        {/* Section entrance indicator */}
        <motion.div initial={{
        width: 0
      }} animate={isInView ? {
        width: "100px"
      } : {}} transition={{
        duration: 0.8
      }} className="h-1 bg-primary mx-auto mb-8 rounded" />

        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        delay: 0.2,
        duration: 0.8
      }} className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Introducing <span className="text-primary">Emisia</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Emisia automates carbon calculations — from invoices to scope-tagged outputs.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Upload flow with pulse effects */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <motion.div initial={{
            opacity: 0,
            x: -60
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            delay: 0.4,
            duration: 0.8
          }} className="flex-1">
              <Card className="p-8 bg-surface shadow-soft border border-border-subtle">
                <motion.div whileInView={{
                scale: [1, 1.1, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity
                }
              }}>
                  <Upload className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Data</h3>
                <p className="text-gray-600">Drag & drop invoices, receipts, activity data</p>
              </Card>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            scale: 0
          }} animate={isInView ? {
            opacity: 1,
            scale: 1
          } : {}} transition={{
            delay: 0.6,
            type: "spring",
            stiffness: 200
          }} whileInView={{
            x: [0, 10, 0],
            transition: {
              duration: 1.5,
              repeat: Infinity
            }
          }} className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-elegant">
              <ArrowRight className="w-6 h-6 text-white" />
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 60
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            delay: 0.8,
            duration: 0.8
          }} className="flex-1">
              <Card className="p-8 bg-surface shadow-soft border border-border-subtle">
                <motion.div whileInView={{
                rotate: [0, 360],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}>
                  <Settings className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Auto-Process</h3>
                <p className="text-gray-600">AI extracts, categorizes, and maps to scopes</p>
              </Card>
            </motion.div>
          </div>

          {/* Dashboard preview with flash effects */}
          <motion.div initial={{
          opacity: 0,
          y: 60
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          delay: 1,
          duration: 0.8
        }} className="relative">
            <Card className="p-8 bg-surface shadow-elegant border border-border-subtle">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[1, 2, 3].map(scope => <motion.div key={scope} initial={{
                opacity: 0,
                scale: 0
              }} animate={isInView ? {
                opacity: 1,
                scale: 1
              } : {}} transition={{
                delay: 1.2 + scope * 0.1,
                type: "spring"
              }} whileInView={{
                borderColor: scope === 1 ? ["#ef4444", "#fee2e2", "#ef4444"] : scope === 2 ? ["#f59e0b", "#fef3c7", "#f59e0b"] : ["#10b981", "#d1fae5", "#10b981"],
                transition: {
                  duration: 2,
                  repeat: Infinity
                }
              }} className={`p-4 rounded-lg border-2 ${scope === 1 ? 'bg-red-50' : scope === 2 ? 'bg-yellow-50' : 'bg-green-50'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Scope {scope}</span>
                      <motion.div animate={{
                    scale: [1, 1.2, 1],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      delay: scope * 0.2
                    }
                  }}>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </motion.div>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">
                      {scope === 1 ? '1.2' : scope === 2 ? '3.8' : '42.1'} tCO₂e
                    </p>
                  </motion.div>)}
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-600 font-medium">✓ Auto-tagged • ✓ Verified • ✓ Export Ready</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>;
};

// Scene 5: Clean Output, Client-Ready
const SceneFive = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2
  });
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const chartData = [{
    scope: "Scope 1",
    value: 3,
    color: "bg-red-500"
  }, {
    scope: "Scope 2",
    value: 8,
    color: "bg-yellow-500"
  }, {
    scope: "Scope 3",
    value: 89,
    color: "bg-green-500"
  }];
  return <motion.section ref={ref} style={{
    opacity
  }} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-surface to-surface-light">
      <div className="container mx-auto px-6 text-center">
        {/* Section entrance indicator */}
        <motion.div initial={{
        width: 0
      }} animate={isInView ? {
        width: "100px"
      } : {}} transition={{
        duration: 0.8
      }} className="h-1 bg-primary mx-auto mb-8 rounded" />

        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        delay: 0.2,
        duration: 0.8
      }} className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Clean Output, <span className="text-accent">Client-Ready</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            From messy data to verified results — delivered faster, with transparency.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chart visualization with animated bars */}
            <motion.div initial={{
            opacity: 0,
            x: -60
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            delay: 0.4,
            duration: 0.8
          }}>
              <Card className="p-8 bg-surface shadow-elegant border border-border-subtle">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Emissions Breakdown</h3>
                <div className="space-y-4">
                  {chartData.map((item, index) => <motion.div key={item.scope} initial={{
                  opacity: 0,
                  x: -30
                }} animate={isInView ? {
                  opacity: 1,
                  x: 0
                } : {}} transition={{
                  delay: 0.6 + index * 0.2,
                  duration: 0.8
                }} className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-semibold">{item.scope}</span>
                        <span className="text-gray-900 font-bold">{item.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <motion.div className={`h-4 rounded-full ${item.color}`} initial={{
                      width: 0
                    }} animate={isInView ? {
                      width: `${item.value}%`
                    } : {}} transition={{
                      delay: 0.8 + index * 0.2,
                      duration: 1.2,
                      ease: "easeOut"
                    }} />
                      </div>
                    </motion.div>)}
                </div>
              </Card>
            </motion.div>

            {/* Export options with hover effects */}
            <motion.div initial={{
            opacity: 0,
            x: 60
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            delay: 0.6,
            duration: 0.8
          }} className="space-y-6">
              {[{
              icon: FileText,
              label: "PDF Report",
              desc: "Client-ready sustainability report"
            }, {
              icon: Download,
              label: "CSV Export",
              desc: "Raw data for further analysis"
            }, {
              icon: TrendingUp,
              label: "API Access",
              desc: "Integrate with client systems"
            }].map((item, index) => <motion.div key={item.label} initial={{
              opacity: 0,
              y: 30
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              delay: 0.8 + index * 0.15,
              duration: 0.6
            }} whileHover={{
              scale: 1.02,
              x: 10
            }} whileInView={{
              x: [0, 5, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3
              }
            }}>
                  <Card className="p-6 bg-surface shadow-soft border border-border-subtle hover:shadow-elegant transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900">{item.label}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>)}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>;
};

// Scene 6: Built for Consultants
const SceneSix = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2
  });
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const features = [{
    icon: Layers,
    title: "Scope mapping logic",
    desc: "Intelligent categorization across all three scopes"
  }, {
    icon: Database,
    title: "Emission factor database",
    desc: "Comprehensive, up-to-date factors from trusted sources"
  }, {
    icon: Settings,
    title: "LCA stage builder",
    desc: "Flexible workflow for any assessment methodology"
  }, {
    icon: BarChart3,
    title: "Spend + activity data support",
    desc: "Handle both financial and physical data seamlessly"
  }, {
    icon: Target,
    title: "Integration-ready",
    desc: "API-first platform for existing consultant workflows"
  }];
  return <motion.section ref={ref} style={{
    opacity
  }} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-surface-light to-surface">
      <div className="container mx-auto px-6 text-center">
        {/* Section entrance indicator */}
        <motion.div initial={{
        width: 0
      }} animate={isInView ? {
        width: "100px"
      } : {}} transition={{
        duration: 0.8
      }} className="h-1 bg-primary mx-auto mb-8 rounded" />

        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        delay: 0.2,
        duration: 0.8
      }} className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for <span className="text-primary">Consultants</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Everything you need. Nothing you don't.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <motion.div key={feature.title} initial={{
            opacity: 0,
            y: 60
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            delay: 0.3 + index * 0.1,
            duration: 0.8
          }} whileHover={{
            y: -5,
            scale: 1.02
          }} whileInView={{
            y: [0, -3, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2
            }
          }}>
                <Card className="p-8 h-full bg-surface shadow-soft border border-border-subtle hover:shadow-elegant transition-all duration-300 group">
                  <motion.div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-variant rounded-lg mx-auto mb-6 flex items-center justify-center shadow-elegant" whileHover={{
                rotate: 10,
                scale: 1.1
              }} whileInView={{
                scale: [1, 1.05, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }
              }}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </div>
    </motion.section>;
};

// Scene 7: Get Early Access
const SceneSeven = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2
  });
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  return <motion.section ref={ref} style={{
    opacity
  }} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-surface to-surface-variant relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Section entrance indicator */}
        <motion.div initial={{
        width: 0
      }} animate={isInView ? {
        width: "100px"
      } : {}} transition={{
        duration: 0.8
      }} className="h-1 bg-primary mx-auto mb-8 rounded" />

        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        delay: 0.2,
        duration: 0.8
      }} className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Get <span className="text-primary">Early Access</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed font-medium">
            Join the next generation of carbon consultants. Streamline your LCA process, 
            deliver better results, and scale your practice.
          </p>

          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          delay: 0.5,
          duration: 0.8
        }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div whileHover={{
            scale: 1.05,
            y: -5
          }} whileTap={{
            scale: 0.95
          }}>
              <Button size="lg" className="h-14 w-full text-lg font-semibold bg-primary hover:bg-primary-variant text-white shadow-elegant hover:shadow-elegant-lg transition-all duration-300">
                Request Access
              </Button>
            </motion.div>
            
            <motion.div whileHover={{
            scale: 1.05,
            y: -5
          }} whileTap={{
            scale: 0.95
          }}>
              <Button variant="outline" size="lg" className="h-14 w-full text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                Try the Demo
              </Button>
            </motion.div>
            
            <motion.div whileHover={{
            scale: 1.05,
            y: -5
          }} whileTap={{
            scale: 0.95
          }}>
              <Button variant="secondary" size="lg" className="h-14 w-full text-lg font-semibold bg-surface-variant hover:bg-accent transition-all duration-300">
                Join Pilot Network
              </Button>
            </motion.div>
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} animate={isInView ? {
          opacity: 1
        } : {}} transition={{
          delay: 0.8,
          duration: 0.8
        }} className="text-gray-600">
            <p className="mb-4 font-medium">Trusted by leading sustainability consultants</p>
            <div className="flex justify-center space-x-8 text-sm">
              <span>✓ Free during beta</span>
              <span>✓ Priority support</span>
              <span>✓ Feature input</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background data flow visualization */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {isInView && Array.from({
        length: 15
      }).map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-primary rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        x: [0, Math.random() * 100 - 50],
        y: [0, Math.random() * 100 - 50],
        opacity: [0, 0.6, 0]
      }} transition={{
        duration: 8,
        delay: Math.random() * 2,
        repeat: Infinity,
        repeatDelay: Math.random() * 3
      }} />)}
      </div>
    </motion.section>;
};

// Main component
const ConsultantHero = () => {
  const {
    scrollY
  } = useScroll();
  const scrollProgress = useTransform(scrollY, [0, 7000], [0, 100]);
  return <div className="relative">
      {/* Navigation Bar */}
      <motion.nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200" initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.3,
      duration: 0.8
    }}>
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {/* First square */}
                <div className="w-6 h-6 bg-emisia-green rounded-md relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-tl-full"></div>
                </div>
                {/* Second square */}
                <div className="w-6 h-6 bg-emisia-green rounded-md relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-tl-full"></div>
                </div>
                {/* Third square */}
                <div className="w-6 h-6 bg-emisia-green rounded-md relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-tl-full"></div>
                </div>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-emisia-green transition-colors duration-200">
                Features
              </a>
              
              
              <a href="#about" className="text-gray-700 hover:text-emisia-green transition-colors duration-200">
                About
              </a>
              
              {/* Sign In Button */}
              <button className="px-6 py-2 bg-white border-2 border-emisia-green text-emisia-green rounded-lg hover:bg-emisia-green hover:text-white transition-all duration-200 font-medium">
                Sign In
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Progress indicator */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-variant z-50 origin-left" style={{
      scaleX: scrollProgress.get() / 100
    }} />

      {/* Scene components */}
      <SceneOne />
      <SceneTwo />
      <SceneThree />
      <SceneFour />
      <SceneFive />
      <SceneSix />
      <SceneSeven />
    </div>;
};
export default ConsultantHero;