
// 星座判定
function getZodiacSign(month, day) {
  const signs = [
    { name: 'Capricorn', ja: '山羊座', zh: '摩羯座', en: 'Capricorn', start: [1, 1], end: [1, 19] },
    { name: 'Aquarius', ja: '水瓶座', zh: '水瓶座', en: 'Aquarius', start: [1, 20], end: [2, 18] },
    { name: 'Pisces', ja: '魚座', zh: '双鱼座', en: 'Pisces', start: [2, 19], end: [3, 20] },
    { name: 'Aries', ja: '白羊座', zh: '白羊座', en: 'Aries', start: [3, 21], end: [4, 19] },
    { name: 'Taurus', ja: '金牛座', zh: '金牛座', en: 'Taurus', start: [4, 20], end: [5, 20] },
    { name: 'Gemini', ja: '双子座', zh: '双子座', en: 'Gemini', start: [5, 21], end: [6, 21] },
    { name: 'Cancer', ja: '蟹座', zh: '巨蟹座', en: 'Cancer', start: [6, 22], end: [7, 22] },
    { name: 'Leo', ja: '獅子座', zh: '狮子座', en: 'Leo', start: [7, 23], end: [8, 22] },
    { name: 'Virgo', ja: '乙女座', zh: '处女座', en: 'Virgo', start: [8, 23], end: [9, 22] },
    { name: 'Libra', ja: '天秤座', zh: '天秤座', en: 'Libra', start: [9, 23], end: [10, 23] },
    { name: 'Scorpio', ja: '蠍座', zh: '天蠍座', en: 'Scorpio', start: [10, 24], end: [11, 22] },
    { name: 'Sagittarius', ja: '射手座', zh: '射手座', en: 'Sagittarius', start: [11, 23], end: [12, 21] },
    { name: 'Capricorn', ja: '山羊座', zh: '摩羯座', en: 'Capricorn', start: [12, 22], end: [12, 31] },
  ];
  
  for (const sign of signs) {
    const [sMonth, sDay] = sign.start;
    const [eMonth, eDay] = sign.end;
    
    if (month === sMonth && day >= sDay) return sign;
    if (month === eMonth && day <= eDay) return sign;
  }
  return signs[0];
}

// 生命数字计算
function calculateLifePathNumber(year, month, day) {
  const sumDigits = (n) => n.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  
  let yearSum = sumDigits(year);
  while (yearSum >= 10) yearSum = sumDigits(yearSum);
  
  let monthSum = sumDigits(month);
  while (monthSum >= 10) monthSum = sumDigits(monthSum);
  
  let daySum = sumDigits(day);
  while (daySum >= 10) daySum = sumDigits(daySum);
  
  let total = yearSum + monthSum + daySum;
  while (total >= 10 && total !== 11 && total !== 22) {
    total = sumDigits(total);
  }
  return total;
}

// 2027年运势数据（简化版）
const fortuneData = {
  ja: {
    zodiac: {
      Aries: { name: '白羊座', theme: '再出発の年', love: '意外な場所で出会い', work: '春から夏にチャンス', money: '不意打ちな収入', health: '頭痛・目の疲労注意', advice: '直感を信じて', color: 'レッド・オレンジ', number: '1, 11' },
      Taurus: { name: '金牛座', theme: '根を深く張る', love: '日常の繋がりから', work: 'チームの中心に', money: '地味な貯蓄が実を結ぶ', health: '肩こり・胃腸注意', advice: '急がば回れないで', color: 'グリーン・ブラウン', number: '2, 6' },
      Gemini: { name: '双子座', theme: 'コミュニケーションの年', love: '話し相手になれる人', work: 'SNS発信が有利', money: '情報商売で収益', health: '神経衰弱に注意', advice: '興味を大切に', color: 'イエロー・ライトブルー', number: '3, 5' },
    },
    numerology: {
      1: { name: 'リーダー', theme: '独立から協力へ', career: '管理職のチャンス', relation: '主導権を握りすぎないで', advice: '聴く力を磨く', color: 'ゴールド・レッド', number: '1, 11' },
      2: { name: '調和者', theme: '感受性が力に変わる', career: 'カウンセラーなど成長', relation: '隠れた情熱が解き放たれる', advice: '自分の心の声を聞いて', color: 'シルバー・パープル', number: '2, 11' },
      3: { name: 'コミュニケーター', theme: 'クリエイティビティの開花', career: '書く・話すことが収入に', relation: '浅広くて深くない交流に注意', advice: '面白いと感じたら動く', color: 'イエロー・オレンジ', number: '3, 12' },
    }
  },
  zh: {
    zodiac: {
      Aries: { name: '白羊座', theme: '再出发的一年', love: '意外场所遇见心动对象', work: '春夏之交是好时机', money: '有望获得意外之财', health: '注意头痛和眼部疲劳', advice: '不要害怕随心而动', color: '红色、橙色', number: '1, 11' },
      Taurus: { name: '金牛座', theme: '深根工程的一年', love: '日常交集中产生缘分', work: '成为团队核心', money: '稳扞稳打储蓄有回报', health: '注意肩颈和胃腸', advice: '不要着急', color: '绿色、棕色', number: '2, 6' },
      Gemini: { name: '双子座', theme: '交流年', love: '能聊得来的人才是对的人', work: '社交媒体发布有利', money: '知识付费和媒体收益', health: '注意神经衰弱', advice: '珍惜好奇心', color: '黄色、浅蓝色', number: '3, 5' },
    },
    numerology: {
      1: { name: '领导者', theme: '从独立到协作的转变', career: '管理岗和领导机会', relation: '不要掌握主导权过度', advice: '锻炼倾听能力', color: '金色、红色', number: '1, 11' },
      2: { name: '调和者', theme: '敏感化为力量的一年', career: '咨询师或中介类工作成长', relation: '隐藏的热情将释放', advice: '先倾听自己内心的声音', color: '银色、紫色', number: '2, 11' },
      3: { name: '沟通者', theme: '创造力绽放', career: '写作演讲都能变现', relation: '警惕浅尝辄止的交流', advice: '觉得有趣就马上行动', color: '黄色、橙色', number: '3, 12' },
    }
  },
  en: {
    zodiac: {
      Aries: { name: 'Aries', theme: 'Year of Relaunch', love: 'Meet someone unexpected', work: 'Spring to summer is your window', money: 'Unexpected income possible', health: 'Watch headaches & eye strain', advice: "Trust your intuition", color: 'Red, Orange', number: '1, 11' },
      Taurus: { name: 'Taurus', theme: 'Deepen Your Roots', love: 'New bonds from daily life', work: 'Become team anchor', money: 'Steady savings yield returns', health: 'Shoulder & digestive care', advice: "Don't rush", color: 'Green, Brown', number: '2, 6' },
      Gemini: { name: 'Gemini', theme: 'Year of Communication', love: 'Someone you can talk to', work: 'Social media content wins', money: 'Knowledge monetization', health: 'Avoid nervous exhaustion', advice: 'Cherish curiosity', color: 'Yellow, Light Blue', number: '3, 5' },
    },
    numerology: {
      1: { name: 'Leader', theme: 'From Independence to Collaboration', career: 'Management opportunities', relation: 'Avoid dominating too much', advice: 'Sharpen listening skills', color: 'Gold, Red', number: '1, 11' },
      2: { name: 'Mediator', theme: 'Sensitivity Becomes Strength', career: 'Counseling roles grow', relation: 'Hidden passion unleashed', advice: 'Listen to your heart first', color: 'Silver, Purple', number: '2, 11' },
      3: { name: 'Communicator', theme: 'Creative Energy Blooms', career: 'Writing & speaking monetize', relation: 'Beware shallow connections', advice: 'Act when it feels interesting', color: 'Yellow, Orange', number: '3, 12' },
    }
  }
};

// 生成结果
function generateFortune() {
  const birthdate = document.getElementById('birthdate').value;
  const lang = document.documentElement.lang || 'ja';
  
  if (!birthdate) {
    alert(lang === 'ja' ? '生年月日を入力してください' : lang === 'zh' ? '请输入出生日期' : 'Please enter your birthdate');
    return;
  }
  
  const [year, month, day] = birthdate.split('-').map(Number);
  const zodiac = getZodiacSign(month, day);
  const lifePath = calculateLifePathNumber(year, month, day);
  
  const data = fortuneData[lang] || fortuneData.ja;
  const zData = data.zodiac[zodiac.name] || data.zodiac.Aries;
  const nData = data.numerology[lifePath] || data.numerology[1];
  
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h2>${lang === 'ja' ? 'あなたの2027年運勢' : lang === 'zh' ? '你的2027年运势' : 'Your 2027 Fortune'}</h2>
    
    <div class="card">
      <h3>★ ${zData.name} + ${nData.name}</h3>
      <p><strong>${lang === 'ja' ? 'テーマ' : lang === 'zh' ? '主题' : 'Theme'}:</strong> ${zData.theme}</p>
      <p><strong>${lang === 'ja' ? '恋愛' : lang === 'zh' ? '爱情' : 'Love'}:</strong> ${zData.love}</p>
      <p><strong>${lang === 'ja' ? '仕事' : lang === 'zh' ? '事业' : 'Career'}:</strong> ${zData.work}</p>
      <p><strong>${lang === 'ja' ? '金運' : lang === 'zh' ? '财运' : 'Money'}:</strong> ${zData.money}</p>
      <p><strong>${lang === 'ja' ? '健康' : lang === 'zh' ? '健康' : 'Health'}:</strong> ${zData.health}</p>
      <p><strong>${lang === 'ja' ? 'アドバイス' : lang === 'zh' ? '建议' : 'Advice'}:</strong> ${zData.advice}</p>
    </div>
    
    <div class="card">
      <h3>✨ ${lang === 'ja' ? '生命数字 ' : lang === 'zh' ? '生命灵数 ' : 'Life Path '}${lifePath} - ${nData.name}</h3>
      <p><strong>${lang === 'ja' ? 'テーマ' : lang === 'zh' ? '主题' : 'Theme'}:</strong> ${nData.theme}</p>
      <p><strong>${lang === 'ja' ? '仕事' : lang === 'zh' ? '事业' : 'Career'}:</strong> ${nData.career}</p>
      <p><strong>${lang === 'ja' ? '人間関係' : lang === 'zh' ? '人际关系' : 'Relationships'}:</strong> ${nData.relation}</p>
      <p><strong>${lang === 'ja' ? 'ラッキーカラー' : lang === 'zh' ? '幸运色' : 'Lucky Color'}:</strong> ${nData.color}</p>
      <p><strong>${lang === 'ja' ? 'ラッキーナンバー' : lang === 'zh' ? '幸运数字' : 'Lucky Numbers'}:</strong> ${nData.number}</p>
    </div>
    
    <div class="ad-placeholder">
      Google AdSense<br>
      ${lang === 'ja' ? '広告表示予定地' : lang === 'zh' ? '广告位' : 'Ad Placeholder'}
    </div>
  `;
  
  resultDiv.classList.add('show');
}
