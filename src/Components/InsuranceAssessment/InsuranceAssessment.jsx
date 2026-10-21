import React, { useState, useEffect, useRef } from "react";
import {
  FiShield,
  FiUser,
  FiUsers,
  FiFileText,
  FiAlertCircle,
  FiCheckCircle,
  FiPrinter,
  FiEdit3,
  FiActivity,
  FiCheck,
  FiAward,
  FiPercent,
  FiLock,
  FiUploadCloud,
  FiTrash2,
  FiSliders,
  FiCopy,
  FiFile,
  FiCalendar,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const sumInsuredValues = [
  { label: "₹3 lakh", numeric: 300000, baseRate: 4800 },
  { label: "₹5 lakh", numeric: 500000, baseRate: 6400 },
  { label: "₹10 lakh", numeric: 1000000, baseRate: 9200 },
  { label: "₹15 lakh", numeric: 1500000, baseRate: 11800 },
  { label: "₹25 lakh", numeric: 2500000, baseRate: 14500 },
  { label: "₹50 lakh", numeric: 5000000, baseRate: 19500 },
  { label: "₹1 Crore", numeric: 10000000, baseRate: 26000 },
];

const deductibleOptions = [
  { label: "Zero Deductible", amount: 0, discountRate: 0, desc: "100% Cashless baseline coverage from ₹1" },
  { label: "₹25,000", amount: 25000, discountRate: 0.18, desc: "~18% premium discount; self-borne threshold" },
  { label: "₹50,000", amount: 50000, discountRate: 0.32, desc: "~32% premium discount; corporate buffer" },
  { label: "₹1,00,000 / Super Top-Up", amount: 100000, discountRate: 0.48, desc: "~48% massive savings; high financial leverage" },
];

const InsuranceAssessment = () => {
  // Navigation tabs between integrated modules
  const [activeModule, setActiveModule] = useState("assessment"); // 'assessment', 'calculator', 'vault'

  // Always scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Maximum date allowed for Date of Birth is today
  const maxDateToday = new Date().toISOString().split("T")[0];

  // Helper to calculate exact age in years from calendar DOB string
  const calculateAge = (dobString) => {
    if (!dobString) return null;
    const birth = new Date(dobString);
    if (isNaN(birth.getTime())) return null;
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age >= 0 ? age : null;
  };

  // Helper to format date for display
  const formatDOBDisplay = (dobString) => {
    if (!dobString) return "";
    const d = new Date(dobString);
    if (isNaN(d.getTime())) return dobString;
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // ==========================================
  // 1. ASSESSMENT FORM & REPORT STATE
  // ==========================================
  const [formData, setFormData] = useState({
    customerName: "",
    mobileNumber: "",
    city: "Nagpur",
    eldestAgeBand: "Choose age band",
    coverageScope: "",
    annualBudget: "Choose budget",
    preferredSumInsured: "Choose cover",
    existingInsurance: "Choose answer",
    mainPriority: "Balanced coverage and affordability",
    medicalHistoryStatus: "Choose answer",
    consent: false,
  });

  // Calendar Selected Dates of Birth for Covered Members
  const [memberDOBs, setMemberDOBs] = useState({
    selfDOB: "",
    spouseDOB: "",
    child1DOB: "",
    child2DOB: "",
    parent1DOB: "",
    parent2DOB: "",
    other1DOB: "",
  });

  const [errors, setErrors] = useState({});
  const [report, setReport] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const coverageOptions = [
    { id: "Self", label: "Self", icon: <FiUser className="w-4 h-4" /> },
    { id: "Self + spouse", label: "Self + spouse", icon: <FiUsers className="w-4 h-4" /> },
    { id: "Family with children", label: "Family with children", icon: <FiUsers className="w-4 h-4" /> },
    { id: "Parents", label: "Parents", icon: <FiShield className="w-4 h-4" /> },
    { id: "Other family members", label: "Other family members", icon: <FiUsers className="w-4 h-4" /> },
  ];

  const ageBandOptions = ["18–25", "26–35", "36–45", "46–55", "56–60", "Above 60"];
  const budgetOptions = [
    "Under ₹10,000",
    "₹10,000–₹20,000",
    "₹20,000–₹35,000",
    "₹35,000–₹50,000",
    "Above ₹50,000",
  ];
  const sumInsuredSelectOptions = [
    "₹3 lakh",
    "₹5 lakh",
    "₹10 lakh",
    "₹15 lakh",
    "₹25 lakh",
    "₹50 lakh",
    "₹1 Crore",
  ];
  const existingInsuranceOptions = [
    "No",
    "Yes - Employer group policy",
    "Yes - Individual policy",
    "Yes - Family floater",
  ];
  const priorityOptions = [
    "Balanced coverage and affordability",
    "Higher sum insured",
    "Lowest premium",
    "Cashless network in Nagpur",
    "Pre-existing diseases cover",
    "Zero co-pay & no room rent capping",
    "Comprehensive OPD & critical illness",
  ];
  const medicalStatusOptions = [
    "No known pre-existing conditions",
    "Has medical history / ongoing treatment to disclose",
    "Prefer to discuss privately with advisor",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  // Synchronize eldest adult age band automatically when calendar DOB changes
  const syncEldestAgeBandFromDOBs = (updatedDOBs, scope) => {
    const adultAges = [];
    if (scope === "Self") {
      if (updatedDOBs.selfDOB) adultAges.push(calculateAge(updatedDOBs.selfDOB));
    } else if (scope === "Self + spouse") {
      if (updatedDOBs.selfDOB) adultAges.push(calculateAge(updatedDOBs.selfDOB));
      if (updatedDOBs.spouseDOB) adultAges.push(calculateAge(updatedDOBs.spouseDOB));
    } else if (scope === "Family with children") {
      if (updatedDOBs.selfDOB) adultAges.push(calculateAge(updatedDOBs.selfDOB));
      if (updatedDOBs.spouseDOB) adultAges.push(calculateAge(updatedDOBs.spouseDOB));
    } else if (scope === "Parents") {
      if (updatedDOBs.parent1DOB) adultAges.push(calculateAge(updatedDOBs.parent1DOB));
      if (updatedDOBs.parent2DOB) adultAges.push(calculateAge(updatedDOBs.parent2DOB));
    } else if (scope === "Other family members") {
      if (updatedDOBs.other1DOB) adultAges.push(calculateAge(updatedDOBs.other1DOB));
    }

    const validAges = adultAges.filter((a) => a !== null && a >= 18);
    if (validAges.length > 0) {
      const maxAge = Math.max(...validAges);
      let band = "18–25";
      if (maxAge <= 25) band = "18–25";
      else if (maxAge <= 35) band = "26–35";
      else if (maxAge <= 45) band = "36–45";
      else if (maxAge <= 55) band = "46–55";
      else if (maxAge <= 60) band = "56–60";
      else band = "Above 60";

      setFormData((prev) => ({ ...prev, eldestAgeBand: band }));
      if (errors.eldestAgeBand) {
        setErrors((prev) => ({ ...prev, eldestAgeBand: null }));
      }
    }
  };

  // Calendar DOB change handler
  const handleDOBChange = (field, value) => {
    const updated = { ...memberDOBs, [field]: value };
    setMemberDOBs(updated);

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }

    syncEldestAgeBandFromDOBs(updated, formData.coverageScope);
  };

  // Handle Coverage Scope selection and trigger DOB sync
  const handleScopeSelect = (scopeId) => {
    handleInputChange("coverageScope", scopeId);
    syncEldestAgeBandFromDOBs(memberDOBs, scopeId);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = "Customer name is required";
    }

    const cleanMobile = formData.mobileNumber.replace(/\D/g, "");
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (cleanMobile.length < 10) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.coverageScope) {
      newErrors.coverageScope = "Please select who needs coverage";
    } else {
      // Validate calendar DOB selection based on selected scope
      if (formData.coverageScope === "Self") {
        if (!memberDOBs.selfDOB) {
          newErrors.selfDOB = "Please select Self Date of Birth from calendar";
        }
      } else if (formData.coverageScope === "Self + spouse") {
        if (!memberDOBs.selfDOB) {
          newErrors.selfDOB = "Please select Self Date of Birth from calendar";
        }
        if (!memberDOBs.spouseDOB) {
          newErrors.spouseDOB = "Please select Spouse Date of Birth from calendar";
        }
      } else if (formData.coverageScope === "Family with children") {
        if (!memberDOBs.selfDOB) {
          newErrors.selfDOB = "Please select Self Date of Birth from calendar";
        }
        if (!memberDOBs.spouseDOB) {
          newErrors.spouseDOB = "Please select Spouse Date of Birth from calendar";
        }
      } else if (formData.coverageScope === "Parents") {
        if (!memberDOBs.parent1DOB) {
          newErrors.parent1DOB = "Please select Parent 1 Date of Birth from calendar";
        }
      } else if (formData.coverageScope === "Other family members") {
        if (!memberDOBs.other1DOB) {
          newErrors.other1DOB = "Please select Primary Member Date of Birth from calendar";
        }
      }
    }

    if (formData.eldestAgeBand === "Choose age band") {
      newErrors.eldestAgeBand = "Please select or verify age band of eldest adult";
    }

    if (formData.annualBudget === "Choose budget") {
      newErrors.annualBudget = "Please select your annual premium budget";
    }

    if (formData.preferredSumInsured === "Choose cover") {
      newErrors.preferredSumInsured = "Please select preferred sum insured";
    }

    if (formData.existingInsurance === "Choose answer") {
      newErrors.existingInsurance = "Please select existing insurance status";
    }

    if (formData.medicalHistoryStatus === "Choose answer") {
      newErrors.medicalHistoryStatus = "Please select your medical history status";
    }

    if (!formData.consent) {
      newErrors.consent = "You must give consent to proceed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Helper to build friendly text summary of member DOBs
  const getMemberDOBSummary = () => {
    const parts = [];
    if (formData.coverageScope === "Self") {
      if (memberDOBs.selfDOB) {
        parts.push(`Self: ${formatDOBDisplay(memberDOBs.selfDOB)} (${calculateAge(memberDOBs.selfDOB)} yrs)`);
      }
    } else if (formData.coverageScope === "Self + spouse") {
      if (memberDOBs.selfDOB) {
        parts.push(`Self: ${formatDOBDisplay(memberDOBs.selfDOB)} (${calculateAge(memberDOBs.selfDOB)} yrs)`);
      }
      if (memberDOBs.spouseDOB) {
        parts.push(`Spouse: ${formatDOBDisplay(memberDOBs.spouseDOB)} (${calculateAge(memberDOBs.spouseDOB)} yrs)`);
      }
    } else if (formData.coverageScope === "Family with children") {
      if (memberDOBs.selfDOB) {
        parts.push(`Self: ${formatDOBDisplay(memberDOBs.selfDOB)} (${calculateAge(memberDOBs.selfDOB)} yrs)`);
      }
      if (memberDOBs.spouseDOB) {
        parts.push(`Spouse: ${formatDOBDisplay(memberDOBs.spouseDOB)} (${calculateAge(memberDOBs.spouseDOB)} yrs)`);
      }
      if (memberDOBs.child1DOB) {
        parts.push(`Child 1: ${formatDOBDisplay(memberDOBs.child1DOB)} (${calculateAge(memberDOBs.child1DOB)} yrs)`);
      }
      if (memberDOBs.child2DOB) {
        parts.push(`Child 2: ${formatDOBDisplay(memberDOBs.child2DOB)} (${calculateAge(memberDOBs.child2DOB)} yrs)`);
      }
    } else if (formData.coverageScope === "Parents") {
      if (memberDOBs.parent1DOB) {
        parts.push(`Parent 1: ${formatDOBDisplay(memberDOBs.parent1DOB)} (${calculateAge(memberDOBs.parent1DOB)} yrs)`);
      }
      if (memberDOBs.parent2DOB) {
        parts.push(`Parent 2: ${formatDOBDisplay(memberDOBs.parent2DOB)} (${calculateAge(memberDOBs.parent2DOB)} yrs)`);
      }
    } else if (formData.coverageScope === "Other family members") {
      if (memberDOBs.other1DOB) {
        parts.push(`Member 1: ${formatDOBDisplay(memberDOBs.other1DOB)} (${calculateAge(memberDOBs.other1DOB)} yrs)`);
      }
    }
    return parts.join(" • ") || "Calendar DOB Recorded";
  };

  const handleGenerateReport = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstErrorElement = document.getElementById("assessment-form-top");
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const refId = `RD-HI-${Math.floor(100000 + Math.random() * 900000)}`;
      const currentDate = new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      // Feasibility logic: Budget vs. Preferred Cover
      let feasibilityNote = "";
      if (
        formData.annualBudget === "Under ₹10,000" &&
        (formData.preferredSumInsured.includes("25") ||
          formData.preferredSumInsured.includes("50") ||
          formData.preferredSumInsured.includes("Crore"))
      ) {
        feasibilityNote =
          "High sum insured (₹25L+) with budget <₹10,000 is best structured via a Base Policy (₹3L–₹5L) combined with a high-deductible Super Top-Up cover to stay strictly within budget while achieving massive protection.";
      } else if (
        formData.annualBudget === "Under ₹10,000" &&
        formData.coverageScope === "Family with children"
      ) {
        feasibilityNote =
          "Budget of under ₹10,000 for a family floater allows a reliable ₹5 lakh base cover. Adding a Super Top-Up is recommended after year 1 for higher financial cushion.";
      } else if (formData.annualBudget === "Above ₹50,000") {
        feasibilityNote =
          "Excellent budget flexibility. You are fully positioned to secure comprehensive ₹25L–₹1 Crore 100% cashless cover with zero co-payment, global emergency treatment, and OPD benefits.";
      } else {
        feasibilityNote =
          `Your budget of ${formData.annualBudget} comfortably aligns with a ${formData.preferredSumInsured} sum insured in Nagpur. Multi-year lock-in (2–3 years) yields additional premium savings of 7.5%–12.5%.`;
      }

      // Family Floater vs. Individual comparison note
      let floaterVsIndividualNote = "";
      if (
        formData.coverageScope === "Parents" ||
        formData.eldestAgeBand === "Above 60" ||
        formData.eldestAgeBand === "56–60"
      ) {
        floaterVsIndividualNote =
          "Senior Age Caution: In family floater policies, the premium is calculated based on the age of the eldest member. We strongly advise taking a separate individual policy for parents/elders (55+) to prevent inflating the premium for younger family members.";
      } else if (
        formData.coverageScope === "Family with children" ||
        formData.coverageScope === "Self + spouse"
      ) {
        floaterVsIndividualNote =
          "Family Floater Structure Recommended: An umbrella floater sum insured offers 20%–30% lower premium compared to standalone individual plans for each member, while allowing any single family member to utilize the entire sum insured in an emergency.";
      } else {
        floaterVsIndividualNote =
          "Individual Policy Recommended: Provides dedicated sum insured exclusively for yourself without sharing limits. Excellent claim independence and compounding NCB bonus over time.";
      }

      setReport({
        refId,
        date: currentDate,
        feasibilityNote,
        floaterVsIndividualNote,
        dobSummary: getMemberDOBSummary(),
        formData: { ...formData },
        memberDOBs: { ...memberDOBs },
      });

      setIsSubmitting(false);

      setTimeout(() => {
        const reportElement = document.getElementById("needs-report-section");
        if (reportElement) {
          reportElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }, 350);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleEditAnswers = () => {
    const formElement = document.getElementById("assessment-form-top");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getWhatsAppUrl = () => {
    if (!report) return "#";
    const text = `*Health Insurance Needs Report - RD Online Services & Consultancy*
📄 *Report Ref:* ${report.refId} (${report.date})

👤 *Customer Details:*
• Name: ${report.formData.customerName}
• Mobile: ${report.formData.mobileNumber}
• City: ${report.formData.city}
• Members to Cover: ${report.formData.coverageScope}
• Dates of Birth (DOBs): ${report.dobSummary}
• Eldest Age Band: ${report.formData.eldestAgeBand}

🛡️ *Coverage & Budget:*
• Annual Budget: ${report.formData.annualBudget}
• Preferred Cover: ${report.formData.preferredSumInsured}
• Existing Policy: ${report.formData.existingInsurance}
• Main Priority: ${report.formData.mainPriority}
• Medical Disclosure: ${report.formData.medicalHistoryStatus}

🏥 *Nagpur Network Hospital Preference:*
Alexis, Kingsway, Wockhardt, Orange City, Meditrina, AIIMS Nagpur

_Please review my needs report and provide tailored policy recommendations & premium quotes._`;

    return `https://api.whatsapp.com/send?phone=919823058351&text=${encodeURIComponent(text)}`;
  };

  // ==========================================
  // 2. COVERAGE CALCULATOR STATE & LOGIC
  // ==========================================
  const [calcAge, setCalcAge] = useState(32);
  const [calcMembers, setCalcMembers] = useState(3);
  const [calcSumIndex, setCalcSumIndex] = useState(2); // default ₹10L
  const [calcDeductibleIndex, setCalcDeductibleIndex] = useState(0); // Zero deductible
  const [calcTenureYears, setCalcTenureYears] = useState(1); // 1, 2, or 3 years

  const calculateEstimates = () => {
    const selectedCover = sumInsuredValues[calcSumIndex];
    const selectedDeductible = deductibleOptions[calcDeductibleIndex];

    let ageMultiplier = 1.0;
    if (calcAge <= 25) ageMultiplier = 0.85;
    else if (calcAge <= 35) ageMultiplier = 1.0;
    else if (calcAge <= 45) ageMultiplier = 1.35;
    else if (calcAge <= 55) ageMultiplier = 1.95;
    else if (calcAge <= 60) ageMultiplier = 2.65;
    else ageMultiplier = 3.4;

    let memberMultiplier = 1.0;
    if (calcMembers === 1) memberMultiplier = 1.0;
    else if (calcMembers === 2) memberMultiplier = 1.6;
    else if (calcMembers === 3) memberMultiplier = 1.95;
    else if (calcMembers === 4) memberMultiplier = 2.3;
    else if (calcMembers === 5) memberMultiplier = 2.75;
    else memberMultiplier = 3.2;

    const baseGross = selectedCover.baseRate * ageMultiplier * memberMultiplier;
    const afterDeductible = baseGross * (1 - selectedDeductible.discountRate);

    let tenureDiscount = 0;
    if (calcTenureYears === 2) tenureDiscount = 0.075;
    else if (calcTenureYears === 3) tenureDiscount = 0.125;

    const annualNet = Math.round(afterDeductible * (1 - tenureDiscount));
    const monthlyNet = Math.round(annualNet / 12);
    const gstAmount = Math.round(annualNet * 0.18);
    const totalPayableAnnual = annualNet + gstAmount;
    const deductibleSavings = Math.round(baseGross * selectedDeductible.discountRate);

    return {
      monthlyNet,
      annualNet,
      gstAmount,
      totalPayableAnnual,
      deductibleSavings,
      selectedCover,
      selectedDeductible,
    };
  };

  const calcResults = calculateEstimates();

  const applyCalculatorToForm = () => {
    let ageBand = "26–35";
    if (calcAge <= 25) ageBand = "18–25";
    else if (calcAge <= 35) ageBand = "26–35";
    else if (calcAge <= 45) ageBand = "36–45";
    else if (calcAge <= 55) ageBand = "46–55";
    else if (calcAge <= 60) ageBand = "56–60";
    else ageBand = "Above 60";

    let scope = "Family with children";
    if (calcMembers === 1) scope = "Self";
    else if (calcMembers === 2) scope = "Self + spouse";
    else if (calcMembers >= 5) scope = "Parents";

    let budget = "₹10,000–₹20,000";
    if (calcResults.annualNet < 10000) budget = "Under ₹10,000";
    else if (calcResults.annualNet <= 20000) budget = "₹10,000–₹20,000";
    else if (calcResults.annualNet <= 35000) budget = "₹20,000–₹35,000";
    else if (calcResults.annualNet <= 50000) budget = "₹35,000–₹50,000";
    else budget = "Above ₹50,000";

    setFormData((prev) => ({
      ...prev,
      eldestAgeBand: ageBand,
      coverageScope: scope,
      preferredSumInsured: calcResults.selectedCover.label,
      annualBudget: budget,
    }));

    setActiveModule("assessment");
    setTimeout(() => {
      const formEl = document.getElementById("assessment-form-top");
      if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // ==========================================
  // 3. SECURE DOCUMENT PORTAL STATE & LOGIC
  // ==========================================
  const [stagedFiles, setStagedFiles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Previous Policy (Portability/NCB)");
  const [isHashing, setIsHashing] = useState(false);
  const [copiedHashId, setCopiedHashId] = useState(null);
  const fileInputRef = useRef(null);

  const documentCategories = [
    {
      id: "Previous Policy (Portability/NCB)",
      label: "Previous Policy (Portability/NCB)",
      desc: "Policy schedule / renewal notice for porting accumulated NCB up to 50%–100%.",
    },
    {
      id: "KYC / Age proof",
      label: "KYC / Age proof",
      desc: "Aadhar card, PAN card, or passport for age-tier underwriting verification.",
    },
    {
      id: "Discharge summaries",
      label: "Discharge summaries",
      desc: "Hospital discharge summaries or past surgical records for private medical review.",
    },
  ];

  const computeSHA256 = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  };

  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    setIsHashing(true);

    const newStaged = [];
    for (const file of files) {
      try {
        const hash = await computeSHA256(file);
        const stagedDoc = {
          id: `DOC-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          name: file.name,
          size: file.size,
          type: file.type || "application/octet-stream",
          category: selectedCategory,
          sha256: hash,
          stagedTime: new Date().toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        newStaged.push(stagedDoc);
      } catch (err) {
        console.error("SHA-256 Computation error:", err);
      }
    }

    setStagedFiles((prev) => [...prev, ...newStaged]);
    setIsHashing(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeStagedFile = (id) => {
    setStagedFiles((prev) => prev.filter((doc) => doc.id !== id));
  };

  const clearVault = () => {
    setStagedFiles([]);
  };

  const copyChecksum = (hash, id) => {
    navigator.clipboard.writeText(hash);
    setCopiedHashId(id);
    setTimeout(() => setCopiedHashId(null), 2500);
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-slate-50 min-h-screen pb-16 font-sans">
      {/* Top Banner / Hero (hidden during print) */}
      <div className="no-print bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-8 md:py-10 px-4 shadow-md w-full max-w-full overflow-x-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-400/30 px-3.5 py-1 rounded-full text-xs font-medium text-blue-200 mb-3">
            <FiShield className="text-blue-400 shrink-0" />
            RD Online Services & Consultancy • Integrated Health Advisory Portal
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2">
            Health Insurance Advisory & Client Portal
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Assessment Form, Interactive Live Coverage Calculator, and Client-Side SHA-256 Secure Document Vault.
          </p>

          {/* Module Selector Navigation Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            <button
              type="button"
              onClick={() => setActiveModule("assessment")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center gap-2 ${
                activeModule === "assessment"
                  ? "bg-blue-600 text-white shadow-md ring-2 ring-blue-400"
                  : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              <FiFileText className="w-4 h-4" /> Assessment & Needs Report
            </button>

            <button
              type="button"
              onClick={() => setActiveModule("calculator")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center gap-2 ${
                activeModule === "calculator"
                  ? "bg-blue-600 text-white shadow-md ring-2 ring-blue-400"
                  : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              <FiSliders className="w-4 h-4" /> Live Coverage Calculator
            </button>

            <button
              type="button"
              onClick={() => setActiveModule("vault")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center gap-2 ${
                activeModule === "vault"
                  ? "bg-blue-600 text-white shadow-md ring-2 ring-blue-400"
                  : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              <FiLock className="w-4 h-4" /> Secure Document Portal
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-6 w-full overflow-x-hidden">
        {/* ======================================================== */}
        {/* MODULE 1: ASSESSMENT FORM & REPORT */}
        {/* ======================================================== */}
        {activeModule === "assessment" && (
          <div className="space-y-8 w-full max-w-full overflow-x-hidden">
            {/* Quick banner to jump to calculator */}
            <div className="no-print bg-blue-50 border border-blue-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <FiSliders className="w-5 h-5 text-blue-700 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-blue-900">Want to test monthly cost estimates first?</div>
                  <div className="text-xs text-blue-700">Use our live Coverage Calculator with interactive sliders.</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveModule("calculator")}
                className="px-3.5 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-2xs transition"
              >
                Open Calculator
              </button>
            </div>

            {/* Assessment Form Card */}
            <div
              id="assessment-form-top"
              className="assessment-form-wrapper no-print bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden w-full max-w-full"
            >
              <div className="bg-slate-100/80 border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h2 className="text-base md:text-lg font-bold text-slate-800 flex items-center gap-2">
                    <FiFileText className="text-blue-600" />
                    1. Assessment Form Fields & Placeholders
                  </h2>
                  <p className="text-xs text-slate-500">
                    Fields marked with an asterisk (<span className="text-rose-500">*</span>) are mandatory.
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-blue-100 text-blue-800 rounded-md">
                  Free Assessment
                </span>
              </div>

              <form onSubmit={handleGenerateReport} className="p-6 md:p-8 space-y-8">
                {/* 1. Contact details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-xs">
                      1
                    </span>
                    <h3 className="text-base font-bold text-slate-800">1. Contact details</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                        Customer name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Full name"
                        value={formData.customerName}
                        onChange={(e) => handleInputChange("customerName", e.target.value)}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition ${
                          errors.customerName
                            ? "border-rose-400 focus:ring-rose-200"
                            : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                        }`}
                      />
                      {errors.customerName && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <FiAlertCircle /> {errors.customerName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                        Mobile number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Mobile number"
                        maxLength={10}
                        value={formData.mobileNumber}
                        onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition ${
                          errors.mobileNumber
                            ? "border-rose-400 focus:ring-rose-200"
                            : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                        }`}
                      />
                      {errors.mobileNumber && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <FiAlertCircle /> {errors.mobileNumber}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                        City <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Nagpur"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition ${
                          errors.city
                            ? "border-rose-400 focus:ring-rose-200"
                            : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                        }`}
                      />
                      {errors.city && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <FiAlertCircle /> {errors.city}
                        </p>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
                          Age of eldest adult to be insured <span className="text-rose-500">*</span>
                        </label>
                      </div>
                      <select
                        value={formData.eldestAgeBand}
                        onChange={(e) => handleInputChange("eldestAgeBand", e.target.value)}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 transition ${
                          errors.eldestAgeBand
                            ? "border-rose-400 focus:ring-rose-200 text-rose-700"
                            : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                        }`}
                      >
                        <option disabled value="Choose age band">
                          Choose age band
                        </option>
                        {ageBandOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <p className="text-[11px] text-blue-600 mt-1">
                        Tip: Auto-synchronizes automatically when you pick your calendar DOBs below!
                      </p>
                      {errors.eldestAgeBand && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <FiAlertCircle /> {errors.eldestAgeBand}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 2. Coverage requirements */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-xs">
                      2
                    </span>
                    <h3 className="text-base font-bold text-slate-800">2. Coverage requirements</h3>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                      Who needs coverage? <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {coverageOptions.map((opt) => {
                        const isSelected = formData.coverageScope === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => handleScopeSelect(opt.id)}
                            className={`flex items-center gap-2.5 p-3 text-left rounded-xl border text-sm font-medium transition cursor-pointer ${
                              isSelected
                                ? "bg-blue-50/90 border-blue-600 text-blue-900 ring-1 ring-blue-500 shadow-2xs"
                                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                isSelected ? "border-blue-600 bg-blue-600" : "border-slate-400 bg-white"
                              }`}
                            >
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                            <span className="text-slate-500">{opt.icon}</span>
                            <span>{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                    {errors.coverageScope && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <FiAlertCircle /> {errors.coverageScope}
                      </p>
                    )}
                  </div>

                  {/* ============================================================== */}
                  {/* CALENDAR DATE OF BIRTH (DOB) SELECTOR BASED ON WHO NEEDS COVERAGE */}
                  {/* ============================================================== */}
                  {formData.coverageScope && (
                    <div className="bg-slate-50 border border-blue-200 rounded-xl p-4 sm:p-5 space-y-4 transition-all">
                      <div className="flex items-center gap-2 border-b border-blue-200/80 pb-2">
                        <FiCalendar className="w-5 h-5 text-blue-700" />
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
                            Selected Member(s) Date of Birth (Calendar Selector)
                          </h4>
                          <p className="text-[11px] text-slate-500">
                            Pick the date of birth from the calendar to calculate live age and match underwriting guidelines.
                          </p>
                        </div>
                      </div>

                      {/* Scenario 1: Self (Single DOB) */}
                      {formData.coverageScope === "Self" && (
                        <div className="max-w-md">
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Self Date of Birth <span className="text-rose-500">*</span>
                          </label>
                          <div className="flex items-center gap-3">
                            <input
                              type="date"
                              max={maxDateToday}
                              value={memberDOBs.selfDOB}
                              onChange={(e) => handleDOBChange("selfDOB", e.target.value)}
                              className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 transition ${
                                errors.selfDOB
                                  ? "border-rose-400 focus:ring-rose-200"
                                  : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                              }`}
                            />
                            {memberDOBs.selfDOB && calculateAge(memberDOBs.selfDOB) !== null && (
                              <span className="whitespace-nowrap px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg text-xs font-bold border border-blue-200">
                                {calculateAge(memberDOBs.selfDOB)} Years
                              </span>
                            )}
                          </div>
                          {errors.selfDOB && (
                            <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                              <FiAlertCircle /> {errors.selfDOB}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Scenario 2: Self + Spouse (Both DOBs) */}
                      {formData.coverageScope === "Self + spouse" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Self DOB */}
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Self Date of Birth <span className="text-rose-500">*</span>
                            </label>
                            <div className="flex items-center gap-3">
                              <input
                                type="date"
                                max={maxDateToday}
                                value={memberDOBs.selfDOB}
                                onChange={(e) => handleDOBChange("selfDOB", e.target.value)}
                                className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 transition ${
                                  errors.selfDOB
                                    ? "border-rose-400 focus:ring-rose-200"
                                    : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                                }`}
                              />
                              {memberDOBs.selfDOB && calculateAge(memberDOBs.selfDOB) !== null && (
                                <span className="whitespace-nowrap px-2.5 py-1.5 bg-blue-100 text-blue-800 rounded-lg text-xs font-bold border border-blue-200">
                                  {calculateAge(memberDOBs.selfDOB)} Yrs
                                </span>
                              )}
                            </div>
                            {errors.selfDOB && (
                              <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                                <FiAlertCircle /> {errors.selfDOB}
                              </p>
                            )}
                          </div>

                          {/* Spouse DOB */}
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Spouse Date of Birth <span className="text-rose-500">*</span>
                            </label>
                            <div className="flex items-center gap-3">
                              <input
                                type="date"
                                max={maxDateToday}
                                value={memberDOBs.spouseDOB}
                                onChange={(e) => handleDOBChange("spouseDOB", e.target.value)}
                                className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 transition ${
                                  errors.spouseDOB
                                    ? "border-rose-400 focus:ring-rose-200"
                                    : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                                }`}
                              />
                              {memberDOBs.spouseDOB && calculateAge(memberDOBs.spouseDOB) !== null && (
                                <span className="whitespace-nowrap px-2.5 py-1.5 bg-indigo-100 text-indigo-800 rounded-lg text-xs font-bold border border-indigo-200">
                                  {calculateAge(memberDOBs.spouseDOB)} Yrs
                                </span>
                              )}
                            </div>
                            {errors.spouseDOB && (
                              <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                                <FiAlertCircle /> {errors.spouseDOB}
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Scenario 3: Family with children (Self + Spouse + Children DOBs) */}
                      {formData.coverageScope === "Family with children" && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Self */}
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Self Date of Birth <span className="text-rose-500">*</span>
                              </label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="date"
                                  max={maxDateToday}
                                  value={memberDOBs.selfDOB}
                                  onChange={(e) => handleDOBChange("selfDOB", e.target.value)}
                                  className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 transition ${
                                    errors.selfDOB
                                      ? "border-rose-400 focus:ring-rose-200"
                                      : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                                  }`}
                                />
                                {memberDOBs.selfDOB && calculateAge(memberDOBs.selfDOB) !== null && (
                                  <span className="whitespace-nowrap px-2.5 py-1.5 bg-blue-100 text-blue-800 rounded-lg text-xs font-bold border border-blue-200">
                                    {calculateAge(memberDOBs.selfDOB)} Yrs
                                  </span>
                                )}
                              </div>
                              {errors.selfDOB && (
                                <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                                  <FiAlertCircle /> {errors.selfDOB}
                                </p>
                              )}
                            </div>

                            {/* Spouse */}
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Spouse Date of Birth <span className="text-rose-500">*</span>
                              </label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="date"
                                  max={maxDateToday}
                                  value={memberDOBs.spouseDOB}
                                  onChange={(e) => handleDOBChange("spouseDOB", e.target.value)}
                                  className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 transition ${
                                    errors.spouseDOB
                                      ? "border-rose-400 focus:ring-rose-200"
                                      : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                                  }`}
                                />
                                {memberDOBs.spouseDOB && calculateAge(memberDOBs.spouseDOB) !== null && (
                                  <span className="whitespace-nowrap px-2.5 py-1.5 bg-indigo-100 text-indigo-800 rounded-lg text-xs font-bold border border-indigo-200">
                                    {calculateAge(memberDOBs.spouseDOB)} Yrs
                                  </span>
                                )}
                              </div>
                              {errors.spouseDOB && (
                                <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                                  <FiAlertCircle /> {errors.spouseDOB}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Children DOBs */}
                          <div className="border-t border-blue-200/60 pt-3">
                            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                              Children Dates of Birth (Up to 2 Children)
                            </span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-xs text-slate-600 mb-1 font-medium">
                                  Child 1 Date of Birth
                                </label>
                                <div className="flex items-center gap-2">
                                  <input
                                    type="date"
                                    max={maxDateToday}
                                    value={memberDOBs.child1DOB}
                                    onChange={(e) => handleDOBChange("child1DOB", e.target.value)}
                                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-blue-600 focus:ring-blue-100"
                                  />
                                  {memberDOBs.child1DOB && calculateAge(memberDOBs.child1DOB) !== null && (
                                    <span className="whitespace-nowrap px-2 py-1 bg-emerald-100 text-emerald-800 rounded-md text-xs font-bold border border-emerald-200">
                                      {calculateAge(memberDOBs.child1DOB)} Yrs
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div>
                                <label className="block text-xs text-slate-600 mb-1 font-medium">
                                  Child 2 Date of Birth (Optional)
                                </label>
                                <div className="flex items-center gap-2">
                                  <input
                                    type="date"
                                    max={maxDateToday}
                                    value={memberDOBs.child2DOB}
                                    onChange={(e) => handleDOBChange("child2DOB", e.target.value)}
                                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-blue-600 focus:ring-blue-100"
                                  />
                                  {memberDOBs.child2DOB && calculateAge(memberDOBs.child2DOB) !== null && (
                                    <span className="whitespace-nowrap px-2 py-1 bg-emerald-100 text-emerald-800 rounded-md text-xs font-bold border border-emerald-200">
                                      {calculateAge(memberDOBs.child2DOB)} Yrs
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Scenario 4: Parents (Father / Mother DOBs) */}
                      {formData.coverageScope === "Parents" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Parent 1 Date of Birth <span className="text-rose-500">*</span>
                            </label>
                            <div className="flex items-center gap-2">
                              <input
                                type="date"
                                max={maxDateToday}
                                value={memberDOBs.parent1DOB}
                                onChange={(e) => handleDOBChange("parent1DOB", e.target.value)}
                                className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 transition ${
                                  errors.parent1DOB
                                    ? "border-rose-400 focus:ring-rose-200"
                                    : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                                }`}
                              />
                              {memberDOBs.parent1DOB && calculateAge(memberDOBs.parent1DOB) !== null && (
                                <span className="whitespace-nowrap px-2.5 py-1.5 bg-amber-100 text-amber-900 rounded-lg text-xs font-bold border border-amber-200">
                                  {calculateAge(memberDOBs.parent1DOB)} Yrs
                                </span>
                              )}
                            </div>
                            {errors.parent1DOB && (
                              <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                                <FiAlertCircle /> {errors.parent1DOB}
                              </p>
                            )}
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Parent 2 Date of Birth (Optional)
                            </label>
                            <div className="flex items-center gap-2">
                              <input
                                type="date"
                                max={maxDateToday}
                                value={memberDOBs.parent2DOB}
                                onChange={(e) => handleDOBChange("parent2DOB", e.target.value)}
                                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-blue-600 focus:ring-blue-100 transition"
                              />
                              {memberDOBs.parent2DOB && calculateAge(memberDOBs.parent2DOB) !== null && (
                                <span className="whitespace-nowrap px-2.5 py-1.5 bg-amber-100 text-amber-900 rounded-lg text-xs font-bold border border-amber-200">
                                  {calculateAge(memberDOBs.parent2DOB)} Yrs
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Scenario 5: Other family members */}
                      {formData.coverageScope === "Other family members" && (
                        <div className="max-w-md">
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Primary Member Date of Birth <span className="text-rose-500">*</span>
                          </label>
                          <div className="flex items-center gap-2">
                            <input
                              type="date"
                              max={maxDateToday}
                              value={memberDOBs.other1DOB}
                              onChange={(e) => handleDOBChange("other1DOB", e.target.value)}
                              className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 transition ${
                                errors.other1DOB
                                  ? "border-rose-400 focus:ring-rose-200"
                                  : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                              }`}
                            />
                            {memberDOBs.other1DOB && calculateAge(memberDOBs.other1DOB) !== null && (
                              <span className="whitespace-nowrap px-2.5 py-1.5 bg-blue-100 text-blue-800 rounded-lg text-xs font-bold border border-blue-200">
                                {calculateAge(memberDOBs.other1DOB)} Yrs
                              </span>
                            )}
                          </div>
                          {errors.other1DOB && (
                            <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                              <FiAlertCircle /> {errors.other1DOB}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                        Annual premium budget <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.annualBudget}
                        onChange={(e) => handleInputChange("annualBudget", e.target.value)}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 transition ${
                          errors.annualBudget
                            ? "border-rose-400 focus:ring-rose-200 text-rose-700"
                            : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                        }`}
                      >
                        <option disabled value="Choose budget">
                          Choose budget
                        </option>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.annualBudget && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <FiAlertCircle /> {errors.annualBudget}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                        Preferred sum insured <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.preferredSumInsured}
                        onChange={(e) => handleInputChange("preferredSumInsured", e.target.value)}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 transition ${
                          errors.preferredSumInsured
                            ? "border-rose-400 focus:ring-rose-200 text-rose-700"
                            : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                        }`}
                      >
                        <option disabled value="Choose cover">
                          Choose cover
                        </option>
                        {sumInsuredSelectOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.preferredSumInsured && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <FiAlertCircle /> {errors.preferredSumInsured}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                        Existing health insurance? <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.existingInsurance}
                        onChange={(e) => handleInputChange("existingInsurance", e.target.value)}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 transition ${
                          errors.existingInsurance
                            ? "border-rose-400 focus:ring-rose-200 text-rose-700"
                            : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                        }`}
                      >
                        <option disabled value="Choose answer">
                          Choose answer
                        </option>
                        {existingInsuranceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.existingInsurance && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <FiAlertCircle /> {errors.existingInsurance}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                        Main priority
                      </label>
                      <select
                        value={formData.mainPriority}
                        onChange={(e) => handleInputChange("mainPriority", e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-blue-600 focus:ring-blue-100 transition"
                      >
                        {priorityOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* 3. Medical disclosure and consent */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-xs">
                      3
                    </span>
                    <h3 className="text-base font-bold text-slate-800">3. Medical disclosure and consent</h3>
                  </div>

                  <div className="bg-amber-50/90 border-l-4 border-amber-500 p-4 rounded-r-xl shadow-2xs">
                    <div className="flex items-start gap-3">
                      <FiAlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                          Notice: Privacy & Medical Disclosure Protocol
                        </h4>
                        <p className="text-xs md:text-sm text-amber-950 mt-1 leading-relaxed font-normal">
                          &quot;Do not enter detailed medical records in this form. Any pre-existing conditions,
                          medicines, surgeries or other requested medical information must be disclosed
                          accurately and privately through the insurer&apos;s official proposal process.&quot;
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                      Medical history status <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.medicalHistoryStatus}
                      onChange={(e) => handleInputChange("medicalHistoryStatus", e.target.value)}
                      className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 transition ${
                        errors.medicalHistoryStatus
                          ? "border-rose-400 focus:ring-rose-200 text-rose-700"
                          : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                      }`}
                    >
                      <option disabled value="Choose answer">
                        Choose answer
                      </option>
                      {medicalStatusOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.medicalHistoryStatus && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <FiAlertCircle /> {errors.medicalHistoryStatus}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => handleInputChange("consent", e.target.checked)}
                        className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="text-xs md:text-sm text-slate-700 leading-snug group-hover:text-slate-900">
                        &quot;I agree that my submitted contact details and preferences may be used to respond
                        to this insurance enquiry. I understand this is not an insurance application or a policy
                        approval.&quot; <span className="text-rose-500">*</span>
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
                        <FiAlertCircle /> {errors.consent}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Generating Assessment Report...
                      </>
                    ) : (
                      <>
                        <FiActivity className="w-5 h-5" />
                        Generate Needs Report
                      </>
                    )}
                  </button>
                  <div className="text-xs text-slate-500 text-center sm:text-right">
                    Instant digital assessment & printable PDF report
                  </div>
                </div>
              </form>
            </div>

            {/* Generated Report Section */}
            {report && (
              <div
                id="needs-report-section"
                className="mt-10 bg-white rounded-2xl shadow-xl border border-slate-300 overflow-hidden w-full max-w-full"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 md:p-8 border-b-4 border-blue-600">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                        RD Online Services & Consultancy
                      </h2>
                      <p className="text-sm md:text-base text-blue-300 font-medium mt-0.5">
                        Health Insurance Needs Report
                      </p>
                      <p className="text-xs text-slate-300 mt-1">
                        Independent Client Needs Assessment & Hospital Network Review
                      </p>
                    </div>
                    <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-right">
                      <span className="text-[11px] text-blue-200 block uppercase font-semibold tracking-wider">
                        Assessment Reference
                      </span>
                      <span className="text-base font-bold text-amber-300 font-mono">
                        {report.refId}
                      </span>
                      <span className="text-xs text-slate-200 block mt-0.5">
                        Generated on {report.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-8 text-slate-800">
                  {/* Preliminary Assessment Table */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-md bg-blue-700 text-white flex items-center justify-center font-bold text-xs">
                        1
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        Preliminary Assessment (Customer Profile Table)
                      </h3>
                    </div>

                    <div className="overflow-x-auto w-full max-w-full rounded-xl border border-slate-200 shadow-2xs block">
                      <table className="report-table min-w-full text-xs text-left divide-y divide-slate-200">
                        <thead className="bg-slate-100 text-slate-700 font-semibold uppercase tracking-wider">
                          <tr>
                            <th className="px-3 py-2.5">Customer</th>
                            <th className="px-3 py-2.5">Mobile</th>
                            <th className="px-3 py-2.5">City</th>
                            <th className="px-3 py-2.5">Scope & Selected Calendar DOBs</th>
                            <th className="px-3 py-2.5">Age band</th>
                            <th className="px-3 py-2.5">Annual budget</th>
                            <th className="px-3 py-2.5">Preferred cover</th>
                            <th className="px-3 py-2.5">Existing policy</th>
                            <th className="px-3 py-2.5">Main priority</th>
                            <th className="px-3 py-2.5">Medical disclosure</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200 text-slate-800">
                          <tr>
                            <td className="px-3 py-3 font-semibold text-blue-900 whitespace-nowrap">
                              {report.formData.customerName}
                            </td>
                            <td className="px-3 py-3 font-mono">{report.formData.mobileNumber}</td>
                            <td className="px-3 py-3 font-medium">{report.formData.city}</td>
                            <td className="px-3 py-3 text-slate-800">
                              <div className="font-bold text-blue-800">{report.formData.coverageScope}</div>
                              <div className="text-[11px] text-slate-600 mt-0.5">{report.dobSummary}</div>
                            </td>
                            <td className="px-3 py-3 whitespace-nowrap font-medium text-slate-700">
                              {report.formData.eldestAgeBand}
                            </td>
                            <td className="px-3 py-3 text-slate-700 whitespace-nowrap font-medium">
                              {report.formData.annualBudget}
                            </td>
                            <td className="px-3 py-3 font-bold text-blue-700 whitespace-nowrap">
                              {report.formData.preferredSumInsured}
                            </td>
                            <td className="px-3 py-3">{report.formData.existingInsurance}</td>
                            <td className="px-3 py-3 text-slate-700 font-medium">
                              {report.formData.mainPriority}
                            </td>
                            <td className="px-3 py-3">
                              <span className="inline-block px-2 py-0.5 rounded text-[11px] font-medium bg-amber-100 text-amber-900 border border-amber-200">
                                {report.formData.medicalHistoryStatus}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Initial Guidance */}
                  <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-blue-700 text-white flex items-center justify-center font-bold text-xs">
                        2
                      </span>
                      <h3 className="text-base font-bold text-blue-950">Initial Guidance</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      <div className="bg-white p-3.5 rounded-lg border border-blue-200">
                        <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-1">
                          Budget vs. Preferred Cover Feasibility Note
                        </h4>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {report.feasibilityNote}
                        </p>
                      </div>

                      <div className="bg-white p-3.5 rounded-lg border border-blue-200">
                        <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-1">
                          Family-Floater vs. Individual Policy Structures
                        </h4>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {report.floaterVsIndividualNote}
                        </p>
                      </div>

                      <div className="bg-white p-3.5 rounded-lg border border-blue-200">
                        <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-1">
                          Policy Conditions Checklist (Room Rent, Co-Pay, Sub-Limits)
                        </h4>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          Always choose a plan with <strong>No Room Rent Capping</strong> (Single Private AC room)
                          and <strong>Zero Co-pay</strong>. Policies with 1% room rent limits trigger severe proportionate deductions
                          on surgeon fees and operation theatre charges across private hospitals in Nagpur.
                        </p>
                      </div>

                      <div className="bg-white p-3.5 rounded-lg border border-blue-200">
                        <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-1">
                          Underwriting Disclosure Verification Directly with Insurer
                        </h4>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          Strict compliance with Section 45 of the Insurance Act: Any pre-existing hypertension,
                          diabetes, thyroid, or past hospitalizations must be declared during the official tele-underwriting / proposal form.
                          Transparency guarantees seamless claim settlement after statutory waiting periods.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Coverage Options & Deductible Tiers Table */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-md bg-blue-700 text-white flex items-center justify-center font-bold text-xs">
                        3
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        Coverage Options & Deductible Tiers Table
                      </h3>
                    </div>

                    <div className="overflow-x-auto w-full max-w-full rounded-xl border border-slate-200 shadow-2xs block">
                      <table className="report-table min-w-full text-xs text-left divide-y divide-slate-200">
                        <thead className="bg-slate-100 text-slate-700 font-semibold uppercase tracking-wider">
                          <tr>
                            <th className="px-4 py-2.5">Deductible Tier</th>
                            <th className="px-4 py-2.5">Coverage Baseline & Mechanism</th>
                            <th className="px-4 py-2.5">Premium Impact</th>
                            <th className="px-4 py-2.5">Advisory Suitability</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200 text-slate-800">
                          <tr>
                            <td className="px-4 py-3 font-bold text-blue-900">Zero Deductible</td>
                            <td className="px-4 py-3">
                              100% cashless baseline claims paid from ₹1 onwards without out-of-pocket threshold.
                            </td>
                            <td className="px-4 py-3 font-semibold text-slate-900">Standard Baseline (100%)</td>
                            <td className="px-4 py-3">Recommended as primary standalone policy for complete peace of mind.</td>
                          </tr>
                          <tr className="bg-slate-50/50">
                            <td className="px-4 py-3 font-bold text-slate-800">₹25,000 Deductible</td>
                            <td className="px-4 py-3">
                              First ₹25,000 of hospitalization per policy year is self-borne; remainder 100% cashless.
                            </td>
                            <td className="px-4 py-3 font-semibold text-emerald-700">~18% Saving</td>
                            <td className="px-4 py-3">Ideal for young, healthy families seeking premium reduction.</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-bold text-slate-800">₹50,000 Deductible</td>
                            <td className="px-4 py-3">
                              First ₹50,000 payable by customer or existing primary insurance.
                            </td>
                            <td className="px-4 py-3 font-semibold text-emerald-700">~32% Saving</td>
                            <td className="px-4 py-3">Excellent choice to pair over basic government or corporate schemes.</td>
                          </tr>
                          <tr className="bg-slate-50/50">
                            <td className="px-4 py-3 font-bold text-blue-700">
                              ₹1,00,000 Deductible / Super Top-Up
                            </td>
                            <td className="px-4 py-3">
                              High-leverage aggregate threshold; activates once annual claims cross ₹1 Lakh.
                            </td>
                            <td className="px-4 py-3 font-bold text-emerald-700">~48% Saving</td>
                            <td className="px-4 py-3">
                              Super Top-Up: Boosts your cover up to ₹25L–₹50L at exceptionally low annual cost.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Potential Policy Discounts */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-md bg-blue-700 text-white flex items-center justify-center font-bold text-xs">
                        4
                      </span>
                      <h3 className="text-base font-bold text-slate-900">Potential Policy Discounts</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                        <div className="flex items-center gap-1.5 text-blue-700 font-bold text-xs uppercase mb-1">
                          <FiPercent /> Multi-Year Tenure
                        </div>
                        <div className="text-base font-extrabold text-slate-900">7.5%–12.5%</div>
                        <p className="text-[11px] text-slate-600 mt-1">
                          2–3 Year upfront tenure discount protects against annual premium hikes.
                        </p>
                      </div>

                      <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                        <div className="flex items-center gap-1.5 text-blue-700 font-bold text-xs uppercase mb-1">
                          <FiAward /> Cumulative NCB
                        </div>
                        <div className="text-base font-extrabold text-slate-900">+50% to +100%</div>
                        <p className="text-[11px] text-slate-600 mt-1">
                          Guaranteed sum insured enhancement for claim-free years without premium increase.
                        </p>
                      </div>

                      <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                        <div className="flex items-center gap-1.5 text-blue-700 font-bold text-xs uppercase mb-1">
                          <FiUsers /> Family Floater Rebate
                        </div>
                        <div className="text-base font-extrabold text-slate-900">10%–15%</div>
                        <p className="text-[11px] text-slate-600 mt-1">
                          Combined floater discount versus insuring individual adults under separate plans.
                        </p>
                      </div>

                      <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                        <div className="flex items-center gap-1.5 text-blue-700 font-bold text-xs uppercase mb-1">
                          <FiActivity /> Wellness Check-Ups
                        </div>
                        <div className="text-base font-extrabold text-slate-900">Complimentary</div>
                        <p className="text-[11px] text-slate-600 mt-1">
                          Free annual comprehensive pathology check-up and renewal wellness score rebates.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Industry Benchmarks Comparison */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-md bg-blue-700 text-white flex items-center justify-center font-bold text-xs">
                        5
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        Industry Benchmarks Comparison
                      </h3>
                    </div>

                    <div className="overflow-x-auto w-full max-w-full rounded-xl border border-slate-200 shadow-2xs block">
                      <table className="report-table min-w-full text-xs text-left divide-y divide-slate-200">
                        <thead className="bg-slate-100 text-slate-700 font-semibold uppercase tracking-wider">
                          <tr>
                            <th className="px-4 py-2.5">Key Policy Feature</th>
                            <th className="px-4 py-2.5">Market Baseline Standard</th>
                            <th className="px-4 py-2.5">RD Recommended Benchmark</th>
                            <th className="px-4 py-2.5">Why It Matters</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200 text-slate-800">
                          <tr>
                            <td className="px-4 py-3 font-semibold text-slate-900">
                              Claim Settlement Ratio (CSR)
                            </td>
                            <td className="px-4 py-3 text-slate-600">Baseline 92%–95%</td>
                            <td className="px-4 py-3 font-bold text-emerald-700">Recommended &gt;97.5%</td>
                            <td className="px-4 py-3">Ensures low rejection ratios and rapid cashless processing times.</td>
                          </tr>
                          <tr className="bg-slate-50/50">
                            <td className="px-4 py-3 font-semibold text-slate-900">Room Rent Limit</td>
                            <td className="px-4 py-3 text-rose-600">1% of sum insured sub-limit</td>
                            <td className="px-4 py-3 font-bold text-blue-700">
                              No Room Rent Capping (Single Private AC)
                            </td>
                            <td className="px-4 py-3">
                              Avoids proportional deductions where exceeding room rent slashes doctor/OT claim payouts.
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-semibold text-slate-900">
                              Pre-Existing Diseases (PED)
                            </td>
                            <td className="px-4 py-3 text-slate-600">36–48 months waiting</td>
                            <td className="px-4 py-3 font-bold text-emerald-700">12–24 months (or waiver rider)</td>
                            <td className="px-4 py-3">Accelerates coverage for diabetes, blood pressure, asthma, and thyroid.</td>
                          </tr>
                          <tr className="bg-slate-50/50">
                            <td className="px-4 py-3 font-semibold text-slate-900">Restoration Benefit</td>
                            <td className="px-4 py-3 text-slate-600">1-time recharge (same illness excluded)</td>
                            <td className="px-4 py-3 font-bold text-blue-700">100% Unlimited Restoration</td>
                            <td className="px-4 py-3">
                              Instantly reinstates full sum insured if exhausted, valid for both related & unrelated illnesses.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Nagpur Network Checklist */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-md bg-blue-700 text-white flex items-center justify-center font-bold text-xs">
                        6
                      </span>
                      <h3 className="text-base font-bold text-slate-900">Nagpur Network Checklist</h3>
                    </div>
                    <p className="text-xs text-slate-600 mb-3">
                      Insurers recommended by RD Online Services feature verified direct cashless desks at leading tertiary multi-specialty hospitals across Nagpur:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                      {[
                        { name: "Alexis / Max Healthcare", loc: "Mankapur, Koradi Road, Nagpur" },
                        { name: "Kingsway Hospital", loc: "Station Road, Mohan Nagar, Nagpur" },
                        { name: "Wockhardt Super Speciality", loc: "Shankar Nagar / Rashtrabhasha, Nagpur" },
                        { name: "Orange City Hospital & Research Institute", loc: "Khamla Square, Nagpur" },
                        { name: "Meditrina Institute of Medical Sciences", loc: "Ramdaspeth, Nagpur" },
                        { name: "AIIMS Nagpur Empaneled Network", loc: "MIHAN, Nagpur" },
                      ].map((hosp, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50/60"
                        >
                          <FiCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs font-bold text-slate-800">{hosp.name}</div>
                            <div className="text-[11px] text-slate-500">{hosp.loc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="border-t border-slate-200 pt-4">
                    <div className="p-3.5 bg-slate-100 rounded-lg text-slate-600 text-[11px] leading-relaxed">
                      <strong>Important:</strong> &quot;This report is not an insurance quote, underwriting decision,
                      policy contract or guarantee of acceptance or claim payment.&quot; RD Online Services & Consultancy
                      provides independent information and facilitation. Final policy issuance and claim adjudication remain
                      under the sole discretion of the respective IRDAI-registered insurance company.
                    </div>
                  </div>

                  {/* Report Actions */}
                  <div className="no-print border-t border-slate-200 pt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={handlePrint}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-900 active:bg-slate-950 text-white text-xs md:text-sm font-semibold rounded-lg shadow-sm transition cursor-pointer"
                      >
                        <FiPrinter className="w-4 h-4" /> Download / Print PDF (A4)
                      </button>

                      <button
                        onClick={handleEditAnswers}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs md:text-sm font-semibold rounded-lg transition cursor-pointer"
                      >
                        <FiEdit3 className="w-4 h-4" /> Edit answers
                      </button>
                    </div>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs md:text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
                    >
                      <FaWhatsapp className="w-4 h-4" /> Send enquiry to RD on WhatsApp (9823058351)
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* MODULE 2: LIVE COVERAGE CALCULATOR */}
        {/* ======================================================== */}
        {activeModule === "calculator" && (
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden w-full max-w-full">
            <div className="bg-slate-100/80 border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-base md:text-lg font-bold text-slate-800 flex items-center gap-2">
                  <FiSliders className="text-blue-600" />
                  Live Health Insurance Coverage Calculator
                </h2>
                <p className="text-xs text-slate-500">
                  Slide and tune your age, family count, sum insured, and deductible to view instant cost estimates.
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-md">
                Live Estimates
              </span>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 1. Age Slider */}
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      <FiUser className="text-blue-600" /> Age of Eldest Member
                    </label>
                    <span className="px-3 py-1 bg-blue-700 text-white rounded-lg text-sm font-extrabold font-mono">
                      {calcAge} Years
                    </span>
                  </div>
                  <input
                    type="range"
                    min="18"
                    max="75"
                    step="1"
                    value={calcAge}
                    onChange={(e) => setCalcAge(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                    <span>18 Yrs (Young Adult)</span>
                    <span>45 Yrs</span>
                    <span>75 Yrs (Senior)</span>
                  </div>
                  <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200">
                    Age Band: <strong>{calcAge <= 25 ? "18–25" : calcAge <= 35 ? "26–35" : calcAge <= 45 ? "36–45" : calcAge <= 55 ? "46–55" : calcAge <= 60 ? "56–60" : "Above 60"}</strong>.
                    Premiums compound at 36, 46, and 56 age thresholds.
                  </div>
                </div>

                {/* 2. Family Members Slider */}
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      <FiUsers className="text-blue-600" /> Family Members to Insure
                    </label>
                    <span className="px-3 py-1 bg-blue-700 text-white rounded-lg text-sm font-extrabold font-mono">
                      {calcMembers} {calcMembers === 1 ? "Person" : "Members"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="1"
                    value={calcMembers}
                    onChange={(e) => setCalcMembers(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                    <span>1 (Self)</span>
                    <span>2 (Couple)</span>
                    <span>4 (Family)</span>
                    <span>6 (Extended)</span>
                  </div>
                  <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200">
                    Structure: <strong>{calcMembers === 1 ? "Individual Standalone Policy" : "Family Floater Umbrella Plan"}</strong>.
                    Floater grants shared sum insured to all members.
                  </div>
                </div>

                {/* 3. Sum Insured Selector */}
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3 md:col-span-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      <FiShield className="text-blue-600" /> Preferred Sum Insured Cover
                    </label>
                    <span className="px-3 py-1 bg-indigo-700 text-white rounded-lg text-sm font-extrabold font-mono">
                      {sumInsuredValues[calcSumIndex].label}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={sumInsuredValues.length - 1}
                    step="1"
                    value={calcSumIndex}
                    onChange={(e) => setCalcSumIndex(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="grid grid-cols-7 text-[10px] sm:text-xs text-center text-slate-600 font-semibold gap-1">
                    {sumInsuredValues.map((v, i) => (
                      <span
                        key={i}
                        className={`cursor-pointer py-1 rounded ${
                          calcSumIndex === i ? "text-indigo-700 font-extrabold" : "hover:text-slate-900"
                        }`}
                        onClick={() => setCalcSumIndex(i)}
                      >
                        {v.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. Deductible Tiers */}
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3 md:col-span-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Select Annual Deductible Tier (Threshold before policy pays)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {deductibleOptions.map((opt, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setCalcDeductibleIndex(i)}
                        className={`p-3.5 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                          calcDeductibleIndex === i
                            ? "bg-white border-blue-600 ring-2 ring-blue-500 shadow-sm"
                            : "bg-white border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div>
                          <div className="text-sm font-bold text-slate-900">{opt.label}</div>
                          <div className="text-[11px] text-slate-500 mt-1">{opt.desc}</div>
                        </div>
                        {opt.discountRate > 0 && (
                          <span className="mt-2.5 inline-block text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            Save {Math.round(opt.discountRate * 100)}% on premium
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Policy Tenure Selection */}
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2 md:col-span-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Policy Tenure Multi-Year Discount
                    </label>
                    <span className="text-xs text-blue-700 font-semibold">
                      Locks in pricing against future rate revisions
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { years: 1, label: "1 Year", discount: "Standard rate" },
                      { years: 2, label: "2 Years", discount: "7.5% Off" },
                      { years: 3, label: "3 Years", discount: "12.5% Off" },
                    ].map((t) => (
                      <button
                        key={t.years}
                        type="button"
                        onClick={() => setCalcTenureYears(t.years)}
                        className={`p-3 rounded-xl border text-center transition cursor-pointer ${
                          calcTenureYears === t.years
                            ? "bg-blue-700 text-white border-blue-700 shadow-sm"
                            : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <div className="font-bold text-sm">{t.label}</div>
                        <div className={`text-[11px] ${calcTenureYears === t.years ? "text-blue-100" : "text-emerald-600 font-semibold"}`}>
                          {t.discount}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Cost Estimates Card */}
              <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div>
                    <span className="text-xs text-blue-300 font-semibold uppercase tracking-wider">
                      Estimated Monthly Outlay
                    </span>
                    <div className="text-3xl md:text-4xl font-extrabold text-amber-300 mt-1 font-mono">
                      ₹{calcResults.monthlyNet.toLocaleString("en-IN")}{" "}
                      <span className="text-xs font-normal text-slate-300">/ mo</span>
                    </div>
                    <div className="text-xs text-slate-300 mt-1">
                      Calculated as annual cost amortized over 12 months
                    </div>
                  </div>

                  <div className="border-y md:border-y-0 md:border-x border-white/15 py-4 md:py-0 md:px-6">
                    <span className="text-xs text-blue-300 font-semibold uppercase tracking-wider">
                      Annual Premium Breakdown
                    </span>
                    <div className="text-xl md:text-2xl font-bold text-white mt-1">
                      ₹{calcResults.annualNet.toLocaleString("en-IN")}{" "}
                      <span className="text-xs font-normal text-slate-300">/ year</span>
                    </div>
                    <div className="text-xs text-slate-300 mt-1 flex items-center justify-between">
                      <span>GST (18%): ₹{calcResults.gstAmount.toLocaleString("en-IN")}</span>
                      <span className="font-semibold text-emerald-400">
                        Total: ₹{calcResults.totalPayableAnnual.toLocaleString("en-IN")}
                      </span>
                    </div>
                    {calcResults.deductibleSavings > 0 && (
                      <div className="text-[11px] text-emerald-300 font-semibold mt-2 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-500/30">
                        Deductible Savings: ₹{calcResults.deductibleSavings.toLocaleString("en-IN")} saved/yr
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={applyCalculatorToForm}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl text-sm transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FiCheck className="w-4 h-4" /> Apply to Assessment Form
                    </button>
                    <p className="text-[11px] text-slate-300 text-center">
                      Auto-syncs age, sum insured, and budget into your Assessment Report.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MODULE 3: SECURE DOCUMENT PORTAL */}
        {/* ======================================================== */}
        {activeModule === "vault" && (
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden w-full max-w-full">
            <div className="bg-slate-100/80 border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-base md:text-lg font-bold text-slate-800 flex items-center gap-2">
                  <FiLock className="text-blue-600" />
                  Secure Document Portal (Staging Vault)
                </h2>
                <p className="text-xs text-slate-500">
                  Client-side SHA-256 cryptographic checksum verification with zero public server exposure.
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-md flex items-center gap-1.5">
                <FiCheckCircle className="text-emerald-600" /> Client Sandbox Active
              </span>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 flex items-start gap-3">
                <FiShield className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-950 leading-relaxed">
                  <strong className="text-emerald-900 block font-bold text-sm mb-0.5">
                    100% Client-Side Privacy Architecture:
                  </strong>
                  Documents staged in this vault are verified locally within your browser using the native
                  Web Cryptography API (<code className="bg-white px-1 py-0.5 rounded text-emerald-800 border border-emerald-200">crypto.subtle SHA-256</code>).
                  Files are <strong>never uploaded to public cloud servers</strong> or shared without your explicit directive.
                </div>
              </div>

              {/* Upload Dropzone */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Select Document Category to Stage:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {documentCategories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer flex flex-col justify-between ${
                          selectedCategory === cat.id
                            ? "bg-blue-50/80 border-blue-600 text-blue-900 ring-1 ring-blue-500 font-bold"
                            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <FiFile className="text-blue-600" />
                          <span>{cat.label}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-normal mt-1">{cat.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-2 border-dashed border-slate-300 hover:border-blue-500 bg-slate-50/60 hover:bg-blue-50/30 transition rounded-2xl p-6 text-center cursor-pointer">
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="document-vault-input"
                  />
                  <label
                    htmlFor="document-vault-input"
                    className="cursor-pointer flex flex-col items-center justify-center space-y-2"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                      <FiUploadCloud className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-bold text-slate-800">
                      Click to choose documents or drag & drop files here
                    </div>
                    <div className="text-xs text-slate-500">
                      Supports PDF, PNG, JPG (Max 15MB each). Immediate SHA-256 fingerprint generated.
                    </div>
                  </label>

                  {isHashing && (
                    <div className="mt-3 flex items-center justify-center gap-2 text-xs text-blue-700 font-semibold">
                      <span className="w-3.5 h-3.5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                      Computing SHA-256 cryptographic hash...
                    </div>
                  )}
                </div>
              </div>

              {/* Staged Vault Records */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FiLock className="text-blue-600" />
                    Staged Documents in Browser Vault ({stagedFiles.length})
                  </h3>
                  {stagedFiles.length > 0 && (
                    <button
                      type="button"
                      onClick={clearVault}
                      className="text-xs text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <FiTrash2 /> Purge Vault
                    </button>
                  )}
                </div>

                {stagedFiles.length === 0 ? (
                  <div className="text-center py-10 bg-slate-50 rounded-xl border border-slate-200">
                    <FiFileText className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <div className="text-xs text-slate-500 font-medium">
                      No documents currently staged. Select your previous policy, KYC, or discharge summaries above.
                    </div>
                  </div>
                ) : (
                  <div className="overflow-x-auto w-full max-w-full rounded-xl border border-slate-200 block">
                    <table className="report-table min-w-full text-xs text-left divide-y divide-slate-200">
                      <thead className="bg-slate-100 text-slate-700 font-semibold uppercase tracking-wider">
                        <tr>
                          <th className="px-3.5 py-2.5">Category</th>
                          <th className="px-3.5 py-2.5">File Name & Size</th>
                          <th className="px-3.5 py-2.5">SHA-256 Checksum Fingerprint</th>
                          <th className="px-3.5 py-2.5 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-slate-800">
                        {stagedFiles.map((doc) => (
                          <tr key={doc.id} className="hover:bg-slate-50/70 transition">
                            <td className="px-3.5 py-3 whitespace-nowrap font-medium text-blue-900">
                              <span className="inline-block px-2 py-0.5 bg-blue-50 border border-blue-200 text-blue-800 rounded text-[11px]">
                                {doc.category}
                              </span>
                            </td>
                            <td className="px-3.5 py-3">
                              <div className="font-semibold text-slate-900 truncate max-w-xs">{doc.name}</div>
                              <div className="text-[10px] text-slate-500">
                                {(doc.size / 1024).toFixed(1)} KB • Staged at {doc.stagedTime}
                              </div>
                            </td>
                            <td className="px-3.5 py-3 font-mono text-[11px]">
                              <div className="flex items-center gap-2">
                                <span className="bg-slate-100 px-2 py-1 rounded border border-slate-200 text-slate-700 truncate max-w-xs">
                                  {doc.sha256}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => copyChecksum(doc.sha256, doc.id)}
                                  className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50 cursor-pointer"
                                  title="Copy SHA-256 Hash"
                                >
                                  {copiedHashId === doc.id ? (
                                    <span className="text-[10px] font-bold text-emerald-600">Copied!</span>
                                  ) : (
                                    <FiCopy className="w-3.5 h-3.5" />
                                  )}
                                </button>
                              </div>
                              <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                                <FiCheckCircle className="text-emerald-600" /> Tamper-Proof Integrity Verified
                              </span>
                            </td>
                            <td className="px-3.5 py-3 text-right whitespace-nowrap">
                              <button
                                type="button"
                                onClick={() => removeStagedFile(doc.id)}
                                className="text-rose-600 hover:text-rose-800 p-1.5 rounded hover:bg-rose-50 cursor-pointer"
                                title="Remove document from vault"
                              >
                                <FiTrash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Verified Checksum Summary for Advisor Consultation */}
              {stagedFiles.length > 0 && (
                <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <FiCheckCircle className="text-emerald-600" />
                    How to present your verified documents to RD Consultancy:
                  </div>
                  <p className="leading-relaxed">
                    You can share the generated cryptographic SHA-256 checksums with your insurance advisor.
                    During official insurer proposal filing, the insurer will verify that the uploaded documents
                    exactly match these hashes, protecting your sensitive medical details from unauthorized third-party handling.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InsuranceAssessment;
