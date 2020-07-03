import React from "react";
import style from "./index.module.scss";
import TopTitle from "@/components/topTitle";
import edit from "@static/user/works/edit.png";
import share from "@static/user/works/share.png";
import print from "@static/user/works/print.png";
export default function Works() {
  return (
    <div>
      <TopTitle title="我的作品" />
      {[1, 2, 3].map((item) => (
        <div key={item} className={style.card}>
          <div className={style.cardTop}>
            <img className={style.cardTopImg} src="" alt="" />
            <div className={style.cardTopDetail}>
              <p>《手账·照片》</p>
              <p>作品类型 周台历</p>
              <p>作品编码 23232333</p>
              <p>规格 规格1 | 规格2</p>
            </div>
          </div>
          <div className={style.cardBottom}>
            <div className={style.cardBottomBtn}>
              <div className={style.cardBottomBtnLayout}>
                <img src={edit} alt="" />
                <p>编辑</p>
              </div>
            </div>
            <div className={style.cardBottomBtn}>
              <div className={style.cardBottomBtnLayout}>
                <img src={print} alt="" />
                <p>印刷</p>
              </div>
            </div>
            <div className={style.cardBottomBtn}>
              <div className={style.cardBottomBtnLayout}>
                <img src={share} alt="" />
                <p>分享</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
