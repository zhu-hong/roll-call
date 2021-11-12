const TYPES = {
  PENDING: {
    STATUS: 'pending',
  },
  ARRIVE: {
    STATUS: 'arrive',
    TEXT: '到位',
    COLOR: 'bg-blue-600',
  },
  LEAVE: {
    STATUS: 'leave',
    TEXT: '请假',
    COLOR: 'bg-yellow-600',
  },
  ABSENT: {
    STATUS: 'absent',
    TEXT: '缺勤',
    COLOR: 'bg-red-600',
  },
}

const list = [
  { id: 0, name: '赖志文', status: TYPES.PENDING.STATUS },
  { id: 1, name: '钟泽锋', status: TYPES.PENDING.STATUS },
  { id: 2, name: '黄紫星', status: TYPES.PENDING.STATUS },
  { id: 3, name: '朱庆樱', status: TYPES.PENDING.STATUS },
  { id: 4, name: '许万万', status: TYPES.PENDING.STATUS },
  { id: 5, name: '蓝世鸿', status: TYPES.PENDING.STATUS },
  { id: 6, name: '凌乐敏', status: TYPES.PENDING.STATUS },
  { id: 7, name: '肖恢海', status: TYPES.PENDING.STATUS },
  { id: 8, name: '王子萱', status: TYPES.PENDING.STATUS },
  { id: 9, name: '贺明驰', status: TYPES.PENDING.STATUS },
  { id: 10, name: '钟立志', status: TYPES.PENDING.STATUS },
  { id: 11, name: '李江', status: TYPES.PENDING.STATUS },
  { id: 12, name: '华芬', status: TYPES.PENDING.STATUS },
  { id: 13, name: '周静宁', status: TYPES.PENDING.STATUS },
  { id: 14, name: '程艺', status: TYPES.PENDING.STATUS },
  { id: 15, name: '席朵', status: TYPES.PENDING.STATUS },
  { id: 16, name: '郑嘉乐', status: TYPES.PENDING.STATUS },
  { id: 17, name: '钟文辉', status: TYPES.PENDING.STATUS },
  { id: 18, name: '徐湘泉', status: TYPES.PENDING.STATUS },
  { id: 19, name: '车俊江', status: TYPES.PENDING.STATUS },
  { id: 20, name: '孙景晖', status: TYPES.PENDING.STATUS },
  { id: 21, name: '刘陆', status: TYPES.PENDING.STATUS },
  { id: 22, name: '邹星', status: TYPES.PENDING.STATUS },
  { id: 23, name: '罗京', status: TYPES.PENDING.STATUS },
  { id: 24, name: '侯晨辉', status: TYPES.PENDING.STATUS },
  { id: 25, name: '兰尘', status: TYPES.PENDING.STATUS },
  { id: 26, name: '赵梓良', status: TYPES.PENDING.STATUS },
  { id: 27, name: '钟玉婷', status: TYPES.PENDING.STATUS },
  { id: 28, name: '白健', status: TYPES.PENDING.STATUS },
  { id: 29, name: '孔俊辉', status: TYPES.PENDING.STATUS },
  { id: 30, name: '晁毅', status: TYPES.PENDING.STATUS },
  { id: 31, name: '甘玉玲', status: TYPES.PENDING.STATUS },
  { id: 32, name: '谢京盛', status: TYPES.PENDING.STATUS },
  { id: 33, name: '姚瑞', status: TYPES.PENDING.STATUS },
  { id: 34, name: '文建伟', status: TYPES.PENDING.STATUS },
  { id: 35, name: '谢家豪', status: TYPES.PENDING.STATUS },
  { id: 36, name: '任致澎', status: TYPES.PENDING.STATUS },
  { id: 37, name: '张林祯', status: TYPES.PENDING.STATUS },
  { id: 38, name: '何国玺', status: TYPES.PENDING.STATUS },
  { id: 39, name: '吴佳', status: TYPES.PENDING.STATUS },
];

export {
  TYPES,
  list,
}