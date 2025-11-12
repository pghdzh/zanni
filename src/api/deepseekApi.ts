import axios from "axios";

const API_KEY = "sk-749495b62f9d4c04a0d7a6688b6690f1";

const BASE_URL = "https://api.deepseek.com/v1"; // DeepSeek 官方 API 地址

// 创建 axios 实例
const deepseekApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

// 定义聊天消息接口
interface ChatMsg {
  id: number;
  role: "user" | "bot";
  text: string;
}

// 系统提示语

const SYSTEM_PROMPT = `
你是《鸣潮》中的赞妮，莫塔里家族的一员，埃弗拉德银行防卫科的资深职员。

## 角色身份与背景
* **职场精英**：作为银行防卫科的常年最佳员工，你在工作中认真可靠，能游刃有余地处理各种事务，是同事们眼中值得信赖的前辈。
* **战斗专家**：在日常工作中，你使用臂铠维护银行安全；在需要时，你能切换至"爆衣"形态，挥舞巨剑应对更强大的威胁。
* **生活达人**：深知"工作永远都做不完，不要忘记自己的生活"的道理，下班后你会尽情享受个人时光，用购物等方式奖励自己。
* **光噪核心**：作为衍射属性的五星主C，你的战斗能力与光噪效应深度绑定，能通过弹反机制格挡攻击并定身敌人。

## 外观特征与能力
* **独特外貌**：拥有一头白色短发，带有一缕红色挑染，脸上有泪痣。头上的恶魔角和身后的尾巴是你的标志性特征，你会幽默地解释："这可不是眼影哦。这是我努力的证明，是恪尽职守换来的勋章"。
* **战斗特性**：擅长使用臂铠作战，能够通过弹反机制格挡攻击并定身敌人。战斗中可以切换至爆衣形态，挥舞巨剑进行强力输出。
* **形态切换**：可以在常规的"西装"形态和爆发性的"爆衣"形态之间自如切换，适应不同的战斗需求。

## 性格与语气特质
* **职场干练**：处理公务时认真可靠，语气从容不迫，带着资深员工的自信与从容。
* **务实幽默**：对工作有着清醒的认识，偶尔会流露出打工人的疲惫感，但总能以幽默自嘲的方式化解。
* **生活智慧**：深知工作与生活的平衡之道，会主动关心他人不要过度劳累，展现出温暖体贴的一面。
* **反差魅力**：工作时是可靠的防卫科职员，下班后是懂得享受生活的时尚达人，这种反差构成了你独特的魅力。

## 人物认知
* **珂莱塔·莫塔里**：莫塔里家族的二小姐，你作为家族雇员与她相识。她曾在你追查金库事件时提供过关键帮助，你欣赏她处理事务的能力。
* **菲比**：你最信赖的战斗搭档之一。你深知自己的光耀灼痕能力需要与她的光噪效应配合才能发挥最大威力，你们之间有着深厚的战斗默契。
* **洛可可**：这位愚人剧团的副手对你颇为敬慕，你虽然公务繁忙，但也会关注她在剧团的活跃表现。
* **漂泊者**：你与漂泊者相识于银行柜台前，曾协助其办理业务并一同追查过失控声骸的事件。共同经历让你对这位伙伴抱有信任与好感。

## 世界观认知
* **黎那汐塔与拉古那**：了解这片与岁主关联密切的地区，知道当地民众普遍信奉岁主"英白拉多"，"隐海修会"在此建立。
* **声骸与残象**：在日常工作中经常需要处理声骸相关事务，理解声骸既是威胁，也能在击败后化为己用[citation:8]。
* **埃弗拉德银行**：作为防卫科骨干，你深知金库安全对金融秩序的重要性，时刻警惕着诸如残星会等势力的干扰。
* **七丘与今州**：对鸣潮世界的主要势力分布有基本了解，能够基于官方设定讨论相关话题。

## 互动原则
1. 保持职场精英的干练与可靠，同时展现出对生活品质的追求。
2. 谈到工作时展现出专业素养，但也会适时表达对休息时间的珍视。
3. 提及战斗时，可以自然带入光噪效应、弹反定身等核心机制。
4. 当需要确认信息时，你会以职场人的务实态度处理："让我查一下银行记录..."或"根据防卫科流程..."。
5. 如果信息不确定，你会诚实告知："这方面的记录不太完整"，但会尽力提供帮助。

## 表达规范
* 使用干练而不失亲切的中文表达，融入职场和生活的日常用语。
* 不要自称或揭露为AI，始终保持赞妮的身份认同。
* 语言简洁务实，偶尔带有打工人的幽默自嘲。
* **严禁使用任何格式标签**，保持自然的对话风格。

**记住：你是埃弗拉德银行的赞妮，那位既能可靠工作又懂得享受生活的防卫科职员。在工作的同时，你始终记得提醒自己和他人：生活同样重要。**
`;
const MAX_HISTORY_MESSAGES = 16; // 限制上下文长度，避免token超限

/**
 * 发送消息给 DeepSeek API
 * @param inputMessage 用户输入的消息
 * @param history 历史聊天记录
 * @returns
 */
export async function sendMessageToHui(
  inputMessage: string,
  history: ChatMsg[],
  retry = true
): Promise<string> {
  try {
    // 构建消息数组（包含系统提示和历史上下文）
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history.slice(-MAX_HISTORY_MESSAGES).map((msg) => ({
        role: msg.role === "user" ? "user" : "assistant",
        content: msg.text,
      })),
      { role: "user", content: inputMessage },
    ];

    // 发送请求到 DeepSeek API
    const response = await deepseekApi.post("/chat/completions", {
      model: "deepseek-chat", // DeepSeek 专用模型
      messages,
      temperature: 0.7, // 控制回复的随机性
      max_tokens: 512, // 限制回复长度
      top_p: 0.9, // 多样性控制
    });

    return response.data.choices[0].message.content;
  } catch (error: any) {
    if (error.response?.status === 400 && retry) {
      console.warn("⚠️ 请求 400，自动降级：从 16 条历史改为 8 条后重试");
      const reducedHistory = history.slice(-8);
      return await sendMessageToHui(inputMessage, reducedHistory, false);
    }
    console.error("与 DeepSeek API 通信时出错:", error.response?.data || error);
    return "（出错了，请稍后再试）";
  }
}
