<template>
  <header class="app-header">
    <h1 class="title">赞妮电子设定集</h1>
    <!-- 在线人数展示 -->
    <div class="online-count" v-if="onlineCount !== null">
      当前在线：<span class="count">{{ onlineCount }}人</span>
    </div>
    <!-- 移动端汉堡按钮 -->
    <button
      class="hamburger"
      @click="toggleMobileNav"
      aria-label="Toggle navigation"
    >
      <span :class="{ open: mobileNavOpen }"></span>
      <span :class="{ open: mobileNavOpen }"></span>
      <span :class="{ open: mobileNavOpen }"></span>
    </button>

    <!-- 普通导航 & 移动端下拉导航 -->
    <nav :class="['nav-links', { 'mobile-open': mobileNavOpen }]">
      <RouterLink
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="nav-item"
        active-class="active-link"
        @click="mobileNavOpen = false"
      >
        {{ item.name }}
      </RouterLink>

      <a
        href="http://36.150.237.25/#/redirector"
        target="_blank"
        rel="noopener"
        class="nav-item"
        active-class="active-link"
        @click="mobileNavOpen = false"
      >
        霜落映界
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { io } from "socket.io-client";

const navItems = [
  { name: "金库值守", path: "/" }, // 首页 -
  { name: "勤务档案", path: "/timeLine" }, // 年谱 -
  { name: "交接便笺", path: "/message" }, // 留言板 -
  { name: "光耀灼痕", path: "/gallery" }, // 图集 -
  { name: "冗余动能", path: "/resources" }, // 资料库 -
  { name: "无言交涉", path: "/talk" }, // AI对话页面 -
  { name: "休憩协奏", path: "/music" }, // 歌曲库 -
];

const mobileNavOpen = ref(false);
function toggleMobileNav() {
  mobileNavOpen.value = !mobileNavOpen.value;
}

const siteId = "zanni";

const onlineCount = ref<number | null>(null);

// 连接时带上 query.siteId
const socket: any = io("http://36.150.237.25:3000", {
  query: { siteId },
});

onMounted(() => {
  socket.on("onlineCount", (count: number) => {
    onlineCount.value = count;
  });
});

onBeforeUnmount(() => {
  socket.disconnect();
});
</script>

<style scoped lang="scss">
/* 赞妮风格：冷灰工装底 + 白银发色 + 暖金/朱红点缀，辅以灼光粒子、护甲质感与工整的几何线条 */
.app-header {
  --deep-bg: rgba(18, 18, 22, 0.96); /* 职场深灰，沉稳 */
  --paper: rgba(245, 245, 247, 0.98); /* 白衬衣色块（用于文字或高光） */
  --silver: #e6e9ec; /* 白银高光（发色关联） */
  --ember: #ffb36b; /* 灼光暖色（能量/光痕） */
  --accent-red: #c94a3a; /* 赞妮标志性的领带/细节朱红 */
  --gold: #d1b15a; /* 饰品金属色 */
  --muted-text: #e9e8e7; /* 接近白但偏暖，用于文字 */
  --armor-sheen: rgba(220, 220, 225, 0.03); /* 护甲薄光层 */
  --ledger-line: rgba(255, 255, 255, 0.03); /* 报表/银行格线暗纹 */

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background:
    /* 轻微的纸张/报表纹理 + 护甲暗影 */ linear-gradient(
      180deg,
      rgba(12, 12, 14, 0.99),
      rgba(16, 16, 18, 0.995)
    ),
    repeating-linear-gradient(
      90deg,
      transparent 0 28px,
      var(--ledger-line) 28px 29px
    );
  backdrop-filter: blur(5px) saturate(1);
  box-shadow: 0 10px 34px rgba(5, 6, 8, 0.6), 0 0 12px rgba(0, 0, 0, 0.45) inset;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  animation: fadeInDown 0.5s ease-out both;
  overflow: visible;

  /* 顶部一层护甲薄光 + 机心灼光粒子 */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(180deg, var(--armor-sheen), transparent 30%),
      radial-gradient(
        400px 60px at 90% 40%,
        rgba(255, 179, 107, 0.03),
        transparent 34%
      );
    mix-blend-mode: overlay;
  }

  /* 右侧装饰：盾牌轮廓 + 灼光涌动（替代月相） */
  &::before {
    content: "";
    position: absolute;
    right: 6%;
    top: 6%;
    width: 220px;
    height: 84px;
    pointer-events: none;
    background:
      /* 盾形暗纹 */ radial-gradient(
        60px 40px at 18% 48%,
        rgba(0, 0, 0, 0.12),
        transparent 30%
      ),
      /* 装饰金属光与灼光 */
        radial-gradient(
          90px 28px at 52% 40%,
          rgba(209, 177, 90, 0.06),
          transparent 46%
        ),
      radial-gradient(
        40px 14px at 72% 66%,
        rgba(255, 179, 107, 0.06),
        transparent 44%
      );
    filter: blur(6px);
    transform: translateY(0) rotate(-4deg);
    animation: ember-flow 8.4s ease-in-out infinite;
    mix-blend-mode: screen;
  }

  .title {
    position: relative;
    font-family: "Cinzel", serif;
    font-style: normal;
    font-size: 26px;
    font-weight: 700;
    color: var(--muted-text);
    background: linear-gradient(90deg, var(--silver), var(--paper));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 0.6px;
    text-shadow: 0 6px 18px rgba(8, 8, 10, 0.6);
    transition: transform 0.28s ease, text-shadow 0.28s ease;
    animation: steady-breath 9.6s ease-in-out infinite;

    /* 标题上方的金属边框高光（呼应护甲） */
    &::before {
      content: "";
      position: absolute;
      left: -4%;
      top: -22%;
      width: 128%;
      height: 110%;
      background: linear-gradient(
        90deg,
        rgba(209, 177, 90, 0.06),
        transparent 18%
      );
      transform: translateY(0);
      animation: metal-shimmer 5.6s linear infinite;
      pointer-events: none;
      mix-blend-mode: screen;
    }

    &:hover {
      transform: translateY(-2px) scale(1.02);
      text-shadow: 0 10px 28px rgba(0, 0, 0, 0.6);
    }
  }

  .online-count {
    position: relative;
    margin-left: 16px;
    padding: 6px 14px;
    font-family: "Cinzel", serif;
    font-size: 1rem;
    color: var(--muted-text);
    background: linear-gradient(
      135deg,
      rgba(14, 14, 16, 0.28),
      rgba(12, 12, 14, 0.18)
    );
    border: 1px solid rgba(220, 220, 225, 0.03);
    border-radius: 20px;
    backdrop-filter: blur(6px);
    box-shadow: 0 6px 18px rgba(6, 6, 8, 0.44),
      0 0 10px rgba(0, 0, 0, 0.5) inset;
    overflow: hidden;
    cursor: default;
    transition: transform 0.22s ease, box-shadow 0.22s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 36px rgba(3, 4, 6, 0.56),
        0 0 22px rgba(209, 177, 90, 0.06);
    }

    .count {
      display: inline-block;
      margin-left: 18px;
      font-weight: 800;
      color: var(--accent-red);
      background: linear-gradient(90deg, var(--gold), var(--accent-red));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 0 6px rgba(255, 140, 80, 0.04);
    }
  }

  .nav-links {
    display: flex;
    gap: 22px;
    align-items: center;

    .nav-item {
      position: relative;
      color: var(--muted-text);
      font-weight: 500;
      text-decoration: none;
      transition: color 0.22s ease, transform 0.16s ease;
      padding: 6px 4px;
      border-radius: 6px;
      overflow: visible;
      font-family: "Noto Serif SC", serif;
      font-style: normal;

      &::after {
        /* 底部短小的护甲条（替代月光下划） */
        content: "";
        position: absolute;
        left: 50%;
        bottom: -8px;
        width: 0;
        height: 6px;
        border-radius: 6px;
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0),
          rgba(209, 177, 90, 0.9),
          rgba(201, 74, 58, 0.9),
          rgba(0, 0, 0, 0)
        );
        transform: translateX(-50%);
        opacity: 0.95;
        filter: blur(0.8px) contrast(1.03);
        transition: width 0.36s cubic-bezier(0.2, 0.9, 0.2, 1), left 0.36s,
          opacity 0.24s;
        background-size: 200% 100%;
        animation: ledger-flow 6.8s linear infinite;
      }

      /* 替换为小型“齿轮光斑”与灼光雾圈 */
      &::before {
        content: "";
        position: absolute;
        right: 14%;
        top: -6px;
        width: 10px;
        height: 10px;
        border-radius: 2px;
        background: radial-gradient(circle, var(--gold), transparent 60%);
        opacity: 0;
        transform: translateY(-6px) scale(0.86);
        transition: opacity 0.26s, transform 0.36s;
        box-shadow: 0 6px 14px rgba(209, 177, 90, 0.06);
      }

      &:hover {
        color: var(--paper);
        transform: translateY(-1.8px);
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
      }

      &:hover::after {
        width: 72%;
        left: 50%;
        opacity: 1;
      }

      &:hover::before {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .active-link {
      color: var(--accent-red);
      font-weight: 700;

      /* 活动项用金属徽章与小灼光（代表职场徽记/机心激活） */
      &::before {
        content: "✦";
        position: absolute;
        right: -14px;
        top: 50%;
        transform: translateY(-50%) rotate(-8deg);
        font-size: 12px;
        color: var(--gold);
        text-shadow: 0 2px 10px rgba(209, 177, 90, 0.12);
        animation: ember-pulse 2.8s ease-in-out infinite;
        opacity: 0.98;
      }

      &::after {
        width: 92%;
        opacity: 1;
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.06);
      }
    }
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 28px;
    height: 24px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    span {
      display: block;
      width: 100%;
      height: 3px;
      background: rgba(233, 232, 231, 0.9);
      border-radius: 2px;
      transition: transform 0.28s ease, opacity 0.28s ease, background 0.28s;
      box-shadow: 0 2px 6px rgba(8, 6, 10, 0.18),
        0 0 8px rgba(0, 0, 0, 0.4) inset;
    }

    span.open:nth-child(1) {
      transform: translateY(10px) rotate(45deg);
      background: linear-gradient(90deg, var(--gold), var(--accent-red));
    }

    span.open:nth-child(2) {
      opacity: 0;
    }

    span.open:nth-child(3) {
      transform: translateY(-10px) rotate(-45deg);
      background: linear-gradient(90deg, var(--gold), var(--accent-red));
    }
  }

  @media (max-width: 768px) {
    padding: 0 20px;

    .title {
      display: none;
    }
    .hamburger {
      display: flex;
    }

    .nav-links {
      position: absolute;
      top: 64px;
      left: 0;
      right: 0;
      flex-direction: column;
      background: linear-gradient(
        180deg,
        rgba(12, 10, 12, 0.98),
        rgba(10, 8, 10, 0.995)
      );
      backdrop-filter: blur(12px);
      gap: 0;
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.34s ease;
      border-top: 1px solid rgba(220, 220, 225, 0.02);

      &.mobile-open {
        max-height: 520px;
      }

      .nav-item {
        padding: 14px 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.02);
      }
    }
  }
}

/* 动效关键帧（改为灼光 / 护甲节奏 / 报表流动） */
@keyframes ledger-flow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes steady-breath {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 灼光微动，像机心在跳动 */
@keyframes ember-flow {
  0% {
    transform: translateY(0) rotate(-4deg) translateX(0);
    opacity: 0.82;
    filter: blur(6px) saturate(0.98);
  }
  50% {
    transform: translateY(-6px) rotate(2deg) translateX(-6px);
    opacity: 1;
    filter: blur(4px) saturate(1.04);
  }
  100% {
    transform: translateY(0) rotate(-4deg) translateX(0);
    opacity: 0.82;
  }
}

@keyframes metal-shimmer {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-4px) rotate(0.3deg);
    opacity: 1;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.5;
  }
}

@keyframes ember-pulse {
  0% {
    transform: translateY(-6%) rotate(-6deg);
    opacity: 0.7;
    filter: drop-shadow(0 2px 6px rgba(209, 177, 90, 0.06));
  }
  50% {
    transform: translateY(4%) rotate(2deg);
    opacity: 1;
    filter: drop-shadow(0 4px 14px rgba(255, 179, 107, 0.12));
  }
  100% {
    transform: translateY(-6%) rotate(-6deg);
    opacity: 0.7;
  }
}
</style>
