import { BigDecimal, BigInt, Address, dataSource } from '@graphprotocol/graph-ts';

export let ZERO = BigInt.fromI32(0);
export let ZERO_BD = BigDecimal.fromString('0');
export let ONE_BD = BigDecimal.fromString('1');
export let MIN_VIABLE_LIQUIDITY = BigDecimal.fromString('0.01');

export enum TokenBalanceEvent {
  SWAP_IN,
  SWAP_OUT,
  JOIN,
  EXIT,
}

export let ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export class AddressByNetwork {
  public mainnet: string;
  public kovan: string;
  public goerli: string;
  public rinkeby: string;
  public polygon: string;
  public fuji: string;
  public fantom: string;
  public arbitrum: string;
  public avalanche: string;
  public dev: string;
}

let network: string = dataSource.network();

let vaultAddressByNetwork: AddressByNetwork = {
  mainnet: '0x9aed52F3074ba468c6ad17822b8833210868c31b',
  kovan: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
  goerli: '0x65748E8287Ce4B9E6D83EE853431958851550311',
  rinkeby: '0xF07513C68C55A31337E3b58034b176A15Dce16eD',
  polygon: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
  fuji: '0x9aed52F3074ba468c6ad17822b8833210868c31b',
  arbitrum: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
  dev: '0xa0B05b20e511B1612E908dFCeE0E407E22B76028',
  fantom: '0x20dd72Ed959b6147912C2e529F0a0C651c33c9ce',
  avalanche: '0xad68ea482860cd7077a5D0684313dD3a9BC70fbB'
};

let wethAddressByNetwork: AddressByNetwork = {
  mainnet: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c', //WFTM
  kovan: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
  goerli: '0x9A1000D492d40bfccbc03f413A48F5B6516Ec0Fd',
  rinkeby: '0x80dD2B80FbcFB06505A301d732322e987380EcD6',
  polygon: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  fuji: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
  arbitrum: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
  dev: '0x4CDDb3505Cf09ee0Fa0877061eB654839959B9cd',
  fantom: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', //WFTM
  avalanche: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'
};

let wbtcAddressByNetwork: AddressByNetwork = {
  mainnet: '0x9d78950bc4C531D32C3F874120F0B96213D81DFC',
  kovan: '0x1C8E3Bcb3378a443CC591f154c5CE0EBb4dA9648',
  goerli: '0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86',
  rinkeby: '0xb4761d0481B4f7a8A858D2796eEF3DAa2f3D9D2c',
  polygon: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
  fuji: '0x9d78950bc4C531D32C3F874120F0B96213D81DFC',
  arbitrum: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
  dev: '0xcD80986f08d776CE41698c47f705CDc99dDBfB0A',
  fantom: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
  avalanche: '0x50b7545627a5162F82A992c33b87aDc75187B218'
};

let usdAddressByNetwork: AddressByNetwork = {
  mainnet: '0x0a35823b2C0a025D97e4002aec5038b96087942D', // USDC
  kovan: '0xc2569dd7d0fd715B054fBf16E75B001E5c0C1115',
  goerli: '0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86',
  rinkeby: '0x70b55Af71B29c5Ca7e67bD1995250364C4bE5554',
  polygon: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  fuji: '0x0a35823b2C0a025D97e4002aec5038b96087942D',
  arbitrum: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
  dev: '0x1528f3fcc26d13f7079325fb78d9442607781c8c',
  fantom: '0x04068da6c83afcfa0e13ba15a6696662335d5b75',
  avalanche: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118'
};

let usdcAddressByNetwork: AddressByNetwork = {
  mainnet: '0xfb8fa9f5f0bd47591ba6f7c75fe519e3e8fde429',
  kovan: '0xc2569dd7d0fd715B054fBf16E75B001E5c0C1115',
  goerli: '0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86',
  rinkeby: '0x70b55Af71B29c5Ca7e67bD1995250364C4bE5554',
  polygon: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  fuji: '0xfb8fa9f5f0bd47591ba6f7c75fe519e3e8fde429',
  arbitrum: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
  dev: '0x7c0c5AdA758cf764EcD6bAC05b63b2482f90bBB2',
  fantom: '0x04068da6c83afcfa0e13ba15a6696662335d5b75',
  avalanche: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664'
};

let balAddressByNetwork: AddressByNetwork = {
  mainnet: '0xe7a282dA986F01dE6677250C90cE22A819CE9a9d', //BEETS
  kovan: '0x41286Bb1D3E870f3F750eB7E1C25d7E48c8A1Ac7',
  goerli: '0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86',
  rinkeby: '0x8850Fd0C65d9B2B168153FAc6bAa269A566c4ef7',
  polygon: '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3',
  fuji: '0xe7a282dA986F01dE6677250C90cE22A819CE9a9d',
  arbitrum: '0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8',
  dev: '0xf702269193081364E355f862f2CFbFCdC5DB738C',
  fantom: '0xf24bcf4d1e507740041c9cfd2dddb29585adce1e', //BEETS
  avalanche: '0xD81D45E7635400dDD9c028839e9a9eF479006B28'
};

let daiAddressByNetwork: AddressByNetwork = {
  mainnet: '0x4b20b17bdb9991a8549f5ceb8bd813419e537209',
  kovan: '0x04DF6e4121c27713ED22341E7c7Df330F56f289B',
  goerli: '0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86',
  rinkeby: '0x12c615406F20eDcBDa50888f9fd6734dC4836417',
  polygon: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
  fuji: '0x4b20b17bdb9991a8549f5ceb8bd813419e537209',
  arbitrum: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  dev: '0x5C0E66606eAbEC1df45E2ADd26C5DF8C0895a397',
  fantom: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
  avalanche: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70'
};

let ausdAddressByNetwork: AddressByNetwork = {
  mainnet: '0x4b20b17bdb9991a8549f5ceb8bd813419e537209',
  kovan: '0x04DF6e4121c27713ED22341E7c7Df330F56f289B',
  goerli: '0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86',
  rinkeby: '0x12c615406F20eDcBDa50888f9fd6734dC4836417',
  polygon: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
  fuji: '0x4b20b17bdb9991a8549f5ceb8bd813419e537209',
  arbitrum: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  dev: '0x5C0E66606eAbEC1df45E2ADd26C5DF8C0895a397',
  fantom: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
  avalanche: '0x783C08b5F26E3daf8C4681F3bf49844e425b6393'
};

let mimAddressByNetwork: AddressByNetwork = {
  mainnet: '0x4b20b17bdb9991a8549f5ceb8bd813419e537209',
  kovan: '0x04DF6e4121c27713ED22341E7c7Df330F56f289B',
  goerli: '0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86',
  rinkeby: '0x12c615406F20eDcBDa50888f9fd6734dC4836417',
  polygon: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
  fuji: '0x4b20b17bdb9991a8549f5ceb8bd813419e537209',
  arbitrum: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  dev: '0x5C0E66606eAbEC1df45E2ADd26C5DF8C0895a397',
  fantom: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
  avalanche: '0x130966628846BFd36ff31a822705796e8cb8C18D'
};

function forNetwork(addressByNetwork: AddressByNetwork, network: string): Address {
  if (network == 'mainnet') {
    return Address.fromString(addressByNetwork.mainnet);
  } else if (network == 'kovan') {
    return Address.fromString(addressByNetwork.kovan);
  } else if (network == 'goerli') {
    return Address.fromString(addressByNetwork.goerli);
  } else if (network == 'rinkeby') {
    return Address.fromString(addressByNetwork.rinkeby);
  } else if (network == 'matic') {
    return Address.fromString(addressByNetwork.polygon);
  } else if (network == 'fuji') {
    return Address.fromString(addressByNetwork.fuji);
  } else if (network == 'fantom') {
    return Address.fromString(addressByNetwork.fantom);
  } else if (network == 'arbitrum-one') {
    return Address.fromString(addressByNetwork.arbitrum);
  } else if (network == 'avalanche') {
    return Address.fromString(addressByNetwork.avalanche);
  } else {
    return Address.fromString(addressByNetwork.dev);
  }
}

export let VAULT_ADDRESS = forNetwork(vaultAddressByNetwork, network);
export let WETH: Address = forNetwork(wethAddressByNetwork, network);
export let WBTC: Address = forNetwork(wbtcAddressByNetwork, network);
export let USD: Address = forNetwork(usdAddressByNetwork, network);
export let USDC: Address = forNetwork(usdcAddressByNetwork, network);
export let BAL: Address = forNetwork(balAddressByNetwork, network);
export let DAI: Address = forNetwork(daiAddressByNetwork, network);

export let MIM: Address = forNetwork(mimAddressByNetwork, network);
export let AUSD: Address = forNetwork(ausdAddressByNetwork, network);


export let PRICING_ASSETS: Address[] = [WETH, USDC, USD, DAI, MIM, AUSD, BAL];
export let USD_STABLE_ASSETS: Address[] = [USDC, DAI, USD, AUSD];

//export let PRICING_ASSETS: Address[] = [WETH, WBTC, USDC, DAI, BAL, MIM, AUSD];
//export let USD_STABLE_ASSETS: Address[] = [USDC, DAI, AUSD, MIM];
