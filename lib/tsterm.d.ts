// Generated by dts-bundle-generator v6.7.0

export declare class CharacterAttributes {
	constructor();
}
declare class RowAndColumn {
	rows: number;
	columns: number;
	constructor(rows: number, columns: number);
	toString(): string;
}
declare class FieldData {
	position: number;
	constructor(position: number);
	isNoDisplay(): boolean;
}
export declare class CharsetInfo {
	name: string;
	font: string;
	isDBCS: boolean;
	bt: number[] | null;
	gt: number[] | null;
	Et: any;
	kt: any;
	St: number;
	Tt: any;
	constructor(name: string, font: string, isDBCS: boolean, i: any, e: any, s: any, u?: number, // unicode euro considerations
	h?: any, r?: any);
	static DEFAULT_FONT_FAMILY: string;
	static TERMINAL_DEFAULT_CHARSETS: CharsetInfo[];
	toString(): string;
}
declare class OIALine {
	xn: any[];
	constructor(ignoredParm: any, width?: number);
}
declare class TypeValuePair {
	type: number;
	value: string;
	constructor(type: number, value: string);
}
export declare type HTMLElementOrNull = (HTMLElement | null);
export declare type HTMLColor = string;
declare class VirtualScreen {
	canvas: HTMLCanvasElement | null;
	selectionCanvas: HTMLCanvasElement | null;
	parentDiv: HTMLElementOrNull;
	textAreaOverlay: HTMLTextAreaElement | null;
	oiaEnabled: number;
	width: number;
	height: number;
	On: any;
	renderer: BaseRenderer | null;
	oiaLine: OIALine;
	Kl: any[];
	defaultWidth: number;
	defaultHeight: number;
	_n: any[];
	websocket: any;
	Qn: any;
	Tl: number | null;
	Sl: number | null;
	Rl: number | null;
	yl: number | null;
	mouseIsDown: boolean;
	jn: boolean;
	Vn: HTMLColor;
	zn: any;
	keyboardMap: any;
	Hn: boolean;
	Yn: any;
	qn: boolean;
	Jn: any[];
	scriptIsRunning: boolean;
	Xn: boolean;
	$n: boolean;
	ti: any;
	li: any;
	ni: boolean;
	ii: string[];
	shortName: string | null;
	longName: string;
	cursorPos: number;
	bi: any;
	attentionSound: any;
	Ei: any;
	mi: any;
	callbacks: any;
	id: any;
	inInsertMode: boolean;
	zi: any;
	contextRightClick: any;
	Ft: any;
	size: number;
	ee: any;
	re?: HTMLElement;
	we?: HTMLElement;
	resizeTimeoutID: any;
	constructor(width: number, height: number);
	static co: any;
	static sessionNames: string[];
	static namesInUse: boolean[];
	nameThisSession(): void;
	getCharsetInfo(): CharsetInfo;
	Pl(): void;
	pi(t: any): void;
	gi(t: any): void;
	Ai(t: number, l: string, n: string): undefined;
	isConnected(): boolean;
	getRendererOrFail(): BaseRenderer;
	getCanvasOrFail(): HTMLCanvasElement;
	getElementByIdOrFail(id: string | null): HTMLElement;
	disconnect(): void;
	closeConnection(closeCode: number, message: string): void;
	getOIAArray(): any;
	initScreen(): void;
	connect(url: string, l: any): void;
	paste(t: string): boolean;
	copy(t: any): void;
	Ui(t: any): void;
	getScreenContents(t: any, l: any, n: any, i: any, e: any, s: any, u: any, h: any): void;
	yi(t: boolean, l: boolean): (string | null);
	setCursorPos(position: number): boolean;
	modifyCursorPos(delta: number): void;
	enterCharacterAtCursor(t: any): void;
	clear(): void;
	handleUnbind(): void;
	removeFromDOM(parentDiv: HTMLElement): void;
	/**

	 */
	handleContainerResize(parentDiv: HTMLElement, t?: number, n?: number): void;
	handleContainerResizeFromUI(parentDiv: HTMLElement, t: VirtualScreen, l?: number, n?: number): void;
	userAttentionSound(): void;
	hasFocus(): boolean;
	static makeTextArea(name: string, width: number, height: number): HTMLTextAreaElement;
	static makeCanvas(id: string, parentDiv: HTMLElement, width: number, height: number, zIndex: number): HTMLCanvasElement;
	Ne(): void;
	me(t: number): any;
	Ee(t: number, l: number): number;
	ke(t: number): any;
	Se(t: number, l: number): number;
	Te(t: number): any;
	Re(t: number, l: number): number;
	ye(t: number): any;
	rowColZBToScreenPos(t: number, l: number): number;
	/**
	  parentDiv is a DOM iv
	  dimensions is generic JS object with .width and .height
	*/
	Oi(parentDiv: HTMLElement, dimensions: any): {
		canvas: HTMLCanvasElement;
		Il: HTMLCanvasElement;
		Pe: HTMLTextAreaElement;
	};
	resize(width: number, height: number, suppressRedraw?: boolean): void;
	handleKeyUp(event: KeyboardEvent): void;
	keyUpHandlerInternal(event: KeyboardEvent): void;
	Qi(event: KeyboardEvent): void;
	Gi(typeValuePair: TypeValuePair, event: KeyboardEvent): boolean;
	static beginsWithAlpha(str: string): boolean;
	keyDownAndPressHandlerInternal(event: KeyboardEvent): void;
	dumpFields(): void;
	runCommand(commandText: string): void;
	Yi(t: number): void;
	qi(t: any): void;
	Zi(t: string): void;
	handleCharCodeInput(charCode: number): void;
	Xi(t: string): string;
	cleanString(t: string): string;
	autotype(t: any, l?: any): void;
	handleMouseMove(event: MouseEvent): void;
	handleMouseUp(event: MouseEvent): void;
	handleMouseDown(event: MouseEvent): void;
	handleKey(typeValuePair: TypeValuePair, l: KeyboardEvent): void;
	handleClick(offsetX: number, offsetY: number, coords: any, screenPos: number): void;
	handleTripleClick(offsetX: number, offsetY: number, coords: any, screenPos: number): void;
	handleClicksInternal(event: MouseEvent): void;
	handleDoubleClick(x: number, y: number, coords: any, screenPos: number, s?: any): void;
	ce(e: any): void;
	fe(t: any): void;
	Li(): void;
	de(t: number, l: number): number;
	ve(t: string): void;
	handleWheel(event: WheelEvent): void;
	handleContextMenu(event: MouseEvent): void;
	establishMobileBrowserInfo(): void;
	buildEventHandlers(): void;
}
declare class BaseRenderer {
	canvas: HTMLElementOrNull;
	screen: VirtualScreen;
	yt: number;
	Ct: number;
	Pt: number;
	Nt: number;
	font: any;
	fontSize: number;
	fontFamily: string;
	fontsNOTReady: boolean;
	unicodeTable: any;
	nl?: string;
	scaleH: number;
	scaleV: number;
	activeWidth: number;
	activeHeight: number;
	charWidth: number;
	charHeight: number;
	ascent: number;
	descent: number;
	leading: number;
	Qt: number;
	jt: number;
	Vt: number;
	Kt: any;
	hasFocus: boolean;
	qt: number;
	Jt: number;
	Zt: number;
	Xt: number;
	Yt: number;
	background: number;
	scaleMethod: number;
	timerDelay: number;
	timerIntervalID: any;
	otherTimerIntervalID: any;
	selectionCTX: CanvasRenderingContext2D | null;
	Bl: boolean;
	Ml: any;
	Ul?: number;
	cl: any;
	fl: any;
	constructor(virtualScreen: VirtualScreen, unicodeTable: any);
	static fontWeight: string;
	static fontStyle: string;
	static fontSize: number;
	static fontFamily: string;
	static useWebColorSpec(colorSpec: string, defaultSpec?: string): string;
	static setFillColor(ctx: CanvasRenderingContext2D, opt1: any, opt2?: any, opt3?: any, opt4?: any): void;
	static setStrokeColor(ctx: CanvasRenderingContext2D, opt1: any, opt2?: any, opt3?: any, opt4?: any): void;
	setGlobalAlpha(ctx: CanvasRenderingContext2D, alphaValue: number): void;
	static pa(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void;
	static Aa(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, startAngle: number, endAngle: number): void;
	static drawCharArraySlice(ctx: CanvasRenderingContext2D, unicodeLine: any[], offset: number, len: number, x: number, y: number): void;
	static ga(ctx: CanvasRenderingContext2D, l: number, n: number, i: number, e: number): void;
	static drawLine(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number): void;
	el(t: any): void;
	static defaultLeading: number;
	calculateCharDimensions(ctx: CanvasRenderingContext2D, pixelSize: number, fontName: string, sampleChar: string): any;
	static il: number;
	al(): number;
	setFontInformation(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void;
	wl(ctx: CanvasRenderingContext2D, l: number[], // ebcdic codes, or similar, not a string yet!
	n: number, i: number, e: number, s: number): void;
	initLineArrays(unicodes: number[], renderingFlags: number[], colors: number[], width: number): void;
	pl(t: number[], l: number, n: number): number;
	static ea: number;
	Al(t: any[], l: any[], n: any[], i: number, e: number, s: any): number;
	clear(): void;
	sl(): void;
	getRowAndColumnFromEventXY(x: number, y: number): RowAndColumn;
	getSelectionCTXOrFail(): CanvasRenderingContext2D;
	redrawTransientElements(): void;
	drawInfoArea(ctx: CanvasRenderingContext2D, screen: VirtualScreen, callAfter: any): void;
	drawSelectionBox(t: number, l: number, n: number, i: number): void;
	xl(): void;
	ll(): void;
	Ol(): void;
	Ll(): void;
	showTheCursor(ctx: CanvasRenderingContext2D, n: number): void;
	Dl(t: number, l: number, n: number, i: number, ctx2: any, ctx: any): void;
	fullPaint(): void;
	handleResize(): void;
}
declare class ScreenElement {
	position: number;
	ebcdicChar: number;
	fieldData: FieldData | null;
	isGraphic: boolean;
	charAttrs: CharacterAttributes | null;
	isModified: boolean;
	inputChar: number;
	field: any;
	ai: boolean;
	pn: boolean;
	constructor(position: number, ebcdicChar: number, fieldData: FieldData | null);
	match(ch: number, isGraphic: boolean): boolean;
	charToDisplay(): number;
	matchAnyOf(arrayOfChars: number[], isGraphic: boolean): boolean;
	toString(): string;
}
declare class PagedVirtualScreen extends VirtualScreen {
	websocket: WebSocket | null;
	screenElements: (ScreenElement | null)[];
	isFormatted: boolean;
	fieldDataMap: any;
	bufferPos: number;
	charsetInfo: CharsetInfo;
	isFieldDataMapCached: boolean;
	Me: boolean;
	Le: number;
	Be: number;
	We: boolean;
	_e: any[];
	constructor(width: number, height: number);
	initScreen(): void;
	setCharsetInfo(name: string): void;
	getCharsetInfo(): CharsetInfo;
	static unicodeEuro: number;
	Ql(t: number): number;
	je(): number;
	Ve(t: string, l: boolean, n: boolean): number[];
	putScreenElement(position: number, screenElement: ScreenElement): void;
	Ui(languageThing: any): void;
	Ke(t: any, l?: any): void;
	He(t: any): void;
	handleWheel(event: WheelEvent): void;
	enterCharacterAtCursor(t: number, l?: any): boolean;
	getScreenElementRowColumn(row: number, column: number): (ScreenElement | null);
	getScreenElementByPosition(position: number): any;
	setCursorPos(newPos: number): boolean;
	getCurrorPos(): number;
	modifyCursorPos(delta: number): void;
	handleFunction(t: string): boolean | undefined;
	Yi(t: number): void;
	handleCharCodeInput(t: number): boolean;
	handleKey(typeValuePair: TypeValuePair, l: KeyboardEvent): void;
	getFieldDataByPosition(position: number, lookInFieldDataMap: boolean): (FieldData | null);
	showScreen(): void;
}
declare class PagedRenderer extends BaseRenderer {
	St: number;
	constructor(canvas: HTMLCanvasElement | null, virtualScreenArg: VirtualScreen, unicodeTable: any);
	unicodeToEBCDIC(t: number): number;
	Gl(t: number): any;
	Al(t: any[], l: any[], n: any[], i: number, e: number, s: any): number;
}
declare class Coordinate {
	x: number;
	y: number;
	constructor(x: number, y: number);
	toString(): string;
}
declare class GraphicsFragment {
	objectType: number;
	data: Uint8Array;
	constructor(objectType: number, source: number[], offset: number, // in source
	length: number);
}
export interface Renderable {
	render(env: GOCAEnvironment, ctx: CanvasRenderingContext2D): void;
}
declare class GOCAEnvironment {
	lineMode: number;
	lineType: number;
	lineEndType: number;
	lineJoinType: number;
	lineWidth: number;
	normalLineWidth: number;
	colorMode: number;
	standardColor: number;
	extendedColor: number;
	rFraction: number;
	gFraction: number;
	bFraction: number;
	mix: number;
	backgroundMix: number;
	markerSetID: number;
	markerSymbol: number;
	patternSetID: number;
	patternSymbol: number;
	arcTransform: number[];
	currentPos: Coordinate;
	inProlog: boolean;
	areaPath: Path2D | null;
	areaFillRule: CanvasFillRule;
	areaHasOutline: boolean;
	constructor();
	mycopy(): GOCAEnvironment;
	toString(): string;
	setLineJoinType(ctx: CanvasRenderingContext2D, newJoinType: number): void;
	setLineEndType(ctx: CanvasRenderingContext2D, newEndType: number): void;
	setColors(ctx: CanvasRenderingContext2D): void;
	getCanvasColor(): string;
}
declare class GraphicsObject {
	objectType: number;
	data: Uint8Array;
	constructor(objectType: number, data: Uint8Array);
	getU16(offset: number): number;
	getS16(offset: number): number;
	parse(graphicsState: GraphicsState): void;
}
declare class GraphicsState {
	outstandingFragmentType: number;
	fragments: GraphicsFragment[];
	objects: GraphicsObject[];
	renderables: Renderable[];
	hasError: boolean;
	constructor();
	render(ctx: CanvasRenderingContext2D, graphicsWidth: number, graphicsHeight: number, activeWidth: number, activeHeight: number): void;
	ingestFragment(fragFlags: number, objectType: number, source: number[], offset: number, // in source
	length: number): void;
	combineFragments(): GraphicsObject;
}
declare class CharacterAttributes3270 extends CharacterAttributes {
	classicBits: number;
	highlighting: number;
	color: number;
	backgroundColor: number;
	characterSet: number;
	outlining: number;
	transparency: number;
	validation: number;
	sisoAllowed: number;
	hn: number;
	rn: number;
	an: number;
	constructor(classicBits?: number);
	copy(): CharacterAttributes3270;
	toString(): string;
	os(): number[];
	cs(t: CharacterAttributes3270): Map<number, number> | null;
	isProtected(): boolean;
	ws(): boolean;
	vs(): boolean;
	isNonDefault(): boolean;
	un(): boolean;
	getHighlightingString(): string;
	getColorString(useBackground: boolean): string;
	incorporateSFE(orderKey: number, order: any): any[] | null;
	static ATTRIBUTE_CLASSIC_BITS: number;
	static ATTRIBUTE_VALIDATION: number;
	static ATTRIBUTE_OUTLINING: number;
	static ATTRIBUTE_HIGHLIGHTING: number;
	static ATTRIBUTE_COLOR: number;
	static ATTRIBUTE_CHARSET: number;
	static ATTRIBUTE_BACKGROUND_COLOR: number;
	static ATTRIBUTE_TRANSPARENCY: number;
	static ATTRIBUTE_SISO: number;
	update(t: any, attributeType: number, attributeValue: number): any;
}
declare class FieldData3270 extends FieldData {
	attributes: CharacterAttributes3270;
	precedingSBAOrder: any;
	length: number;
	constructor(attributes: CharacterAttributes3270, position: number);
	toString(): string;
	isNoDisplay(): boolean;
	setModified(): void;
	clearModified(): void;
	isModified(): boolean;
	ks(): boolean;
	isDisplayNotDetectable(): boolean;
	isEditable(): boolean;
}
declare class Field {
	fieldData: FieldData3270;
	start: number;
	end: number;
	Ie?: number;
	constructor(fieldData: FieldData3270, start: number, end: number);
	size(screenSize: number): number;
	contains(position: number): boolean;
	toString(): string;
}
declare class TN3270EParser {
	screen: VirtualScreen3270;
	messageName: string;
	state: number;
	previousByte: number;
	subData: any[];
	messageData: any[];
	outerMessagePos: number;
	responseBuffer: any[];
	tn3270EMode: boolean;
	printableChars: any[];
	sequenceNumber: number;
	capabilitiesToOffer: number[];
	atEndOfHostMessage: boolean;
	usingAlternateSize: boolean;
	currentPartitionID: number;
	partitionState: number;
	partitionInfoMap: any;
	Bu: boolean;
	sh: boolean;
	aa: boolean;
	qh: number;
	Jh: number;
	lastHeader: any;
	xu: any;
	constructor(virtualScreen: VirtualScreen3270, messageName: string);
	static regularCapabilities: number[];
	static betterCapabilities: number[];
	static failureExplanations: any;
	static WCC_ALARM: number;
	static WCC_KEYBOARD_RESTORE: number;
	static WCC_MDT_RESET: number;
	static COMMAND_WRITE: number;
	static COMMAND_WRITE_LOCAL: number;
	static COMMAND_WRITE_ASCII: number;
	static COMMAND_ERASE_WRITE: number;
	static COMMAND_ERASE_WRITE_LOCAL: number;
	static COMMAND_ERASE_WRITE_ASCII: number;
	static COMMAND_ERASE_WRITE_ALTERNATE: number;
	static COMMAND_ERASE_WRITE_ALTERNATE_LOCAL: number;
	static COMMAND_ERASE_WRITE_ALTERNATE_ASCII: number;
	static COMMAND_ERASE_ALL_UNPROTECTED: number;
	static COMMAND_ERASE_ALL_UNPROTECTED_LOCAL: number;
	static COMMAND_ERASE_ALL_UNPROTECTED_ASCII: number;
	static COMMAND_WRITE_STRUCTURED_FIELD: number;
	static COMMAND_WRITE_STRUCTURED_FIELD_LOCAL: number;
	static COMMAND_READ_BUFFER: number;
	static COMMAND_READ_BUFFER_LOCAL: number;
	static COMMAND_READ_BUFFER_ASCII: number;
	static COMMAND_READ_MODIFIED: number;
	static COMMAND_READ_MODIFIED_LOCAL: number;
	static COMMAND_READ_MODIFIED_ASCII: number;
	static COMMAND_READ_MODIFIED_ALL: number;
	static COMMAND_READ_MODIFIED_ALL_LOCAL: number;
	static COMMAND_READ_MODIFIED_ALL_ASCII: number;
	static ORDER_START_FIELD: number;
	static ORDER_START_FIELD_EXTENDED: number;
	static ORDER_SET_BUFFER_ADDRESS: number;
	static ORDER_SET_ATTRIBUTE: number;
	static ORDER_INSERT_CURSOR: number;
	static ORDER_MODIFY_FIELD: number;
	static ORDER_PROGRAM_TAB: number;
	static ORDER_REPEAT_TO_ADDRESS: number;
	static ORDER_ERASE_UNPROTECTED_TO_ADDRESS: number;
	static ORDER_GRAPHIC_ESCAPE: number;
	static STRFLD_RESET_PARTN: number;
	static STRFLD_READ_PARTN: number;
	static STRFLD_ERASE_RESET: number;
	static STRFLD_LOAD_PROGRAMMED_SYMBOLS: number;
	static STRFLD_SET_REPLY_MODE: number;
	static STRFLD_SET_WINDOW_ORIGIN: number;
	static STRFLD_CREATE_PARTN: number;
	static STRFLD_DESTROY_PARTN: number;
	static STRFLD_ACTIVATE_PARTN: number;
	static STRFLD_UNKNOWN_000F: number;
	static STRFLD_UNKNOWN_0010: number;
	static STRFLD_OUTBOUND_3270_DATA_STREAM: number;
	static STRFLD_SCS_DATA: number;
	static STRFLD_SELECT_FORMAT_GROUP: number;
	static STRFLD_PRESENT_ABSOLUTE_FORMAT: number;
	static STRFLD_PRESENT_RELATIVE_FORMAT: number;
	static STRFLD_INBOUND_3270_DATA_STREAM: number;
	static STRFLD_QUERY_REPLY: number;
	static STRFLD_READ_PARTN_QUERY: number;
	static STRFLD_READ_PARTN_QUERY_LIST: number;
	static STRFLD_READ_PARTN_MODIFIED_ALL: number;
	static STRFLD_READ_PARTN_BUFFER: number;
	static STRFLD_READ_PARTN_MODIFIED: number;
	static STRFLD_SET_MSR_CONTROL: number;
	static STRFLD_DESTINATION_ORIGIN: number;
	static STRFLD_SELECT_COLOR_TABLE: number;
	static STRFLD_LOAD_COLOR_TABLE: number;
	static STRFLD_LOAD_LINE_TYPE: number;
	static STRFLD_SET_PARTN_CHARACTERISTICS: number;
	static STRFLD_MODIFY_PARTN: number;
	static STRFLD_OBJECT_DATA: number;
	static STRFLD_OBJECT_PICTURE: number;
	static STRFLD_OBJECT_CONTROL: number;
	static STRFLD_OEM_DATA: number;
	static STRFLD_DATA_CHAIN: number;
	static STRFLD_EXCEPTION_STATUS: number;
	static STRFLD_LOAD_FORMAT_STORAGE: number;
	static STRFLD_SELECT_IPDS_MODE: number;
	static STRFLD_SET_PRINTER_CHARACTERISTICS: number;
	static STRFLD_BEGIN_END_FILE: number;
	static STRFLD_INBOUND_TEXT_HEADER: number;
	static STRFLD_TYPE1_TEXT_OUTBOUND: number;
	static STRFLD_PCLK_PROTOCOL: number;
	static STRFLD_REQUEST_RECOVERY_DATA: number;
	static STRFLD_RECOVERY_DATA: number;
	static STRFLD_SET_CHECKPOINT_INTERVAL: number;
	static STRFLD_RESTART: number;
	static STRFLD_SAVE_RESTORE_PANEL: number;
	static AID_NO_AID: number;
	static AID_STRUCTURED_FIELD: number;
	static AID_READ_PARTITION: number;
	static AID_TRIGGER_ACTION: number;
	static AID_CLEAR_PARTITION_KEY: number;
	static AID_PA3: number;
	static AID_PA1: number;
	static AID_CLEAR_KEY: number;
	static AID_PA2: number;
	static AID_ENTER_KEY: number;
	static AID_SELECTOR_PEN_MOUSE: number;
	static IAC: number;
	static DONT: number;
	static DO: number;
	static WONT: number;
	static WILL: number;
	static SB: number;
	static AO: number;
	static IP: number;
	static BREAK: number;
	static DM: number;
	static NOP: number;
	static SE: number;
	static EOR: number;
	static OPTION_BINARY_XMIT: number;
	static OPTION_ECHO: number;
	static OPTION_SUPPRESS_GO_AHEAD: number;
	static OPTION_TTYPE: number;
	static OPTION_EOR: number;
	static OPTION_TN3270E: number;
	static DATA_TYPE_3270: number;
	static DATA_TYPE_SCS: number;
	static DATA_TYPE_RESPONSE: number;
	static DATA_TYPE_BIND_IMAGE: number;
	static DATA_TYPE_UNBIND: number;
	static DATA_TYPE_NVT: number;
	static DATA_TYPE_REQUEST: number;
	static DATA_TYPE_SSCPLU: number;
	static DATA_TYPE_PRINT_EOJ: number;
	static DATA_TYPE_9: number;
	static PARSE_STATE_NONE: number;
	static PARSE_STATE_OPTION: number;
	static PARSE_STATE_SUB: number;
	static PARSE_STATE_VERB: number;
	static NO_RESPONSE: number;
	static ERROR_RESPONSE: number;
	static ALWAYS_RESPONSE: number;
	static telnetStateNames: string[];
	addTelnetResponse(b1: number, b2: number): void;
	handleTelnetNegotiation(b: number): void;
	handleSub(): void;
	process(b: number): void;
	read3270DSHeader(messageBytes: any[]): any;
	handleData(t: any[]): void;
	handleDataBody(header: any, l: any[]): false | undefined;
	buildResponse(errorOrNeg1: any, seqHi: number, seqLo: number): number[];
	Ra(t: any): void;
	buildErrorBytes(errorOrNeg1: any): number[];
	static Na(t: number[], l: number, n: number, i: number, e: number[], s: number): number;
	establishCapabilities(t: number[]): void;
	alertNegotiationFailure(failCode: number): void;
	parseCommands(t: number[]): any;
	/**
	   startPos was l
	   erase first was e
	   useAlternate was u

	   returns what parseWriteOrders
	   
	   but augments with key=command, plus
	   
	*/
	parseWrite(t: number[], startPos: number, n: number, partitionID: number, eraseFirst: boolean, resizeProhibited: boolean, useAlternate: boolean): any;
	static Y: number[];
	parseWSF(t: number[], startPos: number, endPos: number, isOutbound: boolean): any;
	incorporatePrintableChars(orderList: any[]): any[];
	addPrintableChar(c: number, isGraphic: boolean): void;
	/**
	returns { orders: orders, // - an array of orders
				  wcc: wcc };

	 */
	parseWriteOrders(t: number[], startIndex: number, n: number): false | {
		orders: any[];
		wcc: number;
	};
	parseObjectData(data: number[], startPos: number, // points at SF length
	length: number, // including length 
	structuredFieldType: number, isOutbound: boolean): null;
	Fe(): void;
}
declare class VirtualScreen3270 extends PagedVirtualScreen {
	username: string;
	password: string;
	deviceType: any;
	enableTN3270E: boolean;
	useBetterCapabilities: boolean;
	capabilities: any;
	inTN3270EMode: boolean;
	sessionType: string;
	sessionDeviceName: any;
	currentPartitionID: number;
	partitionInfoMap: any;
	partitionState: number;
	alternateWidth: number;
	alternateHeight: number;
	usingAlternateSize: boolean;
	convoType: number;
	ipAddress: string | null;
	Ts: number;
	replyMode: number;
	Ds: boolean;
	Ls: any;
	Vs: any;
	Ys: any;
	responseDisposition: any;
	errorStringOrNeg1: any;
	$s: Map<any, any>;
	tu: boolean;
	ii: any;
	bindStatus: boolean;
	nu: boolean;
	iu: number;
	eu: any;
	su: any;
	ou: boolean;
	cu: boolean;
	fu: boolean;
	parser: TN3270EParser | null;
	Cu: any;
	na: any;
	Vu: any;
	graphicsWidth: number;
	graphicsHeight: number;
	Iu: any;
	Tr: any[];
	Sr: boolean;
	latestDemoScreenContext: any;
	graphicsState: GraphicsState;
	static REPLY_MODE_FIELD: number;
	static REPLY_MODE_EXTENDED: number;
	static REPLY_MODE_CHARACTER: number;
	constructor(width: number, height: number);
	static convoTypes: any;
	static co: {
		In: number;
		Dn: number;
	};
	dumpFields(): void;
	/**
	connect only gets called by the global/static start3270!!
	l is a jsonObject like:
		{
		  host:  <hostnameString>,
		  port:  <portNumber>,
		  security: <anIntegerInSecurityTypeEnumeration>,  // defaults to 0
		  la:       <dataPertainingToSecurity>             // defaults to 0
		}
	*/
	connect(url: string, l: any): void;
	showScreen(): void;
	keepAlive(): void;
	sendKeepAlive(t: number): void;
	dispatchWSMessage(wsJSONMessage: any): void;
	handle3270HostMessage(wsJSONMessage: any): void;
	eorAndSend(byteArray: number[]): void;
	sendBytes(byteArray: number[]): void;
	sendBytesU8(byteArray: Uint8Array): void;
	sendNegotiationResponse(t: number, l: number[]): void;
	getLUName(): string;
	wu(): number;
	getAlternateWidth(): number;
	getAlternateHeight(): number;
	handleTripleClick(offsetX: number, offsetY: number, coords: any, screenPos: number): void;
	setDeviceType(t: any): void;
	getDeviceType(): any;
	getAutomationProperties(): any;
	mu(coords: any, position: number): void;
	handleClick(offsetX: number, offsetY: number, coords: any, screenPos: number): void;
	getScreenContents(t: any, l: number, n: number, i: number, e: any, s: any, u: any, h: any): string;
	autotype(t: string, l: number): boolean;
	paste(t: string): boolean;
	getParserOrFail(location: string): TN3270EParser;
	getRenderer3270OrFail(location: string): Renderer3270;
	static oiaWarnCount: number;
	getOIAArray(): any;
	clear(): void;
	doPostLoadStuff(): void;
	Nu(): void;
	Pu(): void;
	Fu(): void;
	Ou(t: any): any;
	getFieldData3270ByPositionNoNull(position: number, lookInFieldDataMap: boolean): FieldData3270;
	getFieldData3270ByPosition(position: number, lookInFieldDataMap: boolean): (FieldData3270 | null);
	Lu(t: number): boolean;
	enterCharacterAtCursor(t: number): boolean;
	ku(): void;
	clearCachedFieldInfo(): void;
	cacheFieldDataMap(): boolean;
	Su(t: number, l?: any): void;
	setCharAttrs(position: number, charAttrs: CharacterAttributes3270): void;
	handleErase(blockResize: boolean, isAlternateSize: boolean): void;
	static IMPLICIT_PARTITION: number;
	Yu(partitionID: number): boolean;
	handleWriteCommand(t: any): undefined;
	reportAttributeUpdateFailures(order: any, failureArray: any[]): void;
	static readBA(b1: number, b2: number): number;
	handleWriteOrders(orders: any[]): false | undefined;
	oh(someMap: Map<any, any>, l: any): void;
	fh(): void;
	Pl(): void;
	processTN3270Command(t: any): void;
	nvtSendBytes(t: number[]): void;
	ir(t: string): number;
	static qCommands: string[];
	static nh: any;
	static ih: number[];
	static st: any;
	handleFunction(fname: string): boolean | undefined;
	kr(): boolean;
	wr(): void;
	sr(): boolean;
	vr(): void;
	doReset(): void;
	handleEraseField(): undefined;
	static bh: number[];
	static wi: number;
	static Pt: number[];
	static Et: number[];
	static St: number[];
	static yt: number[];
	static xt: number[];
	static Mh: any;
	_u(fieldData: FieldData3270, l: FieldData3270): boolean | undefined;
	handleEraseEOF(): undefined;
	handleEraseInput(): void;
	zh(t: number, l: number, n: number, i: boolean, e: boolean): void;
	handleEraseWord(): undefined;
	Qu(t: number, l: number, n: number): boolean;
	doDelete(): void;
	handleEnterSpecialCharacter(ch: number): void;
	handleCursorMovement(delta: number): void;
	er(): number | null;
	handleNewLine(): undefined;
	Tu(): void;
	doTab(): undefined;
	Cr(): void;
	Nr(): void;
	Pr(): void;
	handleBackspace(): void;
	handleHome(): undefined;
	handleBackTab(): undefined;
	handleEnd(): undefined;
	Wu(t: FieldData3270): boolean;
	ve(t: string): void;
	ur(t: number): void;
	Fr(t: any, l: QReply): void;
	doReadModified(aid: number): void;
	doReadModifiedAll(aid: number): void;
	Dr(t: number[], l: boolean, n?: boolean): void;
	xr(t: number[]): void;
	static encodeBAArray: number[];
	static encodePosition(partitionInfo: any, position: number): {
		lr: number;
		nr: number;
	};
	_h(t: number): void;
	buildReadResponseHeader(): number[];
	Mr(): number[];
	Ur(t: number[], l: number): void;
	Lr(): boolean;
	static isShortReadAID(aid: number): boolean;
	gatherModifiedAndSend(readCommand: number, aid: number): void;
	matchEbcdic(ebcdicChars: number[], n: number): boolean;
	findFirstEbcdicMatchOnRow(ebcdicCharArray: number[], // but really a number array with one broken call in uses
	startColumn: number, endColumn: number, row: number): number;
	getRowCharsAsString(rowNumber: number, startColumn: number, length: number): string;
	Qr(t: number, n: number, i: number, e: number): string;
	findMatchingRow(firstLine: number, // 0 based or 1 based??
	l: boolean, n: boolean, // is not used??
	startColumn: number, startColumnChar: number, endColumn: number, endColumnChar: number, allowableMiddleChars: number[]): number;
	Rr(t: number): any;
	dh(t: number): number | null;
	zr(t: number): number | null;
	Kr(position: number, isEditable: boolean, n: boolean): number | null;
	findMatchingFieldNearPosition(position: number, searchBackwards: boolean, isEditable: boolean, thingy: boolean): number | null;
	findMatchingEditableField(position: number, searchBackwards: boolean): number | null;
	isMatchingField(position: number, element: ScreenElement, requireEditableField: boolean): boolean;
	findBoxTopRow(t: number, startColumn: number, endColumn: number): number;
	findBoxBottomRow(t: number, startColumn: number, endColumn: number): number;
	findBoxDividerRow(t: number, startColumn: number, endColumn: number): number;
	static ebcdicFile: number[];
	static ebcdicCommand: number[];
	static ebcdicMXI: number[];
	getDemoScreenContext(): any;
	getE3270ScreenContextInfo(t: any, n: any, // bound, not used
	i: number, e: number): void;
	getMXIScreenContextInfo(context: any, screenPos: number, // not used inbody
	n: number, i: number): void;
	getDemoScreenContextPlus(screenPos: number): any;
	Ui(customizations: any): void;
	handleContextMenu(event: MouseEvent): void;
	handleDoubleClick(x: number, y: number, coords: any, screenPos: number, s?: any): void;
	Li(): void;
	handleSSCPData(t: any): void;
	handleNVTData1(t: any): void;
	handleNVTData2(t: any): void;
	nvtSendScreen(): void;
	handleProgramTab(orders: any, l: number, n: number, i: number): undefined;
	rh(t: any[], l: number): number;
	buildImplicitPartitionReply(t: number, l: number): Uint8Array;
	buildUsableAreaReply(t: number, l: number): Uint8Array;
	buildUsableAreaReply_new(altWidth: number, altHeight: number): Uint8Array;
	static fh: number[];
	buildDBCSCharacterSetReply(): Uint8Array;
	buildRPQReply(): boolean;
	static buildCodeSummaryReply(isDBCS: boolean): number[];
	doQueryReply(specificCodes: number[] | null): void;
	handleStructuredField(t: any): void;
	handleEraseAllUnprotected(): void;
}
declare class QReply {
	capacity: number;
	fill: number;
	data: Uint8Array;
	constructor(size: number);
	addByte(b: number): void;
	addCodeReply(qCode: number, dataBytes: number[]): void;
	addU8CodeReply(qCode: number, dataBytes: Uint8Array): void;
	getTelnetBytes(): number[];
	toB64(): string;
	static CODE_SUMMARY: number;
	static CODE_USABLE_AREA: number;
	static CODE_IMAGE: number;
	static CODE_TEXT_PARTITIIONS: number;
	static CODE_ALPHANUMERIC_PARTITIONS: number;
	static CODE_CHARACTER_SETS: number;
	static CODE_COLOR: number;
	static CODE_HIGHLIGHTING: number;
	static CODE_REPLY_MODES: number;
	static CODE_FIELD_VALIDATION: number;
	static CODE_MSR_CONTROL: number;
	static CODE_FIELD_OUTLINING: number;
	static CODE_PARTITION_CHARACTERISTICS: number;
	static CODE_OEM_AUXILIARY_DEVICE: number;
	static CODE_FORMAT_PRESENTATION: number;
	static CODE_DBCS_ASIA: number;
	static CODE_SAVE_RESTORE_FORMAT: number;
	static CODE_FORMAT_STORAGE_AUX_DEVICE: number;
	static CODE_DISTRIBUTED_DATA_MANAGEMENT: number;
	static CODE_STORAGE_POOLS: number;
	static CODE_DOC_INTERCHANGE_ARCHITECTURE: number;
	static CODE_DATA_CHAINING: number;
	static CODE_AUXILIARY_DEVICE: number;
	static CODE_3270_IPDS: number;
	static CODE_PRODUCT_DEFINED_DATA_STREAM: number;
	static CODE_ANOMALY_IMPLEMENTATION: number;
	static CODE_IBM_AUXILIARY_DEVICE: number;
	static CODE_BEGIN_END_OF_FILE: number;
	static CODE_DEVICE_CHARACTERISTICS: number;
	static CODE_RPQ_NAMES: number;
	static CODE_DATA_STREAMS: number;
	static CODE_IMPLICIT_PARTITION: number;
	static CODE_PAPER_FEED_TECHNIQUES: number;
	static CODE_TRANSPARENCY: number;
	static CODE_SETTABLE_PRINTER_CHARACTERISTICS: number;
	static CODE_IOCA_AUXILIARY_DEVICE: number;
	static CODE_COOPERATIVE_PROCESSING_REQUESTOR: number;
	static CODE_SEGMENT: number;
	static CODE_PROCEDURE: number;
	static CODE_LINE_TYPES: number;
	static CODE_PORT: number;
	static CODE_GRAPHIC_COLOR: number;
	static CODE_EXTENDED_DRAWING_ROUTINE: number;
	static CODE_GRAPHIC_SYMBOL_SETS: number;
	static CODE_NULL: number;
	static standardProcedureReply: number[];
	static standardSegmentReply: number[];
	static standardStoragePoolsReply: number[];
	static standardLineTypesReply: number[];
	static standardTransparencyReply: number[];
	static standardColorReply: number[];
	static standardHighlightingReply: number[];
	static standardReplyModesReply: number[];
	static standardAuxDeviceReply: number[];
	static standardCharsetsReply: number[];
	static standardGraphicSymbolReply: number[];
	static standardDBCSAsiaReply: number[];
	static standardDDMReply: number[];
	static standardValidationReply: number[];
	static standardAlphanumericPartitionsReply: number[];
	static standardCodePortReply1: number[];
	static standardCodePortReply2: number[];
	static standardGraphicColorReply: number[];
}
export interface EbcdicUnicodePair {
	ebcdicChar: number;
	unicodeChar: number;
}
declare class Renderer3270 extends PagedRenderer {
	Jl: number;
	colorPalette: number[];
	Xl: number;
	$l: number;
	tn: number;
	ln: number;
	nn: boolean;
	in: boolean;
	constructor(virtualScreen: VirtualScreen3270, unicodeTable: any);
	static makeRGBColor(r: number, g: number, b: number): number;
	colorFromAttributes(charAttrs: CharacterAttributes3270): number;
	static defaultScreenElement: ScreenElement;
	static ebcdic1047ToUnicode: number[];
	static graphicEbcdicToUnicode: number[];
	static specialSubstitutionTable: EbcdicUnicodePair[];
	static getSpecialSubstitute(c: number): number;
	static isSpecialMark(c: number): boolean;
	setRenderingData(lineIndex: number, // was t
	unicodeArray: number[], // was l 
	renderingFlagsArray: number[], // was n
	charIndex: number, // was i
	elementArg: ScreenElement | null, // was e
	field: Field, // was s
	u: number): void;
	getElementColor(element: ScreenElement, field: Field): number;
	renderCharactersSpecialCases(ctx: CanvasRenderingContext2D, unicodeLine: number[], lineOffset: number, len: number, x: number, baseY: number, isReverse: boolean): void;
	static get2DContextOrFail(canvas: HTMLCanvasElement): CanvasRenderingContext2D;
	static nullColor: number;
	fullPaint(): void;
	similarCharRunLength(colorArray: number[], renderingFlagsArray: number[], dbcsArray: Uint8Array, startingPos: number, charPosInLine: number, lineWidth: number): number;
	static buildDBCSArray(screen: VirtualScreen3270): Uint8Array;
	drawCharOutlining(ctx: CanvasRenderingContext2D, outlineSpec: any): void;
	renderGraphics(canvas: HTMLCanvasElement, // Ya.prototype.Fn - but with more arguments!
	graphicsState: GraphicsState, graphicsWidth: number, graphicsHeight: number, activeWidth: number, activeHeight: number): void;
}
export declare class TerminalLauncher {
	constructor();
	static renderTest(screenParms: any): void;
	static wsfBytes2: number[];
	static wsfBytes: number[];
	static parseTest(screenParms: any): void;
	static start3270: (screenParms: any, cnxnSettings: any, i: any, callbacks: any, additionalScreenProperties: any) => VirtualScreen3270;
}

export {};