'use client';

import { useEffect, useState } from 'react';

interface TaxResult {
  annualGrosspay: number;
  monthlyGrossPay: number;
  biweeklyGrossPlay: number;
  weeklyGrossPlay: number;
  federalTax: number;
  stateTax: number;
  socialSecurity: number;
  medicare: number;
  totalDeductions: number;
  annualTakeHome: number;
  monthlyTakeHome: number;
  biweeklyTakeHome: number;
  weeklyTakeHome: number;
  effectiveTaxRate: number;
}

interface LocalStorageState {
  salary: string;
  filingStatus: string;
  state: string;
  payFrequency: string;
  language: string;
}

const STATE_TAX_RATES: Record<string, number> = {
  'Alabama': 0.05,
  'Alaska': 0,
  'Arizona': 0.0475,
  'Arkansas': 0.0575,
  'California': 0.093,
  'Colorado': 0.0455,
  'Connecticut': 0.0699,
  'Delaware': 0.066,
  'Florida': 0,
  'Georgia': 0.0575,
  'Hawaii': 0.0811,
  'Idaho': 0.0585,
  'Illinois': 0.0495,
  'Indiana': 0.0323,
  'Iowa': 0.0806,
  'Kansas': 0.0575,
  'Kentucky': 0.0495,
  'Louisiana': 0.0425,
  'Maine': 0.0715,
  'Maryland': 0.0953,
  'Massachusetts': 0.05,
  'Michigan': 0.0425,
  'Minnesota': 0.0885,
  'Mississippi': 0.05,
  'Missouri': 0.0515,
  'Montana': 0.069,
  'Nebraska': 0.0684,
  'Nevada': 0,
  'New Hampshire': 0,
  'New Jersey': 0.0637,
  'New Mexico': 0.059,
  'New York': 0.0685,
  'North Carolina': 0.0575,
  'North Dakota': 0.027,
  'Ohio': 0.0575,
  'Oklahoma': 0.0575,
  'Oregon': 0.099,
  'Pennsylvania': 0.0307,
  'Rhode Island': 0.0699,
  'South Carolina': 0.0665,
  'South Dakota': 0,
  'Tennessee': 0,
  'Texas': 0,
  'Utah': 0.0495,
  'Vermont': 0.0875,
  'Virginia': 0.0575,
  'Washington': 0,
  'West Virginia': 0.065,
  'Wisconsin': 0.0765,
  'Wyoming': 0,
  'District of Columbia': 0.0895,
};

const FEDERAL_BRACKETS_2025 = {
  'Single': [
    { limit: 11925, rate: 0.1 },
    { limit: 48475, rate: 0.12 },
    { limit: 103350, rate: 0.22 },
    { limit: 197300, rate: 0.24 },
    { limit: 250525, rate: 0.32 },
    { limit: 626350, rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ],
  'Married Filing Jointly': [
    { limit: 23850, rate: 0.1 },
    { limit: 96950, rate: 0.12 },
    { limit: 206700, rate: 0.22 },
    { limit: 394600, rate: 0.24 },
    { limit: 501050, rate: 0.32 },
    { limit: 751200, rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ],
  'Married Filing Separately': [
    { limit: 11925, rate: 0.1 },
    { limit: 48475, rate: 0.12 },
    { limit: 103350, rate: 0.22 },
    { limit: 197300, rate: 0.24 },
    { limit: 250525, rate: 0.32 },
    { limit: 375600, rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ],
  'Head of Household': [
    { limit: 15975, rate: 0.1 },
    { limit: 61250, rate: 0.12 },
    { limit: 137050, rate: 0.22 },
    { limit: 207050, rate: 0.24 },
    { limit: 523450, rate: 0.32 },
    { limit: 625850, rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ],
};

const STANDARD_DEDUCTIONS: Record<string, number> = {
  'Single': 15000,
  'Married Filing Jointly': 30000,
  'Married Filing Separately': 15000,
  'Head of Household': 22500,
};

const TRANSLATIONS: Record<string, Record<string, string>> = {
  'en': {
    'title': 'Salary Tax Calculator',
    'annual_salary': 'Annual Salary',
    'filing_status': 'Filing Status',
    'state': 'State',
    'pay_frequency': 'Pay Frequency',
    'calculate': 'Calculate',
    'annual': 'Annual',
    'monthly': 'Monthly',
    'biweekly': 'Bi-weekly',
    'weekly': 'Weekly',
    'gross_pay': 'Gross Pay',
    'federal_tax': 'Federal Tax',
    'state_tax': 'State Tax',
    'social_security': 'Social Security (6.2%)',
    'medicare': 'Medicare (1.45%)',
    'total_deductions': 'Total Deductions',
    'take_home_pay': 'Take-Home Pay',
    'effective_tax_rate': 'Effective Tax Rate',
  },
  'es': {
    'title': 'Calculadora de Impuestos de Salario',
    'annual_salary': 'Salario Anual',
    'filing_status': 'Estado de Presentación',
    'state': 'Estado',
    'pay_frequency': 'Frecuencia de Pago',
    'calculate': 'Calcular',
    'annual': 'Anual',
    'monthly': 'Mensual',
    'biweekly': 'Quincenal',
    'weekly': 'Semanal',
    'gross_pay': 'Salario Bruto',
    'federal_tax': 'Impuesto Federal',
    'state_tax': 'Impuesto Estatal',
    'social_security': 'Seguro Social (6.2%)',
    'medicare': 'Medicare (1.45%)',
    'total_deductions': 'Deducciones Totales',
    'take_home_pay': 'Sueldo Neto',
    'effective_tax_rate': 'Tasa Impositiva Efectiva',
  },
  'fr': {
    'title': 'Calculatrice d\'Impôt sur le Salaire',
    'annual_salary': 'Salaire Annuel',
    'filing_status': 'Statut de Déclaration',
    'state': 'État',
    'pay_frequency': 'Fréquence de Paiement',
    'calculate': 'Calculer',
    'annual': 'Annuel',
    'monthly': 'Mensuel',
    'biweekly': 'Bihebdomadaire',
    'weekly': 'Hebdomadaire',
    'gross_pay': 'Salaire Brut',
    'federal_tax': 'Impôt Fédéral',
    'state_tax': 'Impôt d\'État',
    'social_security': 'Sécurité Sociale (6.2%)',
    'medicare': 'Medicare (1.45%)',
    'total_deductions': 'Déductions Totales',
    'take_home_pay': 'Salaire Net',
    'effective_tax_rate': 'Taux d\'Imposition Effectif',
  },
  'de': {
    'title': 'Gehaltssteuerrechner',
    'annual_salary': 'Jahresgehalt',
    'filing_status': 'Anmeldestatus',
    'state': 'Bundesstaat',
    'pay_frequency': 'Zahlungshäufigkeit',
    'calculate': 'Berechnen',
    'annual': 'Jährlich',
    'monthly': 'Monatlich',
    'biweekly': 'Zweiwöchentlich',
    'weekly': 'Wöchentlich',
    'gross_pay': 'Brutto',
    'federal_tax': 'Bundessteuer',
    'state_tax': 'Staatssteuer',
    'social_security': 'Sozialversicherung (6.2%)',
    'medicare': 'Medicare (1.45%)',
    'total_deductions': 'Gesamtabzüge',
    'take_home_pay': 'Netto-Gehalt',
    'effective_tax_rate': 'Effektiver Steuersatz',
  },
  'it': {
    'title': 'Calcolatore Imposta Stipendio',
    'annual_salary': 'Stipendio Annuale',
    'filing_status': 'Stato di Archiviazione',
    'state': 'Stato',
    'pay_frequency': 'Frequenza di Pagamento',
    'calculate': 'Calcolare',
    'annual': 'Annuale',
    'monthly': 'Mensile',
    'biweekly': 'Bimensile',
    'weekly': 'Settimanale',
    'gross_pay': 'Stipendio Lordo',
    'federal_tax': 'Imposta Federale',
    'state_tax': 'Imposta Statale',
    'social_security': 'Sicurezza Sociale (6.2%)',
    'medicare': 'Medicare (1.45%)',
    'total_deductions': 'Detrazioni Totali',
    'take_home_pay': 'Stipendio Netto',
    'effective_tax_rate': 'Aliquota Fiscale Effettiva',
  },
  'pt': {
    'title': 'Calculadora de Imposto sobre Salário',
    'annual_salary': 'Salário Anual',
    'filing_status': 'Status de Preenchimento',
    'state': 'Estado',
    'pay_frequency': 'Frequência de Pagamento',
    'calculate': 'Calcular',
    'annual': 'Anual',
    'monthly': 'Mensal',
    'biweekly': 'Quinzenal',
    'weekly': 'Semanal',
    'gross_pay': 'Salário Bruto',
    'federal_tax': 'Imposto Federal',
    'state_tax': 'Imposto Estadual',
    'social_security': 'Previdência Social (6.2%)',
    'medicare': 'Medicare (1.45%)',
    'total_deductions': 'Deduções Totais',
    'take_home_pay': 'Salário Líquido',
    'effective_tax_rate': 'Taxa de Imposto Efetiva',
  },
  'ja': {
    'title': '給与税計算機',
    'annual_salary': '年収',
    'filing_status': '申告ステータス',
    'state': '州',
    'pay_frequency': '支払い頻度',
    'calculate': '計算',
    'annual': '年間',
    'monthly': '月次',
    'biweekly': '2週間ごと',
    'weekly': '週次',
    'gross_pay': '総支給額',
    'federal_tax': '連邦税',
    'state_tax': '州税',
    'social_security': '社会保障 (6.2%)',
    'medicare': 'メディケア (1.45%)',
    'total_deductions': '総控除額',
    'take_home_pay': '手取り給与',
    'effective_tax_rate': '実効税率',
  },
  'zh': {
    'title': '薪资税计算器',
    'annual_salary': '年薪',
    'filing_status': '申报状态',
    'state': '州',
    'pay_frequency': '支付频率',
    'calculate': '计算',
    'annual': '年',
    'monthly': '月',
    'biweekly': '双周',
    'weekly': '周',
    'gross_pay': '总收入',
    'federal_tax': '联邦税',
    'state_tax': '州税',
    'social_security': '社会保障 (6.2%)',
    'medicare': '医疗保险 (1.45%)',
    'total_deductions': '总扣除',
    'take_home_pay': '实得薪水',
    'effective_tax_rate': '有效税率',
  },
  'ko': {
    'title': '급여 세금 계산기',
    'annual_salary': '연봉',
    'filing_status': '신고 상태',
    'state': '주',
    'pay_frequency': '지급 빈도',
    'calculate': '계산',
    'annual': '연간',
    'monthly': '월간',
    'biweekly': '격주',
    'weekly': '주간',
    'gross_pay': '총액',
    'federal_tax': '연방세',
    'state_tax': '주세',
    'social_security': '사회보장 (6.2%)',
    'medicare': '메디케어 (1.45%)',
    'total_deductions': '총 공제',
    'take_home_pay': '순급여',
    'effective_tax_rate': '실효 세율',
  },
  'ru': {
    'title': 'Калькулятор налога на заработную плату',
    'annual_salary': 'Годовая зарплата',
    'filing_status': 'Статус подачи',
    'state': 'Штат',
    'pay_frequency': 'Частота платежей',
    'calculate': 'Вычислить',
    'annual': 'Годовая',
    'monthly': 'Ежемесячно',
    'biweekly': 'Раз в две недели',
    'weekly': 'Еженедельно',
    'gross_pay': 'Валовая зарплата',
    'federal_tax': 'Федеральный налог',
    'state_tax': 'Налог штата',
    'social_security': 'Социальное обеспечение (6.2%)',
    'medicare': 'Medicare (1.45%)',
    'total_deductions': 'Общие вычеты',
    'take_home_pay': 'Зарплата на руки',
    'effective_tax_rate': 'Эффективная налоговая ставка',
  },
  'ar': {
    'title': 'حاسبة ضريبة الراتب',
    'annual_salary': 'الراتب السنوي',
    'filing_status': 'حالة الملف',
    'state': 'الدولة',
    'pay_frequency': 'تكرار الدفع',
    'calculate': 'احسب',
    'annual': 'سنوي',
    'monthly': 'شهري',
    'biweekly': 'نصف شهري',
    'weekly': 'أسبوعي',
    'gross_pay': 'الراتب الإجمالي',
    'federal_tax': 'الضريبة الفيدرالية',
    'state_tax': 'ضريبة الدولة',
    'social_security': 'الضمان الاجتماعي (6.2%)',
    'medicare': 'ميديكير (1.45%)',
    'total_deductions': 'إجمالي الخصومات',
    'take_home_pay': 'الراتب الصافي',
    'effective_tax_rate': 'معدل الضريبة الفعلي',
  },
  'hi': {
    'title': 'वेतन कर कैलकुलेटर',
    'annual_salary': 'वार्षिक वेतन',
    'filing_status': 'फाइलिंग स्थिति',
    'state': 'राज्य',
    'pay_frequency': 'भुगतान आवृत्ति',
    'calculate': 'गणना करें',
    'annual': 'वार्षिक',
    'monthly': 'मासिक',
    'biweekly': 'पाक्षिक',
    'weekly': 'साप्ताहिक',
    'gross_pay': 'सकल वेतन',
    'federal_tax': 'संघीय कर',
    'state_tax': 'राज्य कर',
    'social_security': 'सामाजिक सुरक्षा (6.2%)',
    'medicare': 'मेडिकेयर (1.45%)',
    'total_deductions': 'कुल कटौती',
    'take_home_pay': 'शुद्ध वेतन',
    'effective_tax_rate': 'प्रभावी कर दर',
  },
  'vi': {
    'title': 'Máy tính thuế lương',
    'annual_salary': 'Lương hàng năm',
    'filing_status': 'Trạng thái nộp',
    'state': 'Bang',
    'pay_frequency': 'Tần suất thanh toán',
    'calculate': 'Tính toán',
    'annual': 'Hàng năm',
    'monthly': 'Hàng tháng',
    'biweekly': 'Hai tuần',
    'weekly': 'Hàng tuần',
    'gross_pay': 'Lương gộp',
    'federal_tax': 'Thuế liên bang',
    'state_tax': 'Thuế nhà nước',
    'social_security': 'Bảo hiểm xã hội (6.2%)',
    'medicare': 'Medicare (1.45%)',
    'total_deductions': 'Tổng khấu trừ',
    'take_home_pay': 'Lương ròng',
    'effective_tax_rate': 'Tỷ lệ thuế hiệu quả',
  },
};

function calculateFederalTax(
  income: number,
  filingStatus: string,
): number {
  const brackets =
    FEDERAL_BRACKETS_2025[filingStatus as keyof typeof FEDERAL_BRACKETS_2025] ||
    FEDERAL_BRACKETS_2025['Single'];
  const standardDeduction =
    STANDARD_DEDUCTIONS[filingStatus as keyof typeof STANDARD_DEDUCTIONS] ||
    STANDARD_DEDUCTIONS['Single'];

  const taxableIncome = Math.max(0, income - standardDeduction);

  let tax = 0;
  let previousLimit = 0;

  for (const bracket of brackets) {
    if (taxableIncome <= previousLimit) break;

    const incomeInBracket = Math.min(taxableIncome, bracket.limit) - previousLimit;
    tax += incomeInBracket * bracket.rate;
    previousLimit = bracket.limit;
  }

  return Math.max(0, tax);
}

function calculateStateTax(income: number, state: string): number {
  const rate = STATE_TAX_RATES[state] || 0;
  return income * rate;
}

function calculateSocialSecurity(income: number): number {
  const maxWage = 176100;
  const wageSubjectToTax = Math.min(income, maxWage);
  return wageSubjectToTax * 0.062;
}

function calculateMedicare(income: number): number {
  let medicare = income * 0.0145;
  if (income > 200000) {
    medicare += (income - 200000) * 0.009;
  }
  return medicare;
}

function calculateTaxes(
  salary: number,
  filingStatus: string,
  state: string,
): TaxResult {
  const federalTax = calculateFederalTax(salary, filingStatus);
  const stateTax = calculateStateTax(salary, state);
  const socialSecurity = calculateSocialSecurity(salary);
  const medicare = calculateMedicare(salary);
  const totalDeductions = federalTax + stateTax + socialSecurity + medicare;
  const annualTakeHome = salary - totalDeductions;

  const monthlyGrossPlay = salary / 12;
  const biweeklyGrossPlay = salary / 26;
  const weeklyGrossPlay = salary / 52;

  const monthlyTakeHome = annualTakeHome / 12;
  const biweeklyTakeHome = annualTakeHome / 26;
  const weeklyTakeHome = annualTakeHome / 52;

  const effectiveTaxRate = salary > 0 ? (totalDeductions / salary) * 100 : 0;

  return {
    annualGrossPlay: salary,
    monthlyGrossPlay,
    biweeklyGrossPlay,
    weeklyGrossPlay,
    federalTax,
    stateTax,
    socialSecurity,
    medicare,
    totalDeductions,
    annualTakeHome,
    monthlyTakeHome,
    biweeklyTakeHome,
    weeklyTakeHome,
    effectiveTaxRate,
  };
}

export default function Calculator() {
  const [salary, setSalary] = useState<string>('75000');
  const [filingStatus, setFilingStatus] = useState<string>('Single');
  const [state, setState] = useState<string>('California');
  const [payFrequency, setPayFrequency] = useState<string>('Annual');
  const [language, setLanguage] = useState<string>('en');
  const [result, setResult] = useState<TaxResult | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  const t = (key: string): string => {
    const lang = TRANSLATIONS[language] || TRANSLATIONS['en'];
    return lang[key as keyof typeof lang] || key;
  };

  useEffect(() => {
    const stored = localStorage.getItem('taxCalc');
    if (stored) {
      try {
        const parsed: LocalStorageState = JSON.parse(stored);
        setSalary(parsed.salary || '75000');
        setFilingStatus(parsed.filingStatus || 'Single');
        setState(parsed.state || 'California');
        setPayFrequency(parsed.payFrequency || 'Annual');
        setLanguage(parsed.language || 'en');
      } catch (e) {
        // Ignore parse errors
      }
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const state_obj: LocalStorageState = {
      salary,
      filingStatus,
      state,
      payFrequency,
      language,
    };
    localStorage.setItem('taxCalc', JSON.stringify(state_obj));
  }, [salary, filingStatus, state, payFrequency, language, isHydrated]);

  const handleCalculate = () => {
    const numSalary = parseFloat(salary) || 0;
    if (numSalary < 0) return;

    const taxes = calculateTaxes(numSalary, filingStatus, state);
    setResult(taxes);
  };

  if (!isHydrated) {
    return <div className="text-center py-8">Loading...</div>;
  }

  const states = Object.keys(STATE_TAX_RATES).sort();

  const getDisplayValue = (): number => {
    if (!result) return 0;

    switch (payFrequency) {
      case 'Monthly':
        return result.monthlyTakeHome;
      case 'Bi-weekly':
        return result.biweeklyTakeHome;
      case 'Weekly':
        return result.weeklyTakeHome;
      default:
        return result.annualTakeHome;
    }
  };

  const getTaxBreakdown = ():
    | { label: string; value: number; percentage: number; color: string }[]
    | null => {
    if (!result) return null;

    const total = result.totalDeductions;
    if (total === 0) return null;

    return [
      {
        label: t('federal_tax'),
        value: result.federalTax,
        percentage: (result.federalTax / total) * 100,
        color: '#7c5cbf',
      },
      {
        label: t('state_tax'),
        value: result.stateTax,
        percentage: (result.stateTax / total) * 100,
        color: '#b49ee8',
      },
      {
        label: 'Social Security',
        value: result.socialSecurity,
        percentage: (result.socialSecurity / total) * 100,
        color: '#dcc9f0',
      },
      {
        label: 'Medicare',
        value: result.medicare,
        percentage: (result.medicare / total) * 100,
        color: '#e8ddf5',
      },
    ];
  };

  const breakdown = getTaxBreakdown();

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="card">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            {t('title')}
          </h2>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="tool-input text-sm w-auto px-3 py-2"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="it">Italiano</option>
            <option value="pt">Português</option>
            <option value="ja">日本語</option>
            <option value="zh">中文</option>
            <option value="ko">한국어</option>
            <option value="ru">Русский</option>
            <option value="ar">العربية</option>
            <option value="hi">हिन्दी</option>
            <option value="vi">Tiếng Việt</option>
          </select>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t('annual_salary')}
            </label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="tool-input"
              placeholder="75000"
              min="0"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t('filing_status')}
              </label>
              <select
                value={filingStatus}
                onChange={(e) => setFilingStatus(e.target.value)}
                className="tool-input"
              >
                <option>Single</option>
                <option>Married Filing Jointly</option>
                <option>Married Filing Separately</option>
                <option>Head of Household</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t('state')}
              </label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="tool-input"
              >
                {states.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t('pay_frequency')}
            </label>
            <div className="grid grid-cols-4 gap-2">
              {['Annual', 'Monthly', 'Bi-weekly', 'Weekly'].map((freq) => (
                <button
                  key={freq}
                  onClick={() => setPayFrequency(freq)}
                  className={`py-2 px-3 rounded-lg font-semibold transition-all text-sm ${
                    payFrequency === freq
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-100 text-purple-900 hover:bg-purple-200'
                  }`}
                >
                  {t(freq.toLowerCase().replace('-', ''))}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="btn-primary w-full mt-6"
          >
            {t('calculate')}
          </button>
        </div>
      </div>

      {result && (
        <div className="mt-8 space-y-6">
          <div className="card bg-gradient-to-br from-purple-50 to-purple-100">
            <div className="tool-result">
              ${getDisplayValue().toLocaleString('en-US', {
                maximumFractionDigits: 2,
              })}
            </div>
            <p className="text-center text-gray-700 font-semibold">
              {t('take_home_pay')} ({payFrequency})
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="card text-center">
              <div className="text-2xl font-bold text-purple-600">
                ${result.federalTax.toLocaleString('en-US', {
                  maximumFractionDigits: 0,
                })}
              </div>
              <p className="text-xs text-gray-600 mt-1">{t('federal_tax')}</p>
            </div>

            <div className="card text-center">
              <div className="text-2xl font-bold text-purple-600">
                ${result.stateTax.toLocaleString('en-US', {
                  maximumFractionDigits: 0,
                })}
              </div>
              <p className="text-xs text-gray-600 mt-1">{t('state_tax')}</p>
            </div>

            <div className="card text-center">
              <div className="text-2xl font-bold text-purple-600">
                ${result.socialSecurity.toLocaleString('en-US', {
                  maximumFractionDigits: 0,
                })}
              </div>
              <p className="text-xs text-gray-600 mt-1">Social Security</p>
            </div>

            <div className="card text-center">
              <div className="text-2xl font-bold text-purple-600">
                ${result.medicare.toLocaleString('en-US', {
                  maximumFractionDigits: 0,
                })}
              </div>
              <p className="text-xs text-gray-600 mt-1">Medicare</p>
            </div>

            <div className="card text-center">
              <div className="text-2xl font-bold text-purple-600">
                {result.effectiveTaxRate.toLocaleString('en-US', {
                  maximumFractionDigits: 1,
                })}
                %
              </div>
              <p className="text-xs text-gray-600 mt-1">
                {t('effective_tax_rate')}
              </p>
            </div>

            <div className="card text-center">
              <div className="text-2xl font-bold text-purple-600">
                ${result.annualGrossPlay.toLocaleString('en-US', {
                  maximumFractionDigits: 0,
                })}
              </div>
              <p className="text-xs text-gray-600 mt-1">{t('gross_pay')}</p>
            </div>
          </div>

          {breakdown && breakdown.length > 0 && (
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Tax Breakdown
              </h3>
              <div className="space-y-3">
                {breakdown.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm font-semibold text-gray-700">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-gray-900">
                        {item.percentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all"
                        style={{
                          width: `${item.percentage}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      ${item.value.toLocaleString('en-US', {
                        maximumFractionDigits: 0,
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">
                    {t('total_deductions')}
                  </span>
                  <span className="text-lg font-bold text-purple-600">
                    ${result.totalDeductions.toLocaleString('en-US', {
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="card bg-blue-50 border-blue-200">
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>Disclaimer:</strong> This calculator provides estimates
              based on 2025-2026 federal tax brackets and standard state rates.
              Actual tax liability may differ based on deductions, credits,
              filing status changes, and other factors. Consult a tax
              professional for accurate tax planning.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
