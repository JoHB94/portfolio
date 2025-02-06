import{_ as r,c as o,o as d,ab as a}from"./chunks/framework.Dsgp4YlQ.js";const n="/portfolio/images/MQTT_Broker.png",p=JSON.parse('{"title":"📡메시지 브로커 서버 아키텍처","description":"","frontmatter":{},"headers":[],"relativePath":"MSD/MSDServer/mqttBroker.md","filePath":"MSD/MSDServer/mqttBroker.md","lastUpdated":null}'),s={name:"MSD/MSDServer/mqttBroker.md"};function e(g,t,l,i,h,b){return d(),o("div",null,t[0]||(t[0]=[a('<h1 id="📡메시지-브로커-서버-아키텍처" tabindex="-1">📡메시지 브로커 서버 아키텍처 <a class="header-anchor" href="#📡메시지-브로커-서버-아키텍처" aria-label="Permalink to &quot;📡메시지 브로커 서버 아키텍처&quot;">​</a></h1><h2 id="_1-개요" tabindex="-1">1. 개요 <a class="header-anchor" href="#_1-개요" aria-label="Permalink to &quot;1. 개요&quot;">​</a></h2><p>CRUX 서버는 <strong>PLC 생산라인과 AI 비전 품질검사 라인의 엣지 클라이언트(Edge Clients) 간의 실시간 데이터 통신을 지원</strong> 하기 위해<br><strong>메시지 브로커(Message Broker) 서버를 구축</strong>하였습니다.</p><p>이를 통해 <strong>엣지 클라이언트 간 실시간 데이터를 안정적으로 송수신</strong> 할 수 있으며,<br><strong>생산라인과 품질라인의 데이터를 하나의 통합된 프로토콜로 관리</strong> 할 수 있습니다.</p><hr><h2 id="_2-메시지-브로커-구조" tabindex="-1">2. 메시지 브로커 구조 <a class="header-anchor" href="#_2-메시지-브로커-구조" aria-label="Permalink to &quot;2. 메시지 브로커 구조&quot;">​</a></h2><p><img src="'+n+'" alt="MQTT 메시지 브로커"></p><h3 id="🔹-메시지-브로커의-역할" tabindex="-1">🔹 <strong>메시지 브로커의 역할</strong> <a class="header-anchor" href="#🔹-메시지-브로커의-역할" aria-label="Permalink to &quot;🔹 **메시지 브로커의 역할**&quot;">​</a></h3><ul><li><strong>발행(Publish)</strong> → 엣지 클라이언트에서 데이터를 수집하여 메시지 브로커로 전송</li><li><strong>구독(Subscribe)</strong> → 생산/품질 모니터링 클라이언트가 실시간 현황을 구독</li><li><strong>데이터 중계</strong> → <strong>RabbitMQ(MQTT 프로토콜)</strong> 을 사용하여 데이터 전송을 최적화</li></ul><p>MQTT(Message Queuing Telemetry Transport) 프로토콜을 기반으로 <strong>경량화된 메시지 송수신</strong>을 수행하며,<br> 이를 통해 <strong>저지연(Low Latency) 통신과 안정적인 데이터 처리</strong>가 가능합니다.</p><hr><h2 id="_3-메시지-데이터-구조" tabindex="-1">3. 메시지 데이터 구조 <a class="header-anchor" href="#_3-메시지-데이터-구조" aria-label="Permalink to &quot;3. 메시지 데이터 구조&quot;">​</a></h2><p>MSD는 <strong>생산라인과 품질라인의 메시지를 아래와 같은 구조로 처리</strong>합니다.</p><h3 id="🔹-생산-메시지-프로토콜" tabindex="-1">🔹 <strong>생산 메시지 프로토콜</strong> <a class="header-anchor" href="#🔹-생산-메시지-프로토콜" aria-label="Permalink to &quot;🔹 **생산 메시지 프로토콜**&quot;">​</a></h3><table><thead><tr><th>필드명</th><th>설명</th></tr></thead><tbody><tr><td><strong>Topic</strong></td><td>메시지 주제(Production)</td></tr><tr><td><strong>QoS</strong></td><td>품질 보장 수준</td></tr><tr><td><strong>RetainFlag</strong></td><td>메시지 지속 여부</td></tr><tr><td><strong>Payload</strong></td><td>데이터 페이로드</td></tr><tr><td><strong>LineId</strong></td><td>생산 라인 ID</td></tr><tr><td><strong>LotId</strong></td><td>LOT 번호</td></tr><tr><td><strong>Shift</strong></td><td>근무 교대조 정보</td></tr><tr><td><strong>EmployeeNumber</strong></td><td>작업자 번호</td></tr><tr><td><strong>StageVal</strong></td><td>현재 공정 상태</td></tr></tbody></table><hr><h3 id="🔹-품질-메시지-프로토콜" tabindex="-1">🔹 <strong>품질 메시지 프로토콜</strong> <a class="header-anchor" href="#🔹-품질-메시지-프로토콜" aria-label="Permalink to &quot;🔹 **품질 메시지 프로토콜**&quot;">​</a></h3><table><thead><tr><th>필드명</th><th>설명</th></tr></thead><tbody><tr><td><strong>Topic</strong></td><td>메시지 주제(Quality)</td></tr><tr><td><strong>QoS</strong></td><td>품질 보장 수준</td></tr><tr><td><strong>RetainFlag</strong></td><td>메시지 지속 여부</td></tr><tr><td><strong>Payload</strong></td><td>데이터 페이로드</td></tr><tr><td><strong>LineId</strong></td><td>검사 라인 ID</td></tr><tr><td><strong>LotId</strong></td><td>LOT 번호</td></tr><tr><td><strong>Shift</strong></td><td>근무 교대조 정보</td></tr><tr><td><strong>EmployeeNumber</strong></td><td>검사 작업자 번호</td></tr><tr><td><strong>NGImg</strong></td><td>불량 검출 이미지</td></tr><tr><td><strong>StageVal</strong></td><td>검사 공정 상태</td></tr></tbody></table><hr><h2 id="_4-메시지-브로커의-기대-효과" tabindex="-1">4. 메시지 브로커의 기대 효과 <a class="header-anchor" href="#_4-메시지-브로커의-기대-효과" aria-label="Permalink to &quot;4. 메시지 브로커의 기대 효과&quot;">​</a></h2><table><thead><tr><th>기존 방식 문제점</th><th>메시지 브로커 적용 후 개선점</th></tr></thead><tbody><tr><td>HTTP 기반 REST API로 인한 데이터 전송 지연</td><td><strong>MQTT 메시지 브로커 사용으로 저지연 통신 구현</strong></td></tr><tr><td>PLC 및 비전 검사 데이터의 통합 부족</td><td><strong>RabbitMQ를 활용한 중앙 메시지 허브 구축</strong></td></tr><tr><td>대량의 실시간 데이터 처리 시 성능 저하</td><td><strong>비동기 메시지 처리 방식으로 성능 최적화</strong></td></tr><tr><td>생산라인과 품질라인 간의 데이터 흐름 불일치</td><td><strong>표준화된 메시지 프로토콜 적용으로 데이터 일관성 확보</strong></td></tr></tbody></table><h2 id="_5-결론" tabindex="-1">5. 결론 <a class="header-anchor" href="#_5-결론" aria-label="Permalink to &quot;5. 결론&quot;">​</a></h2><p>✅ <strong>MQTT 메시지 브로커(RabbitMQ)를 활용한 실시간 데이터 송수신</strong><br> ✅ <strong>생산 및 품질 데이터의 중앙 집중화 및 표준화된 메시지 구조 설계</strong><br> ✅ <strong>저지연 통신을 통한 공정 상태 및 품질 데이터 실시간 공유</strong><br> ✅ <strong>RabbitMQ 기반의 비동기 메시지 처리로 확장성과 성능 최적화</strong></p><p>CRUX 서버의 메시지 브로커 아키텍처는 <strong>실시간 생산 관리 및 품질 검사 데이터의 안정적인 송수신을 지원</strong>하며,<br> 공장 자동화 시스템의 핵심 통신 인프라로 활용될 수 있도록 설계되었습니다. 🚀</p>',24)]))}const u=r(s,[["render",e]]);export{p as __pageData,u as default};
