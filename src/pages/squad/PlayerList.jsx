import React from 'react';
import PlayerItem from "./PlayerItem";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { PlayerListStyle } from "../../styled/PlayerList";
import { onAddPosition } from '../../store/modules/playerInfoSlice';

const PlayerList = () => {
    const { selectPositionViewData, selectPosition, selectPlayerDetail, selectPositionView } = useSelector(state => state.playerInfo);
    const { backno, name, img, teamNameKor, teamNation, birth, position, height, weight, appearances, cleanSheet, scoreSave, goalsConceded, playTime } = selectPlayerDetail

    const dispatch = useDispatch();
    return (
        <>
            {
                selectPosition &&
                <PlayerListStyle>
                    <button className='closeBtn'><i><AiOutlineCloseCircle /></i></button>
                    <div className='pls_left'>
                        <div className='pls_left_top'>
                            <h3>{selectPositionView}</h3>
                            <div className='searchWrap'>
                                <input type="text" name="" id="" placeholder='선수를 검색해주세요' />
                            </div>
                        </div>
                        <div className="playerSelectList">
                        <ul>
                            {
                                selectPositionViewData.map(item => <PlayerItem key={item.id} item={item} />)
                            }
                        </ul>

                        </div>
                    </div>
                    <div className='pls_right'>
                        <div className='pls_right_top'>
                            <h3>선수정보</h3>
                                <div className="btnWrap">
                                <button onClick={() => dispatch(onAddPosition(backno))}>선택</button>
                                </div>
                        </div>
                        <div className='selectPlayerBox'>
                            <div className='imgWrap'>
                                {
                                    img?
                                    <img src={`./images/player/${img}`} alt={name} />
                                    :
                                    <img src="./images/Squad/emptyPlayer.png" alt="정보없음" className='imgNone' />
                                }

                            </div>
                            <div className='selectinfo'>
                                <p><span> No. {backno}</span><strong> {name} </strong></p>
                                <p><span>포지션</span><strong>{position}</strong></p>
                                <p><span>출생</span><strong>{birth}</strong></p>
                                <p><span>키</span><strong>{height}cm</strong></p>
                                <p><span>몸무게</span><strong>{weight}kg</strong></p>
                                
                                <div className="popupRight_GK">
                                    {teamNation == "대한민국" ? <p>2023 시즌</p> : <p>22/23 시즌</p>}

                                    <p><span>경기</span><strong>{appearances}</strong></p>
                                    <p><span>선방</span><strong>{scoreSave}</strong></p>
                                    <p><span>실점</span><strong>{goalsConceded}</strong></p>
                                    <p><span>경기당실점</span><strong>{(goalsConceded / appearances).toFixed(2)}</strong></p>
                                    <p> <span>무실점경기</span><strong>{cleanSheet}</strong></p>
                                    <p><span>출장시간</span><strong>{playTime}분</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </PlayerListStyle>
            }
        </>
    );
};

export default PlayerList;