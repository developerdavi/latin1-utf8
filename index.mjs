import { Iconv } from "iconv";
import fs from 'fs';

const iconv = new Iconv('ISO-8859-1', 'UTF-8');

const buffer = iconv.convert(fs.readFileSync('./input'));

fs.writeFileSync('./output', buffer);
