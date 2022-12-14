import React from "react";

function ActivityArticle({ date, data }) {
  const list = Object.values(data);

  return (
    <article>
      <span className="activity_date">{date}</span>
      <div className="activity_wrap">
        {list.length !== 0 &&
          list.map(({ time, id, itemID, avatar, price, purchase }, idx) => (
            <article key={id}>
              {idx === 0 && (
                <div className="first_activity_section">
                  <span className="time">{time}</span>
                  <span className="timeline" />
                  <div className="activity_result_box">
                    <div
                      className="avatar"
                      style={{ background: `url("${avatar}")` }}
                    />

                    {purchase === "buy" ? (
                      <div className="result">
                        You have bought 1 item with ID{" "}
                        <span className="focus_text">{itemID}</span> from{" "}
                        <br className="tab_br" />
                        <br className="mob_br" />{" "}
                        <span className="focus_text">
                          {id.length > 15
                            ? id.substr(0, 8) + "..." + id.substr(20)
                            : id}
                        </span>{" "}
                        for <span className="price">{price}BNB</span>
                      </div>
                    ) : (
                      <div className="result">
                        You have sold 1 Skin with ID{" "}
                        <span className="focus_text">#1154</span> from{" "}
                        <br className="tab_br" />
                        <br className="mob_br" />{" "}
                        <span className="focus_text">
                          {id.length > 15
                            ? id.substr(0, 8) + "..." + id.substr(20)
                            : id}
                        </span>{" "}
                        for <span className="price">{price}BNB</span>
                      </div>
                    )}
                    <div className="btn_view">
                      <span className="time mob">{time}</span>
                      <span>View transaction</span>
                    </div>
                  </div>
                </div>
              )}

              {idx !== 0 && idx !== list.length - 1 && (
                <div className="middle_activity_section">
                  <span className="time">{time}</span>
                  <span className="timeline" />
                  <div className="activity_result_box">
                    <div
                      className="avatar"
                      style={{ background: `url("${avatar}")` }}
                    />
                    {purchase === "buy" ? (
                      <div className="result">
                        You have bought 1 item with ID{" "}
                        <span className="focus_text">{itemID}</span> from{" "}
                        <br className="tab_br" />
                        <br className="mob_br" />{" "}
                        <span className="focus_text">
                          {id.length > 15
                            ? id.substr(0, 8) + "..." + id.substr(20)
                            : id}
                        </span>{" "}
                        for <span className="price">{price}BNB</span>
                      </div>
                    ) : (
                      <div className="result">
                        You have sold 1 Skin with ID{" "}
                        <span className="focus_text">#1154</span> from{" "}
                        <br className="tab_br" />
                        <br className="mob_br" />{" "}
                        <span className="focus_text">
                          {id.length > 15
                            ? id.substr(0, 8) + "..." + id.substr(20)
                            : id}
                        </span>{" "}
                        for <span className="price">{price}BNB</span>
                      </div>
                    )}
                    <div className="btn_view">
                      <span className="time mob">{time}</span>
                      <span>View transaction</span>
                    </div>
                  </div>
                </div>
              )}

              {idx === list.length - 1 && (
                <div className="last_activity_section">
                  <span className="time">{time}</span>
                  <span className="timeline" />
                  <div className="activity_result_box">
                    <div
                      className="avatar"
                      style={{ background: `url("${avatar}")` }}
                    />
                    {purchase === "buy" ? (
                      <div className="result">
                        You have bought 1 item with ID{" "}
                        <span className="focus_text">{itemID}</span> from{" "}
                        <br className="tab_br" />
                        <br className="mob_br" />{" "}
                        <span className="focus_text">
                          {id.length > 15
                            ? id.substr(0, 8) + "..." + id.substr(20)
                            : id}
                        </span>{" "}
                        for <span className="price">{price}BNB</span>
                      </div>
                    ) : (
                      <div className="result">
                        You have sold 1 Skin with ID{" "}
                        <span className="focus_text">#1154</span> from{" "}
                        <br className="tab_br" />
                        <br className="mob_br" />{" "}
                        <span className="focus_text">
                          {id.length > 15
                            ? id.substr(0, 8) + "..." + id.substr(20)
                            : id}
                        </span>{" "}
                        for <span className="price">{price}BNB</span>
                      </div>
                    )}
                    <div className="btn_view">
                      <span className="time mob">{time}</span>
                      <span>View transaction</span>
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
      </div>
    </article>
  );
}

export default ActivityArticle;
