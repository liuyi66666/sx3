<template>
    <div class="dase">
      <div class="top">
        <div>
          <img src="http://ihrm.itheima.net/static/img/head.b6c3427d.jpg" alt="" />
        </div>
        <div class="names">
          <div class="zaoan">早安，祝你开心每一天！</div>
          <div class="zaoan"> 传智播客 - 总裁办</div>
        </div>
      </div>
      <div class="footer">
        <div class="left">
          <div class="rili">
            <div>工作日历</div>
            <el-calendar v-model="value"></el-calendar>
          </div>
          <div class="namese">
            <h3>公告</h3>
            <div class="num">
              <div class="num-a">
                <div class="img">
                  <img src="http://ihrm-java.itheima.net/static/img/img.0615818.jpeg" alt="" />
                </div>
                <div>
                  <div><span>朱继柳</span>发布了第1期“传智大讲堂”互动讨论获奖名单公布</div>
                  <div>2018-07-21 15:21:38</div>
                </div>
              </div>
              <div class="num-a">
                <div class="img">
                  <img src="http://ihrm-java.itheima.net/static/img/img.0615818.jpeg" alt="" />
                </div>
                <div>
                  <div><span>朱继柳</span>发布了第1期“传智大讲堂”互动讨论获奖名单公布</div>
                  <div>2018-07-21 15:21:38</div>
                </div>
              </div>
              <div class="num-a">
                <div class="img">
                  <img src="http://ihrm-java.itheima.net/static/img/img.0615818.jpeg" alt="" />
                </div>
                <div>
                  <div><span>朱继柳</span>发布了第1期“传智大讲堂”互动讨论获奖名单公布</div>
                  <div>2018-07-21 15:21:38</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="top1">
            <div class="title">流程申请</div>
            <div class="title1">
              <div @click="work">加班离职</div>
              <div>请假调休</div>
              <div>审批列表</div>
            </div>
            <div class="title1">
              <div>我的信息</div>
            </div>
          </div>
          <div class="top2">
            <div class="title">绩效指数</div>
            <div class="jjse">
              <!-- <img src="../assets/222.png" alt="" /> -->
              <earch></earch>
            </div>
          </div>
          <div class="top3">
            <div class="title">帮助链接</div>
            <div class="img">
              <img src="http://ihrm.itheima.net/static/img/icon.0ad0f0d5.png" alt="" />
            </div>
            <div class="ser">
              <div>
                <div>入门指南</div>
              </div>
              <div>
                <div>在线帮助手册</div>
              </div>
              <div>
                <div>联系技术支持</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <!-- <jia-ban ref="works"></jia-ban> -->
      </div>
    </div>
  </template>
  
  <script>
  import earch from "@/components/earch.vue"
  export default {
    data() {
      return {
        value: new Date()
      }
    },
    components: {
    //   jiaBan,
      earch
    },
    methods: {
      work() {
        this.$refs.works.add(1)
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .dase {
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    .top {
      width: 100%;
      height: 150px;
      background: #fff;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 20px;
      .names {
        margin: 0 0 0 15px;
      }
    }
    .footer {
      display: flex;
      margin-top: 20px;
      .left {
        width: 700px;
        // height: 00px;
        // background: chocolate;
        .rili {
          width: 100%;
          height: 500px;
          // background: palegoldenrod;
        }
        .namese {
          box-sizing: border-box;
          padding: 15px;
          margin-top: 205px;
          background: #fff;
          height: 400px;
          .num {
            border-top: 1px solid #d1d1d1;
            box-sizing: border-box;
            padding: 15px;
            .num-a {
              display: flex;
              align-items: center;
              box-sizing: border-box;
              padding: 0 0 5px 0;
              border-bottom: 1px solid #d1d1d1;
              .img {
                width: 80px;
                height: 80px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
      .right {
        margin: 0 0 0 15px;
        width: 600px;
        .top1 {
          box-sizing: border-box;
          padding: 20px 40px;
          background: #fff;
        }
        .top2 {
          margin: 15px 0 0 0;
          box-sizing: border-box;
          padding: 20px 40px;
          .jjse {
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              height: 100%;
            }
          }
          background: #fff;
        }
        .top3 {
          margin: 15px 0 0 0;
          box-sizing: border-box;
          padding: 20px 40px;
          background: #fff;
          .img {
            width: 500px;
            margin-top: 20px;
            img {
              width: 100%;
            }
          }
          .ser {
            display: flex;
            justify-content: space-between;
          }
        }
        .title {
          font-size: 24px;
          border-bottom: 4px solid #8a97f8;
          box-sizing: border-box;
          display: inline-block;
          padding: 5px 0;
        }
        .title1 {
          margin: 15px 0 0 0;
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 0 20px 0 0;
          div {
            width: 140px;
            height: 50px;
            background: #fff;
            border: 1px solid black;
            text-align: center;
            line-height: 50px;
            border-radius: 5px;
          }
          .p {
            width: 140px;
          }
        }
      }
    }
  }
  .zaoan{
    font-size: 24px;
    margin: 10px;
  }
  </style>
  