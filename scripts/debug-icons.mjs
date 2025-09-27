// Debug script to check available icons
import { awsIcons, resourceIcons, categoryIcons } from '../src/lib/awsicons';

console.log('AWS Service Icons:', Object.keys(awsIcons).length);
console.log('Resource Icons:', Object.keys(resourceIcons).length);
console.log('Category Icons:', Object.keys(categoryIcons).length);

// Sample entries
console.log('\nSample AWS Service Icons:');
Object.keys(awsIcons).slice(0, 5).forEach(key => {
  console.log(`  ${key}: ${awsIcons[key]}`);
});

console.log('\nSample Resource Icons:');
Object.keys(resourceIcons).slice(0, 5).forEach(key => {
  console.log(`  ${key}: ${resourceIcons[key]}`);
});

console.log('\nSample Category Icons:');
Object.keys(categoryIcons).slice(0, 5).forEach(key => {
  console.log(`  ${key}: ${categoryIcons[key]}`);
});

// Check if specific icons exist
const samplesToCheck = [
  'Amazon-EC2',
  'AWS-Lambda',
  'Amazon-Route-53',
  'Amazon-CloudFront',
  'Res-Res-Storage-Res-Amazon-Simple-Storage-Service-Bucket-48',
  'Cat---Arch-Category-Compute-64'
];

console.log('\nChecking specific icons:');
samplesToCheck.forEach(key => {
  const inAws = key in awsIcons;
  const inRes = key in resourceIcons;
  const inCat = key in categoryIcons;
  console.log(`  ${key}: AWS=${inAws}, Resource=${inRes}, Category=${inCat}`);
});