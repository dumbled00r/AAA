// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import CodeSnippet1 from '../../assets/images/code-snippet-1.png'

export const react: Topic = {
  topic: 'React',
  level: 'Intermediate',
  totalQuestions: 10,
  totalScore: 85,
  totalTime: 600,
  questions: [
    {
      question: '10/8 là kỉ niệm bao nhiêu ngày yêu nhau của bọn mình?',
      choices: [
        '1398',
        '1399',
        '1400',
        '1401',
      ],
      type: 'MCQs',
      correctAnswers: [
        '1400',
      ],
      score: 10,
    },
    {
      question: 'Quả đầu tiên em gọt cho anh là quả gì?',
      choices: ['Ổi', 'Lê', 'Xoài', 'Táo'],
      type: 'MCQs',
      correctAnswers: ['Táo'],
      score: 5,
    },
    {
      question: 'Anh tỏ tình với em ở đâu?',
      choices: [
        'Trước cổng trường',
        'Trong lớp học',
        'Ở trên đường về nhà',
        'Trong quán trà quất',
      ],
      type: 'MCQs',
      correctAnswers: ['Ở trên đường về nhà'],
      score: 10,
    },
    {
      question:
        'Những món đồ em thích mà anh chưa tặng? (được chọn nhiều đáp án)',
      choices: [
        'Son Black Rouge',
        'Bông tai',
        'Nhẫn',
        'Nước hoa',
      ],
      type: 'MAQs',
      correctAnswers: ['Son Black Rouge', 'Bông tai', 'Nhẫn'],
      score: 10,
    },
    {
      question: 'Em muốn được đi những nơi đâu chơi trong những năm tới? (được chọn nhiều đáp án)',
      choices: [
        'Hàn Quốc',
        'Phan Thiết',
        'Đà Lạt',
        'Phú Quốc',
      ],
      type: 'MAQs',
      correctAnswers: ['Hàn Quốc', 'Phan Thiết', 'Đà Lạt', 'Phú Quốc'],
      score: 10,
    },
    {
      question:
        'Anh có vô tâm với em nhiều không?',
      choices: ['Có', 'Không'],
      type: 'boolean',
      correctAnswers: ['Có'],
      score: 5,
    },
    {
      question: 'Hôm nay anh có tệ với em lắm, anh xin lỗi em bé vì đã làm em buồn...',
      choices: [
        'Em không quan tâm đâu',
        'Em buồn lắm, anh ở bên em được không?',
        'Anh im đi, em không muốn nói chuyện với anh',
        'Anh chẳng quan tâm đến em nữa',
      ],
      type: 'MCQs',
      correctAnswers: ['Em buồn lắm, anh ở bên em được không?'],
      score: 10,
    },   
    {
      question: 'Anh biết là anh sai rồi, em đừng giận anh nữa, anh xin lỗi em... (được chọn nhiều đáp án)',
      choices: [
        'Để cho em suy nghĩ đã',
      ],
      type: 'MAQs',
      correctAnswers: ['Để cho em suy nghĩ đã'],
      score: 5,
    },
    {
      question: 'Anh sẽ cố gắng hơn nữa, không để em phải buồn nữa...',
      choices: [
        'Em không quan tâm',
        'Em không thèm',
        'Em không muốn',
        'Vâng ạ'
      ],
      type: 'MCQs',
      correctAnswers: ['Vâng ạ'],
      score: 10,
    },
    {
      question: 'Mai đi chơi với anh nhé? (được chọn nhiều đáp án)',
      choices: [
        "Có",
        "Okie",
        "Đi luôn",
      ],
      type: 'MAQs',
      correctAnswers: ['Có', 'Okie', 'Đi luôn'],
      score: 10,
    },
  ],
}
