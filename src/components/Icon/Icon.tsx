import React from 'react';
import { classResolver, PREFIX } from '../../utils/utils';
import withUtilities from '../../utilitiesHOC';
import type { UtilitiesProps } from '../../types';

// Define all available icon types
export type IconName = 
  | 'adapter-plug' | 'adult' | 'adults-only' | 'air-conditioner' | 'airplane-going' 
  | 'airplane-return' | 'alarm-clock' | 'all-inclusive' | 'american-kitchen' | 'armchair'
  | 'arrow-bold-down' | 'arrow-bold-left' | 'arrow-bold-right' | 'arrow-bold-up'
  | 'artificial-intelligence' | 'assistances' | 'assistances-ui' | 'atm' | 'atm-transmission'
  | 'audioguide' | 'audit' | 'baby' | 'baby-belt' | 'baby-car' | 'baby-chair'
  | 'baby-changing' | 'baby-monitor' | 'baby-tub' | 'backpack' | 'backpack-filled'
  | 'bag' | 'balcony' | 'bar-chart' | 'bath' | 'bathrobe' | 'bathroom'
  | 'bathroom-accessories' | 'beach' | 'beach-umbrella' | 'beer' | 'bed'
  | 'billing-error' | 'blackout' | 'boarding-group' | 'boat' | 'book' | 'booking'
  | 'bookmark' | 'bookmark-filled' | 'breakfast' | 'budget' | 'budget-circle'
  | 'buses' | 'buses-ui' | 'business' | 'calendar' | 'calendar-flex'
  | 'calendar-no-available' | 'callcenter' | 'camera' | 'camp-fire' | 'carpet-floor'
  | 'casino' | 'card' | 'cars' | 'cars-ui' | 'cars-insurance' | 'cars-insurance-ui'
  | 'cash' | 'catv' | 'cell-phone' | 'change' | 'change-ui' | 'chat' | 'check-in' | 'check-out' | 'checkmark'
  | 'checkmark-circle' | 'checkmark-circle-filled' | 'chevron-down' | 'chevron-left'
  | 'chevron-right' | 'chevron-up' | 'children-games' | 'cigarette' | 'cigarette-not-allowed'
  | 'circuits' | 'circuits-ui' | 'city' | 'click-to-pay' | 'clip' | 'cross' | 'cloudy'
  | 'cocktail' | 'coffee' | 'copy' | 'coupon' | 'cruises' | 'cruises-ui' | 'cultural'
  | 'dashboard' | 'departure' | 'disability' | 'discount' | 'disney' | 'disney-ui' | 'document'
  | 'dollar-cash' | 'dolphin' | 'door' | 'door-man' | 'download' | 'drinks'
  | 'dry-cleaner' | 'dryer' | 'dvd' | 'earth' | 'edit' | 'elevator' | 'electric-drive'
  | 'entertainment' | 'error-circle' | 'eye' | 'family' | 'favorite' | 'filter'
  | 'flash-light' | 'flag' | 'flight-change' | 'flight-check-in' | 'flight-reschedule'
  | 'flights' | 'flights-ui' | 'food' | 'fpl' | 'gallery' | 'games' | 'garden'
  | 'gastronomy' | 'geolocation' | 'get-invoice' | 'getaways' | 'getaways-ui' | 'gift'
  | 'golf' | 'grid' | 'grill' | 'gym' | 'hailing' | 'hairdresser' | 'hamburger-menu'
  | 'handbag' | 'heating' | 'hot' | 'hotel-bell' | 'hotel-pickup' | 'hotel-resort'
  | 'hotel-resort-ui' | 'hotels' | 'hotels-ui' | 'hybrid-drive' | 'imbatible'
  | 'imbatible-ui' | 'info' | 'info-circle' | 'info-circle-filled' | 'inspiration'
  | 'inspiration-ui' | 'interlocutor' | 'international-installments' | 'iron' | 'jacuzzi'
  | 'jav' | 'kitchen-kit' | 'kms' | 'kms-limited' | 'kms-unlimited' | 'laptop'
  | 'light-bulb' | 'list' | 'location' | 'lock' | 'logo-despegar' | 'loyalty'
  | 'loyalty-filled' | 'magic-band' | 'mail' | 'manual-transmission' | 'mask'
  | 'massage' | 'maximize' | 'message' | 'miles' | 'miles-limited' | 'miles-unlimited'
  | 'minibar' | 'minimize' | 'minus' | 'moon' | 'more' | 'more-outline' | 'more-vertical'
  | 'multi-product' | 'my-trips-ui' | 'new-window' | 'notification' | 'notification-filled'
  | 'offers' | 'offers-ui' | 'offline' | 'order' | 'outdoor' | 'pearl' | 'packages'
  | 'packages-ui' | 'package-complete-ui' | 'package-complete' | 'parking'
  | 'parking-en' | 'parking-not-available' | 'parking-not-available-en' | 'partly-cloudy'
  | 'pause' | 'pet' | 'pets-not-allowed' | 'phone' | 'pickup-point' | 'picture'
  | 'pig-offer-filled' | 'pix' | 'planning-calendar' | 'play' | 'plus' | 'pm-debit'
  | 'pm-deposit' | 'pm-internet-banking' | 'pm-pad' | 'poi' | 'points' | 'pregnant'
  | 'promotion' | 'purchases' | 'question' | 'question-circle' | 'question-circle-filled'
  | 'qr' | 'rainy' | 'read' | 'reception' | 'refresh' | 'refund' | 'rentals'
  | 'rentals-ui' | 'room' | 'room-service' | 'safeguard' | 'sauna' | 'search'
  | 'seat' | 'seat-sideways' | 'send' | 'share' | 'share-ios' | 'slider'
  | 'smiley-happy' | 'smiley-mad' | 'smiley-neutral' | 'smiley-sad' | 'smiley-very-happy'
  | 'snowing' | 'social-behance' | 'social-dribbble' | 'social-facebook'
  | 'social-facebook-filled' | 'social-google' | 'social-google-plus' | 'social-instagram'
  | 'social-medium' | 'social-pinterest' | 'social-twitter' | 'social-whatsapp'
  | 'social-whatsapp-filled' | 'social-youtube' | 'social-x' | 'spa' | 'special-requests'
  | 'special-transfer' | 'square-meter' | 'stairs' | 'star-circle' | 'store' | 'stormy'
  | 'subarrow-bold-right' | 'sunny' | 'swap-arrows' | 'swimming-pool' | 'kindergarten'
  | 'tennis' | 'thumbs-down' | 'thumbs-up' | 'thumbs-down-filled' | 'thumbs-up-filled'
  | 'ticket' | 'tickets' | 'tickets-ui' | 'time' | 'towels' | 'town' | 'train'
  | 'trained-staff' | 'trash' | 'traslate' | 'traslate-ui' | 'travel-kit' | 'trend-down'
  | 'trend-up' | 'trolley' | 'tv' | 'two-cards' | 'two-hearts' | 'universal'
  | 'universal-ui' | 'usb-charger' | 'user' | 'vaccines' | 'video' | 'view-360'
  | 'visa' | 'visa-vaccines' | 'voucher-bus' | 'voucher-rentals' | 'walking'
  | 'warning' | 'warning-filled' | 'wifi' | 'wash-machine' | 'ceiling-fan'
  | 'ciga-not-allowed' | 'cleaning-service' | 'clothes-hanger' | 'clothes-line'
  | 'connected-rooms' | 'coupon-points' | 'cradle' | 'crypto' | 'desk' | 'despegar-icbc'
  | 'dining-room' | 'dishwasher' | 'door-bell' | 'double-bed' | 'dressing-room'
  | 'error-circle-filled' | 'ethernet' | 'extinguisher' | 'eye-closed' | 'fan'
  | 'favorite-filled' | 'fence' | 'fire-place' | 'first-aid-kit' | 'freezer' | 'fridge'
  | 'hair-dryer' | 'handbag-filled' | 'hob' | 'hot-water' | 'house' | 'house-hold'
  | 'ice-machine' | 'ipad' | 'ipod-base' | 'ironing-board' | 'kid' | 'kid-bathrobe'
  | 'kid-book' | 'kid-dishes' | 'kid-play' | 'kid-slippers' | 'kitchen' | 'kitchen-island'
  | 'kitchen-sink' | 'latch' | 'living' | 'locker' | 'lower-floor' | 'magnetic-key'
  | 'marble-floor' | 'microphone' | 'microwave' | 'mirror' | 'mixer' | 'mosquito-net'
  | 'oven' | 'paid-wifi' | 'pay-later' | 'pig-offer' | 'pillow' | 'plug' | 'plug-cap'
  | 'privacy' | 'private-entrance' | 'private-property' | 'radio' | 'reels' | 'safe-box'
  | 'safe-box-money' | 'safe-door' | 'security-alarm' | 'self-transfer' | 'settings'
  | 'shampoo' | 'sheet' | 'shower' | 'slippers' | 'smart-tv' | 'smoke-sensor'
  | 'soap' | 'logo-ai' | 'soundproof-window' | 'spice' | 'star-filled' | 'suitcase'
  | 'suitcase-filled' | 'table' | 'tablet' | 'tea-set' | 'terrace' | 'toaster'
  | 'toilet-paper' | 'top-floor' | 'translate' | 'transmission' | 'trip-cradle'
  | 'tv-streaming' | 'trophy' | 'underground-floor' | 'unlock' | 'users' | 'videogames'
  | 'waffles' | 'wardrobe' | 'whirlpool' | 'widget' | 'wood-floor';

export type IconSize = null | '' | 'xsm' | 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg';

export interface IconProps extends UtilitiesProps {
  /** Icon name from the Eva icon system */
  icon: IconName;
  /** Icon size variant */
  size?: IconSize;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Icon Component
 * 
 * @description Eva icon system component that displays icons from the Eva icon font.
 * This component is used throughout the Eva design system for consistent iconography.
 * 
 * @example
 * ```tsx
 * // Basic icon
 * <Icon icon="info" />
 * 
 * // Icon with size
 * <Icon icon="checkmark" size="lg" />
 * 
 * // Icon with custom class
 * <Icon icon="warning" className="text-error" />
 * ```
 */
const Icon: React.FC<IconProps> = ({
  icon = 'info',
  size = null,
  className = '',
  ...rest
}) => {
  const classes = classResolver({
    [`-${PREFIX}-3-icon-${size}`]: !!size,
  });
  
  return (
    <i 
      className={`${PREFIX}-3-icon-${icon} ${classes} ${className}`} 
      aria-hidden="true"
      {...rest} 
    />
  );
};

export default withUtilities(Icon);