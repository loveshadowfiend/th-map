import { RegionDrawer } from "./RegionDrawer";
import { useMapStore } from "@/stores/useMapStore";
import { CurrentRegion } from "./CurrentRegion";
import { Paths } from "./Paths";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useRef, useState } from "react";
import { RegionsData } from "./RegionsData";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { useMouse } from "@/utils/useMouse";

export const Map = () => {
    const { isDrawerActive, isHoverActive, hoverRegionName } = useMapStore();
    const { updateCurrentRegionId, updateIsDrawerActive, updateHover } =
        useMapStore();
    const [isPanning, setIsPanning] = useState<boolean>(false);
    const { ref, x, y } = useMouse();
    const transformRef: any = useRef(null);

    const handleClick = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
        updateCurrentRegionId(e.currentTarget.id);
        updateIsDrawerActive(true);

        transformRef.centerView();
    };

    return (
        <TooltipPrimitive.TooltipProvider>
            <TooltipPrimitive.Tooltip delayDuration={0}>
                <TooltipPrimitive.TooltipTrigger asChild>
                    <div className="w-screen h-screen" ref={ref}>
                        <CurrentRegion />
                        <RegionsData />
                        {isDrawerActive && <RegionDrawer />}
                        <TransformWrapper
                            doubleClick={{ disabled: true }}
                            panning={{ velocityDisabled: true }}
                            onPanning={() => {
                                setIsPanning(true);
                            }}
                            onPanningStop={() => {
                                setIsPanning(false);
                            }}
                            ref={transformRef}
                        >
                            <TransformComponent wrapperClass="bg-[#D7E1F6]">
                                <svg
                                    className={`w-screen h-screen ${
                                        isPanning ? "pointer-events-none" : ""
                                    }`}
                                    width="1440"
                                    height="872"
                                    viewBox={`0 0 1440 872`}
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g filter="url(#filter0_d_202_224640)">
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M232.269 363.506L228.359 362.204L223.145 363.506L221.842 368.714L223.145 372.62L228.359 375.224L232.269 372.62L234.876 368.714L232.269 363.506Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Г. Москва"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M238.785 264.554L234.875 263.252L229.661 264.554L228.357 269.762L229.661 273.668L234.875 276.272L238.785 273.668L241.392 269.762L238.785 264.554Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Г. Санкт-Петербург"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M266.157 338.768L267.46 337.466L263.55 336.164L262.246 337.466L263.55 338.768H266.157ZM275.281 340.07H273.977L272.674 341.372L268.764 338.768V343.976L267.46 347.882L264.853 350.486V349.184V347.882V346.58L260.943 347.882L259.639 346.58L260.943 345.278H262.246L260.943 337.466H258.336L255.729 338.768L257.033 340.07L255.729 341.372L254.426 342.674H251.819V343.976V345.278L250.515 347.882V351.788V354.392L251.819 355.694L247.908 358.299L243.998 362.205V363.507V364.809V367.413L247.908 371.319L251.819 370.017L259.639 367.413L266.157 370.017L273.977 364.809L283.102 360.903V359.601L284.405 356.997L279.191 350.486V343.976L275.281 340.07Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Ярославская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M396.503 489.801V493.707L393.896 498.915L395.2 500.217L396.503 501.519H393.896H392.593H391.289L389.986 502.821H388.682L386.075 501.519L384.772 504.123L383.468 505.425H382.165V504.123V502.821L380.862 501.519L378.255 502.821V500.217L379.558 498.915L375.648 495.009L371.737 496.311L370.434 497.613V498.915H369.131V500.217L371.737 509.331V510.633H374.344H376.951V511.935L378.255 513.237H386.075H392.593L389.986 517.143L386.075 521.049L384.772 523.653L383.468 522.351L382.165 521.049L380.862 522.351H378.255H376.951H375.648L371.737 528.861L367.827 535.371L366.524 536.673L363.917 539.277V540.579V541.881H362.613V543.183L363.917 544.485V545.787V547.089H365.22L366.524 545.787L370.434 548.391L374.344 550.995L371.737 553.599L369.131 556.203H370.434L375.648 557.505L380.862 556.203L382.165 552.297V549.693L383.468 548.391H384.772L386.075 547.089H387.379L392.593 549.693L396.503 552.297L393.896 547.089L391.289 543.183L393.896 540.579H396.503L393.896 539.277L391.289 536.673H392.593L393.896 535.371L395.2 534.069L393.896 532.767H395.2H396.503H397.806H399.11V534.069L400.413 535.371L404.324 536.673L406.931 537.975V539.277L408.234 540.579L409.537 539.277H413.448L417.358 540.579V539.277V537.975L416.055 536.673L418.662 534.069V531.465L414.751 528.861L409.537 524.955L412.144 522.351L413.448 521.049L414.751 518.445V517.143H416.055L417.358 515.841H418.662H419.965L421.269 510.633V504.123L419.965 501.519V500.217L418.662 498.915L416.055 497.613H414.751L413.448 498.915L406.931 495.009L400.413 489.801V488.499H399.11H397.806L396.503 489.801Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Челябинская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M504.689 479.385L499.475 480.687L498.172 481.989V483.291H495.565L492.958 481.989H490.351H486.441L485.137 480.687H483.834L481.227 481.989L479.923 484.593H476.013L472.103 483.291V485.895L470.799 487.197V489.801V492.405L468.192 493.707H465.585H462.979V492.405H459.068L456.461 493.707L453.854 498.915L452.551 505.425V506.727H453.854L452.551 508.029H451.248H449.944L448.641 511.935V515.841L451.248 517.143L453.854 518.445V521.049V523.653H455.158H457.765V524.955L459.068 526.257L460.372 524.955L461.675 526.257L464.282 530.163L465.585 534.069L466.889 535.371L469.496 536.673H470.799L472.103 540.579L474.71 545.787H476.013V544.485L477.317 545.787V547.089H478.62L481.227 548.391L483.834 550.995L485.137 553.599H487.744L489.048 552.297V549.693H490.351L492.958 548.391L491.654 547.089V545.787H492.958H494.261V544.485L492.958 543.183L494.261 541.881L496.868 540.579V539.277L498.172 537.975H499.475V536.673V535.371L500.779 534.069H502.082V532.767V531.465V530.163L504.689 531.465L508.599 530.163L507.296 521.049V519.747H505.992H503.386L502.082 518.445L503.386 517.143L505.992 515.841V511.935V508.029L509.903 505.425L513.813 502.821L515.117 504.123L516.42 506.727L515.117 508.029V510.633H517.723L520.33 511.935L522.937 513.237L526.848 515.841L528.151 514.539H530.758L539.882 517.143L550.31 513.237L547.703 510.633H543.792L542.489 509.331L541.186 508.029L537.275 505.425L534.668 504.123V501.519L535.972 497.613H533.365L530.758 495.009L532.061 493.707V492.405L530.758 491.103H529.455L528.151 485.895L525.544 481.989L524.241 480.687H522.937L521.634 479.385L517.723 478.083H516.42H513.813L512.51 476.781L511.206 474.177H508.599L507.296 475.479L504.689 479.385Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Тюменская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M209.849 381.735H207.763L207.372 383.037L205.938 384.339H204.896L204.244 383.037L201.116 381.735L198.118 380.433H197.727L197.205 381.735H194.598L192.382 383.037L191.731 384.339L190.818 385.641L191.731 392.151L194.598 397.359L196.032 398.661L197.336 399.963L197.075 402.567L197.205 406.473L199.421 409.077L201.116 410.379H203.592L204.114 409.077L205.156 407.775H206.199H207.242L208.936 406.473H211.022L217.409 396.057L217.279 393.453L219.234 390.849H220.537L219.234 389.547V388.245V385.641V384.339H217.279L214.541 380.433H212.977L211.152 381.735H209.849H209.849Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Тульская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M238.785 393.452L236.178 392.15V393.452H234.875H233.571H232.268H228.357L225.75 394.754H224.447L223.144 393.452L221.84 394.754L219.233 396.056H217.408L211.021 406.472L211.934 409.076V411.68H214.801L217.799 412.982L217.408 415.586L217.93 418.19L220.537 419.492H224.447L225.75 422.096L227.054 423.398H229.661L230.964 422.096L238.785 426.002H240.088H241.392L242.695 424.7V423.398L243.999 424.7H246.606L245.302 422.096H242.695L245.302 420.794H247.909L249.213 419.492L251.819 418.19V415.586L253.123 412.982V410.378L250.516 409.076H249.213L250.516 407.774V406.472V405.17L245.302 398.66L241.392 393.452H238.785Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Рязанская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M190.818 385.64L185.605 384.338L180.391 383.036L179.869 384.338H178.957L176.089 385.64H174.004L173.482 386.942L173.091 389.546L169.963 390.848L168.529 393.452L170.224 394.754L172.44 396.056V397.358V399.962L175.829 401.264L178.305 402.566L178.436 405.17L178.696 409.076L180 410.378L181.303 411.68L180.912 412.982V415.586H181.955H182.867L183.258 416.888H184.171L188.472 415.586L190.036 416.888L190.427 414.284L190.297 412.982L190.949 411.68L191.731 409.076L197.205 406.472L197.075 402.566L197.336 399.962L196.032 398.66L194.598 397.358L191.731 390.848L190.818 385.64H190.818Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Орловская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M550.31 513.236L539.882 517.142L530.758 514.538H528.151L526.848 515.84L522.937 513.236L520.33 511.934L517.724 510.632H515.117V508.028L516.42 506.726L515.117 504.122L513.813 502.82L509.903 505.424L505.992 508.028V513.236V515.84L503.386 517.142L502.082 518.444L503.386 519.746H505.992H507.296V521.048L508.599 531.465H504.689L502.082 530.163V531.465V532.767V534.069H500.779L499.475 535.371V536.673V537.975H498.172L496.868 539.277V540.579L494.261 541.881L492.958 543.183L494.261 544.485L492.958 545.787H491.654V547.089L492.958 548.391L490.351 549.693H489.048V552.297L491.654 556.203L490.351 562.713V565.317H491.654L487.744 570.525L489.048 573.129L490.351 574.431L491.654 575.733H492.958L494.261 574.431H495.565V575.733H496.868V574.431L498.172 573.129V577.035V582.243L500.779 580.941V579.639L503.386 580.941L505.992 583.545L507.296 584.847H509.903V586.149L508.599 587.451L505.992 586.149L503.386 590.055L504.689 592.659L507.296 591.357L513.813 595.263H515.117L520.33 592.659H524.241L526.848 590.055H529.455L530.758 586.149L532.061 583.545L533.365 582.243V580.941L532.061 577.035L530.758 574.431L532.061 567.921L534.668 565.317L533.365 564.015V561.411H534.668H535.972L538.579 558.807L541.186 557.505H545.096H546.399V554.901L545.096 552.297L546.399 549.693L549.006 548.391V547.089V545.787L550.31 543.183L551.613 541.881V539.277L550.31 537.975L549.006 535.371L550.31 534.069V532.767V531.465L549.006 528.861V527.559V526.257V523.652L547.703 522.351V521.048H549.006V519.746V517.142H550.31V514.538V513.236Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Омская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M211.021 406.473H208.936L207.241 407.775H206.198H205.156L204.113 409.077L203.591 410.379H201.115L199.42 409.077L197.204 406.473L194.337 407.775L191.73 409.077L190.948 411.681L190.296 412.983L190.426 415.587L190.035 416.889L188.471 415.587L184.17 416.889L184.952 419.493L187.429 422.097L191.078 423.399L194.206 424.701V426.003H194.076L195.249 427.305H196.813L197.986 429.909L197.595 431.211L200.854 433.815L204.373 437.721L206.85 436.419L208.935 435.117L207.632 427.305L212.194 422.097L217.929 418.191L217.408 415.587L217.799 412.983L214.801 411.681H211.933V409.077L211.021 406.473H211.021Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Липецкая область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M172.439 397.358V396.056L170.223 394.754L168.529 393.452H165.27H164.749H163.966H163.315L162.402 394.754L160.056 392.15L157.58 394.754L156.276 396.056L153.93 394.754L153.539 396.056L153.278 397.358L150.02 399.962L152.235 403.868L155.233 407.774L154.842 409.076L154.191 410.378H154.842L155.233 411.68H154.582L153.93 412.982L156.406 415.586H159.404H160.186H161.099L162.272 418.19L163.706 419.492L169.832 422.096L177.653 426.002L178.826 427.304L179.999 429.908L181.824 427.304L183.258 424.7L184.952 426.002H186.516H186.907V424.7L187.689 423.398L187.429 422.096L184.952 419.492L184.17 416.888H183.258L182.866 415.586H181.954H180.911V414.284L181.302 412.982L179.999 410.378L178.695 409.076L178.435 405.17L178.304 402.566L175.828 401.264L172.439 399.962V397.358Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Курская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M451.248 505.425L444.73 506.727L440.82 508.029L438.213 505.425L436.91 504.123H435.606H434.303L431.696 501.519L429.089 500.217L425.179 501.519L421.268 504.123V510.633L419.965 515.841H418.661H417.358L416.054 517.143H414.751V518.445L413.447 521.049L412.144 522.351L409.537 524.955L414.751 528.861L418.661 531.465V534.069L416.054 535.371L417.358 536.673V537.975V539.277V540.579L423.875 541.881L430.392 543.183L432.999 544.485L434.303 545.787L435.606 544.485L436.91 543.183H439.516L443.427 544.485L444.73 545.787L455.158 547.089L465.585 548.391L466.889 547.089L468.192 545.787H469.496L472.103 547.089L473.406 545.787H474.71L472.103 540.579L470.799 536.673H469.496L466.889 535.371L465.585 534.069L464.282 530.163L461.675 526.257L460.372 524.955L459.068 526.257L457.765 524.955V523.653H455.158H453.854V521.049V518.445L451.248 517.143L448.641 515.841V510.633L449.944 508.029L451.248 505.425Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Курганская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M98.5336 250.232H101.662H98.5336ZM104.399 248.93L105.963 247.628L104.399 248.93L102.965 250.232H103.096L104.399 248.93H104.399ZM117.303 252.836L109.874 251.534L108.049 248.93L105.963 247.628L104.399 248.93L103.096 250.232H103.617L105.051 254.138L102.053 252.836L98.1426 251.534L103.617 261.95L109.874 271.064L113.523 276.272H114.175H114.696L116.13 274.97L120.692 273.668L119.519 264.554L119.128 260.648L118.998 256.742L118.346 255.44H117.564H116.652L115.218 256.742L113.784 258.044L111.438 255.44L110.525 252.836H111.177H112.09H116.13H117.303Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Калининградская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M104.399 248.93L105.963 247.628L104.399 248.93ZM104.399 248.93L102.965 250.232H103.096L104.399 248.93H104.399ZM98.5336 250.232H101.662H98.5336ZM117.303 252.836L109.874 251.534L108.049 248.93L105.963 247.628L104.399 248.93L103.096 250.232H103.617L105.051 254.138L102.053 252.836L98.1426 251.534L103.617 261.95L109.874 271.064L113.523 276.272H114.175H114.696L116.13 274.97L120.692 273.668L119.519 264.554L119.128 260.648L118.998 256.742L118.346 255.44H117.564H116.652L115.218 256.742L113.784 258.044L111.438 255.44L110.525 252.836H111.177H112.09H116.13H117.303V252.836Z"
                                            stroke="#D7E1F6"
                                            fill="white"
                                            id="Калининградская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M287.013 380.432L284.406 379.13L281.799 377.828L280.496 375.224L279.192 372.62L277.889 373.922L275.282 375.224L266.158 370.016L259.64 367.412L253.123 370.016L254.426 373.922L253.123 379.13H255.73H258.337L259.64 381.734L260.944 384.338L264.854 388.244H266.158V390.848V392.15L268.764 393.452L271.371 394.754H272.675L273.978 396.056L275.282 394.754L277.889 392.15L280.496 393.452L283.102 394.754L285.709 393.452L287.013 390.848L289.62 389.546H290.923V388.244L288.316 384.338H284.406L285.709 383.036L287.013 380.432Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Ивановская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M1139.47 433.815L1136.86 431.211L1135.56 429.909L1134.26 431.211L1132.95 432.513L1131.65 431.211H1129.04L1127.74 433.815L1125.13 437.721L1123.83 436.419L1122.52 435.117L1121.22 436.419H1118.61L1112.1 433.815H1106.88L1105.58 441.627V449.439L1104.28 450.741L1101.67 452.043V453.345V454.647L1100.37 455.949L1099.06 457.251V458.553V459.855L1097.76 465.063L1100.37 468.969L1101.67 475.479L1102.97 480.687L1105.58 483.291L1106.88 487.197L1105.58 488.499L1102.97 485.895L1101.67 487.197L1100.37 488.499L1099.06 493.707L1093.85 497.613L1091.24 498.915H1089.94L1087.33 497.613L1086.03 498.915V501.519V502.821L1084.72 504.123L1078.21 506.727L1071.69 509.331H1070.39H1069.08L1066.48 511.935L1065.17 514.539L1063.87 522.351L1062.57 526.257L1063.87 531.465H1061.26H1059.96L1062.57 535.371L1066.48 537.975L1065.17 539.277L1063.87 540.579V541.881V544.485L1061.26 545.787L1059.96 548.391H1061.26H1062.57L1063.87 549.693L1066.48 550.995L1067.78 553.599V556.203L1066.48 557.505H1063.87V564.015L1062.57 570.525L1067.78 571.827L1071.69 569.223L1072.99 570.525H1074.3L1076.9 569.223L1078.21 567.921L1080.81 569.223L1082.12 570.525H1083.42H1084.72L1083.42 574.431L1080.81 577.035V578.337V579.639L1078.21 582.243L1075.6 584.847L1074.3 586.149L1072.99 587.451V591.357V595.263L1069.08 597.867V603.075L1072.99 604.377H1078.21L1080.81 606.981L1083.42 610.887H1084.72H1086.03H1087.33H1088.63L1089.94 609.585L1092.55 608.283L1097.76 605.679L1100.37 603.075L1101.67 600.471H1104.28L1108.19 599.169L1109.49 597.867H1110.79V596.565L1114.7 597.867L1116.01 603.075V608.283L1117.31 610.887V613.491L1116.01 614.793H1110.79L1104.28 616.095L1105.58 618.699V623.907L1102.97 625.209L1100.37 626.511L1099.06 627.813L1097.76 630.417V631.719V633.021L1093.85 635.625L1089.94 638.229L1091.24 640.833V642.135L1089.94 644.739L1088.63 648.645V652.551V656.457L1089.94 655.155L1091.24 656.457V657.759H1092.55L1093.85 656.457L1095.15 657.759V659.061H1096.46L1099.06 660.363V665.571V669.477L1100.37 673.383V677.289L1105.58 674.685H1106.88L1108.19 673.383L1109.49 670.779H1112.1L1114.7 672.081L1117.31 670.779H1119.92L1121.22 672.081L1123.83 675.987H1126.43L1129.04 677.289H1131.65H1132.95L1134.26 674.685H1136.86H1139.47H1140.77L1143.38 673.383L1144.68 675.987L1145.99 678.591L1142.08 681.195L1140.77 683.799L1142.08 686.403L1143.38 687.705L1145.99 690.309L1143.38 694.215L1142.08 695.517V702.027L1143.38 708.537L1145.99 705.933V703.329L1147.29 699.423L1149.9 695.517H1151.2L1152.5 696.819L1153.81 695.517L1155.11 696.819V698.121V699.423L1156.41 698.121L1157.72 696.819L1159.02 698.121L1160.32 699.423L1166.84 696.819L1172.06 692.913V690.309V687.705L1177.27 685.101L1179.88 677.289H1177.27H1174.66L1173.36 675.987V674.685L1172.06 673.383L1170.75 672.081V670.779H1172.06H1173.36L1175.97 666.873L1181.18 664.269V665.571L1183.79 668.175L1186.39 670.779L1185.09 673.383V675.987L1187.7 677.289H1191.61L1194.21 665.571L1196.82 656.457V655.155L1195.52 652.551V651.249V648.645V647.343L1194.21 646.041V642.135L1192.91 638.229L1191.61 635.625L1190.3 633.021V630.417V629.115L1183.79 610.887V609.585V608.283L1185.09 601.773L1183.79 596.565L1185.09 593.961L1183.79 592.659L1182.48 593.961L1179.88 590.055V586.149H1178.57L1177.27 584.847L1172.06 582.243H1173.36H1175.97L1177.27 579.639L1175.97 577.035H1173.36L1170.75 575.733L1169.45 574.431H1165.54L1161.63 571.827V570.525L1159.02 569.223H1157.72L1156.41 567.921H1153.81L1152.5 569.223L1151.2 570.525L1147.29 571.827H1144.68H1145.99L1147.29 574.431V579.639V584.847L1145.99 582.243V578.337V577.035L1143.38 582.243L1136.86 588.753V584.847L1139.47 579.639H1138.17L1136.86 580.941H1135.56L1132.95 579.639L1134.26 578.337L1135.56 577.035V575.733L1131.65 579.639L1132.95 580.941V583.545V584.847H1131.65H1130.35V586.149L1127.74 579.639L1123.83 573.129L1114.7 577.035L1108.19 574.431L1110.79 570.525L1112.1 567.921L1114.7 564.015L1116.01 560.109L1117.31 557.505L1118.61 556.203L1122.52 549.693L1123.83 541.881L1125.13 540.579L1126.43 539.277V537.975L1125.13 536.673L1126.43 534.069V530.163L1127.74 528.861L1130.35 522.351L1132.95 517.143L1134.26 514.539V511.935L1135.56 510.633L1136.86 508.029V505.425V501.519L1138.17 496.311L1140.77 493.707L1142.08 483.291L1148.59 474.177H1149.9L1151.2 472.875L1152.5 471.573L1153.81 470.271L1160.32 467.667L1166.84 463.761H1168.15L1169.45 462.459H1170.75V465.063L1173.36 466.365L1174.66 463.761L1173.36 459.855H1175.97H1178.57V457.251V455.949L1174.66 452.043L1169.45 449.439H1164.24L1160.32 448.137V442.929L1164.24 441.627L1162.93 439.023V437.721V436.419L1164.24 435.117L1160.32 428.607L1152.5 423.399L1147.29 424.701L1140.77 426.003V429.909L1139.47 433.815Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Хабаровский край"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M156.407 573.129L155.886 571.827L153.931 573.129L151.063 574.431H149.89L150.933 575.733L153.8 577.035L151.063 583.545H150.933H150.802L150.281 584.847L146.11 586.149L142.46 584.847L141.939 583.545H141.157H139.462H138.811L139.202 584.847L138.941 586.149H140.766L142.851 588.753L143.503 591.357L143.764 592.659L145.197 593.961L146.631 596.565L149.368 595.263H152.236L153.67 596.565L154.191 595.263H154.843H156.798H158.884L160.187 592.659L162.403 588.753L165.662 587.451L168.529 586.149L168.92 583.545L168.269 580.941H166.053H163.837L163.967 579.639L164.358 578.337H162.664L160.839 577.035L160.709 575.733L160.448 574.431H159.796H158.493H157.45L156.407 573.129Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Чеченская Республика"
                                        />
                                        {/* TODO !!*/}
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M145.719 571.827L143.764 573.129H142.199L141.157 571.827H139.853L138.419 573.129L137.637 571.827L136.595 570.525L133.727 571.827L130.729 573.129L129.556 571.827H128.383L130.338 578.337L130.468 580.941L134.248 582.243L138.81 583.545H139.462H141.157H143.894L144.937 579.639L143.633 578.337L145.067 575.733L147.153 573.129H147.804H148.195L151.063 574.431L150.541 570.525L147.283 567.921L145.719 570.525L145.719 571.827Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Республика Северная Осетия"
                                        />
                                        {/* TODO !!*/}
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M201.767 518.445L200.464 515.841H198.378H196.553V513.237L194.598 511.935L193.686 514.539L191.991 517.143L187.168 514.539L180.781 517.143L179.999 518.445L182.215 519.747H186.126L184.301 523.653L180.651 526.257L180.39 527.559L180.13 528.861H176.871H173.482L172.439 531.465L171.006 532.767H170.484L169.832 531.465L167.877 532.767L165.531 531.465L161.49 522.351L155.886 518.445L152.366 519.747L147.674 521.049L148.586 522.351H149.89L149.759 523.653L150.02 524.955L151.584 523.653H153.279L153.67 524.955L152.888 526.257H156.537H160.708L161.881 530.163L162.924 532.767L164.879 535.371L166.444 537.975L166.052 540.579L165.531 544.485L166.313 547.089L168.138 549.693L171.136 556.203L172.179 562.713L173.091 564.015L175.177 565.317L179.087 571.827L181.824 575.733H183.258L184.17 577.035L185.213 575.733H185.995L190.036 573.129L194.337 571.827L195.25 570.525H196.553V569.223L195.641 567.921L194.728 566.619H193.686H192.643L192.122 565.317H191.6L192.773 561.411L197.205 560.109L196.293 558.807L194.989 557.505L195.38 556.203L195.902 554.901L194.598 553.599L194.337 552.297H199.16L203.853 550.995L204.374 545.787L205.026 539.277L207.893 537.975H210.109L207.372 535.371H203.983L202.679 532.767L202.288 528.861L203.462 526.257L205.156 524.955L204.113 523.653L202.549 522.351L201.767 518.445Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Республика Калмыкия"
                                        />
                                        {/* TODO !! */}
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M150.931 575.733L149.889 574.431H148.194L147.803 573.129H147.151L145.066 575.733L143.632 578.337L144.935 579.639L143.893 583.545L141.938 584.847L146.109 586.149L150.28 584.847L150.801 583.545H151.062L153.799 578.337L150.931 575.733Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Республика Ингушетия"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M645.462 650.068H644.158L642.855 648.766L641.551 647.464L640.248 648.766H638.944L637.641 647.464L635.034 644.86L631.124 646.162L629.82 648.766L631.124 651.37L628.517 653.975L627.213 652.672H624.606H623.303L621.999 651.37L620.696 650.068L619.393 652.672L618.089 655.276H616.786H615.482L614.179 656.578L612.875 657.881H608.965H603.751L601.144 659.183L599.841 660.485L597.234 659.183L594.627 660.485L597.234 663.089L599.841 665.692V666.994V669.599V670.901H595.93L598.537 677.411L602.448 682.619L603.751 686.525L605.055 690.431L606.358 691.733H607.661L610.268 693.035L611.572 694.337L616.786 693.035L620.696 691.733V693.035L619.393 694.337L625.91 703.451H628.517H631.124L633.73 702.149L635.034 699.545L641.551 700.847H642.855H644.158H645.462L646.765 699.545H648.068L649.372 700.847L651.979 696.941L653.282 694.337L651.979 691.733V690.431H649.372V689.129L653.282 686.525H655.889V683.921L653.282 682.619V680.015V677.411H651.979L650.675 676.109V672.203L649.372 666.994L648.068 668.296L645.462 669.599L641.551 668.296L638.944 664.391L640.248 663.089L641.551 661.787V660.485V657.881L644.158 656.578L646.765 653.975V651.37V650.068H645.462Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Республика Алтай"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M122.516 517.143L121.865 513.237L118.345 514.539L113.914 513.237L111.828 510.633L110.525 509.331L109.482 510.633L109.873 511.935L110.525 513.237L112.871 515.841L114.956 518.445H115.739L116.912 515.841H118.345L119.258 519.747L118.867 523.653H115.869L112.871 527.559L113.132 528.861L113.523 530.163L112.219 531.465H110.525L110.785 530.163L110.264 528.861L109.221 530.163H107.918L107.396 531.465L108.961 535.371L111.568 537.975L114.174 536.673L115.869 532.767H117.042L118.085 531.465L119.779 528.861L122.647 527.559L122.256 530.163L121.734 532.767H123.038H123.82L124.472 531.465L125.123 530.163L125.905 528.861L127.47 527.559L126.166 521.049L122.516 517.143Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Республика Адыгея"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M356.095 362.204L349.578 360.902L346.971 363.506L341.757 367.412L339.15 366.11L336.543 367.412V370.016L337.847 371.318H340.453H341.757L340.453 372.62L339.15 373.922L340.453 376.526L337.847 379.131L336.543 381.735L335.24 385.641V389.547L332.633 390.848H331.329H330.026H328.722H327.419V392.15L324.812 390.848H323.509L319.598 393.453L316.991 394.755L320.902 399.963L324.812 405.171L323.509 406.473L320.902 407.775L318.295 409.077L313.081 406.473L311.778 407.775L310.474 410.379L309.171 411.681L307.867 412.983L309.171 414.285L310.474 415.587L311.778 418.191H315.688H316.991L318.295 419.493H319.598H320.902L322.205 420.795L324.812 422.097V423.399L326.115 422.097H328.722V423.399L327.419 426.003L328.722 427.305H330.026V429.909V431.211V432.513L331.329 433.815L330.026 435.117L328.722 436.419L332.633 437.721L331.329 441.627V444.231H332.633V445.533H331.329L332.633 449.439L335.24 450.741L336.543 446.835L337.847 441.627H340.453L341.757 440.325L343.06 435.117L345.667 431.211H348.274L349.578 432.513H352.185L354.791 431.211L357.398 423.399L362.612 420.795L365.219 423.399L367.826 424.701H369.129H370.433L371.736 426.003V427.305L373.04 428.607H375.647L376.95 427.305L379.557 426.003L380.86 422.097L382.164 420.795L379.557 418.191V414.285L386.074 410.379L389.985 405.171L384.771 401.265L379.557 396.057V394.755H375.647L370.433 396.057L366.522 394.755L361.309 392.15V393.453H360.005H358.702L356.095 396.057L352.185 398.661V396.057L353.488 394.755L352.185 390.848V388.245L350.881 385.641L348.274 383.037L350.881 379.131L356.095 377.828V376.526V373.922L360.005 367.412L357.398 364.808L356.095 360.902V362.204Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Кировская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M230.963 422.096L229.66 423.398H227.053L225.75 422.096L224.446 419.492H220.536L217.929 418.19L212.194 422.096L207.632 427.304L208.935 435.116L206.85 436.418L204.373 437.72L205.416 439.022L206.719 440.324L206.068 442.928L205.676 444.23L208.023 445.532L210.76 446.834L212.194 449.438L213.497 452.042H214.41H215.452L215.192 453.344L216.886 454.646L223.143 452.042L229.66 449.438L232.267 448.136L233.57 446.834V440.324L232.267 436.418L233.57 435.116L234.874 432.512L233.57 431.21L234.874 429.908L236.177 427.304L237.481 426.002L230.963 422.096Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Тамбовская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M303.958 356.996L302.655 355.694H301.351V354.392V353.09L300.048 354.392L298.744 355.694L294.834 354.392L290.924 353.09L289.62 354.392V355.694L284.406 356.996L283.103 359.6V360.902L273.979 364.808L266.158 370.016L275.282 375.224L277.889 373.922L279.193 372.62L280.496 375.224L281.8 377.828L284.406 379.13L287.013 380.432L285.71 383.036L284.406 384.338H288.317L290.924 388.244L296.138 390.848H301.351L303.958 388.244L305.262 386.942L309.172 390.848V393.452H310.476H311.779L316.993 394.754L319.6 393.452L323.51 390.848H324.813L327.42 392.15V390.848H328.724H330.027H331.331H332.634L335.241 389.546V385.64L336.545 381.734L337.848 379.13L336.545 376.526L333.938 375.224L332.634 376.526L331.331 377.828H330.027L327.42 376.526L326.117 377.828H324.813L315.689 371.318L314.386 368.714L313.082 366.11L310.476 364.808L309.172 363.506V362.204L303.958 360.902V358.298V356.996Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Костромская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M1208.55 203.36H1207.25L1205.94 207.266L1211.16 209.87L1213.77 208.568L1216.37 205.964L1215.07 204.662L1213.77 202.058H1211.16L1208.55 203.36ZM1245.05 120.683L1241.14 123.287V124.328V125.11L1239.83 125.891L1238.53 126.932L1237.23 132.531L1238.53 138.26L1239.83 141.255L1242.44 142.817L1243.75 143.468L1246.35 136.307L1250.26 134.224L1251.57 132.922V131.359L1254.17 125.761L1252.87 120.162L1250.26 120.553L1245.05 120.683ZM1333.68 147.765L1332.38 149.848L1331.08 151.28L1329.77 152.582L1331.08 152.842L1332.38 151.931L1334.99 152.582L1337.59 153.624V153.884V155.186V156.488H1340.2L1342.81 157.79H1341.5H1340.2V159.092V160.394H1338.9L1337.59 159.092L1336.29 160.394H1334.99H1332.38V157.79L1329.77 156.488L1324.56 152.712L1323.26 152.452H1321.95V152.322V153.493V155.186L1320.65 154.795V154.275L1319.35 152.582L1316.74 151.28L1314.13 152.061L1312.83 153.363L1316.74 154.014L1315.43 155.186L1312.83 157.79L1311.52 155.186L1310.22 153.754L1308.92 154.926L1306.31 156.488L1305.01 155.186L1303.7 154.926L1299.79 156.488L1295.88 159.092L1294.58 157.79H1293.28L1290.67 159.092L1288.06 160.394L1286.76 159.092L1284.15 157.79L1280.24 159.092L1276.33 161.696H1272.42H1269.81L1268.51 162.998L1265.9 164.3V162.998H1267.21V161.696H1265.9L1263.3 162.998L1261.99 164.3L1259.39 165.602H1256.78L1255.48 166.904L1251.57 168.206L1247.66 169.508H1246.35V170.81V172.112L1245.05 170.81H1243.75L1238.53 177.32L1237.23 178.622L1234.62 181.226H1233.32H1232.01L1233.32 182.528V183.83H1230.71L1228.1 185.132L1226.8 186.434L1224.19 187.736L1220.28 190.34L1216.37 191.642L1217.68 192.944L1218.98 194.246L1220.28 196.85V199.454V200.756H1222.89L1224.19 199.454L1230.71 203.36L1232.01 209.87L1230.71 212.474V215.078H1226.8L1224.19 212.474L1220.28 213.776L1216.37 215.078L1213.77 212.474L1207.25 209.87L1205.94 211.172V213.776V217.682L1203.34 220.286H1200.73L1198.12 221.588L1196.82 222.89L1194.21 225.494L1190.3 226.796L1187.7 225.494V226.796L1186.39 228.098L1185.09 229.4H1183.79L1182.48 232.004V233.306L1181.18 234.608L1179.88 235.91L1181.18 238.514L1182.48 239.816H1183.79L1185.09 241.118L1186.39 243.722H1187.7L1190.3 245.024V246.326V247.628L1192.91 251.534L1194.21 254.138L1191.61 255.44L1190.3 256.742L1181.18 267.158L1174.66 276.272L1175.97 277.574L1177.27 278.876L1175.97 281.48V284.084L1183.79 289.292L1191.61 291.896V293.198L1190.3 294.5L1192.91 299.708L1195.52 303.614H1199.43L1202.03 304.916L1203.34 310.124H1205.94H1207.25L1209.86 308.822H1211.16H1213.77L1216.37 310.124H1217.68H1222.89L1226.8 307.52L1230.71 308.822H1234.62H1235.92H1237.23L1239.83 306.218L1243.75 303.614L1242.44 301.01L1245.05 298.406L1246.35 297.104L1248.96 295.802H1250.26H1251.57H1252.87V294.5L1258.08 291.896H1259.39L1261.99 290.594L1264.6 287.99L1265.9 286.688L1268.51 285.386H1271.12L1272.42 286.688L1276.33 285.386L1280.24 284.084H1282.85L1284.15 285.386H1286.76H1290.67L1291.97 291.896L1293.28 299.708L1298.49 298.406H1303.7L1308.92 299.708L1312.83 301.01H1314.13L1315.43 299.708H1316.74L1318.04 298.406V295.802V294.5H1319.35L1321.95 291.896L1334.99 277.574L1336.29 278.876L1338.9 280.178L1341.5 278.876H1344.11V280.178L1345.41 281.48L1346.72 277.574V272.366L1349.32 264.554L1351.93 256.742H1350.63H1349.32V255.44L1348.02 254.138H1349.32V252.836L1351.93 255.44L1358.45 251.534L1364.97 247.628L1363.66 246.326V245.024V241.118L1359.75 239.816L1355.84 238.514V235.91L1351.93 237.212L1348.02 235.91L1341.5 232.004L1333.68 228.098L1332.38 232.004L1327.17 233.306L1324.56 230.702L1323.26 229.4L1321.95 233.306V234.608H1320.65H1319.35V235.91V237.212L1318.04 235.91L1319.35 234.608H1318.04H1316.74H1314.13V235.91L1315.43 238.514L1312.83 239.816L1311.52 241.118L1312.83 238.514L1314.13 237.212V235.91L1312.83 233.306H1314.13L1321.95 229.4L1320.65 228.098V226.796H1323.26H1325.86L1331.08 222.89L1333.68 215.078L1332.38 207.266L1329.77 199.454H1325.86L1320.65 198.152L1319.35 194.246L1320.65 191.642H1319.35L1318.04 190.34L1320.65 189.038L1321.95 190.34V187.736V185.132L1324.56 189.038L1325.86 192.944H1328.47L1329.77 191.642H1331.08L1333.68 196.85L1334.99 195.548L1336.29 194.246L1338.9 187.736L1341.5 183.83L1344.11 182.528L1348.02 181.226L1351.93 183.83L1354.54 185.132L1359.75 183.83L1363.66 181.226L1364.97 179.924L1366.27 178.622L1370.18 179.924L1374.09 178.622V177.32V176.018L1372.79 174.716V173.414L1375.39 176.018L1376.7 177.32L1378 174.716L1375.39 172.112H1376.7L1378 170.81V169.508H1375.39L1372.79 170.81L1371.48 169.508L1370.18 168.206V169.508H1368.88L1370.18 166.904V161.696L1368.88 160.394L1367.57 159.092L1364.97 157.79H1363.66H1362.36H1359.75H1358.45L1361.06 156.488L1363.66 155.186L1366.27 152.973L1367.57 150.108V149.197L1364.97 149.587L1362.36 148.676L1364.97 147.765L1368.88 145.421L1366.27 143.728L1364.97 142.426V138.13V135.005L1363.66 135.395L1362.36 136.437L1361.06 136.697L1359.75 136.828L1355.84 137.869L1353.23 138.781L1346.72 138.911H1342.81L1340.2 142.166L1338.9 145.421L1337.59 146.463V146.332V146.723L1338.9 147.765V148.806L1336.29 148.025L1334.99 146.723L1333.68 147.765Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Чукотский АО"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M1132.95 677.289H1131.65H1129.04L1127.74 675.987H1125.13L1121.22 672.081L1119.92 670.779H1117.31L1114.7 672.081L1112.1 670.779H1109.49L1108.19 673.383L1106.88 674.685H1105.58L1101.67 677.289H1100.37L1099.06 678.591L1097.76 682.497L1096.46 685.101V687.705V690.309L1097.76 691.611L1100.37 694.215V695.517V696.819L1101.67 699.423L1102.97 700.725L1104.28 702.027L1106.88 703.329L1109.49 702.027H1110.79L1118.61 698.121H1119.92H1121.22L1122.52 695.517V692.913L1125.13 691.611L1127.74 689.007H1129.04H1130.34L1132.95 683.799L1136.86 681.195H1139.47H1142.08L1145.99 678.591L1144.68 675.987L1143.38 673.383L1140.77 674.685H1139.47H1136.86H1135.56L1132.95 677.289Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Еврейская АО"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M736.7 640.955H734.093L727.576 643.559L723.666 642.257L722.362 643.559H721.059H719.755V642.257H718.452L717.149 643.559H714.542H713.238L711.935 646.163L710.631 650.069L708.024 651.371L705.418 652.673L698.9 661.787L689.776 666.995L680.652 665.693L672.831 663.089L671.528 660.485L668.921 659.183L665.011 660.485L661.1 661.787V665.693V668.297H655.886L650.673 666.995V672.203V676.109L651.976 677.411H653.279V680.015V682.619L655.886 683.921V686.525H653.279L649.369 689.129L650.673 690.431H651.976V691.733L653.279 694.337L658.493 693.035H663.707V690.431L665.011 687.827L671.528 689.129L674.135 687.827L676.742 686.525H679.349H681.955V685.223L683.259 683.921H684.562V685.223H685.866V686.525H687.169L689.776 685.223V687.827L691.08 690.431H696.293L702.811 691.733L704.114 695.639L705.418 700.847L710.631 702.149L715.845 703.451H717.149L718.452 702.149L724.969 704.753H726.273H727.576L731.487 706.055L732.79 707.357L734.093 708.659L743.218 703.451L744.521 699.545L745.825 695.639H744.521L743.218 693.035V691.733V690.431V689.129L741.914 687.827L744.521 681.317L748.431 676.109H749.735L751.038 674.807L753.645 672.203L754.949 669.599V668.297V666.995L753.645 665.693V664.391V663.089L754.949 661.787V657.881V655.277H756.252V652.673L754.949 651.371H752.342H749.735L743.218 646.163L736.7 639.653V640.955Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Тульская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M1291.97 686.404L1289.37 687.706H1288.06H1286.76V689.008V690.31L1285.46 695.518L1284.15 700.726L1285.46 702.028H1286.76V696.82L1288.06 691.612L1290.67 689.008L1291.97 687.706V686.404ZM1299.79 695.518V692.914L1298.49 694.216L1297.19 695.518H1299.79ZM1308.92 660.364L1307.61 657.76H1306.31L1305.01 661.666L1303.7 664.27H1301.1H1298.49V665.572L1299.79 666.874L1298.49 669.478L1297.19 672.082V674.686L1295.88 677.29V678.592V679.894L1294.58 682.498L1295.88 683.8L1297.19 677.29L1298.49 675.988L1299.79 674.686V673.384V672.082L1302.4 669.478L1303.7 665.572L1306.31 662.968L1308.92 660.364ZM1318.04 638.23L1316.74 639.532L1314.13 646.042V647.344L1312.83 648.646L1315.43 649.948L1318.04 640.834V638.23ZM1328.47 618.7L1327.17 614.794V618.7L1325.86 621.304V622.606L1328.47 618.7ZM1329.77 600.471V603.075L1331.08 601.773V600.471H1329.77ZM1331.08 580.941L1329.77 578.337L1331.08 579.639V580.941ZM1329.77 565.317L1331.08 567.921V569.223L1332.38 567.921L1331.08 564.015L1329.77 565.317ZM1334.99 540.579V537.975H1333.68L1332.38 540.579H1334.99ZM1331.08 548.391L1328.47 553.599L1329.77 554.901L1332.38 552.297L1333.68 548.391V544.485L1332.38 541.881L1331.08 540.579L1329.77 541.881L1331.08 544.485V548.391ZM1222.89 613.492L1216.37 605.679L1211.16 599.169L1207.25 593.961V595.263H1205.94V593.961V592.659L1203.34 591.357L1200.73 588.753L1199.43 582.243L1196.82 574.431V573.129V574.431H1195.52L1192.91 571.827L1191.61 569.223H1192.91L1194.21 570.525V571.827H1195.52L1190.3 565.317L1186.39 560.109V558.807V557.505L1182.48 554.901L1181.18 553.599V554.901V556.203H1179.88L1178.57 557.505L1181.18 558.807L1185.09 561.411V562.713V564.015V562.713H1186.39V565.317H1185.09V566.619L1186.39 567.921L1185.09 571.827L1183.79 570.525H1182.48L1179.88 571.827V574.431L1181.18 577.035L1182.48 578.337L1185.09 587.451L1187.7 596.565L1192.91 600.471L1199.43 605.679L1200.73 609.585V614.794L1203.34 617.398L1204.64 620.002L1212.46 643.438V644.74L1217.68 648.646L1220.28 653.854L1221.59 657.76V662.968L1224.19 665.572L1225.5 668.176L1228.1 678.592L1233.32 686.404L1234.62 685.102V682.498L1233.32 675.988L1234.62 670.78L1235.92 672.082L1239.83 670.78L1242.44 672.082L1245.05 673.384L1246.35 675.988L1247.66 677.29L1245.05 670.78L1242.44 665.572L1241.14 666.874L1238.53 665.572L1235.92 664.27L1233.32 661.666L1228.1 657.76L1224.19 651.25L1222.89 643.438V636.928L1221.59 634.324V631.72L1222.89 630.418L1224.19 627.814L1230.71 626.512L1237.23 629.116L1239.83 630.418L1241.14 631.72L1238.53 629.116L1234.62 626.512L1232.01 623.908L1230.71 621.304L1222.89 613.492Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Сахалинская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M1080.81 577.035L1083.42 574.431L1084.72 570.525H1083.42H1082.12L1080.81 569.223L1078.21 567.921L1076.9 569.223L1074.3 570.525H1072.99L1071.69 569.223L1067.78 571.827L1062.57 570.525L1059.96 573.129H1056.05L1054.75 574.431V575.733L1052.14 577.035L1049.53 579.639V580.941L1048.23 582.243L1044.32 580.941L1040.41 579.639V580.941H1037.8H1036.5H1035.19L1033.89 583.545V584.847L1031.28 583.545H1029.98L1027.37 584.847L1023.46 587.451H1019.55L1018.25 586.149H1014.34L1010.43 587.451L1003.91 586.149L1001.3 583.545L998.697 580.941L992.179 579.639H984.359L983.055 578.337L980.448 577.035H977.842H975.235L972.628 575.733L970.021 574.431L967.414 573.129L962.2 574.431L956.986 577.035V582.243H958.29L959.593 584.847V586.149L962.2 587.451L966.11 588.753L963.504 590.055H962.2V592.659L964.807 595.263H966.11V593.961L968.717 592.659L972.628 591.357L975.235 595.263L976.538 599.169H977.842L980.448 597.867L983.055 604.377L980.448 610.887L981.752 612.189H983.055L986.966 614.793L985.662 616.095L984.359 617.397V618.699V620.001V621.303L983.055 623.907L986.966 627.813L989.573 631.719H990.876H992.179H996.09L998.697 630.417L1001.3 629.115H1002.61L1003.91 627.813L1006.52 629.115L1009.12 630.417L1010.43 629.115L1014.34 631.719L1018.25 633.021V631.719H1026.07L1027.37 633.021V634.323H1028.68L1029.98 635.625H1031.28V636.927V638.229H1032.59L1035.19 640.833L1036.5 642.135L1037.8 647.343L1044.32 655.155H1045.62V656.457L1046.92 657.759V660.363L1049.53 662.967L1052.14 666.873L1053.44 668.175L1054.75 672.081H1056.05L1057.35 673.383V675.987L1061.26 682.497L1066.48 681.195L1071.69 679.893L1072.99 681.195H1074.3H1075.6V682.497H1076.9L1078.21 681.195L1079.51 682.497V681.195H1080.81V679.893L1086.03 683.799L1095.15 685.101H1096.46L1097.76 682.497L1099.06 678.591L1100.37 677.289V673.383L1099.06 669.477V665.571V660.363L1097.76 659.061H1095.15V657.759L1093.85 656.457L1092.55 657.759H1091.24V656.457V655.155H1089.94L1088.63 656.457V652.551V648.645L1089.94 644.739L1091.24 642.135V640.833L1089.94 638.229L1093.85 635.625L1097.76 633.021L1099.06 631.719L1097.76 630.417L1099.06 627.813L1100.37 626.511L1102.97 625.209L1105.58 623.907V618.699L1104.28 616.095L1110.79 614.793H1116.01L1117.31 613.491V610.887L1116.01 608.283V603.075L1114.7 599.169L1110.79 597.867H1109.49L1108.19 599.169L1104.28 600.471H1101.67L1100.37 603.075L1097.76 605.679L1092.55 608.283L1089.94 609.585L1088.63 610.887H1087.33H1086.03H1084.72H1083.42L1080.81 606.981L1078.21 604.377H1072.99L1069.08 603.075V597.867L1072.99 595.263V591.357V587.451L1074.3 586.149L1075.6 584.847L1078.21 582.243L1080.81 579.639V578.337V577.035Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Амурская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M895.724 590.177H893.118L890.511 587.573V584.969L889.207 586.271H885.297H883.993H881.387L880.083 584.969L878.78 583.667L877.476 586.271L873.566 588.875H870.959H867.049L865.745 587.573H864.442V586.271H863.138L860.531 587.573L859.228 590.177H857.924L856.621 588.875L854.014 591.479L850.104 594.083L851.407 600.593H854.014V601.895V603.197L856.621 604.499L857.924 607.103H856.621H855.318V609.707L852.711 620.123L854.014 630.539L857.924 616.217L860.531 611.009L864.442 609.707L863.138 626.633L860.531 644.861L859.228 646.163L857.924 647.465V646.163V643.559L856.621 642.257L855.318 644.861L854.014 647.465H855.318H857.924V650.069L856.621 652.673H855.318H854.014L851.407 656.579L847.497 661.787L831.855 668.297L830.552 672.203L829.249 676.109L820.124 681.317L814.911 682.619L813.607 683.921L809.697 687.827H804.483L803.18 689.129H801.876V686.525V683.921L800.573 681.317L797.966 680.015V677.411L796.662 674.807L787.538 666.995L786.235 668.297H784.931L783.628 665.693L782.324 661.787L775.807 657.881L770.593 653.975L769.29 650.069V647.465L762.773 652.673L757.559 656.579L756.255 655.277H754.952V657.881V661.787L753.648 663.089V664.391V665.693L754.952 666.995V668.297V669.599L756.255 670.901L758.862 672.203L767.986 677.411L775.807 681.317H777.111L778.414 682.619L783.628 683.921L787.538 685.223V693.035L795.359 702.149L807.09 704.753L817.517 702.149L820.124 700.847H821.428L826.642 702.149L831.855 703.451H834.462H835.766L839.676 706.055L842.283 708.659H844.89L847.497 709.961V704.753L850.104 700.847H852.711L855.318 698.243L852.711 696.941L850.104 694.337L851.407 691.733L854.014 689.129L852.711 685.223L854.014 682.619H859.228L863.138 683.921L865.745 681.317L869.655 678.713H873.566L876.173 680.015L877.476 678.713L880.083 676.109L882.69 673.505L885.297 672.203L887.904 670.901L889.207 666.995L890.511 665.693H891.814L894.421 666.995L895.724 664.391L898.331 663.089L904.849 661.787L911.366 656.579L908.759 648.767L906.152 643.559L908.759 642.257V640.955L916.58 634.445L923.097 627.935L925.704 626.633L928.311 625.331H930.918L933.525 624.029V614.915L927.007 609.707L923.097 607.103V603.197V601.895L921.793 599.291V597.989L920.49 595.385V594.083V591.479L919.187 590.177L917.883 588.875H916.58L919.187 587.573L917.883 584.969L920.49 582.365H921.793L923.097 581.063L916.58 579.761L910.062 587.573L903.545 590.177L898.331 588.875L895.724 590.177Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Республика Бурятия"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M675.441 611.009L672.834 608.405L670.227 609.707H666.317L662.407 605.801L658.496 601.895L657.193 603.197V605.801V608.405V609.707L655.889 613.613L654.586 618.821H658.496L661.103 621.425L659.8 622.727L658.496 624.029L659.8 626.633L658.496 629.237H657.193L654.586 631.841V634.445L655.889 638.351L654.586 640.955L655.889 643.559L657.193 647.465L651.979 651.371L646.765 653.975L644.158 656.579L641.551 657.881V660.485V661.787L640.248 663.089V664.391L641.551 668.297L645.462 669.599L648.069 668.297L650.676 666.995L655.889 668.297H661.103V665.693V661.787L665.014 660.485L668.924 659.183L670.227 655.277L672.834 652.673L674.138 651.371H676.745L679.352 646.163V644.861L681.958 643.559L684.565 640.955V639.653L683.262 638.351L681.958 637.049V635.747L680.655 634.445L683.262 627.935L680.655 620.123L679.352 612.311L675.441 611.009Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Республика Калмыкия"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M648.07 577.035H644.159H640.249H638.946L637.642 578.337L636.339 577.035H635.035L632.428 579.639L631.125 580.941H629.821L628.518 579.639L625.911 580.941H623.304L622.001 583.545V584.847L623.304 588.753V591.357V592.659L624.608 593.961L623.304 596.565L622.001 599.169L623.304 601.773V604.377L622.001 605.679L620.697 608.283L623.304 610.887L624.608 613.491L625.911 614.793H627.214V617.397L628.518 618.699L629.821 620.001L631.125 621.303V625.209L632.428 627.813L635.035 629.115L636.339 630.417L635.035 631.719L633.732 634.323V635.625H635.035V636.927L633.732 638.229L635.035 640.833V644.739L637.642 647.343L638.946 648.645H640.249L641.552 647.343L642.856 648.645L644.159 649.947H645.463L646.766 648.645V651.249V653.854L651.98 651.249L657.194 647.343L655.89 643.437L654.587 640.833L655.89 638.229L654.587 634.323L655.89 631.719L657.194 629.115L659.801 627.813V626.511L658.497 623.907L659.801 622.605L661.104 621.303L658.497 618.699H654.587L655.89 613.491L658.497 609.585L657.194 608.283V605.679V603.075L658.497 601.773L662.408 597.867L666.318 596.565V595.263L665.015 583.545L663.711 582.243L662.408 580.941L663.711 578.337H665.015L663.711 577.035V575.733H658.497L654.587 578.337L651.98 577.035L649.373 575.733L648.07 577.035Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Кемеровская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M556.828 543.183L554.221 541.881L551.614 539.277L550.31 541.881V543.183L549.007 545.787V547.089V548.391L546.4 549.693L545.096 552.297L546.4 554.901V557.505H545.096H541.186L538.579 558.807L535.972 561.411H534.669H533.365V564.015L534.669 565.317L532.062 567.921L530.759 574.431L532.062 577.035L533.365 580.941V582.243L532.062 583.545L530.759 586.149L529.455 590.055H532.062H534.669L535.972 588.753L537.276 587.451L538.579 588.753H539.883H541.186H542.49L539.883 591.357L537.276 592.659L541.186 600.471L546.4 609.585L547.703 606.981L550.31 605.679L551.614 606.981V608.283L554.221 606.981H556.828L560.738 608.283H564.648L565.952 606.981L575.076 603.075L582.897 600.471V601.773L584.2 605.679L585.503 606.981V608.283V609.585H586.807L588.11 610.887L586.807 612.189H585.503L592.021 620.001L595.931 616.095L602.448 612.189V614.793H605.055V612.189H607.662H610.269H612.876H615.483L616.786 610.887L620.697 608.283L622 605.679L623.303 604.377V601.773L622 599.169L623.303 596.565L624.607 593.961L623.303 592.659V591.357V588.753L622 584.847V583.545L623.303 580.941H620.697H618.09H616.786L615.483 579.639L614.179 583.545L611.572 584.847H610.269V583.545L608.966 582.243L610.269 580.941L611.572 579.639V574.431V573.129V570.525H610.269H607.662L606.359 571.827V573.129L605.055 571.827H603.752H597.234L596.092 566.619L586.807 565.317L580.367 554.957L571.218 549.815L572.435 548.468L556.828 543.183Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Новосибирская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M610.269 612.189H608.966H605.056V614.793H603.752L602.449 612.189L595.932 616.095L592.021 620.001L586.807 612.189L588.111 610.887L586.807 609.585H585.504V608.283V606.981L584.2 605.679L582.897 601.772V600.47L575.076 603.074L565.952 606.981L564.649 608.283H560.738L556.828 606.981H554.221L552.918 608.283L551.614 605.679H550.311L549.007 606.981L546.4 609.585L555.525 656.457L560.738 655.155V653.853V652.551H562.042H563.345V651.249L564.649 649.947L567.256 656.457L569.863 661.665L575.076 662.967L577.683 664.269H581.594H582.897V662.967H584.2H585.504H586.807L588.111 661.665L593.325 665.571L595.932 670.779H599.842V669.477V666.873V665.571L597.235 662.967L594.628 660.363L597.235 659.061L599.842 660.363V659.061H601.145L603.752 657.759H608.966H612.876L614.18 656.457L615.483 655.155H616.787H618.09L619.394 652.551L620.697 649.947L622.001 651.249L623.304 652.551H624.607H627.214L628.518 653.853L631.125 651.249L629.821 648.645L631.125 646.041L635.035 644.739V640.833L633.732 638.229L635.035 636.927V635.625L633.732 634.323L635.035 631.719L636.339 629.115H635.035L632.428 627.813L631.125 625.209V621.303L629.821 620.001L628.518 618.699L627.214 617.397V614.793H625.911L623.304 613.491V610.887L620.697 608.283L616.787 610.887L615.483 612.189H612.876L610.269 610.887V612.189Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Алтайский край"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M181.824 575.733L179.087 571.827L175.176 565.317L173.091 564.015L172.178 562.713L169.832 564.015L166.182 566.619L164.358 565.317L162.402 566.619H163.184L162.924 569.223H160.447H158.492L160.447 570.525L159.796 574.431H160.447L160.708 575.733L160.838 577.035L162.663 578.337H164.358L163.967 579.639L163.836 580.941H166.052H168.268L168.92 583.545L168.529 586.149L165.661 587.451L162.402 588.753L160.187 592.659L158.883 595.263H156.798H154.842H154.191L153.669 596.565L152.235 595.263H149.368L146.631 596.565L145.067 597.867L143.111 600.471L145.718 606.981L149.107 612.189L150.02 621.303L152.887 629.115H156.015L159.404 627.813H163.836L167.616 625.209V613.491L168.92 601.773L176.349 595.263L179.608 593.961L179.087 592.659H177.653H177.262L177.783 588.753L178.305 584.847L176.349 578.337L181.824 575.733Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Республика Дагестан"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M156.537 527.559L152.887 526.257L153.669 524.955L153.278 523.653H151.584L150.02 524.955L149.759 523.653L149.889 522.351H148.586L147.673 521.049L145.458 518.445L142.851 517.143L142.199 519.747L141.547 521.049L139.201 519.747L137.246 518.445L135.551 521.049L134.509 524.955L135.682 528.861L134.9 531.465L135.942 532.767L133.987 535.371L131.902 536.673L131.38 535.371H130.729L130.859 540.579L132.944 543.183L134.639 547.089H136.464L138.158 548.391L137.637 549.693H137.506H134.639L132.423 550.995L132.944 552.297H134.378L133.335 553.599L131.771 556.203H134.769L138.158 557.505L138.81 558.807L138.549 560.109L142.199 562.713H145.066L147.543 565.317L148.977 566.619H149.629L148.586 567.921H147.282L150.541 570.525L151.062 574.431L153.93 573.129L155.885 571.827L156.406 573.129L157.449 574.431H158.492H159.795L160.447 570.525L158.492 569.223H160.447H162.924L163.184 566.619H162.402L164.358 565.317L166.182 566.619L169.832 564.015L172.178 562.713L171.135 556.203L168.138 549.693L166.313 547.089L165.531 544.485L166.052 541.881L166.443 537.975L164.879 535.371L162.924 532.767L161.881 530.163L160.708 527.559H156.537Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Ставропольский край"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M138.811 558.807L138.159 557.505L134.77 556.203H131.772H129.556H128.123L123.039 560.109L126.558 565.317L128.383 571.827H129.556L130.729 573.129L133.727 571.827L136.595 570.525L137.638 571.827L138.42 573.129L139.854 571.827H141.157L142.2 573.129H143.764L145.719 571.827L147.283 567.921H148.587L149.629 566.619H148.978L147.544 565.317L145.067 562.713H142.2L138.55 560.109L138.811 558.807Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Кабардино-Балкарская Республика"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M132.944 543.183L130.858 540.579H128.773L128.903 541.881L124.211 544.485L122.125 541.881L120.04 537.975L115.608 540.579L111.307 543.183L115.869 552.297L123.038 560.109L128.121 556.203H129.555H131.771L133.335 553.599L134.378 552.297H132.944L132.423 550.995L134.638 549.693H137.506H137.636L138.158 548.391L136.463 547.089H134.638L132.944 543.183H132.944Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Карачаево-Черкесская Республика"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M191.078 466.364H190.035L189.122 467.666L183.518 468.968L178.173 467.666L175.176 465.062L171.005 468.968L165.53 467.666L164.618 468.968V471.572H165.66L166.442 472.874H164.487H160.838L160.447 474.176L160.838 475.478L159.795 478.082L158.882 479.384L156.536 481.988L153.147 483.29L148.976 480.686L144.936 476.78H143.502H142.198H139.852L137.506 475.478L134.247 478.082L130.728 480.686L132.944 481.988L134.117 483.29L137.897 484.592L140.764 485.894L140.504 487.196H139.722L138.679 489.8L137.897 488.498H136.593L134.247 487.196H132.162L131.901 488.498L132.422 489.8L130.728 491.102L130.076 492.404L134.117 493.706L139.982 496.31L141.547 497.612L142.068 500.216L140.895 501.518H139.982L140.243 502.82L140.764 504.122L140.243 505.424L139.591 506.726L142.589 511.934H144.153H144.805L144.153 513.236H143.371L143.502 515.84L142.85 517.142L145.457 518.444L147.673 521.048L152.365 519.746L155.884 518.444L161.489 522.351L165.53 531.465L167.876 532.767L169.831 531.465L170.483 532.767H171.005L172.438 531.465L173.481 528.861H176.87H180.129L180.389 527.559H180.65L184.3 523.652L186.125 519.746H182.214L179.998 518.444L180.78 517.142L179.998 515.84L179.086 514.538H177.913H177L177.652 513.236V511.934H176.609H175.436L175.697 510.632L176.74 504.122L174.785 500.216L173.481 497.612L174.133 496.31H175.436L177 495.008L178.695 493.706L182.996 495.008L187.689 492.404L187.428 488.498L186.776 485.894L185.994 484.592H185.473L189.122 480.686L192.642 478.082L191.338 471.572L191.078 466.364Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Ростовская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M324.813 423.399V422.097L322.206 420.795L320.902 419.493H319.599L318.296 420.795L316.992 419.493L315.689 418.191H311.778L310.475 415.587L309.171 414.285L307.868 412.983L303.958 410.379H300.047H298.744L297.44 411.681L296.137 410.379H294.833L293.53 412.983L294.833 415.587H293.53L292.227 418.191L293.53 419.493L292.227 422.097H296.137L297.44 423.399L303.958 424.701L305.261 428.607V429.909L306.565 431.211V433.815L307.868 437.721H309.171H310.475L313.082 436.419H315.689H316.992V435.117H319.599H320.902H322.206L326.116 437.721L328.723 436.419L330.027 435.117L331.33 433.815L330.027 432.513V431.211V429.909V427.305H328.723L327.42 426.003L328.723 423.399V422.097H326.116L324.813 423.399Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Республика Марий Эл"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M297.44 423.398L296.137 422.096H292.226L290.923 423.398L288.316 424.7V428.606L289.62 431.21H288.316H285.709L283.102 432.512V433.814H281.799V435.116H283.102L281.799 440.324L284.406 444.23L288.316 446.834L289.62 445.532H290.923L292.226 446.834H297.44L298.744 442.928L297.44 441.626V440.324L303.958 439.022V437.72H305.261H307.868L306.564 433.814V431.21L305.261 429.908V428.606L303.958 424.7L297.44 423.398Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Чувашская Республика"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M303.958 388.244L301.351 390.848H296.137L290.923 388.244V389.546H289.62L287.013 390.848L285.71 393.452L283.103 394.754L280.496 393.452L277.889 392.15L275.282 394.754L273.978 396.056L272.675 394.754H271.372V397.358L270.068 398.66V399.962H271.372H268.765H267.461H263.551L259.64 401.264L255.73 403.868L250.516 405.17V406.472V407.774H249.213V409.076H250.516L253.123 410.378V412.982L251.82 414.284L254.427 416.888L255.73 418.19H258.337L260.944 419.492L263.551 428.606L266.158 433.814L268.765 432.512L271.372 431.21V432.512H272.675L275.282 431.21L279.192 429.908L280.496 431.21L279.192 432.512L280.496 433.814H281.799H283.103V432.512L285.71 431.21H288.316H289.62L288.316 428.606V424.7L290.923 423.398L292.227 422.096L293.53 419.492L292.227 418.19L293.53 415.586H294.834L293.53 412.982L294.834 410.378H296.137L297.441 411.68L298.744 410.378L300.047 409.076L303.958 410.378L307.868 412.982L309.172 411.68L310.475 410.378L311.779 407.774L313.082 406.472L318.296 409.076L320.903 407.774L323.51 406.472L324.813 405.17L320.903 399.962L316.992 394.754L311.779 393.452H310.475H309.172V390.848L305.261 386.942L303.958 388.244Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Нижегородская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M221.841 347.883L220.537 349.185H219.234L216.496 350.487L212.847 351.789L210.631 356.997L205.678 362.205L207.633 363.507H209.067L210.24 366.111L211.543 368.715L215.584 370.017L216.887 376.527L215.584 377.829L214.541 380.433L217.278 384.339H219.234V385.641V388.245V389.547L220.537 390.849H219.234L217.278 393.453L217.409 396.057H219.234L221.84 394.755L223.144 393.453L224.447 394.755H225.751L228.358 393.453H232.268H233.572H234.875H236.178V392.151L238.785 393.453H241.392L243.999 385.641L241.392 383.037L240.089 381.735L238.785 379.131L237.482 377.829L240.089 370.017L243.999 363.507L245.303 362.205L243.999 359.601L242.696 356.997H241.392H238.785L236.178 355.695L234.875 356.997H233.572L232.268 355.695L228.358 354.393L224.447 353.091L223.144 350.487L221.84 347.883H221.841ZM228.358 362.205L232.268 363.507L234.875 368.715L232.268 372.621L228.358 375.225L223.144 372.621L221.841 368.715L223.144 363.507L228.358 362.205Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Московская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M211.543 368.715L210.24 366.111L209.066 363.507H207.633L205.677 362.205L195.641 364.809L194.337 363.507L193.164 362.205L191.991 363.507H189.775L187.82 359.601L185.083 358.299L183.91 359.601L182.997 360.903H180.912L178.696 362.205L179.478 368.715L180.782 373.923L178.696 376.527L177.393 377.829L180.391 383.037L185.604 384.339L190.818 385.641L191.731 384.339L192.382 383.037L194.598 381.735H197.205L197.726 380.433H198.117L201.115 381.735L204.244 383.037H204.895L205.938 384.339L207.372 383.037L207.763 381.735H209.849H211.152L212.977 380.433L214.541 379.131L215.584 377.829L216.887 375.225L215.584 370.017L211.543 367.413V368.715Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Калужская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M177.654 433.815L179.739 432.513L180 429.909L178.827 427.305L177.654 426.003L169.833 422.097L163.707 419.493L162.273 416.889L161.1 415.587H160.187H159.405H156.407L153.931 412.983L149.238 420.795L150.933 422.097L153.54 424.701L154.191 427.305L155.104 429.909L155.234 431.211L159.536 432.513L163.707 435.117H163.576H163.185L162.273 440.325V444.231L163.967 445.533L165.662 444.231L167.226 449.439L170.354 454.647L171.267 453.345L172.44 452.043L173.743 449.439L175.698 445.533H177.002L178.305 444.231L178.045 441.627V437.721H179.869L181.173 435.117H179.348L177.654 432.513V433.815Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Белгородская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M938.738 555.022L934.827 553.72L932.22 556.324L934.827 558.928L933.524 560.23H932.22V562.834V564.136H930.917V565.438L932.22 574.552H933.524H934.827V578.458V582.364H933.524L932.22 581.062L929.614 583.666L928.31 584.968L925.703 583.666H924.4H921.793H920.489L917.882 584.968V587.572L916.579 588.874H917.882L919.186 590.176L920.489 591.478V594.082L919.186 595.384H920.489L921.793 597.988V599.29L923.096 601.894L921.793 603.196L923.096 607.102L927.007 609.706L933.524 614.914V625.33H930.917L927.007 626.632H925.703L923.096 627.934L916.579 634.444L908.758 640.954L907.455 642.257L906.151 643.559L908.758 648.767L911.365 656.579L904.848 661.787L897.027 663.089L895.724 664.391L893.117 666.995L891.813 665.693H890.51L889.207 668.297L887.903 670.901L885.296 672.203L881.386 673.505L880.082 676.109L877.476 678.713L876.172 680.015L873.565 678.713H869.655L865.744 681.317L863.138 683.921H861.834L859.227 682.619H854.013L852.71 685.223L854.013 689.129V690.431L851.407 691.733L848.8 694.337L852.71 696.941L855.317 699.545L852.71 700.847H850.103L847.496 704.753V709.961L850.103 712.565L855.317 717.773L864.441 719.075L873.565 720.377H874.869L876.172 719.075L877.476 720.377H880.082L882.689 719.075L886.6 716.471L895.724 713.867L904.848 711.263L907.455 706.055L916.579 698.243L923.096 699.545L928.31 702.149H933.524L941.345 700.847L947.862 704.753L956.986 706.055L959.593 702.149L963.503 698.243L967.414 695.639L970.02 693.035V691.733V690.431H968.717V689.129L971.324 678.713L973.931 666.995L977.841 661.787L980.448 656.579L979.145 655.277L977.841 653.975V651.371L976.538 650.069L972.627 651.371L971.324 647.465L972.627 644.861L976.538 640.954V639.652L977.841 638.35L983.055 635.746L989.572 631.84L986.965 627.934L983.055 624.028L984.358 621.424V620.122V618.82V617.518L985.662 616.216L986.965 614.914L983.055 612.31H981.752L980.448 611.008L983.055 604.498L980.448 597.988L977.841 599.29H976.538L975.234 595.384L972.627 591.478L968.717 592.78L966.11 594.082V595.384H964.807L962.2 592.78V590.176H963.503L964.807 588.874L962.2 587.572L959.593 586.27L958.289 584.968V582.364H956.986H955.683L956.986 577.156L953.076 571.948L951.772 566.74H950.469L949.165 568.042L946.558 562.834V560.23V555.022L941.345 556.324L938.738 555.022Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Забайкальский край"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M1191.61 677.289H1187.7L1185.09 675.987V673.383L1186.39 670.779L1185.09 668.175L1182.48 665.571L1181.18 664.269L1177.27 666.873L1173.36 670.779H1172.05H1170.75V672.081L1172.05 673.383L1173.36 674.685V675.987L1174.66 677.289H1177.27H1179.87L1177.27 685.101L1172.05 687.705V690.309V692.913L1166.84 696.819L1160.32 699.423L1159.02 698.121L1157.72 696.819L1156.41 698.121L1155.11 699.423V698.121V696.819L1153.81 695.517L1152.5 696.819L1151.2 695.517H1149.9L1147.29 699.423L1145.99 703.329V705.933L1143.38 708.537V715.047V722.859L1142.07 725.463L1143.38 728.068L1142.07 729.37L1140.77 731.974L1142.07 735.88L1139.47 738.484H1129.04L1125.13 739.786L1123.83 744.994L1121.22 746.296L1119.92 747.598L1121.22 750.202L1122.52 752.806L1126.43 760.618L1127.74 768.43L1129.04 769.732V771.034L1127.74 780.148L1123.83 781.45L1122.52 784.054H1123.83L1125.13 785.356L1126.43 787.96L1127.74 790.564L1129.04 787.96V786.658L1127.74 785.356L1126.43 784.054H1131.65H1132.95V782.752V781.45L1134.25 776.242L1136.86 772.336L1135.56 771.034L1136.86 769.732H1138.16V771.034V773.638L1139.47 772.336L1140.77 771.034L1142.07 769.732V768.43L1143.38 772.336V774.94H1144.68V773.638H1145.99L1147.29 774.94L1148.59 773.638L1151.2 774.94L1152.5 776.242V773.638L1153.81 774.94L1156.41 773.638L1159.02 771.034L1166.84 763.222L1172.05 754.108L1173.36 752.806V750.202H1174.66V748.9V744.994L1175.96 741.088V738.484L1178.57 735.88L1179.87 729.37L1182.48 721.557L1185.09 713.745L1187.7 707.235L1189 700.725L1190.3 692.913V690.309V686.403L1191.61 681.195V677.289Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Приморский край"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M1314.13 375.225H1311.52V376.527V379.131V384.339V389.547V390.849H1312.83V389.547V386.943L1314.13 384.339V383.037V381.735L1315.43 380.433L1316.74 377.829L1314.13 375.225ZM1319.34 293.198L1318.04 294.5V295.802V298.406H1316.74H1315.43L1314.13 299.708L1312.83 301.01L1308.92 299.708L1303.7 298.406H1298.49L1293.28 299.708L1291.97 291.896L1290.67 285.386H1286.76H1284.15L1282.85 284.084H1280.24L1276.33 285.386L1272.42 286.688V285.386H1271.12H1268.51L1265.9 286.688L1264.6 287.99L1261.99 290.594L1259.39 291.896H1258.08L1252.87 293.198V294.5L1251.57 295.802H1250.26H1248.96L1246.35 297.104L1245.05 298.406L1242.44 299.708L1243.74 303.614L1245.05 304.916L1247.66 310.124V312.728V315.332L1250.26 319.238L1254.17 323.144V325.749L1255.48 328.353V329.655L1256.78 332.259L1259.39 334.863L1264.6 337.467L1265.9 341.373L1264.6 342.675L1265.9 343.977H1267.21V346.581V347.883L1268.51 349.185L1269.81 351.789H1271.12L1272.42 350.487V349.185L1273.72 350.487H1276.33V346.581H1272.42L1269.81 341.373V338.769L1268.51 337.467L1267.21 333.561L1271.12 330.957L1272.42 327.051H1276.33H1277.63H1278.94L1276.33 329.655L1275.03 334.863L1277.63 338.769L1280.24 342.675V345.279L1281.54 347.883H1282.85H1284.15L1285.46 351.789V354.393L1286.76 355.695L1288.06 356.997L1286.76 359.601L1284.15 362.205V364.809V366.111L1282.85 367.413L1281.54 370.017V373.923L1282.85 375.225L1281.54 383.037V389.547L1280.24 390.849V392.151L1278.94 397.359V402.567L1280.24 403.869L1281.54 405.171V406.473L1280.24 407.775V411.681V415.587L1278.94 420.795L1277.63 426.003L1276.33 428.607L1275.03 429.909V431.211V433.815L1272.42 435.117L1269.81 436.419L1272.42 437.721L1275.03 441.627V449.439L1273.72 455.949L1276.33 463.761L1280.24 471.573L1298.49 496.311L1321.95 519.747L1325.86 526.257L1331.08 531.465L1334.99 534.069L1336.29 527.559V521.049L1337.59 519.747L1338.9 515.841L1337.59 504.123L1334.99 501.519H1333.68V500.217V498.915L1332.38 496.311H1331.08L1329.77 495.009L1331.08 493.707L1333.68 495.009L1337.59 485.895L1340.2 484.593H1341.5V483.291L1334.99 478.083L1332.38 470.271V463.761L1336.29 457.251H1337.59L1338.9 458.553L1341.5 453.345V449.439L1337.59 446.835L1333.68 444.231L1329.77 435.117L1331.08 426.003V424.701L1329.77 423.399L1331.08 420.795L1332.38 422.097V426.003H1334.99L1336.29 422.097L1329.77 416.889V415.587L1328.47 416.889L1327.17 418.191L1323.26 414.285L1320.65 410.379V406.473L1319.34 402.567H1316.74H1314.13H1312.83L1311.52 403.869L1312.83 405.171L1310.22 406.473L1307.61 405.171L1303.7 393.453V386.943V385.641L1302.4 384.339H1303.7V383.037H1302.4V381.735V380.433V379.131L1301.1 377.829H1299.79L1298.49 371.319L1301.1 366.111L1302.4 364.809L1301.1 363.507H1305.01L1307.61 364.809L1308.92 360.903L1306.31 359.601V358.299L1308.92 353.091L1310.22 347.883L1311.52 349.185L1316.74 356.997V353.091V347.883L1318.04 341.373L1321.95 333.561L1327.17 330.957L1333.68 328.353L1338.9 330.957H1342.81L1341.5 327.051L1338.9 323.144L1340.2 320.54L1341.5 316.634V314.03V311.426V310.124L1342.81 308.822L1341.5 306.218H1340.2L1341.5 304.916H1342.81L1341.5 303.614L1340.2 302.312H1341.5L1342.81 298.406L1341.5 297.104H1340.2L1341.5 295.802L1342.81 294.5V290.594H1341.5V289.292V287.99H1342.81L1344.11 285.386V282.782L1345.41 281.48L1344.11 280.178V278.876H1341.5L1338.9 280.178L1336.29 277.574L1334.99 276.272L1321.95 291.896L1319.34 293.198Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Республика Камчатка"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M1211.16 308.823H1209.86L1207.25 310.125H1205.95H1203.34L1202.04 304.917L1199.43 303.615H1195.52V306.219L1192.91 307.521L1191.61 311.427L1190.3 314.031H1189L1186.39 312.729L1185.09 314.031L1183.79 315.333L1179.88 316.635L1174.66 317.937V319.239V320.541H1173.36H1172.06H1170.75V323.145L1172.06 325.749L1170.75 328.353L1169.45 330.957V334.863L1172.06 336.165L1169.45 340.071V346.581L1172.06 349.185L1174.66 350.487L1173.36 353.091V354.393H1174.66V355.695V356.997H1172.06L1170.75 360.903L1169.45 363.507L1168.15 364.809L1165.54 366.111V367.413L1164.24 370.017L1160.32 368.715L1155.11 366.111L1153.81 368.715L1151.2 371.319H1148.59L1145.99 372.621L1148.59 376.527L1147.29 380.433L1145.99 381.735L1144.68 380.433L1143.38 381.735L1142.08 383.037L1139.47 384.339H1136.86L1135.56 388.245L1134.26 393.453L1135.56 405.171L1138.17 407.775L1142.08 410.379V411.681L1140.77 414.285L1142.08 415.587V418.191L1140.77 420.795V426.003L1147.29 424.701L1152.5 423.399L1160.32 428.607L1164.24 436.419H1162.93V437.721V440.325L1164.24 441.627L1160.32 442.929V449.439H1164.24H1169.45L1174.66 452.043L1178.57 455.949V458.553V459.855L1182.48 458.553H1183.79L1186.39 455.949L1189 453.345H1191.61L1195.52 452.043L1194.21 450.741H1192.91V448.137H1194.21V446.835V442.929L1198.12 441.627L1202.04 440.325H1205.95H1207.25H1205.95V441.627H1207.25H1208.55V439.023L1212.46 436.419L1215.07 437.721L1217.68 439.023L1220.28 437.721H1221.59V439.023H1220.28L1217.68 441.627L1215.07 442.929L1216.37 446.835H1217.68L1220.28 445.533L1222.89 441.627L1224.19 440.325H1226.8L1229.41 439.023V437.721V435.117L1230.71 432.513L1234.62 431.211H1237.23L1238.53 429.909V427.305H1241.14H1242.44L1241.14 426.003H1242.44L1243.75 424.701L1242.44 422.097L1239.84 420.795L1237.23 422.097L1235.93 423.399V424.701L1234.62 426.003H1233.32V424.701V423.399V420.795H1232.01L1230.71 419.493V418.191L1232.01 416.889H1230.71V415.587V414.285V412.983V411.681V409.077L1233.32 403.869L1234.62 397.359L1233.32 396.057V394.755V390.849L1234.62 388.245L1233.32 385.641L1232.01 383.037L1234.62 377.829L1235.93 373.923H1238.53L1239.84 372.621L1245.05 364.809H1248.96L1251.57 366.111L1252.87 362.205V359.601L1255.48 362.205L1256.78 364.809V367.413V370.017L1258.08 371.319L1259.39 372.621V373.923L1260.69 375.225L1261.99 373.923L1263.3 372.621L1264.6 375.225L1265.9 379.131L1268.51 366.111L1271.12 351.789H1269.81L1268.51 349.185L1267.21 347.883V346.581V343.977H1265.9L1264.6 342.675V341.373V337.467L1259.39 334.863L1255.48 332.259V329.655V328.353L1254.17 325.749V323.145L1250.26 319.239L1247.66 315.333V312.729V310.125L1245.05 304.917L1242.44 303.615L1239.84 304.917L1237.23 308.823H1235.93H1234.62H1230.71L1225.5 307.521L1221.59 310.125H1217.68L1215.07 308.823H1213.77H1211.16Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Магаданская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M194.207 426.002V424.7L191.078 423.398L187.429 422.096L187.689 423.398L186.907 424.7V426.002H186.516H184.952L183.258 424.7L181.824 427.304L179.999 429.908L179.738 432.512L177.653 433.814L179.347 435.116H181.172L179.869 437.72H178.044V441.626L178.305 444.23L177.001 445.532H175.698L173.742 449.438L172.439 453.344H171.396L170.354 454.646L171.787 462.459L174.134 463.761L175.176 465.063L178.174 467.667L183.518 468.969L189.123 467.667L190.036 466.365H191.078L193.946 465.063L196.683 462.459L196.292 459.855L196.423 457.25H199.681L202.81 458.553L204.765 457.25H206.459L207.632 459.855L209.066 461.157L212.455 462.459L215.323 463.761L217.147 458.553L216.887 454.646L215.192 453.344L215.453 452.042H214.41H213.498L212.194 449.438L210.761 446.834L208.023 445.532L205.677 444.23L206.068 442.928L206.72 440.324L205.416 439.022L204.374 437.72L200.854 433.814L197.596 431.21L197.987 429.908L196.814 427.304H195.249L194.076 426.002H194.207H194.207Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Воронежская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M208.286 343.976L203.333 342.674L196.424 341.372L191.341 334.862L185.866 328.352L184.041 325.748H181.304L179.61 327.05L176.742 329.654L172.832 333.56H170.355L170.225 336.164L170.486 337.466H170.877L171.007 338.768H169.834L168.53 340.07L167.357 342.674L166.836 346.58L167.357 349.184L167.227 350.486L165.924 351.788L164.359 353.09L165.141 354.392L166.575 355.694L166.966 359.6L165.663 360.902L165.924 363.506L165.402 364.808H165.924H166.836H168.27L169.573 363.506H174.135L178.697 362.204L180.913 360.902H182.999L183.911 359.6L185.084 358.298L187.821 359.6L189.777 363.506H191.993L193.166 362.204L194.339 363.506L195.642 364.808L205.679 362.204L210.632 356.996L212.848 351.788L211.153 350.486L209.198 347.882L208.677 346.58L208.286 343.976Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Смоленская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M279.339 292.699L281.981 291.379L283.303 287.419L281.981 280.82L283.303 274.221V275.541H284.624L285.945 272.902L287.266 270.262V274.221H288.588L289.909 270.262L291.23 267.622V268.942V270.262V271.582L292.552 268.942L293.873 267.622L292.552 271.582L289.909 276.861H291.23L292.552 274.221V275.541L295.194 276.861L297.837 271.582V270.262H296.515V271.582V270.262V268.942L295.194 270.262L296.515 266.303L297.837 262.343L299.158 274.221L292.552 283.46L291.23 287.419L289.909 292.699V294.018L285.945 295.338L280.66 296.658L279.339 295.338L278.018 292.699H279.339Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="р. Онега"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M256.877 280.821L255.555 279.501L252.913 282.141L248.949 283.46L246.307 279.501H242.343L239.7 278.181L238.379 276.861H239.7L241.021 274.222L242.343 271.582L244.985 264.983L248.949 259.704V257.064V255.745V254.425V253.105L250.27 254.425H251.592H255.555H259.519L260.84 253.105L262.162 266.303L258.198 280.821H256.877Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="р. Ладога"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M268.768 344.17L267.447 348.13L264.805 350.769V349.45V348.13V346.81L260.841 348.13L259.52 346.81L260.841 345.49H262.162L260.841 337.571L262.162 329.653V330.972V332.292V333.612V337.571L263.483 338.891H266.126L267.447 337.571V333.612L268.768 329.653L270.09 330.972L268.768 333.612V338.891V344.17Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="р. Рыбинск"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M858.057 616.172L860.699 610.893L864.663 609.573L863.342 626.731L860.699 645.208L859.378 646.528L858.057 647.848V646.528V643.888L856.736 642.568L855.414 645.208L854.093 647.848H855.414H858.057V650.487L856.736 653.127H855.414H854.093L851.45 657.086L847.487 662.365L831.631 668.964L830.31 672.924L828.989 676.883L819.74 682.162L814.455 683.482L813.134 684.802V683.482L803.885 680.843L807.849 679.523L814.455 676.883L813.134 675.563L810.491 674.244V672.924L809.17 671.604V670.284L813.134 674.244L818.419 676.883L834.274 659.726L854.093 630.69L858.057 616.172Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="р. Байкал"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M460.37 415.586L456.46 412.982L452.55 410.378V407.774V406.472L451.246 405.17V403.868L448.639 405.17V406.472L444.729 411.68L442.122 416.888V418.19V419.492L435.605 426.002L429.088 432.512L426.481 433.815L423.874 435.117L419.963 439.023L422.57 445.533L419.963 449.439V453.345V454.647L416.053 458.553L409.536 459.855L408.232 463.761V466.365H404.322L401.715 463.761L399.108 466.365L396.501 470.271H389.984L387.377 471.573V472.875L386.074 476.781L383.467 479.385V480.687V483.291H384.77L386.074 484.593L391.287 487.197L395.198 489.801H396.501L397.805 488.499H399.108H400.412V489.801L406.929 495.009L413.446 498.915L414.75 497.613H416.053L418.66 498.915L419.963 500.217V501.519L421.267 504.123L425.177 501.519L429.088 500.217L431.694 501.519L434.301 504.123H435.605H436.908L438.212 505.425L440.819 508.029L444.729 505.425H451.246L449.943 508.029H451.246H452.55L453.853 506.727H452.55V505.425L453.853 498.915L456.46 493.707L459.067 492.405H462.977V493.707H465.584H468.191L470.798 492.405V489.801V487.197L472.101 484.593V483.291V480.687L470.798 479.385V472.875V467.667L466.888 465.063L462.977 461.157L464.281 457.251L465.584 452.043V449.439L464.281 448.137V444.231V441.627L465.584 436.419L468.191 431.211L465.584 427.304L464.281 424.7L460.37 415.586Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Свердловская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M406.93 399.962L404.323 397.358L401.716 394.754H399.109L396.502 393.452L395.199 392.15L396.502 389.546L393.896 386.942H392.592H391.289L383.468 384.338L380.861 390.848L382.165 394.754L379.558 396.056L384.771 402.566L389.985 405.17L386.075 410.378L379.558 414.284V418.19L382.165 420.794L380.861 422.096L379.558 426.002L376.951 427.304L375.647 429.908L371.737 441.627L366.523 453.345L365.22 454.647L363.916 453.345V454.647L362.613 455.949H361.309L360.006 457.251V463.761L361.309 462.459H362.613L363.916 466.365L365.22 468.969L369.13 470.271H373.04V471.573L374.344 472.875L375.647 474.177H376.951L378.254 478.083V479.385H380.861H383.468L386.075 476.781L387.378 472.875V471.573H389.985L396.502 470.271L399.109 466.365L401.716 463.761L404.323 466.365H408.234V463.761L409.537 459.855L416.054 458.553L419.965 454.647V453.345V449.439L422.571 445.533L419.965 439.023L423.875 435.117L426.482 433.815L429.089 432.512L435.606 426.002L442.123 419.492V418.19V416.888L444.73 411.68L448.641 407.774L435.606 405.17L427.785 398.66H423.875L421.268 399.962H419.965L418.661 398.66L417.358 399.962H414.751V398.66H413.447H409.537L406.93 399.962Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Пермский край"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M64.9469 468.38L68.3712 463.419L65.715 456.792L63.1336 455.346L62.8438 453.611L68.8164 453.91L75.0673 455.171L79.2677 458.687L78.5148 453.579L81.8392 457.415L82.2578 459.17L86.159 462.698L88.036 467.516L86.5186 471.438L85.8305 478.843L88.2778 479.51L90.0834 479.253L90.6245 481.479L93.0212 482.001L96.2043 486.21L92.3412 486.262L90.9368 488.605L85.4932 484.089L84.2407 480.989L81.2507 480.709L75.0926 478.314L70.9231 477.005L65.4874 477.166L64.9469 468.38Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Республика Крым"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M65.4865 477.165L62.1821 474.879L61 470.176L64.946 468.379L65.4865 477.165Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Севастополь"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M139.985 496.311L134.119 493.707L130.078 492.405L130.73 491.103L132.425 489.801L131.903 488.499L132.164 487.197L130.73 485.895H128.905V487.197L128.514 488.499H128.384L127.211 487.197L126.559 485.895L124.734 484.593H123.04L122.258 483.291L121.345 481.989V489.801L121.736 496.311L121.085 495.009H120.433L120.303 492.405V491.103L118.608 492.405L116.783 493.707V492.405H117.305L116.392 491.103L113.916 492.405L111.569 493.707H110.266H108.702L107.007 495.009H104.922L101.403 492.405L99.1867 488.499L98.7956 491.103L99.0563 492.405L96.8405 491.103H95.0156L96.5798 493.707L97.8832 498.915L96.9708 501.519L97.2315 504.123L98.1439 505.425H99.0563H99.708L99.8384 509.331L99.708 511.935L102.445 519.747L103.227 528.861L103.488 539.277H107.789L109.484 541.881L110.527 543.183H111.439L115.61 540.579L120.042 539.277L122.127 541.881L124.213 544.485L128.905 541.881L128.775 540.579H130.861L130.73 535.371H131.382L131.903 536.673L133.989 535.371L135.944 532.767L134.901 531.465L135.683 528.861L134.51 524.955L135.553 521.049L137.247 518.445L139.203 519.747L141.549 521.049L142.201 519.747L142.852 517.143L143.504 515.841L143.374 513.237H144.156L144.807 511.935H144.156H142.592L139.594 506.727L140.245 505.425L140.767 504.123L140.245 502.821L139.985 501.519H140.897L142.07 500.217L141.549 497.613L139.985 496.311ZM121.867 513.237L122.518 517.143L126.168 521.049L127.472 527.559L125.907 528.861L125.125 530.163L124.474 531.465L123.822 532.767H123.04H121.736L122.258 530.163L122.649 527.559L119.781 528.861L118.087 531.465L117.044 532.767H115.871L114.176 535.371L111.569 537.975L108.963 535.371L107.398 531.465L107.92 530.163L109.223 528.861H110.266L110.787 530.163L110.527 531.465H112.221L113.525 530.163L113.134 528.861L112.873 526.257L115.871 523.653H118.869L119.26 519.747L118.347 515.841H116.914L115.74 518.445H114.958L112.873 515.841L110.527 513.237L109.875 511.935L109.484 510.633L110.527 509.331L111.83 510.633L113.916 513.237L118.347 514.539L121.867 513.237Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Краснодарский край"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M333.937 514.539L335.24 510.633H333.937L332.633 509.331V508.029L331.33 506.727L330.026 505.425V501.519V497.613L331.33 495.009V493.707L328.723 491.103V488.499L330.026 487.197V485.895H328.723L326.116 481.989L322.206 484.593L319.599 488.499L316.992 489.801L314.385 491.103L311.778 495.009L309.171 497.613H306.564L305.261 498.915L300.047 501.519L296.137 505.425L285.709 506.727V508.029L288.316 511.935V514.539L292.226 517.143H298.743V519.747V523.653L302.654 524.955L305.261 527.559L306.564 530.163V532.767L307.868 537.975L309.171 543.183L307.868 544.485V547.089L310.475 545.787L311.778 543.183L313.081 544.485H314.385V545.787V548.391L316.992 550.995L318.295 553.599H320.902H322.206L323.509 552.297L324.813 550.995L330.026 552.297L335.24 554.901L336.544 557.505V558.807H339.15L341.757 557.505L343.061 558.807L344.364 560.109H345.668H346.971L348.275 564.015L346.971 566.619L353.488 575.733H357.399L360.006 573.129L361.309 575.733V577.035L370.433 580.941L378.254 574.431L374.344 567.921L370.433 562.713H371.737V561.411L370.433 558.807V556.203H369.13L371.737 552.297L374.344 550.995L370.433 547.089L366.523 545.787L365.219 547.089H363.916V545.787V544.485L362.613 543.183L361.309 545.787H358.702L354.792 550.995L349.578 549.693V548.391L346.971 547.089H344.364H341.757L340.454 545.787L339.15 543.183H337.847L340.454 536.673L339.15 535.371L337.847 534.069L340.454 531.465L343.061 527.559L339.15 524.955L336.544 528.861H335.24L333.937 523.653L332.633 519.747L333.937 521.049H335.24V518.445L333.937 517.143V513.237V514.539Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Оренбургская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M374.345 472.875L373.041 471.573V470.271H369.131L365.221 468.969L361.31 470.271L357.4 471.573H354.793H352.186L346.972 474.177L341.758 475.479L340.455 474.177V475.479L339.152 476.781L340.455 478.083V480.687L339.152 483.291L337.848 484.593H335.241V485.895L333.938 488.499L331.331 493.707L330.027 497.613V501.519V505.425L331.331 506.727L332.634 508.029V509.331L333.938 510.633H335.241L333.938 514.539V517.143L335.241 519.747V521.049H333.938H332.634L333.938 524.955L335.241 528.861H336.545L339.152 526.257L343.062 527.559L340.455 531.465L337.848 534.069L339.152 535.371L340.455 536.673L337.848 543.183H339.152L340.455 545.787L341.758 547.089H344.365H346.972L349.579 548.391L350.883 549.693L356.096 550.995L358.703 545.787H361.31L362.614 543.183V541.881H363.917V540.579V539.277L366.524 536.673L367.827 535.371L371.738 528.861L375.648 522.351H376.952H378.255L380.862 521.049H382.165L384.772 522.351V523.653L386.076 521.049L389.986 517.143L392.593 513.237L386.076 511.935L378.255 513.237L376.952 511.935V510.633H374.345H371.738V509.331L369.131 500.217V498.915H370.434V497.613L371.738 496.311L375.648 495.009L379.558 497.613L378.255 500.217V502.821L380.862 501.519L382.165 502.821V504.123V505.425H383.469L384.772 504.123L386.076 501.519L388.683 502.821H389.986L391.29 501.519H392.593H393.896H396.503L395.2 500.217L393.896 498.915L396.503 493.707V489.801H395.2L391.29 487.197L386.076 484.593L384.772 483.291H383.469V480.687V479.385H380.862H378.255V478.083L376.952 474.177H375.648L374.345 472.875Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Республика Башкортостан"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M375.649 429.909L373.042 428.607L371.738 427.305V426.003L370.435 424.701H369.131H367.828L365.221 423.399L362.614 420.795L357.4 424.701L354.793 431.211L352.187 432.513H349.58H348.276L345.669 431.211L343.062 435.117L341.759 440.325L340.455 441.627H337.849L336.545 446.835L335.242 450.741L336.545 452.043H335.242L332.635 453.345L333.938 454.647H335.242L337.849 457.251H340.455H341.759V458.553H343.062L344.366 459.855L346.973 458.553V457.251L345.669 455.949L348.276 454.647L350.883 455.949H349.58V458.553V461.157L350.883 459.855L353.49 461.157L349.58 463.761H345.669L346.973 466.365H348.276L350.883 468.969L352.187 471.573L354.793 472.875L357.4 471.573L361.311 470.271L365.221 468.969L363.918 466.365L362.614 462.459H361.311L360.007 463.761V457.251L361.311 455.949H362.614L363.918 454.647V453.345L365.221 454.647L366.524 453.345L371.738 441.627L375.649 429.909Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Удмуртская Республика"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M461.676 243.722H455.158L449.945 248.93L451.248 254.138L457.765 255.44H459.069L460.372 254.138H461.676L462.979 252.836V254.138L461.676 255.44H462.979L464.283 254.138V248.93L461.676 243.722ZM521.634 273.668L524.241 274.97V276.272V277.574V278.876L528.152 281.48L530.759 277.574L529.455 273.668L528.152 269.762V267.158L526.848 264.554H524.241V267.158H522.938H521.634V273.668ZM485.138 272.366L481.227 271.064L476.014 269.762L469.496 271.064L470.8 272.366V274.97H468.193L466.889 273.668V272.366L468.193 271.064L464.283 269.762H460.372H459.069L457.765 268.46L449.945 269.762L442.124 268.46L440.82 267.158V265.856V267.158V268.46H439.517V269.762V272.366L438.214 269.762L435.607 268.46L434.303 267.158L429.089 271.064L423.876 276.272L417.358 273.668L412.145 269.762L413.448 265.856L414.751 263.252L413.448 260.648L412.145 258.044L417.358 255.44L421.269 254.138L427.786 258.044L429.089 256.742L430.393 255.44V254.138H431.696V250.232V246.326L427.786 241.118L422.572 237.212L421.269 233.306L419.965 232.004V235.91V242.42L412.145 248.93L405.627 254.138V258.044V261.95L400.414 265.856L397.807 268.46V269.762V272.366L403.02 280.178L406.931 287.99L408.234 290.594L409.538 291.896V293.198H412.145V291.896L414.751 290.594H417.358L419.965 291.896L422.572 294.5H431.696L442.124 295.802L444.731 294.5L446.034 293.198L447.338 294.5V295.802L449.945 294.5H452.552L459.069 299.708L466.889 306.218L505.993 329.654L507.296 330.956L508.6 332.258L516.421 330.956L525.545 328.352V327.05L526.848 324.446L528.152 325.748H529.455L532.062 324.446L534.669 323.144L537.276 321.842L539.883 320.54L541.186 319.238H542.49H543.793L546.4 320.54L549.007 316.634V314.03L547.703 312.728L545.097 308.822L546.4 307.52L547.703 306.218L550.31 303.614V301.01L546.4 294.5L541.186 289.292L534.669 284.084L533.365 282.782L532.062 281.48L530.759 282.782L529.455 284.084L528.152 282.782H526.848L525.545 284.084V291.896L524.241 299.708L522.938 298.406H521.634L519.028 299.708L516.421 298.406H515.117L513.814 301.01L509.903 302.312L508.6 299.708L509.903 297.104L512.51 295.802H513.814V293.198L512.51 290.594H513.814L504.69 289.292L496.869 290.594L494.262 286.688L486.441 284.084L481.227 285.386V286.688L479.924 287.99L478.621 285.386H476.014L474.71 286.688H473.407L474.71 285.386V284.084V282.782L472.103 281.48H469.496L470.8 280.178V278.876H472.103H473.407L476.014 280.178L477.317 277.574L478.621 274.97H479.924L481.227 273.668V272.366H479.924H482.531H485.138Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Ненецкий АО"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M502.083 229.4V226.796H499.476V229.4L500.779 230.702L499.476 235.91L503.386 232.004V230.702L502.083 229.4ZM532.062 200.756L528.152 199.454H524.241V200.756V202.058H522.938V203.36V204.662L520.331 203.36H516.421V204.662V205.964L517.724 207.266H516.421V208.568H517.724H516.421L515.117 209.87L511.207 212.474L508.6 215.078L507.296 213.776V212.474L505.993 211.172L503.386 212.474L500.779 215.078L499.476 218.984V222.89H500.779H502.083V224.192L503.386 222.89L504.69 221.588V222.89L503.386 225.494L505.993 228.098L507.296 226.796L505.993 228.098L504.69 233.306L505.993 234.608L507.296 237.212H505.993H504.69L503.386 235.91V237.212L502.083 238.514H500.779V241.118L502.083 243.722H504.69L505.993 246.326V248.93H507.296H508.6V247.628H509.903L511.207 250.232L512.51 252.836L513.814 254.138V252.836V251.534L515.117 250.232V252.836L517.724 256.742V255.44V254.138L519.027 255.44H521.634L520.331 251.534L519.027 247.628V241.118L520.331 234.608L521.634 229.4L524.241 224.192H525.545L526.848 221.588L528.152 218.984L529.455 216.38L530.759 217.682L533.365 216.38V215.078L532.062 213.776H533.365L535.972 215.078L537.276 213.776V212.474H535.972L534.669 211.172L538.579 212.474V209.87H539.883H541.186L539.883 205.964L537.276 203.36V202.058L535.972 200.756H533.365H532.062ZM562.041 172.112L559.434 174.716V176.018H560.738V177.32L562.041 178.622H559.434L556.828 179.924H558.131L559.434 181.226V182.528L560.738 183.83L558.131 182.528L554.221 181.226L552.917 182.528L554.221 185.132H552.917H551.614H549.007L550.31 186.434V187.736H549.007L547.703 186.434V189.038L549.007 191.642L547.703 190.34L545.097 187.736L542.49 189.038V191.642V190.34L539.883 189.038L537.276 190.34L535.972 191.642L534.669 190.34L537.276 194.246L542.49 195.548V196.85H538.579H534.669L532.062 198.152V199.454H533.365H535.972L538.579 202.058L539.883 204.662L541.186 203.36V207.266L543.793 208.568L545.097 207.266V208.568L546.4 207.266L549.007 205.964L547.703 203.36V202.058V200.756L549.007 204.662H551.614L552.917 203.36L551.614 200.756L550.31 199.454V198.152L552.917 199.454L554.221 202.058V203.36L555.524 200.756L556.828 198.152L555.524 196.85V195.548H556.828V194.246H558.131V195.548V198.152V200.756L559.434 199.454L560.738 198.152L563.345 196.85L565.952 192.944L564.648 191.642V190.34H565.952V192.944L568.559 194.246L569.862 192.944L571.166 190.34V189.038V190.34L572.469 194.246L573.772 192.944V190.34H575.076V191.642V192.944L577.683 191.642V190.34L578.986 191.642L580.29 190.34V189.038L578.986 187.736H580.29H581.593L582.897 186.434L581.593 187.736L584.2 186.434L588.11 185.132V186.434L589.414 185.132H590.717L594.628 183.83H598.538H601.145H602.448H616.786L629.821 182.528L633.731 179.924L636.338 176.018L638.945 173.414L637.641 169.508L631.124 166.904L623.304 169.508V170.81L622 172.112H620.697V170.81H603.752L599.841 166.904L597.235 165.602L595.931 168.206L592.021 169.508H593.324V168.206H590.717L588.11 169.508L585.503 168.206H581.593L578.986 169.508H577.683H576.379V170.81H572.469V173.414L571.166 174.716L569.862 173.414L568.559 172.112L567.255 173.414L565.952 174.716L563.345 176.018V174.716L562.041 172.112ZM627.214 76.9353V73.6803L624.607 73.0293L623.304 75.7635V79.6695L627.214 76.9353ZM612.876 65.3475L611.572 68.6025L615.483 69.2535L616.786 65.3475H612.876ZM627.214 65.8683L631.124 68.0817L632.428 66.7797L629.821 63.9153L627.214 65.8683ZM620.697 71.7273V72.7689L623.304 71.0763H622L620.697 71.7273ZM619.393 61.3113V60.2697L618.09 60.1395V61.5717V63.2643L619.393 61.3113V61.3113ZM620.697 62.7435L619.393 63.7851V64.8267V66.5193L622 63.9153V63.1341L620.697 62.7435ZM628.517 62.8737L629.821 61.8321L625.91 57.5354L624.607 59.7489L625.91 61.9623L628.517 62.8737ZM601.145 68.4723V69.3837L602.448 70.1649L603.752 68.3421V66.2589L601.145 66.1287V68.4723V68.4723ZM602.448 60.6603L599.841 62.3529L601.145 63.9153L602.448 62.4831V60.6603ZM592.021 41.7812V43.4738L593.324 43.7342V44.3852V45.4268V46.4684L597.235 46.3382L599.841 45.557L601.145 45.2966V45.4268L602.448 45.6872L603.752 48.9422L605.055 47.9006V45.0362L603.752 42.302H601.145L598.538 42.5624L597.235 42.4322L595.931 42.1718L593.324 41L592.021 41.7812ZM612.876 47.3798V46.5986L611.572 46.9892L608.966 47.51L607.662 48.0308V49.463V51.0254L602.448 51.1556L598.538 50.114V51.0254L599.841 52.1972H598.538L597.235 51.5462V52.3274V53.369V53.6294H595.931V51.416L593.324 51.0254L592.021 52.8482V54.8012L594.628 54.671V56.3636L593.324 57.1448L592.021 57.9261L593.324 58.3167L594.628 58.1865L595.931 59.2281L597.235 58.0563V58.8375L598.538 58.9677L599.841 57.0146L598.538 55.5824V55.4522L602.448 55.8428L603.752 57.1448L605.055 56.2334L607.662 55.4522L615.483 55.0616L614.179 52.3274L611.572 51.416V51.1556L612.876 50.2442L614.179 50.114L615.483 48.812V48.2912H612.876V47.3798V47.3798ZM616.786 43.8644L615.483 45.0362L616.786 45.4268L619.393 44.906V43.604L618.09 42.953L616.786 43.8644ZM663.711 57.6656L666.317 60.0093L667.621 57.9261L665.014 55.4522L663.711 57.6656ZM653.283 77.7165L655.89 80.1903L661.104 80.4507L665.014 77.0655V76.8051L666.317 72.3783L663.711 71.0763L662.407 73.0293L661.104 74.7219L659.8 74.4615L655.89 74.9823L653.283 77.7165ZM635.035 86.0493L633.731 84.4869L631.124 86.7003L633.731 88.6533L635.035 86.0493ZM635.035 75.6333L628.517 74.8521V78.8883V81.7527H629.821V80.9715L631.124 81.1017L632.428 80.5809L631.124 79.6695V79.0185V78.8883L635.035 79.4091L636.338 77.1957L635.035 75.6333ZM640.248 74.3313L638.945 75.6333V77.1957V78.7581L640.248 79.0185V78.8883L641.552 78.7581V80.0601L642.855 81.8829L646.766 80.5809L650.676 77.5863L651.979 75.6333V73.5501L650.676 72.7689H648.069L645.462 71.0763L642.855 70.4253L640.248 74.3313ZM637.641 67.3005L638.945 69.2535L641.552 68.4723L640.248 66.5193L637.641 67.3005ZM635.035 70.6857L633.731 70.0347L632.428 71.4669L633.731 71.8575L635.035 70.6857ZM635.035 59.6187L633.731 58.0562L632.428 56.7542L631.124 55.4522V54.1502L629.821 54.5408L628.517 55.4522L629.821 58.1865L631.124 61.4415L632.428 65.3475L636.338 67.4307L635.035 59.6187ZM637.641 58.7073L636.338 57.1448L635.035 57.275L636.338 60.0093V63.0039L637.641 65.3475L638.945 65.6079V60.2697L637.641 58.7072V58.7073ZM641.552 58.9677L642.855 57.4052L640.248 57.275L638.945 58.7073L641.552 58.9677V58.9677ZM650.676 70.1649L653.283 67.6911L650.676 66.5193L646.766 68.6025L650.676 70.1649ZM649.373 55.0616L648.069 55.8428V57.9261L649.373 57.1448V55.0616ZM654.586 45.4268L651.979 44.906V44.5154L650.676 44.6456V45.8174L649.373 47.1194L651.979 48.2912L655.89 46.5986L654.586 45.4268V45.4268ZM644.159 49.5932V53.369L648.069 54.02L646.766 49.5932H644.159ZM637.641 52.4576V50.8952L636.338 51.416V54.5408L638.945 55.8428H642.855L644.159 56.1032V55.8428L642.855 52.3274L638.945 53.4992L637.641 52.4576ZM387.379 256.742H386.076L384.772 258.044H380.862L376.951 259.346L374.344 258.044L373.041 256.742L369.131 258.044H363.917L358.703 261.95L357.4 267.158L356.096 272.366H354.793L353.489 273.668L354.793 272.366L353.489 271.064L352.186 269.762V271.064H350.882L348.275 269.762L346.972 265.856L344.365 261.95L341.758 260.648L340.455 261.95V260.648L341.758 259.346H344.365L343.062 252.836L339.151 247.628L336.544 248.93L333.938 250.232L332.634 260.648H333.938L336.544 261.95L333.938 265.856L330.027 269.762L328.724 268.46H327.42V269.762L324.813 265.856L322.206 260.648L319.6 263.252L316.993 264.554L315.689 263.252L314.386 261.95L313.082 265.856L311.779 269.762L310.475 272.366L307.868 274.97L309.172 280.178L311.779 284.084L309.172 286.688L306.565 289.292V290.594L305.262 294.5L302.655 298.406L301.351 297.104L300.048 298.406L298.744 299.708L297.441 303.614L296.137 307.52L294.834 310.124V315.332H296.137L297.441 316.634V317.936V319.238L300.048 320.54H301.351L302.655 323.144V324.446H303.958L305.262 325.748L306.565 327.05L307.868 328.352L309.172 329.654V332.258H313.082L315.689 330.956V332.258H316.993L318.296 333.56L319.6 334.862V336.164L320.903 338.768H322.206L324.813 340.07V341.372V342.674H328.724L331.331 341.372L333.938 345.278L337.848 351.788L340.455 350.486H345.669V351.788V355.694H348.275L349.579 360.902L356.096 362.204L357.4 364.808L360.007 367.412L362.613 366.11H365.22L373.041 363.506L374.344 360.902L375.648 356.996L382.165 351.788L387.379 346.58L386.076 343.976L384.772 341.372H383.469L382.165 342.674H380.862H376.951L375.648 345.278V346.58H373.041L371.738 345.278H370.434H369.131L367.827 343.976L369.131 338.768L373.041 333.56H375.648L379.558 332.258L378.255 329.654V327.05L380.862 323.144V316.634L378.255 311.426V306.218L387.379 308.822L396.503 315.332V319.238L397.807 320.54L400.413 317.936L401.717 320.54L404.324 319.238H405.627V320.54L406.931 321.842L408.234 320.54H409.538L412.145 323.144L413.448 324.446L414.751 323.144L416.055 321.842V320.54L414.751 319.238L416.055 314.03L417.358 310.124L416.055 308.822H413.448L414.751 304.916L418.662 299.708L422.572 294.5L419.965 291.896L417.358 290.594H414.751L412.145 291.896V293.198H409.538V291.896L408.234 290.594L406.931 287.99L403.02 280.178L397.807 272.366V269.762V268.46L391.289 273.668L392.593 271.064L391.289 269.762L389.986 268.46L388.682 269.762L389.986 268.46L392.593 267.158L387.379 256.742Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Архангельская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M859.229 258.044H857.926H856.622V259.346V261.95H855.319L856.622 264.554L860.532 267.158L863.139 265.856L864.443 263.252L859.229 258.044ZM994.788 241.118L992.181 237.212L988.271 235.91L990.877 238.514L994.788 241.118ZM981.753 211.172V205.964L980.45 204.662L977.843 205.964L980.45 209.87V212.474L981.753 211.172ZM1014.34 224.192L1015.64 229.4L1016.95 230.702H1019.55V225.494L1014.34 224.192ZM1036.5 239.816L1039.11 234.608V233.306L1037.8 232.004L1031.28 228.098H1024.77L1022.16 232.004V237.212L1020.86 239.816L1019.55 241.118L1018.25 242.42H1020.86L1023.46 241.118L1026.07 239.816H1029.98L1036.5 238.514V239.816ZM1027.37 190.34L1028.68 189.038L1022.16 187.736L1016.95 186.434L1015.64 187.736L1013.04 189.038L1007.82 186.434L1003.91 185.132V186.434L1005.22 187.736H1003.91L1002.61 189.038V190.34L1003.91 192.944V194.246L1005.22 195.548L1001.31 194.246L997.395 192.944L994.788 191.642H993.484L992.181 190.34V189.038L990.877 190.34L989.574 192.944L988.271 195.548L986.967 196.85L985.664 198.152L986.967 199.454V200.756V203.36L985.664 205.964H986.967L988.271 207.266V209.87L989.574 212.474L992.181 215.078L996.091 216.38L997.395 218.984L998.698 220.286H1003.91H1005.22V216.38V212.474L1006.52 213.776L1007.82 215.078L1009.13 213.776L1010.43 212.474L1015.64 208.568H1016.95H1019.55H1020.86L1022.16 207.266L1023.46 205.964L1024.77 204.662L1022.16 203.36H1019.55L1014.34 199.454L1011.73 194.246L1015.64 190.34V191.642L1023.46 202.058L1027.37 196.85L1026.07 191.642L1027.37 190.34ZM1058.66 182.528L1057.35 183.83L1053.44 182.528L1049.53 183.83V185.132L1048.23 186.434L1045.62 185.132V183.83H1041.71L1039.11 185.132V187.736L1037.8 189.038L1035.19 186.434V185.132L1033.89 187.736L1035.19 192.944L1040.41 194.246L1046.93 195.548L1054.75 192.944L1059.96 187.736V185.132L1058.66 182.528ZM1144.68 229.4L1123.83 242.42L1117.31 250.232L1112.1 252.836L1106.88 250.232L1101.67 247.628H1099.06H1097.76H1095.15L1089.94 246.326V247.628L1088.64 248.93H1086.03L1084.73 247.628L1086.03 245.024L1088.64 243.722L1086.03 241.118L1082.12 238.514L1076.91 239.816L1072.99 241.118L1067.78 251.534L1062.57 260.648H1061.26V258.044L1059.96 256.742L1062.57 255.44L1063.87 254.138L1062.57 252.836V250.232L1065.17 248.93L1066.48 246.326L1063.87 247.628L1057.35 251.534L1056.05 252.836L1054.75 254.138L1053.44 251.534L1057.35 247.628H1058.66L1062.57 245.024L1066.48 243.722L1052.14 245.024L1037.8 250.232H1031.28L1028.68 251.534L1029.98 252.836L1032.59 254.138L1031.28 258.044L1027.37 259.346L1024.77 265.856L1026.07 267.158L1028.68 265.856V267.158V268.46L1029.98 269.762L1031.28 272.366V274.97L1033.89 276.272V278.876H1031.28V280.178V281.48L1029.98 280.178L1028.68 278.876H1027.37L1026.07 280.178H1024.77H1023.46V284.084V287.99L1018.25 285.386L1009.13 284.084L1005.22 289.292L1000 293.198L994.788 291.896L990.877 289.292L989.574 286.688L992.181 285.386L989.574 284.084L988.271 295.802L986.967 310.124L985.664 311.426L984.36 310.124L983.057 308.822V310.124H981.753H980.45L979.146 308.822V307.52H977.843H975.236L972.629 303.614L970.022 299.708H968.719L967.415 298.406L968.719 297.104L970.022 295.802L968.719 293.198L966.112 291.896L967.415 293.198V294.5L966.112 295.802L963.505 293.198L962.202 290.594L955.684 286.688L953.077 285.386H954.381H956.988L959.595 287.99L962.202 290.594H966.112L968.719 287.99L967.415 284.084L964.808 281.48V278.876V276.272L963.505 273.668V272.366L960.898 269.762H959.595H958.291L950.47 263.252L947.864 264.554L945.257 265.856H943.953H941.346H938.739L934.829 263.252L929.615 261.95V263.252L928.312 264.554L925.705 271.064L927.008 276.272V281.48L924.401 280.178H920.491V281.48H919.188H917.884L915.277 282.782L913.974 284.084L910.064 282.782L907.457 281.48H903.546H899.636L897.029 280.178V277.574L899.636 274.97L898.332 273.668H897.029H894.422H891.815H887.905L885.298 272.366L883.995 273.668H882.691L880.084 272.366H877.477L876.174 273.668L874.87 274.97L872.263 276.272L868.353 277.574V280.178V281.48L865.746 278.876L867.05 276.272L865.746 272.366L863.139 269.762V271.064V273.668L861.836 274.97H857.926L854.015 272.366L852.712 273.668L851.408 277.574L848.801 280.178L850.105 281.48H851.408V282.782V284.084V285.386L852.712 286.688L851.408 291.896L852.712 297.104L854.015 298.406V299.708V302.312L855.319 303.614L857.926 304.916L860.532 307.52L861.836 312.728V317.936L864.443 323.144L865.746 327.05V328.352L860.532 332.258L855.319 336.164L854.015 340.07V342.674L852.712 343.976L850.105 345.278V350.486L847.498 354.392H844.891L840.981 353.09L837.07 354.392L834.463 356.996H831.857L829.25 355.694V356.996H827.946L826.643 359.6V360.902L827.946 366.11L830.553 370.016V379.13V388.244L829.25 402.566L825.339 405.17L822.732 407.774L824.036 409.076L825.339 410.378V415.586V419.492L826.643 422.096V424.7V428.606L827.946 431.21L830.553 433.814L833.16 436.418L831.857 439.022L830.553 440.324L827.946 444.23V448.136L825.339 452.042L827.946 457.25H829.25H830.553L831.857 458.552L833.16 459.854L838.374 461.156H843.588H847.498L848.801 463.76L850.105 467.666L848.801 468.968L846.195 472.874L850.105 475.478L855.319 478.082L856.622 487.196V493.706L859.229 496.31L860.532 500.216L859.229 504.122L856.622 505.424L857.926 511.935L861.836 515.841L859.229 522.351L856.622 530.163V532.767V534.069V535.371L855.319 536.673L854.015 543.183L855.319 548.391H856.622H857.926L864.443 547.089L865.746 544.485L869.657 545.787H870.96V544.485H872.263L873.567 545.787L874.87 544.485H876.174H878.781L880.084 543.183L882.691 540.579V541.881L885.298 544.485L886.601 545.787L885.298 549.693L891.815 543.183L897.029 535.371H898.332H899.636L900.939 532.767L902.243 528.861L904.85 527.559H907.457L911.367 523.653H916.581L920.491 524.955L923.098 527.559L925.705 528.861V531.465L927.008 532.767V534.069V535.371H933.526L940.043 536.673L941.346 537.975V540.579L942.65 543.183V544.485V547.089L943.953 549.693L945.257 550.995V552.297L946.56 554.901V560.109V562.713L949.167 567.921L950.47 566.619H951.774L953.077 571.827L956.988 577.035L962.202 574.431L967.415 573.129L970.022 574.431L972.629 575.733L975.236 577.035H979.146H980.45L983.057 578.337L984.36 579.639H992.181L998.698 580.941L1001.31 583.545L1003.91 586.149L1010.43 587.451L1014.34 586.149H1018.25L1020.86 587.451H1023.46L1027.37 584.847L1029.98 583.545H1032.59L1033.89 584.847L1035.19 583.545V580.941H1036.5H1039.11H1040.41L1041.71 579.639L1044.32 580.941L1048.23 582.243L1049.53 580.941V579.639L1052.14 577.035L1054.75 575.733V574.431L1056.05 573.129H1059.96L1062.57 570.525L1063.87 564.015V558.807L1066.48 557.505L1067.78 556.203V553.599L1066.48 550.995L1063.87 549.693L1062.57 548.391H1061.26H1059.96L1061.26 545.787L1063.87 544.485V541.881V540.579L1065.17 539.277L1066.48 537.975L1062.57 535.371L1059.96 531.465H1061.26H1063.87L1062.57 526.257L1063.87 522.351L1065.17 514.539L1066.48 511.935L1069.08 509.33H1070.39H1071.69L1078.21 506.726L1084.73 504.122L1086.03 502.82V501.518V500.216L1087.33 497.612H1088.64L1089.94 498.915H1091.24L1093.85 497.612L1100.37 493.706L1101.67 488.498V487.196L1102.97 485.894L1105.58 488.498L1106.88 487.196L1105.58 483.29L1104.28 480.686L1101.67 475.478L1100.37 468.968L1097.76 465.062L1099.06 459.854V458.552L1100.37 457.25V455.948L1101.67 454.646V453.344V452.042L1104.28 450.74L1105.58 449.438V441.626L1106.88 433.814H1112.1L1118.62 436.418H1121.22L1122.53 435.116L1123.83 436.418L1125.13 437.72L1127.74 433.814L1130.35 431.21H1132.95V432.512L1134.26 431.21L1135.56 429.908L1136.86 431.21L1139.47 433.814L1140.77 429.908V426.002V420.794L1142.08 418.19V415.586L1140.77 414.284L1142.08 411.68V410.378L1139.47 407.774L1135.56 405.17L1134.26 393.452L1135.56 388.244L1136.86 384.338H1139.47L1142.08 383.036L1143.38 381.734L1144.68 380.432L1145.99 381.734L1147.29 380.432L1148.59 376.526L1145.99 372.62L1148.59 371.318H1151.2L1153.81 368.714L1155.11 366.11L1160.33 368.714L1164.24 370.016L1165.54 367.412V366.11L1168.15 364.808L1169.45 363.506L1170.75 360.902L1173.36 356.996H1174.66V355.694V354.392H1173.36V353.09L1174.66 350.486L1173.36 349.184L1169.45 346.58V340.07L1172.06 336.164L1169.45 334.862V330.956L1170.75 328.352L1172.06 325.748L1170.75 323.144V320.54H1172.06H1173.36H1174.66V319.238V317.936L1179.88 316.634L1183.79 315.332L1185.09 314.03L1186.39 312.728L1189 314.03H1190.31L1191.61 311.426L1192.91 307.52L1195.52 306.218V303.614L1192.91 299.708L1190.31 294.5L1191.61 293.198V291.896L1183.79 289.292L1175.97 284.084V281.48L1177.27 278.876L1175.97 277.574L1174.66 276.272L1181.18 267.158L1190.31 256.742L1191.61 255.44L1194.22 254.138L1192.91 251.534L1190.31 247.628V246.326V245.024L1187.7 243.722H1186.39L1185.09 241.118L1183.79 239.816H1182.48L1181.18 238.514L1179.88 235.91L1178.57 238.514V239.816V241.118H1177.27V239.816H1175.97V243.722V246.326L1174.66 243.722L1172.06 241.118L1168.15 242.42H1162.93L1161.63 238.514L1159.02 233.306L1144.68 229.4ZM1016.95 284.084L1019.55 285.386L1022.16 284.084V282.782L1020.86 281.48L1018.25 282.782L1016.95 284.084Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Республика Саха (Якутия)"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M847.497 461.278H843.587V466.486H842.283L839.676 467.788L838.373 469.09L837.069 470.392L835.766 469.09H834.463H831.856V470.392L829.249 476.902L827.945 483.412L829.249 486.016L830.552 489.922L829.249 491.224L827.945 493.828L829.249 495.13V497.734L824.035 504.244L817.518 510.754H814.911L813.607 512.056V513.358L812.304 519.868L814.911 530.284L818.821 531.586L821.428 534.19V535.492V536.794V538.096V539.398H820.125H818.821H817.518V540.7L816.214 542.002L814.911 543.304L817.518 545.908L820.125 549.814L818.821 553.721L816.214 556.325V557.627L813.607 561.533H812.304L811 560.231L809.697 558.929H807.09V557.627V556.325H805.787L803.18 555.023V552.419V551.116L801.876 549.814L797.966 551.116L795.359 552.419L794.056 555.023V556.325L783.628 562.835L778.414 573.251L779.718 574.553L778.414 575.855L779.718 577.157V579.761L774.504 577.157L771.897 569.345V566.741H770.593H769.29L767.986 568.043L766.683 573.251H761.469L758.862 571.949H754.952L751.042 570.647L747.131 577.157L744.524 583.667L745.828 584.969L748.435 587.573V590.177V594.083L749.738 595.385L748.435 596.687H747.131L743.221 599.291L738.007 604.499L736.704 608.405L738.007 611.009L736.704 612.311L735.4 613.613V616.217L734.097 620.123V624.029H732.793L728.883 625.331L724.973 627.935V629.237V630.539L726.276 631.841L728.883 633.143L731.49 637.049L734.097 640.955H736.704L743.221 646.163L749.738 651.371H752.345H754.952L756.255 652.673V655.277L757.559 656.579L762.773 652.673L767.986 647.465L769.29 650.069L770.593 653.975L775.807 657.881L782.324 661.787L783.628 665.693L784.931 668.297H786.235L787.538 666.995L796.662 674.807V677.411L797.966 680.015L799.269 681.317L801.876 683.921V686.525L800.573 689.129H803.18L804.483 687.827H809.697L813.607 683.921V682.619L804.483 680.015L808.393 678.713L814.911 676.109L813.607 674.807L811 673.505V672.203L809.697 670.901V669.599L813.607 673.505L818.821 676.109L834.463 659.183L854.014 630.539L852.711 620.123L854.014 609.707L855.318 607.103H856.621H857.925L856.621 604.499L854.014 603.197V601.895L852.711 600.593H851.407L850.104 594.083L852.711 591.479L856.621 588.875L857.925 590.177H859.228L860.532 587.573L863.138 584.969L864.442 586.271V587.573H865.745L867.049 588.875H870.959H873.566L877.476 586.271L878.78 583.667L880.083 584.969L881.387 586.271H882.69H885.297H887.904L890.511 584.969V587.573L893.118 590.177H895.725L898.332 588.875L903.545 590.177L910.063 587.573L916.58 579.761L921.794 581.063V582.365H920.49L921.794 583.667H924.401H925.704L928.311 584.969L929.614 583.667L932.221 581.063L933.525 582.365H934.828V578.459V574.553H933.525H932.221L930.918 565.439V564.137H932.221V562.835V560.231H933.525L934.828 558.929L932.221 556.325L934.828 553.721L938.739 555.023L941.345 556.325L946.559 555.023L945.256 552.419V551.116L943.952 549.814L942.649 547.21V544.606V543.304L941.345 540.7V538.096L940.042 535.492H933.525H927.008V534.19V532.888L925.704 531.586V528.982L923.097 527.68L920.49 525.076L916.58 523.774H911.366L907.456 526.378L904.849 527.68L902.242 528.982L900.939 532.888L899.635 535.492H898.332H897.028L891.814 543.304L885.297 549.814L886.601 545.908L883.994 544.606L882.69 542.002V540.7L880.083 543.304L877.476 544.606H876.173H874.87H873.566H872.263H870.959V545.908H869.656L865.745 544.606L864.442 547.21L857.925 548.512H856.621H855.318L854.014 543.304V536.794L855.318 535.492L856.621 534.19V531.586V530.284L859.228 522.472L861.835 515.962L857.925 512.056L856.621 505.546L859.228 502.942L860.532 500.338L857.925 496.432L855.318 493.828V487.318L854.014 478.204L850.104 474.298L844.89 472.996L848.801 469.09L850.104 467.788L848.801 463.882L847.497 461.278Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Иркутская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M659.797 271.186L661.101 273.79H665.011V269.884V265.978L659.797 271.186ZM691.08 226.917H692.384V228.219L693.687 229.521L694.991 224.313L693.687 223.011V224.313L691.08 226.917ZM698.901 128.876V127.705L697.597 126.793L693.687 125.101L696.294 127.184V127.835V129.007L698.901 128.876ZM721.06 99.0606L717.149 98.019L714.542 99.1908L715.846 100.493H717.149L719.756 101.274L721.06 99.0606ZM854.012 213.897L855.315 215.199V216.501L857.922 217.803L856.618 213.897L855.315 212.595L854.012 213.897ZM769.287 203.481H771.894H773.198L775.804 199.575H773.198L771.894 200.877L770.591 202.179L769.287 203.481ZM767.984 138.251L769.287 134.475L766.68 131.871L762.77 130.569L761.466 129.918L758.86 131.48V134.866L761.466 135.907L762.77 136.949V138.511V139.553L767.984 138.251ZM796.66 140.204L792.749 133.303L788.839 136.168L786.232 140.464L784.929 142.027L783.625 142.808L784.929 141.115L786.232 139.683V139.423V139.032L784.929 139.683L782.322 140.725L781.018 140.464L786.232 137.47L787.536 132.522L783.625 131.09L778.411 131.611L777.108 131.871V132.522H775.804L774.501 133.043L771.894 135.386L773.198 136.949V138.511L771.894 138.772L770.591 138.902L769.287 140.464L767.984 142.417L766.68 142.938V143.589V144.891L767.984 145.282V144.24V143.199L769.287 142.808V144.631V146.063L770.591 145.933L771.894 146.454L770.591 148.927V151.531L771.894 152.313V153.094V154.135V155.177L773.198 156.609H774.501L775.804 155.307V156.609V157.911H777.108H779.715L782.322 160.515L784.929 163.119L790.142 164.421L795.356 160.515L794.053 157.911V155.307L792.749 152.833V152.703L794.053 152.573L795.356 146.454L796.66 140.204ZM825.336 176.139H824.032V177.441L822.729 178.743H824.032L825.336 176.139ZM826.639 181.347H829.246L830.549 180.045L829.246 178.743H827.943H826.639L825.336 180.045V181.347H826.639ZM804.48 154.656V153.354V151.531L803.177 152.052L801.874 153.354L800.57 156.609V159.213L801.874 160.515H800.57L799.267 161.817V163.119V164.421V165.723H797.963V164.421L796.66 167.025L795.356 169.629V173.535L792.749 177.441L791.446 181.347L794.053 183.951L797.963 181.347L800.57 178.743H805.784L813.605 176.139L817.515 174.837L818.818 170.931V167.025L817.515 164.421H816.211V165.723H814.908V163.119V161.817L813.605 160.515L812.301 159.213V157.911V156.609L809.694 159.213L807.087 163.119V164.421H805.784V163.119L809.694 152.313L807.087 150.88L805.784 150.75V153.094L804.48 154.656ZM859.225 223.011V224.313L857.922 221.709V219.105L856.618 217.803H854.012L851.405 213.897L848.798 209.991L847.494 211.293L846.191 209.991H844.887V211.293H843.584H842.28H840.977H838.37L835.763 212.595L834.46 211.293H833.156L831.853 212.595L829.246 217.803H825.336L827.943 211.293V206.085H824.032H820.122L821.425 204.783V203.481L817.515 204.783L814.908 203.481L817.515 202.179L820.122 199.575L821.425 198.273H822.729L824.032 196.971L821.425 194.367L817.515 193.065L816.211 191.763V190.461H813.605L810.998 191.763H809.694L801.874 200.877L796.66 209.991L797.963 211.293V215.199L790.142 217.803L788.839 216.501H786.232V217.803L788.839 221.709L790.142 224.313H787.536L786.232 221.709L783.625 223.011H782.322V224.313L781.018 225.615H779.715V226.917H777.108H775.804L774.501 228.219H771.894H773.198V226.917L771.894 225.615L769.287 226.917L767.984 228.219L769.287 225.615L770.591 224.313L762.77 221.709L754.949 223.011L753.646 224.313L756.253 225.615H758.86V226.917L756.253 228.219H753.646L748.432 229.521L744.522 230.823H741.915H738.004H736.701L734.094 232.125L728.88 234.729L726.273 237.333H722.363H718.453L719.756 238.635L722.363 239.937L721.06 241.239L718.453 242.541L717.149 245.145V247.749L714.542 245.145L710.632 243.843V245.145L714.542 249.051L717.149 251.655L715.846 252.957L714.542 251.655L713.239 250.353L711.935 251.655H710.632H709.328L711.935 254.259L715.846 258.165L714.542 259.467V264.675V267.28H713.239L710.632 268.582H709.328L710.632 267.28L711.935 265.978L713.239 264.675V263.373L708.025 262.071L704.115 263.373H697.597L689.777 262.071L681.956 260.769H680.653H679.349H678.046L675.439 259.467V260.769L674.135 263.373L672.832 264.675L674.135 265.978V267.28H672.832V269.884L674.135 271.186L672.832 275.092L671.528 277.696V278.998V280.3L670.225 281.602L674.135 285.508L678.046 288.112V292.018V295.924L681.956 298.528L683.259 303.736L680.653 307.642L678.046 311.548L679.349 314.152L678.046 325.87L675.439 327.172L672.832 328.474L676.742 337.588L678.046 342.796H676.742V341.494L674.135 340.192L672.832 338.89V336.286V333.682L671.528 331.078L670.225 329.776L675.439 316.756L674.135 314.152L671.528 312.85L672.832 311.548V310.246V308.944L676.742 306.34L680.653 301.132L676.742 298.528L670.225 297.226L668.921 293.32L667.618 289.414L663.708 284.206L659.797 280.3H657.19H655.887L657.19 282.904L658.494 285.508L661.101 288.112L663.708 290.716V294.622L661.101 297.226L659.797 298.528V297.226H657.19V299.83V302.434L659.797 305.038L662.404 307.642V314.152L661.101 320.662H658.494L655.887 319.36L653.28 321.964L648.066 325.87H646.763V327.172L644.156 328.474V329.776V332.38L645.459 334.984L646.763 338.89L650.673 341.494L653.28 344.098V345.4H654.584L657.19 344.098L659.797 341.494L661.101 342.796V344.098L662.404 345.4L663.708 346.702L662.404 354.514L661.101 362.326L658.494 368.836L653.28 371.44V372.742V374.044V376.648L654.584 379.252V377.95V379.252L651.977 381.856V383.158L653.28 385.762L654.584 388.366L655.887 394.876L654.584 400.084V409.198L655.887 413.104L659.797 414.406V415.708V417.01V419.614V422.218V423.52L658.494 426.124H657.19L658.494 430.03H661.101L662.404 432.634L665.011 433.936L667.618 432.634L668.921 436.54L667.618 444.352L662.404 452.164H659.797L658.494 453.466V456.07L659.797 457.372L662.404 458.674L661.101 461.278L659.797 462.58V463.882L658.494 466.486L654.584 471.694L648.066 476.902L649.37 486.016L654.584 488.62L657.19 491.224L648.066 496.432L637.639 499.036V509.452V515.962L644.156 518.566L648.066 517.264L653.28 518.566L657.19 519.868L659.797 521.17V522.472L661.101 523.774H662.404L665.011 526.378V530.284L666.315 532.888L670.225 534.19L672.832 538.096L670.225 539.398L667.618 542.002L665.011 545.908V549.814L670.225 555.022L674.135 561.532L672.832 562.834H671.528V565.438L670.225 566.74H668.921H667.618L665.011 571.948L663.708 574.552V575.854V577.156L665.011 578.458H663.708L662.404 581.062L663.708 582.364L665.011 583.666L666.315 595.385V596.687L662.404 597.989L658.494 601.895L662.404 605.801L666.315 609.707H670.225L672.832 608.405L675.439 611.009L679.349 612.311L680.653 620.123L683.259 627.935L680.653 634.445L681.956 635.747V637.049L683.259 638.351L684.563 639.653V640.955L681.956 643.559L679.349 644.861V646.163L676.742 651.371H674.135L672.832 652.673L670.225 655.277L668.921 659.183L671.528 660.485L672.832 663.089L680.653 665.693L689.777 666.995L698.901 661.787L705.418 652.673L708.025 651.371L710.632 650.069L711.935 646.163L713.239 643.559H715.846H717.149L718.453 642.257H719.756V643.559H721.06H722.363L723.666 642.257L727.577 643.559L734.094 640.955L731.487 637.049L728.88 633.143L726.273 631.841L724.97 630.539V629.237V627.935L728.88 625.331L732.791 624.029H734.094L735.397 620.123V616.217V613.613L736.701 612.311L738.004 611.009V608.405V604.499L743.218 599.291L747.129 596.687H748.432L749.735 595.385L748.432 594.083V590.177V587.572L747.129 584.968L744.522 583.666L747.129 577.156L751.039 570.646L754.949 571.948H758.86L761.466 573.25H766.68L767.984 568.042L769.287 566.74H770.591H771.894V568.042L774.501 577.156L779.715 579.76V577.156V575.854V574.552V573.25H778.411L783.625 562.834L794.053 556.324V555.022L795.356 552.418L799.267 549.814H801.874L803.177 551.116V552.418V555.022L805.784 556.324H808.391L807.087 557.626V558.928H809.694L810.998 560.23L812.301 561.532H813.605L816.211 557.626V556.324L818.818 553.72L820.122 549.814L817.515 545.908L814.908 543.304L816.211 542.002L817.515 540.7V539.398H818.818H820.122H821.425V538.096V536.794V535.492V534.19L818.818 531.586L814.908 530.284L812.301 519.868L813.605 513.358V512.056L816.211 510.754L817.515 509.452L824.032 504.244L829.246 497.734V495.13L827.943 493.828L829.246 491.224L830.549 489.922L829.246 486.016L827.943 482.11L829.246 476.902L833.156 470.392L831.853 469.09L834.46 467.788L835.763 469.09L837.067 470.392L838.37 469.09L839.674 467.788L842.28 466.486H843.584V461.278H838.37L833.156 459.976L831.853 458.674L830.549 457.372H829.246H827.943L825.336 452.164L827.943 448.258V444.352L830.549 440.446L831.853 439.144L833.156 436.54L830.549 433.936L827.943 431.332L826.639 428.728V424.822V422.218L825.336 419.614V414.406V410.5L824.032 409.198L822.729 407.896L825.336 405.292L829.246 402.688L830.549 388.366V379.252V370.138L827.943 366.232L826.639 361.024V359.722L827.943 357.118H829.246V355.816L831.853 357.118H834.46L837.067 354.514L840.977 353.212L844.887 354.514H847.494L850.101 350.608V345.4L852.708 344.098L854.012 342.796V340.192L855.315 336.286L860.529 332.38L865.743 328.474V327.172L864.439 323.266L861.832 318.058V312.85L860.529 307.642L857.922 305.038L855.315 303.736L854.012 302.434V299.83V298.528L852.708 297.226L851.405 292.018L852.708 286.81L851.405 285.508V284.206V282.904V281.602H850.101L848.798 280.3L851.405 277.696L852.708 273.79L854.012 272.488V269.884L855.315 268.582L852.708 269.884L851.405 271.186L848.798 269.884L844.887 272.488V273.79V276.394H847.494L851.405 275.092V276.394L850.101 277.696H848.798L846.191 281.602L843.584 282.904L842.28 281.602L840.977 284.206L838.37 285.508V288.112V289.414L835.763 288.112L834.46 286.81V288.112H833.156H829.246H825.336L824.032 292.018L820.122 295.924H818.818L820.122 293.32L822.729 290.716V288.112L824.032 285.508L827.943 284.206L829.246 280.3L827.943 278.998L825.336 277.696H824.032L831.853 278.998L837.067 273.79H838.37L839.674 271.186L840.977 268.582L843.584 265.978L846.191 263.373L847.494 259.467L855.315 254.259V252.957L856.618 251.655L859.225 247.749L863.136 243.843L864.439 237.333L861.832 236.031L860.529 233.427V234.729L859.225 236.031V232.125H860.529L863.136 233.427V234.729V236.031L864.439 233.427V226.917H863.136H861.832V223.011L859.225 220.407V223.011ZM764.073 123.929L762.77 124.189L761.466 124.97L762.77 125.491L764.073 125.882L765.377 127.054L766.68 128.356L765.377 128.486L764.073 128.356V128.746V129.267L765.377 129.527L766.68 129.658L767.984 131.09L769.287 131.871L771.894 130.96L773.198 129.788L783.625 128.486L784.929 127.835V124.58V120.804L787.536 119.242L788.839 117.679V116.247L787.536 114.815V114.554L786.232 113.903L783.625 107.784L782.322 102.967L779.715 102.836V104.659L773.198 108.305L767.984 112.471V114.685L769.287 115.205V116.377L767.984 117.679V119.111L766.68 120.544L765.377 121.195L764.073 121.846V122.887L765.377 123.799V124.189H764.073V123.929ZM761.466 102.055L760.163 103.748V104.92H761.466L764.073 106.091L766.68 102.836L761.466 102.055ZM771.894 220.407L769.287 219.105L770.591 221.709L773.198 223.011V221.709V220.407H771.894Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Красноярский край"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M619.391 498.914L616.784 497.612H614.177H612.874L611.57 495.008L610.267 492.404L605.053 493.706H599.839L597.232 491.102V488.498H595.929H594.625L592.019 489.8L590.715 488.498L589.412 487.196L584.198 485.894L578.984 484.592L577.681 483.29V484.592V487.196L576.377 489.8H575.074L573.77 491.102L572.467 496.31L568.556 502.82H565.95H560.736L555.522 508.028L550.308 513.236V514.538V517.142H549.005V519.746V521.048H547.701V522.35L549.005 523.652V526.256V527.558V528.86L550.308 531.464V532.766V534.068L549.005 535.37L550.308 537.974L551.612 539.276L554.218 541.88L556.825 543.182L572.467 548.39L571.163 549.692L580.287 554.9L586.805 565.316L595.929 566.618L597.232 571.826H605.053L606.356 573.128V571.826L607.66 570.524H610.267H611.57L612.874 573.128L611.57 574.43V579.638L610.267 580.94L608.963 582.242H610.267V583.544L611.57 584.846L614.177 583.544L615.481 579.638L616.784 580.94H618.088H620.694H623.301H625.908L628.515 579.638L629.819 580.94H631.122L632.425 579.638L635.032 577.034H636.336L637.639 578.336L638.943 577.034H640.246H644.157H648.067L649.37 575.732L651.977 577.034L654.584 578.336L658.494 575.732H663.708L665.012 571.826L667.619 566.618H668.922H670.225L671.529 565.316V562.712H672.832V561.41L670.225 554.9L665.012 549.692V545.786L666.315 541.88L670.225 539.276L672.832 537.974L670.225 534.068L666.315 532.766L665.012 530.162V526.256L662.405 523.652H661.101L659.798 522.35V521.048L657.191 519.746L651.977 518.444L648.067 517.142L642.853 518.444L637.639 515.84V509.33V498.914L633.729 497.612L629.819 495.008L627.212 496.31L623.301 498.914H621.998L620.694 500.216L618.088 498.914H619.391Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Томская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M621.999 243.722V242.42H620.696H619.392L612.875 245.024V248.93L618.089 250.232L621.999 248.93V247.628V245.024V243.722ZM638.944 276.272V271.064L640.247 267.158V264.554L638.944 263.252L637.641 267.158L636.337 273.668L632.427 277.574L625.91 278.876L624.606 280.178H623.303L621.999 282.782L620.696 284.084L619.392 285.386L618.089 286.688V287.99L619.392 289.292V290.594L618.089 293.198L619.392 298.406V303.614L615.482 307.52L612.875 310.124L611.572 314.03L610.268 316.634L608.965 319.238V321.842V324.446L607.661 327.05L606.358 330.956H608.965H610.268L611.572 332.258L612.875 333.56L615.482 332.258H618.089L625.91 337.466L629.82 345.278V346.58L628.516 347.882L629.82 351.788V355.694H628.516H627.213L623.303 358.298L621.999 362.204L627.213 367.412L631.123 370.016H628.516L625.91 368.714L623.303 370.016H621.999V368.714V366.11L620.696 363.506V362.204L621.999 359.6V356.996L623.303 355.694L624.606 354.392H623.303V353.09L624.606 351.788V350.486V346.58L623.303 343.976V341.372V338.768H616.785H608.965L606.358 342.674L605.054 345.278V349.184L602.447 358.298L599.841 360.902L595.93 362.204L594.627 366.11L592.02 368.714L588.109 370.016L584.199 372.62L581.592 371.318L580.289 372.62L577.682 376.526H573.771V375.224L572.468 373.922L567.254 372.62L563.344 370.016L560.737 368.714L559.434 366.11L558.13 362.204V358.298L563.344 360.902L569.861 363.506L568.558 364.808H565.951V366.11L569.861 368.714H575.075V366.11L576.378 363.506H577.682L580.289 362.204L581.592 360.902H582.896V359.6V358.298L588.109 355.694L593.323 353.09L594.627 349.184V346.58L598.537 343.976L601.144 340.07L598.537 334.862L597.234 327.05L601.144 320.54L603.751 314.03L606.358 306.218L607.661 304.916L608.965 303.614L612.875 295.802L611.572 289.292V282.782L616.785 277.574L624.606 264.554V261.95V260.648L621.999 256.742L615.482 254.138L612.875 252.836L610.268 251.534H608.965L610.268 250.232H608.965V248.93L602.447 256.742L595.93 265.856L585.503 273.668L577.682 277.574H578.985L577.682 280.178H576.378L575.075 282.782H577.682L578.985 284.084L576.378 287.99L573.771 293.198V295.802L572.468 298.406L571.165 297.104H569.861L567.254 299.708L565.951 303.614V304.916L567.254 303.614H568.558L569.861 306.218L571.165 308.822H572.468V311.426L571.165 312.728V319.238L573.771 321.842V323.144L565.951 332.258H563.344L564.647 330.956V329.654L563.344 328.352L562.04 327.05L560.737 317.936L558.13 314.03L554.22 308.822H555.523L558.13 311.426V312.728V314.03V312.728L555.523 307.52L550.309 303.614L547.702 304.916L546.399 307.52H545.096L547.702 311.426L549.006 314.03V316.634L546.399 319.238L543.792 321.842L542.489 327.05L545.096 330.956L546.399 334.862L541.185 337.466L534.668 341.372L533.365 342.674L532.061 345.278H530.758H529.454H528.151H526.847L521.633 346.58H517.723L515.116 349.184V350.486L511.206 351.788L507.296 354.392V355.694L504.689 354.392H500.778L502.082 358.298V360.902L503.385 363.506V364.808L500.778 367.412L499.475 372.62H496.868L495.564 375.224L496.868 377.828L500.778 379.13L499.475 381.734L500.778 384.338H502.082H503.385H504.689L505.992 385.64L508.599 384.338H511.206V385.64L512.509 386.942L513.813 385.64H515.116L519.027 386.942L522.937 389.546L524.24 390.848L526.847 392.15L525.544 393.452L522.937 394.754L525.544 398.66L529.454 402.566L532.061 401.264L534.668 399.962L538.578 401.264H539.882L541.185 399.962H543.792V401.264L545.096 402.566H546.399L549.006 405.17L547.702 406.472L546.399 409.076V412.982L547.702 415.586L550.309 418.19V423.398V427.304L556.827 428.606L563.344 427.304L565.951 431.21L567.254 435.116L569.861 437.72L572.468 439.022L578.985 440.324L584.199 444.23L590.716 448.136L592.02 452.042L594.627 455.948H598.537H603.751L606.358 457.25L608.965 458.552L616.785 455.948L621.999 453.344H623.303V454.646V457.25L627.213 461.156H629.82H632.427L635.034 465.062L637.641 468.968H640.247H642.854L645.461 471.572L648.068 475.478L654.585 471.572L658.496 466.364L659.799 463.76V462.458L661.103 461.156L662.406 458.552L659.799 457.25L658.496 455.948V453.344L659.799 452.042H662.406L667.62 444.23L668.923 436.418L667.62 432.512L665.013 433.814L662.406 432.512L661.103 429.908H658.496L657.192 426.002H658.496L659.799 423.398V420.794V419.492V416.888V415.586V414.284L655.889 412.982L654.585 409.076V399.962L655.889 394.754L654.585 388.244L653.282 384.338L651.979 383.036V381.734L654.585 379.13V377.828L653.282 376.526V373.922V372.62V371.318L658.496 368.714L661.103 362.204L662.406 353.09L663.71 346.58L662.406 345.278L661.103 343.976V342.674L659.799 341.372L657.192 343.976H654.585H653.282L650.675 341.372L646.765 338.768L645.461 334.862L644.158 332.258V329.654V328.352L646.765 327.05V325.748L648.068 324.446L653.282 321.842L655.889 319.238L658.496 320.54H661.103L662.406 314.03V306.218L659.799 304.916L657.192 302.312V299.708V297.104H659.799H661.103L663.71 294.5V290.594L661.103 287.99L658.496 285.386L657.192 282.782L655.889 280.178H651.979L648.068 282.782H649.372H650.675L651.979 285.386V287.99L646.765 286.688L645.461 282.782L640.247 284.084L638.944 289.292L640.247 294.5L642.854 298.406H645.461L648.068 301.01L646.765 307.52L645.461 304.916L644.158 302.312L636.337 298.406L629.82 293.198L631.123 291.896L633.73 286.688L632.427 284.084L636.337 280.178L638.944 276.272ZM653.282 278.876L654.585 277.574V274.97L653.282 273.668L646.765 276.272L651.979 278.876H653.282ZM640.247 259.346L635.034 258.044L636.337 261.95H637.641L638.944 259.346H640.247ZM646.765 252.836L648.068 254.138L649.372 252.836L646.765 251.534L645.461 252.836H646.765Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Ямало-Ненецкий АО"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M466.889 306.218L459.069 299.708L452.551 294.5H449.945H447.338L446.034 293.198L444.731 294.5L442.124 295.802L431.696 294.5H422.572L418.662 299.708L414.751 304.916L413.448 308.822H416.055L417.358 310.124L416.055 314.03L414.751 317.936L416.055 320.54V321.842L414.751 323.144L413.448 324.446L412.144 323.144L409.538 320.54H408.234L406.931 321.842L405.627 320.54V319.238H404.324H401.717L400.413 317.936L397.807 319.238L396.503 317.936V315.332L387.379 308.822L378.255 304.916V311.426L380.862 316.634V323.144L378.255 327.05V329.654L379.558 332.258L375.648 333.56H373.041L369.131 338.768L367.827 343.976L369.131 345.278H370.434L371.738 343.976L373.041 345.278L375.648 346.58V345.278L376.951 342.674L380.862 341.372L382.165 342.674L383.469 341.372H384.772L386.075 343.976L387.379 346.58L382.165 351.788L375.648 356.996L374.344 360.902L373.041 363.506L365.22 366.11H362.613L360.006 367.412L356.096 373.922V376.526V377.828L350.882 379.13L348.275 383.036L350.882 385.64L352.186 388.244V390.848L353.489 394.754L352.186 396.056V398.66L356.096 396.056L358.703 393.452H360.006H361.31V392.15L366.524 394.754L370.434 396.056L375.648 394.754H379.558V396.056L382.165 394.754L380.862 390.848L383.469 384.338L391.289 386.942H392.593H393.896L396.503 389.546L395.2 392.15L399.11 394.754L401.717 393.452L404.324 397.358L406.931 398.66H409.538L413.448 397.358L414.751 398.66V399.962L416.055 398.66H418.662H419.965L421.269 399.962L423.876 398.66L427.786 397.358L435.607 405.17L448.641 406.472V405.17L451.248 403.868L452.551 401.264L453.855 397.358H456.462L457.765 394.754L456.462 393.452V392.15L459.069 386.942L461.676 381.734L466.889 376.526L472.103 371.318L473.407 363.506L474.71 362.204L477.317 360.902L478.62 359.6H479.924L482.531 358.298H485.138V359.6L486.441 362.204L489.048 360.902L491.655 359.6L494.262 358.298V356.996L498.172 355.694L500.779 354.392H504.689L507.296 355.694L511.207 351.788L515.117 350.486V349.184L517.724 346.58H521.634L526.848 345.278H528.152H529.455H530.758H532.062L533.365 343.976L534.669 341.372L541.186 338.768L546.4 334.862L545.096 330.956L542.49 327.05L543.793 321.842H545.096L546.4 320.54L543.793 319.238H542.49H541.186L539.883 320.54L537.276 321.842L534.669 323.144L532.062 324.446L529.455 325.748H528.152L526.848 324.446L525.545 327.05V328.352L516.421 330.956L508.6 332.258L507.296 330.956L505.993 329.654L466.889 306.218Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Республика Коми"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M294.834 453.344L293.531 450.74L288.317 449.438V446.834L284.407 444.23L281.8 440.324L276.586 448.136L273.979 446.834H268.765L270.069 452.042L268.765 457.25L270.069 459.854V462.458L266.158 467.666L262.248 470.27L266.158 476.78H273.979L275.283 478.082V479.384L277.889 475.478L280.496 468.968H281.8H284.407L287.014 467.666H288.317L290.924 468.968H293.531L296.138 471.572L300.048 474.176V472.874H301.352H302.655H303.958L306.565 468.968L307.869 466.364L305.262 462.458V458.552L303.958 455.948H300.048H297.441L294.834 453.344Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Ульяновская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M328.723 436.418L326.116 437.72L322.206 435.116H320.903H319.599H316.992V436.418H315.689H313.082L310.475 437.72L309.172 436.418H307.868L305.261 437.72H303.958V439.022L297.441 440.324V441.626L298.744 442.928L297.441 446.834H292.227L290.923 445.532H289.62L288.316 446.834V449.438L293.53 450.74L294.834 453.344L297.441 455.948H300.047H303.958L305.261 458.552V462.458L307.868 466.364L310.475 470.27L313.082 472.874L315.689 471.572H318.296L320.903 474.176L322.206 476.78V478.082V479.384H323.51L326.116 481.988L328.723 485.894H330.027V487.196L328.723 488.498V491.102L331.33 493.706L333.937 488.498L335.241 485.894V484.592H336.544H335.241H337.848L339.151 483.29L340.454 480.686V478.082V476.78H339.151H340.454L339.151 475.478V476.78V475.478V476.78L340.454 475.478V474.176L341.758 475.478L346.972 474.176L352.185 471.572L350.882 468.968L348.275 466.364H346.972L345.668 463.76H349.579L353.489 461.156L350.882 459.854L349.579 461.156V458.552V455.948H350.882L348.275 454.646L345.668 455.948L346.972 457.25V458.552L344.365 459.854L343.061 458.552H341.758V457.25H340.454H337.848L335.241 454.646L333.937 453.344H332.634L335.241 452.042L336.544 450.74H335.241L332.634 449.438L331.33 445.532H332.634V444.23H331.33V441.626L332.634 437.72L328.723 436.418Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Республика Татарстан (Татарстан)"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M234.875 317.936L230.965 315.332L229.661 316.634L228.358 317.936L224.447 319.238L220.537 320.54H219.234L217.93 319.238L216.757 317.936L209.588 316.634L202.289 314.03L200.464 312.728L198.769 310.124L196.684 311.426L194.859 312.728H194.989L195.641 314.03L194.468 315.332L193.295 316.634V319.238L192.513 321.842L189.124 324.446L185.865 328.352L191.34 334.862L196.423 341.372L203.331 342.674L208.285 343.976L208.676 346.58L209.197 347.882L211.152 350.486L212.977 351.788L216.496 350.486L219.234 349.184H220.537L221.84 347.882L223.144 350.486L224.447 353.09L228.358 354.392L232.268 355.694L233.572 356.996L234.875 355.694L236.178 354.392L238.785 355.694L241.392 356.996H242.696L243.999 359.6V362.204L247.91 356.996L251.82 355.694L250.516 353.09V351.788V347.882L251.82 345.278V343.976L253.123 342.674L254.427 341.372H257.034V340.07L255.73 338.768L258.337 337.466H260.944L262.247 329.654L257.034 328.352L253.123 327.05H250.516L249.213 325.748L247.91 324.446L245.303 323.144H243.999L242.696 324.446L240.089 323.144L238.785 321.842H237.482L234.875 317.936H234.875Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Тверская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M169.572 363.507L168.268 364.809H166.834H165.922H165.531H164.228H162.924L160.448 363.507H157.71L155.494 359.601L151.584 358.299L150.411 359.601L150.02 362.205L149.238 363.507H148.325L146.37 366.111L144.285 368.715L143.112 371.319H142.199L143.242 372.621L142.981 373.923H143.763L147.022 375.225L149.499 373.923L150.672 375.225L151.454 377.829L153.93 379.131L156.016 380.433L159.144 384.339L159.535 388.245L157.841 390.849L157.58 394.755L160.056 392.151L162.403 394.755L163.315 393.453L163.967 392.151L164.749 393.453H165.27L168.529 392.151L169.963 390.849L173.091 389.547L173.482 386.943L174.003 384.339L176.089 385.641L178.957 384.339H179.869L180.39 383.037L177.392 377.829L178.696 375.225L180.781 373.923L179.478 367.413L178.696 362.205L174.134 363.507H169.572Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Брянская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M369.129 153.884V154.535L366.522 156.488L362.612 154.926L360.005 154.014L358.702 155.056L356.095 156.488L354.791 154.405L353.488 154.275L350.881 153.884V155.056V156.488L345.667 159.092L341.757 164.3V165.602V166.904L340.453 173.414L339.15 178.622L335.24 179.924H330.026L322.205 186.434L327.419 192.944L331.329 199.454V203.36L332.633 207.266L336.543 205.964L337.846 207.266H339.15L340.453 208.568V205.964V203.36L341.757 200.756V199.454V198.152V195.548L344.364 200.756V202.058H343.06V204.662V208.568H344.364H345.667L346.971 215.078H345.667V216.38L346.971 217.682H348.274V220.286V224.192L350.881 228.098L354.791 233.306L358.702 239.816L361.309 245.024L374.343 248.93L382.164 247.628L388.681 245.024L389.985 243.722V241.118L392.591 238.514L395.198 234.608L393.895 232.004L392.591 230.702L393.895 226.796L395.198 222.89H393.895H392.591V218.984V215.078L391.288 213.776V215.078L389.985 205.964V196.85V192.944V191.642L388.681 189.038H387.378L388.681 187.736L387.378 186.434V185.132H386.074H384.771L383.467 181.226L382.164 178.622L379.557 177.32L376.95 178.622L375.647 177.32L378.253 176.018L380.86 173.414L378.253 172.112H376.95H378.253L379.557 170.81L378.253 169.508L375.647 168.206H376.95L378.253 166.904L376.95 165.602V164.3L379.557 166.904L383.467 168.206L382.164 164.3L380.86 159.092V160.394H379.557H378.253H376.95V161.696L375.647 160.394V159.092L374.343 156.488V155.186L373.04 156.488V157.79H370.433L369.129 154.014V153.884V153.884Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Мурманская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M259.641 440.325L257.035 442.929H254.428L250.517 435.117L247.91 429.909L246.607 431.211L245.304 432.513L241.393 429.909L240.09 426.003H237.483L236.179 427.305L234.876 429.909L233.572 431.211L234.876 432.513V435.117L232.269 436.419L233.572 440.325V446.835L232.269 448.137L229.662 449.439L232.269 452.043L236.179 454.647L237.483 457.251L238.786 458.553H241.393L242.697 459.855L244 461.157V462.459L247.91 465.063H250.517L251.821 466.365V468.969L255.731 467.667H258.338L260.945 468.969L262.248 470.271L266.159 467.667L270.069 462.459V459.855L268.766 457.251L270.069 452.043L268.766 446.835L263.552 444.231L259.641 440.325Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Пензенская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M258.336 380.432L255.729 379.13H253.122L254.425 373.922L253.122 370.016L247.908 371.318L243.998 367.412V364.808V363.506L240.087 370.016L237.48 377.828L238.784 379.13L240.087 381.734L241.391 383.036L243.998 385.64L241.391 393.452L245.301 398.66L250.515 405.17L255.729 403.868L258.336 401.264H263.55H267.46V399.962H268.763H271.37H270.067V398.66L271.37 397.358V394.754L268.763 393.452L266.156 392.15V390.848V389.546V388.244H264.853L260.943 384.338L259.639 381.734L258.336 380.432Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Владимирская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M230.964 247.628L228.357 248.93L229.66 250.232L230.964 251.534H233.571L234.874 252.836H233.571L232.267 254.138V255.44H230.964V254.138V260.648L232.267 263.252H234.874L238.785 264.554L241.392 269.762L238.785 273.668L234.874 276.272L229.66 273.668L228.357 269.762L229.66 265.856L227.054 263.252L225.75 264.554L224.447 263.252L223.143 261.95L221.84 260.648L220.536 261.95H219.233V259.346H217.669L216.756 260.648L214.801 261.95H215.453L213.889 264.554L211.543 263.252L209.327 264.554H206.98L208.284 268.46L209.327 271.064L210.63 273.668L211.803 276.272L210.891 281.48L212.846 285.386H214.801L217.408 284.084L219.233 285.386L220.536 287.99L223.143 286.688H227.054V287.99L229.66 289.292L232.267 287.99L234.874 286.688V287.99L236.178 289.292L237.481 290.594V293.198V295.802H240.088H242.695L243.998 297.104V298.406L246.605 302.312V304.916L247.909 307.52L250.516 311.426H254.426L257.033 312.728L258.336 311.426L259.64 310.124H262.247L263.55 308.822H262.247V307.52L263.55 306.218V304.916V303.614V302.312L267.461 299.708L271.371 298.406L273.978 295.802V294.5L275.281 293.198H277.888H279.192L281.799 291.896L280.495 290.594L279.192 285.386L277.888 284.084H275.281L272.674 281.48L270.067 278.876H268.764V280.178L270.067 282.782H267.461L266.157 281.48H263.55H260.943H258.336H257.033L255.73 280.178L253.123 282.782L249.212 284.084L246.605 280.178H242.695L240.088 278.876L238.785 277.574H240.088L241.392 274.97L242.695 272.366L245.302 265.856L249.212 260.648V258.044V256.742L246.605 252.836V248.93H237.481L230.964 247.628Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Ленинградская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M209.066 515.841H207.371L205.938 514.539L205.677 515.841H205.416L204.373 514.539H202.679L200.463 515.841L201.767 518.445L202.549 522.351L204.113 523.653L205.156 524.955L203.461 526.257L202.288 528.861L202.679 532.767L203.982 535.371H207.371L210.109 537.975H207.893L205.025 539.277L204.373 545.787L203.852 550.995L199.16 552.297H194.337L194.598 553.599L195.901 554.901L195.38 556.203L194.989 557.505L196.292 558.807L197.204 560.109L192.773 561.411L191.6 565.317L192.121 566.619H192.642H193.685H194.728L195.64 567.921L196.553 569.223V570.525H196.944H197.335H197.856L197.596 571.827H197.856H198.769L199.551 570.525L203.331 573.129L203.461 574.431H203.592L205.025 573.129H205.416H205.677L205.416 574.431L206.329 573.129L207.632 571.827L208.414 573.129L208.284 574.431L207.241 575.733L206.72 577.035L208.284 575.733L209.848 574.431L213.498 571.827L217.278 570.525L217.93 571.827L215.583 561.411H216.365L217.93 564.015H220.536L221.84 554.901V544.485L219.233 541.881L217.147 539.277L215.844 540.579L214.541 539.277L215.714 535.371L217.93 532.767L217.408 528.861L216.105 524.955L219.233 522.351L217.93 519.747L217.147 517.143L213.237 515.841H209.066H209.066Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Астраханская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M223.144 472.874V471.572H219.234L216.105 468.968L215.323 463.76L212.456 462.458L209.067 461.156L207.633 459.854L206.46 457.25H204.765L202.81 458.552L199.682 457.25H196.423L196.293 459.854L196.684 462.458L193.947 465.062L191.079 466.364L191.34 471.572L192.643 478.082L189.124 480.686L185.474 484.592H185.996L186.778 485.895L187.429 488.499L187.69 492.405L182.998 495.009L178.696 493.707L177.002 495.009L175.438 496.311H174.134L173.482 497.613L174.786 500.217L176.741 504.123L175.698 509.331L175.438 511.935H176.611H177.653V513.237L177.002 514.539H177.914H179.087L180 515.841L180.782 517.143L187.169 514.539L191.991 517.143L193.686 514.539L194.598 511.935L196.554 513.237V515.841H198.378H200.464L202.68 514.539H204.374L205.417 515.841H205.678L205.938 514.539L207.372 515.841H209.067H213.238L217.148 517.143L217.93 519.747L219.234 522.351L221.84 521.049L223.144 519.747H225.751H227.054V517.143L228.358 513.237L233.572 509.331L240.089 508.029L241.392 506.727L242.696 505.425V504.123L240.089 498.915L238.785 495.009H236.178L233.572 493.707V491.103L232.268 489.801H230.965L229.661 491.103L228.358 489.801V488.499H227.054L225.751 487.197L228.358 485.895L230.965 481.988L229.661 478.082L228.358 476.78H227.054V475.478V474.176H224.447L223.144 472.874H223.144Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Волгоградская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M251.819 467.667L250.515 466.365L247.909 465.063L243.998 462.459V461.157L242.695 459.855L241.391 458.553H238.784L237.481 457.25L236.177 454.646L232.267 453.344L229.66 449.438L224.446 452.042L216.886 454.646L217.147 458.553L215.322 463.761L216.104 468.969L219.233 471.573H223.143V472.875L224.446 474.177H227.053V475.479V476.781H228.357L229.66 478.083L230.964 481.989L228.357 485.895L225.75 487.197L227.053 488.499H228.357V489.801L229.66 491.103L230.964 489.801H232.267L233.571 491.103V493.707L236.177 495.009H238.784L240.088 498.915L242.695 504.123V505.425L246.605 511.935V519.747L253.122 517.143L254.426 513.237L255.729 509.331H257.033V510.633L258.336 511.935H260.943H264.853L266.157 510.633L267.46 508.029L277.888 510.633L280.495 509.331L283.102 508.029L284.405 509.331H285.709V508.029V506.727L284.405 501.519L283.102 497.613L281.798 496.311V493.707V492.405V491.103H280.495V489.801V488.499L277.888 487.197L276.584 485.895V483.291L275.281 479.385V478.083L273.978 476.781L266.157 475.479L262.246 470.271L260.943 468.969L258.336 467.667H255.729L251.819 468.969V466.365V467.667Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Саратовская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M279.191 429.908L275.281 431.21L272.674 432.512H271.371V431.21L268.764 432.512L266.157 433.814L263.55 428.606L260.943 419.492L258.336 418.19H255.729L254.426 416.888L251.819 414.284V415.586V418.19L249.212 419.492L247.909 420.794H245.302H242.695L245.302 422.096L246.605 424.7L243.998 423.398H242.695V424.7L240.088 426.002L242.695 429.908L245.302 432.512L246.605 431.21L247.909 429.908L250.515 435.116L254.426 442.928H257.033L259.64 440.324L263.55 444.23L268.764 446.834H273.978L276.585 448.136L281.798 440.324L283.102 435.116H281.798V433.814H280.495L279.191 432.512L280.495 431.21L279.191 429.908Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Республика Мордовия"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M327.419 192.943L322.206 186.433L318.295 195.547L313.081 202.057H311.778H309.171L305.261 204.661H303.957V205.963L302.654 207.265L298.743 208.567L297.44 212.473L298.743 213.775L297.44 215.077L293.53 218.983L292.226 224.191L288.316 225.493H284.406L283.102 234.607L281.799 245.023L264.854 247.627L246.605 248.929V251.533L249.212 255.439V254.137L250.516 255.439H251.819H255.73H259.64L260.943 254.137L262.247 267.157L258.337 281.479H260.943H263.55H266.157L267.461 282.781H270.068L268.764 280.177V278.875H270.068L272.674 281.479L275.281 284.083H277.888L279.192 285.385L280.495 290.594L281.799 291.895L283.102 287.989L281.799 281.479L283.102 274.969V276.271H284.406L285.709 273.667L287.012 271.063V274.969H288.316L289.619 271.063L290.923 268.459V269.761V271.063V272.365L292.226 269.761L293.53 268.459L292.226 272.365L289.619 277.573H290.923L292.226 274.969V276.271L294.833 277.573L297.44 272.365V271.063H296.137V272.365V271.063V269.761L294.833 271.063L296.137 267.157L297.44 263.251L298.743 274.969L292.226 284.083L290.923 287.989L289.619 293.198H290.923H292.226L294.833 295.802L298.743 299.708L300.047 298.406L301.35 297.104H302.654V298.406L305.261 294.5L306.564 290.594V289.291L309.171 286.687L311.778 284.083L309.171 280.177L307.868 274.969L310.475 272.365L311.778 269.761L313.081 265.855L314.385 261.949L315.688 263.251L316.992 264.553L319.599 263.251L322.206 260.647V258.043L323.509 255.439V252.835V251.533H322.206H320.902V247.627V245.023L322.206 243.721L327.419 237.211L328.723 234.607L330.026 230.701H331.33L332.633 232.003L335.24 229.399L336.544 228.097V229.399H337.847L339.15 221.587L336.544 213.775H337.847H340.454L339.15 211.171L337.847 208.567L339.15 207.265H337.847L336.544 205.963L332.633 207.265L331.33 203.359L332.633 199.453L327.419 192.943Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Республика Карелия"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M209.327 271.064L208.285 268.46L206.981 264.554L204.114 268.46L201.116 271.064H200.464H197.075L194.989 273.668L195.902 274.97L196.554 276.272L194.598 280.178L192.773 278.876L193.295 277.574L193.686 276.272H192.904L192.643 277.574H191.34L190.297 276.272L187.951 277.574H185.474V278.876H185.996L185.865 280.178L184.562 284.084L181.564 286.688L178.305 287.99L178.566 289.292L178.696 290.594L175.438 294.5L171.136 299.708H171.006L171.136 301.01L172.179 302.312L173.482 303.614L172.961 304.916L172.831 306.218H174.004L175.698 308.822L174.134 312.728L173.091 314.03H175.047L176.089 315.332H178.305L180.651 321.842V324.446L181.303 325.748H184.04L185.865 328.352L189.254 325.748L192.513 323.144L193.295 319.238V316.634L194.468 315.332L195.641 314.03L194.989 312.728H194.859L196.684 311.426L198.769 310.124L198.509 307.52L200.855 304.916L201.507 302.312L205.417 301.01L205.678 299.708L205.808 298.406H207.372L208.545 297.104L207.242 293.198L206.329 287.99L212.847 285.386L210.891 281.48L211.804 276.272L210.631 273.668L209.327 271.064H209.327Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Псковская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M227.053 287.99V286.688H223.143L220.536 287.99L219.233 285.386L217.408 284.084L214.931 285.386H212.846L206.329 287.99L207.241 293.198L208.544 297.104L207.371 298.406H205.807L205.677 299.708L205.416 301.01L201.506 302.312L200.854 304.916L198.508 307.52L198.769 310.124L200.463 312.728L202.288 314.03L209.587 316.634L216.756 317.936L219.233 319.238L220.536 320.54L224.446 319.238L228.357 317.936L229.66 316.634L230.964 315.332L234.874 317.936L237.481 321.842H238.784L240.088 323.144L242.695 324.446L243.998 323.144H245.302L247.909 324.446L249.212 327.05H250.515L253.122 328.352V324.446V320.54L251.819 319.238H250.515V317.936H249.212V315.332L250.515 311.426L247.909 307.52L246.605 304.916V301.01L243.998 298.406V297.104L242.695 295.802H240.088H237.481V293.198V290.594L236.178 289.292L234.874 287.99V286.688L232.267 287.99L229.66 289.292L227.053 287.99H227.053Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Новгородская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M301.351 320.54H300.047L297.441 319.238V317.936V316.634L296.137 315.332H294.834V310.124L296.137 307.52L297.441 303.614L298.744 299.708L294.834 295.802L292.227 293.198H290.923H289.62V294.5L285.71 295.802L280.496 297.104L279.192 295.802L277.889 293.198H275.282L273.978 294.5V295.802L271.372 298.406L267.461 299.708L263.551 302.312V303.614V304.916V306.218L262.247 307.52V308.822H263.551L262.247 310.124H259.64L258.337 311.426L257.034 312.728L254.427 311.426H250.516L249.213 315.332V317.936H250.516V319.238H251.82L253.123 320.54V324.446V328.352H257.034L262.247 329.654V330.956V332.258V333.56V337.466L263.551 336.164L267.461 337.466V333.56L268.765 329.654L270.068 330.956L268.765 333.56V338.768L272.675 341.372L273.978 340.07H275.282L279.192 343.976V350.486L284.406 356.996L289.62 355.694V354.392L290.923 353.09L294.834 354.392L298.744 355.694L300.047 354.392L301.351 353.09V354.392V355.694H302.654L303.958 356.996V358.298V360.902L309.172 362.204V363.506L310.475 364.808L313.082 366.11L314.385 368.714L315.689 371.318L324.813 377.828H326.116L327.42 376.526L330.027 377.828H331.33L332.634 376.526L333.937 375.224L336.544 376.526L337.848 379.13L340.454 376.526L339.151 373.922L340.454 372.62L341.758 371.318H340.454H337.848L336.544 368.714V367.412L339.151 366.11H341.758L346.972 363.506L349.579 360.902L348.275 355.694L345.668 354.392V351.788V350.486H340.454H337.848L333.937 345.278L331.33 341.372L328.723 342.674H324.813V341.372V338.768H322.206L320.903 337.466L319.599 336.164V334.862L318.296 333.56L316.992 332.258H315.689V330.956H313.082L309.172 332.258V329.654L307.868 328.352L306.565 327.05L305.261 325.748L303.958 324.446H302.654V323.144L301.351 320.54Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Вологодская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M310.474 470.271L307.868 466.365L306.564 470.271L303.957 472.875H302.654H301.35L300.047 474.177L296.136 471.573L293.53 468.969H290.923L288.316 467.667H287.012L284.405 468.969H281.799H280.495L277.888 475.479L275.281 479.385V480.687L276.585 483.291V485.895L277.888 487.197L280.495 488.499V489.801V491.103V492.405H281.799V493.707V496.311L283.102 497.613L284.405 502.821L285.709 506.727L296.136 505.425L300.047 501.519L305.261 498.915L306.564 497.613H309.171L311.778 495.009L314.385 491.103L316.992 489.801L319.599 488.499L322.205 483.291L326.116 481.989L323.509 479.385H322.205V478.083V475.479L320.902 474.177L318.295 471.573H315.688L313.081 472.875L310.474 468.969V470.271Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Самарская область"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M566.493 431.21L563.886 428.606H557.369L550.851 427.304V423.398V418.19L548.244 416.888L546.941 412.982V409.076L548.244 407.774L549.548 405.17L546.941 402.566H545.637L544.334 401.264V399.962H541.727L540.424 401.264H539.12H535.21H532.603L529.996 402.566L526.086 398.66L523.479 394.754L526.086 393.452L527.389 392.15L524.782 390.848L523.479 389.546L519.568 386.942L515.658 385.64H514.355L513.051 386.942L511.748 385.64V384.338H509.141L506.534 385.64L505.231 384.338H503.927H502.624H501.32L500.017 381.734L501.32 379.13L497.41 377.828L496.106 375.224L497.41 372.62H500.017L501.32 368.714L503.927 364.808V363.506L502.624 362.204V358.298L501.32 354.392L498.713 355.694L494.803 356.996V358.298V359.6H492.196L489.589 360.902L486.982 362.204L485.679 359.6V358.298H483.072L480.465 359.6H479.162L477.858 360.902L475.251 362.204L473.948 363.506L472.644 371.318L467.43 376.526L462.217 381.734L459.61 386.942L457.003 393.452V394.754H458.306L457.003 397.358H454.396L453.093 401.264L451.789 403.868V405.17L453.093 406.472V407.774V410.378L457.003 412.982L460.913 415.586L464.824 424.7L466.127 427.304L468.734 431.21L466.127 436.418L464.824 441.626L463.52 444.23V448.136L466.127 449.438V452.042L464.824 457.25L463.52 462.458L467.43 465.062L471.341 467.666V472.874V479.384V481.988L472.644 483.29L476.555 484.592H480.465L481.768 481.988L484.375 480.686H485.679V481.988H489.589H493.499L496.106 483.29H497.41L498.713 481.988L500.017 480.686L505.231 479.384L507.837 475.478L509.141 474.176H511.748L513.051 476.78V478.082H516.962H518.265L522.175 479.384L523.479 480.686L524.782 481.988H526.086L528.693 485.895L529.996 491.103H531.3L532.603 492.405L531.3 493.707V495.009L533.906 497.613H535.21V501.519L533.906 504.123L537.817 506.727L541.727 508.029L543.031 509.331L544.334 510.633H548.244L550.851 513.237L556.065 508.029L561.279 502.821H565.189H569.1L573.01 496.311L574.313 491.103L575.617 489.801H576.92L578.224 487.197L576.92 484.592V483.29H578.224L579.527 484.592L584.741 485.895L589.955 487.197L591.258 488.499L592.562 489.801L595.169 488.499H596.472H597.775V491.103L600.382 493.707H605.596L610.81 492.405V495.009L612.113 497.613H614.72H617.327L618.631 498.915L621.238 500.217L622.541 498.915H623.845L627.755 496.311L630.362 495.009L634.272 497.613L636.879 498.915L648.61 496.311L656.431 491.103L655.127 488.499L649.914 485.895L648.61 476.78L646.003 471.572L643.396 468.968H640.789H638.182L635.576 465.062L632.969 461.156H630.362H627.755L623.845 457.25V455.948L622.541 453.344L616.024 455.948L609.507 458.552L606.9 457.25L604.293 455.948H599.079H595.169L592.562 453.344L591.258 448.136L584.741 444.23L579.527 440.324L573.01 439.022L570.403 437.72L567.796 435.116L565.189 431.21H566.493Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Ханты-Мансийский АО - Югра"
                                        />
                                        <path
                                            onMouseOver={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                updateHover(
                                                    true,
                                                    e.currentTarget.id
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                updateHover(false, "");
                                            }}
                                            onClick={(
                                                e: React.MouseEvent<
                                                    SVGPathElement,
                                                    MouseEvent
                                                >
                                            ) => {
                                                handleClick(e);
                                            }}
                                            d="M1292.4 686.429L1289.79 687.731H1288.49H1287.19V689.033V690.335L1285.88 695.543L1284.58 700.751L1285.88 702.053H1287.19V696.845L1288.49 691.637L1291.1 689.033L1292.4 687.731V686.429ZM1300.22 695.543V692.939L1298.92 694.241L1297.61 695.543H1300.22ZM1309.35 660.389L1308.04 657.785H1306.74L1305.43 661.691L1304.13 664.295H1301.52H1298.92V665.597L1300.22 666.899L1298.92 669.503L1297.61 672.107V674.711L1296.31 677.315V678.617V679.919L1295.01 682.523L1296.31 683.825L1297.61 677.315L1298.92 676.013L1300.22 674.711V673.409V672.107L1302.83 669.503L1304.13 665.597L1306.74 662.993L1309.35 660.389ZM1318.47 638.255L1317.17 639.557L1314.56 646.067V647.369L1313.26 648.671L1315.86 649.973L1318.47 640.859V638.255ZM1328.9 618.724L1327.59 614.818V618.724L1326.29 621.328V622.63L1328.9 618.724ZM1330.2 600.496V603.1L1331.5 601.798V600.496H1330.2ZM1331.5 580.966L1330.2 578.362L1331.5 579.664V580.966ZM1330.2 565.342L1331.5 567.946V569.248L1332.81 567.946L1331.5 564.04L1330.2 565.342ZM1335.41 540.604V538H1334.11L1332.81 540.604H1335.41ZM1331.5 548.416L1328.9 553.624L1330.2 554.926L1332.81 552.322L1334.11 548.416V544.51L1332.81 541.906L1331.5 540.604L1330.2 541.906L1331.5 544.51V548.416ZM1223.32 613.516L1216.8 605.704L1211.59 599.194L1207.68 593.986V595.288H1206.37V593.986V592.684L1203.77 591.382L1201.16 588.778L1199.86 582.268L1197.25 574.456V573.154V574.456H1195.94L1193.34 571.852L1192.03 569.248H1193.34L1194.64 570.55V571.852H1195.94L1190.73 565.342L1186.82 560.134V558.832V557.53L1182.91 554.926L1181.61 553.624V554.926V556.228H1180.3L1179 557.53L1181.61 558.832L1185.52 561.436V562.738V564.04V562.738H1186.82V565.342H1185.52V566.644L1186.82 567.946L1185.52 571.852L1184.21 570.55H1182.91L1180.3 571.852V574.456L1181.61 577.06L1182.91 578.362L1185.52 587.476L1188.12 596.59L1193.34 600.496L1199.86 605.704L1201.16 609.61V614.818L1203.77 617.422L1205.07 620.026L1212.89 643.463V644.765L1218.1 648.671L1220.71 653.879L1222.01 657.785V662.993L1224.62 665.597L1225.92 668.201L1228.53 678.617L1233.74 686.429L1235.05 685.127V682.523L1233.74 676.013L1235.05 670.805L1236.35 672.107L1240.26 670.805L1242.87 672.107L1245.48 673.409L1246.78 676.013L1248.08 677.315L1245.48 670.805L1242.87 665.597L1241.57 666.899L1238.96 665.597L1236.35 664.295L1233.74 661.691L1228.53 657.785L1224.62 651.275L1223.32 643.463V636.953L1222.01 634.349V631.745L1223.32 630.443L1224.62 627.838L1231.14 626.536L1237.66 629.141L1240.26 630.443L1241.57 631.745L1238.96 629.141L1235.05 626.536L1232.44 623.932L1231.14 621.328L1223.32 613.516Z"
                                            fill="white"
                                            stroke="#D7E1F6"
                                            id="Сахалинская область"
                                        />
                                    </g>
                                </svg>
                            </TransformComponent>
                        </TransformWrapper>
                    </div>
                </TooltipPrimitive.TooltipTrigger>
                {isHoverActive && (
                    <TooltipPrimitive.TooltipContent
                        align="start"
                        alignOffset={x}
                        sideOffset={-y + 10}
                        hideWhenDetached
                        style={{
                            background: "white",
                            padding: "4px 8px",
                            borderRadius: 8,
                        }}
                    >
                        {hoverRegionName}
                    </TooltipPrimitive.TooltipContent>
                )}
            </TooltipPrimitive.Tooltip>
        </TooltipPrimitive.TooltipProvider>
    );
};
