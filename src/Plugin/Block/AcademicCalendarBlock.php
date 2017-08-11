<?php
/**
 * @file
 * Contains \Drupal\byu_academic_calendar\Plugin\Block\AcademicCalendarBlock.
 */
namespace Drupal\byu_academic_calendar\Plugin\Block;
use Drupal\Core\Block\BlockBase;
/**
 * Provides BYU Academic Calendar block.
 *
 * @Block(
 *   id = "academic_calendar_block",
 *   admin_label = @Translation("Academic Calendar Block"),
 *   category = @Translation("Blocks")
 * )
 */
class AcademicCalendarBlock extends BlockBase {

    /**
     * {@inheritdoc}
     */
    public function build() {
        $config = $this->getConfiguration();
        $year = intval(date("Y"));

        $url = "https://registrar.byu.edu/returnHTMLCalendar?year={$year}";
        if ($config['months'] == 6) {
            $url.= "&half=1";
        }

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $json = curl_exec($ch);
        curl_close($ch);

        $calArr = json_decode($json, true);
        $html = isset($calArr["html"]) ? $calArr["html"] : "<h3>Sorry, the Academic Calendar is currently unavailable</h3>";

        return [
            '#type' => 'markup',
            '#prefix' => '<div class="academic-calendar">',
            '#markup' => $html,
            '#suffix' => '</div>',
            '#attached' => [
                'library' => [
                    'byu_academic_calendar/byu_academic_calendar'
                 ]
            ]
        ];
    }
}